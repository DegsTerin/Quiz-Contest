const MARIA_MIXED_CATEGORY_ORDER = [
  "Conhecimentos Gerais",
  "Metodologia da Prática Docente",
  "Específicos - AEE/Misto",
  "Específicos - Intérprete da Libras"
];

function selectMariaCategoryQuestions(source, category, limit = 10) {
  return source.filter((question) => question.category === category).slice(0, limit);
}

const MARIA_MEDIUM_QUESTIONS = MARIA_MIXED_CATEGORY_ORDER
  .flatMap((category) => selectMariaCategoryQuestions(MARIA_QUESTIONS, category))
  .map((question) => ({
    ...question,
    difficulty: "Média"
  }));

const MARIA_HARD_QUESTION_IDS = [
  "maria-original-01",
  "maria-original-02",
  "maria-original-03",
  "maria-original-04",
  "maria-original-05",
  "maria-original-06",
  "maria-original-07",
  "maria-original-08",
  "maria-original-09",
  "maria-original-10",
  "maria-original-11",
  "maria-original-12",
  "maria-original-13",
  "maria-original-14",
  "maria-original-15",
  "maria-original-16",
  "maria-original-17",
  "maria-original-18",
  "maria-original-19",
  "maria-original-20",
  "maria-original-21",
  "maria-original-22",
  "maria-original-24",
  "maria-original-25",
  "maria-original-26",
  "maria-original-27",
  "maria-original-30",
  "maria-original-32",
  "maria-original-38",
  "maria-original-40",
  "maria-original-41",
  "maria-original-42",
  "maria-original-43",
  "maria-original-44",
  "maria-original-47",
  "maria-original-48",
  "maria-original-49",
  "maria-original-50",
  "maria-original-52",
  "maria-original-58"
];
const mariaOriginalQuestionMap = new Map(
  ORIGINAL_MARIA_QUESTIONS.map((question) => [question.id, question])
);
const MARIA_DIFFICULT_QUESTIONS = MARIA_HARD_QUESTION_IDS.map((questionId) => ({
  ...mariaOriginalQuestionMap.get(questionId),
  difficulty: "Difícil"
}));

const MARIA_QUESTIONS_BY_DIFFICULTY = {
  easy: MARIA_EASY_QUESTIONS,
  medium: MARIA_MEDIUM_QUESTIONS,
  hard: MARIA_DIFFICULT_QUESTIONS
};

QUESTION_SETS.maria.questionsByDifficulty = MARIA_QUESTIONS_BY_DIFFICULTY;
QUESTION_SETS.maria.questions = MARIA_QUESTIONS_BY_DIFFICULTY[QUESTION_SETS.maria.defaultDifficulty];
QUESTION_SETS.maria.sources = {
  easy: "Author-created practice questions",
  medium: "Author-created practice questions",
  hard: "Selected original FURB questions from Notice 793/SED/2026 with the preliminary answer key"
};
