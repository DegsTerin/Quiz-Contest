const crypto = require("node:crypto");
const fs = require("node:fs");
const path = require("node:path");
const vm = require("node:vm");

const repository = path.resolve(__dirname, "..");
const context = vm.createContext({ console });
const failures = [];
const scripts = [
  "questions.js",
  "bruno-hard-questions.js",
  "bruno-easy-questions.js",
  "bruno-difficult-questions.js",
  "bruno-question-banks.js",
  "maria-hard-questions.js",
  "maria-easy-questions.js",
  "maria-question-banks.js",
  "questions-en.js",
  "bruno-hard-questions-en.js",
  "bruno-easy-questions-en.js",
  "bruno-difficult-questions-en.js",
  "maria-hard-questions-en.js",
  "maria-easy-questions-en.js",
  "maria-mode-translations-en.js"
];

for (const script of scripts) {
  const source = fs.readFileSync(path.join(repository, script), "utf8");
  vm.runInContext(source, context, { filename: script });
}

const questionSets = vm.runInContext("QUESTION_SETS", context);
const translations = vm.runInContext("EN_QUESTION_TRANSLATIONS", context);
const brunoBanks = questionSets.bruno.questionsByDifficulty;
const mariaBanks = questionSets.maria.questionsByDifficulty;
const originalMaria = vm.runInContext("ORIGINAL_MARIA_QUESTIONS", context);

function check(condition, message) {
  if (!condition) {
    failures.push(message);
  }
}

function sha256(value) {
  return crypto.createHash("sha256").update(value).digest("hex").toUpperCase();
}

function getWrittenExamAnswerPosition(question) {
  let state = 2166136261;
  const seedText = `19933:${question.id}`;

  for (let index = 0; index < seedText.length; index += 1) {
    state ^= seedText.charCodeAt(index);
    state = Math.imul(state, 16777619);
  }

  state >>>= 0;
  const positions = [0, 1, 2, 3, 4];

  for (let index = positions.length - 1; index > 0; index -= 1) {
    state = (Math.imul(state, 1664525) + 1013904223) >>> 0;
    const swapIndex = Math.floor((state / 4294967296) * (index + 1));
    [positions[index], positions[swapIndex]] = [positions[swapIndex], positions[index]];
  }

  return positions.indexOf(question.answerIndex);
}

function getLongestRun(values) {
  return values.reduce(
    (state, value) => ({
      previous: value,
      current: value === state.previous ? state.current + 1 : 1,
      longest: Math.max(state.longest, value === state.previous ? state.current + 1 : 1)
    }),
    { previous: null, current: 0, longest: 0 }
  ).longest;
}

function getOptionFingerprint(option) {
  return String(option)
    .normalize("NFKC")
    .trim()
    .toLocaleLowerCase("pt-BR")
    .replace(/\s+/gu, " ")
    .replace(/[.,;:!?]+$/gu, "");
}

function validateQuestion(question, bankName) {
  if (!question || typeof question !== "object") {
    check(false, `${bankName}: missing question object`);
    return;
  }

  check(typeof question.id === "string" && question.id.length > 0, `${bankName}: missing ID`);
  check(typeof question.category === "string" && question.category.length > 0, `${question.id}: missing category`);
  check(typeof question.difficulty === "string" && question.difficulty.length > 0, `${question.id}: missing difficulty`);
  check(typeof question.prompt === "string" && question.prompt.trim().length > 0, `${question.id}: missing prompt`);
  check(Array.isArray(question.options) && question.options.length === 5, `${question.id}: expected five options`);
  if (Array.isArray(question.options)) {
    check(question.options.every((option) => typeof option === "string" && option.trim().length > 0), `${question.id}: blank option`);
    check(new Set(question.options.map(getOptionFingerprint)).size === 5, `${question.id}: duplicate options`);
  }
  check(Number.isInteger(question.answerIndex) && question.answerIndex >= 0 && question.answerIndex < 5, `${question.id}: invalid answerIndex`);
  check(typeof question.explanation === "string" && question.explanation.trim().length > 0, `${question.id}: missing explanation`);
}

const expectedBrunoCategories = {
  "Língua Portuguesa": 8,
  "Matemática e Raciocínio Lógico": 8,
  "Conhecimentos Gerais": 4,
  "Conhecimentos Específicos": 20
};
const expectedMariaCategories = {
  "Conhecimentos Gerais": 10,
  "Metodologia da Prática Docente": 10,
  "Específicos - AEE/Misto": 10,
  "Específicos - Intérprete da Libras": 10
};
const expectedDifficulty = {
  easy: "Fácil",
  medium: "Média",
  hard: "Difícil"
};
const expectedBrunoId = {
  easy: (index) => `bruno-massaranduba-2026-easy-${String(index + 1).padStart(2, "0")}`,
  medium: (index) => `bruno-massaranduba-2026-${String(index + 1).padStart(2, "0")}`,
  hard: (index) => `bruno-massaranduba-2026-difficult-${String(index + 1).padStart(2, "0")}`
};
const expectedMariaIds = {
  easy: Array.from({ length: 40 }, (_, index) => `maria-2026-easy-${String(index + 1).padStart(2, "0")}`),
  medium: [
    ...Array.from({ length: 10 }, (_, index) => `m-cg-${String(index + 1).padStart(2, "0")}`),
    ...Array.from({ length: 10 }, (_, index) => `m-md-${String(index + 1).padStart(2, "0")}`),
    ...Array.from({ length: 10 }, (_, index) => `m-aee-${String(index + 1).padStart(2, "0")}`),
    ...Array.from({ length: 10 }, (_, index) => `m-lib-${String(index + 1).padStart(2, "0")}`)
  ],
  hard: [
    ...Array.from({ length: 20 }, (_, index) => `maria-original-${String(index + 1).padStart(2, "0")}`),
    ...[21, 22, 24, 25, 26, 27, 30, 32, 38, 40].map((number) => `maria-original-${number}`),
    ...[41, 42, 43, 44, 47, 48, 49, 50, 52, 58].map((number) => `maria-original-${number}`)
  ]
};

function validateDifficultyBanks(profileName, questionSet, banks, expectedCategories) {
  const difficultyOrder = ["easy", "medium", "hard"];
  const expectedCategorySequence = Object.entries(expectedCategories).flatMap(([category, count]) =>
    Array.from({ length: count }, () => category)
  );

  check(questionSet.defaultDifficulty === "easy", `${profileName}: easy is not the default difficulty`);
  check(JSON.stringify(questionSet.difficultySequence) === JSON.stringify(difficultyOrder), `${profileName}: difficulty cycle is not easy/medium/hard`);
  check(questionSet.questions === banks.easy, `${profileName}: the compatibility bank is not easy`);

  for (const difficultyId of difficultyOrder) {
    const questions = banks[difficultyId];
    check(Array.isArray(questions), `${profileName} ${difficultyId}: bank is missing`);

    if (!Array.isArray(questions)) {
      continue;
    }

    check(questions.length === 40, `${profileName} ${difficultyId}: expected 40 questions, found ${questions.length}`);
    const categoryCounts = Object.fromEntries(
      Object.keys(expectedCategories).map((category) => [
        category,
        questions.filter((question) => question.category === category).length
      ])
    );

    check(JSON.stringify(categoryCounts) === JSON.stringify(expectedCategories), `${profileName} ${difficultyId}: category distribution ${JSON.stringify(categoryCounts)}`);
    check(questions.every((question, index) => question.category === expectedCategorySequence[index]), `${profileName} ${difficultyId}: subject sequence changed`);
    check(questions.every((question) => question.difficulty === expectedDifficulty[difficultyId]), `${profileName} ${difficultyId}: difficulty metadata is inconsistent`);

    for (const question of questions) {
      validateQuestion(question, `${profileName} ${difficultyId}`);
    }
  }
}

check(questionSets.bruno.fullQuizPresentation === "written-exam", "Bruno: written-exam presentation mode is not enabled");
validateDifficultyBanks("Bruno", questionSets.bruno, brunoBanks, expectedBrunoCategories);
validateDifficultyBanks("Maria", questionSets.maria, mariaBanks, expectedMariaCategories);

for (const [difficultyId, questions] of Object.entries(brunoBanks)) {
  check(questions.every((question, index) => question.id === expectedBrunoId[difficultyId](index)), `Bruno ${difficultyId}: IDs are not sequential and versioned`);

  const displayedAnswerPositions = questions.map(getWrittenExamAnswerPosition);
  const displayedAnswerCounts = Array.from({ length: 5 }, (_, position) =>
    displayedAnswerPositions.filter((answerPosition) => answerPosition === position).length
  );
  check(displayedAnswerCounts.every((count) => count === 8), `Bruno ${difficultyId}: displayed answer-position distribution ${displayedAnswerCounts.join("/")}`);
  check(getLongestRun(displayedAnswerPositions) <= 2, `Bruno ${difficultyId}: displayed answer key contains a run longer than two`);
}

for (const [difficultyId, questions] of Object.entries(mariaBanks)) {
  check(
    JSON.stringify(questions.map((question) => question.id)) === JSON.stringify(expectedMariaIds[difficultyId]),
    `Maria ${difficultyId}: selected IDs or order changed`
  );
}
const mariaEasyAnswerCounts = Array.from({ length: 5 }, (_, answerIndex) =>
  mariaBanks.easy.filter((question) => question.answerIndex === answerIndex).length
);
check(mariaEasyAnswerCounts.every((count) => count === 8), `Maria easy: source answer-position distribution ${mariaEasyAnswerCounts.join("/")}`);

const bruno = Object.values(brunoBanks).flat();
const maria = Object.values(mariaBanks).flat();
const activeQuestions = [...bruno, ...maria];
const activeIds = activeQuestions.map((question) => question.id);
check(new Set(activeIds).size === activeIds.length, "Active question IDs are not globally unique");

for (const question of activeQuestions) {
  const translation = translations[question.id];
  check(Boolean(translation), `${question.id}: missing English translation`);

  if (translation) {
    check(typeof translation.prompt === "string" && translation.prompt.trim().length > 0, `${question.id}: blank English prompt`);
    check(Array.isArray(translation.options) && translation.options.length === 5, `${question.id}: expected five English options`);
    check(translation.options.every((option) => typeof option === "string" && option.trim().length > 0), `${question.id}: blank English option`);
    check(new Set(translation.options.map(getOptionFingerprint)).size === 5, `${question.id}: duplicate English options`);
    check(typeof translation.explanation === "string" && translation.explanation.trim().length > 0, `${question.id}: blank English explanation`);
  }
}

const translatedBrunoIds = Object.keys(translations).filter((id) => id.startsWith("bruno-massaranduba-2026-"));
check(translatedBrunoIds.length === 120, `Bruno: expected 120 active English translations, found ${translatedBrunoIds.length}`);
const translatedMariaEasyIds = Object.keys(translations).filter((id) => id.startsWith("maria-2026-easy-"));
check(translatedMariaEasyIds.length === 40, `Maria easy: expected 40 English translations, found ${translatedMariaEasyIds.length}`);
check(!JSON.stringify(translations["m-aee-01"]).includes("favoring"), "Maria medium: en-GB normalisation did not replace favoring");
check(!JSON.stringify(translations["maria-original-08"]).includes("Recognize"), "Maria hard: en-GB normalisation did not replace Recognize");
check(!JSON.stringify(translations["maria-original-16"]).includes("Recognize"), "Maria hard: en-GB normalisation did not replace Recognize");

const appSource = fs.readFileSync(path.join(repository, "app.js"), "utf8");
const indexSource = fs.readFileSync(path.join(repository, "index.html"), "utf8");
check(/bruno:\s*"v5"/.test(appSource), "Bruno storage is not versioned to v5");
check(/maria:\s*"v3"/.test(appSource), "Maria storage is not versioned to v3");
check(appSource.includes("static-quiz-system-active-difficulty"), "Difficulty preferences are not persisted by profile");
check(!appSource.includes("static-quiz-system-state-v4-bruno"), "Incompatible Bruno v4 progress must not be migrated into the revised banks");
check(appSource.includes("static-quiz-system-state-v2-maria"), "Compatible Maria v2 progress is not migrated to Hard");
check(appSource.includes('htmlLang: "en-GB"'), "The British English document language is not en-GB");
check(indexSource.match(/id="difficulty-toggle-btn"/g)?.length === 1, "The page must expose exactly one difficulty button");
const loadedScripts = Array.from(indexSource.matchAll(/<script src="([^"?]+)(?:\?[^"}]*)?">/g), (match) => match[1]);
check(JSON.stringify(loadedScripts) === JSON.stringify([...scripts, "app.js"]), `index.html: script order changed (${loadedScripts.join(", ")})`);

const mariaPtSource = fs.readFileSync(path.join(repository, "maria-hard-questions.js"));
const mariaEnSource = fs.readFileSync(path.join(repository, "maria-hard-questions-en.js"));
check(sha256(mariaPtSource) === "6D58752018035C9090C8D1AF886EC208FACAD346DD0C1CD37D4D7AE5E5A5F11C", "Maria Portuguese source hash changed");
check(sha256(mariaEnSource) === "692AFCBF5F65C9829E020BEDEA7105ED02383709779D432C9EAB9905027F9C6B", "Maria English source hash changed");
check(originalMaria.length === 60, `Maria original source: expected 60 questions, found ${originalMaria.length}`);
check(sha256(JSON.stringify(originalMaria)) === "6700A1DD1EB4369B6D1F01D2F45FE051F30B8BBEE828F95B226628C878F2842B", "Maria semantic source hash changed");

if (failures.length > 0) {
  console.error(failures.map((failure) => `FAIL: ${failure}`).join("\n"));
  process.exitCode = 1;
} else {
  console.log("PASS: Bruno has 40 easy, 40 medium and 40 hard questions in written-exam order");
  console.log("PASS: every Bruno bank has complete en-GB translations, an 8/8/8/8/8 displayed answer key and no answer run longer than two");
  console.log("PASS: Maria has 40 easy, 40 medium and 40 hard questions in 10/10/10/10 subject order");
  console.log("PASS: Maria's 60-question original source remains byte-for-byte and semantically unchanged");
  console.log("PASS: per-profile difficulty state uses Bruno v5 and Maria v3, preserving only Maria's compatible legacy migration");
}
