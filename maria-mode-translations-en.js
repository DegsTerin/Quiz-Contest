const MARIA_EN_GB_NORMALISATION_IDS = [
  "maria-original-08",
  "maria-original-16"
];

function normaliseMariaBritishEnglish(text) {
  return String(text)
    .replaceAll("favoring", "favouring")
    .replaceAll("Favoring", "Favouring")
    .replaceAll("recognize", "recognise")
    .replaceAll("Recognize", "Recognise");
}

MARIA_EN_GB_NORMALISATION_IDS.forEach((questionId) => {
  const translation = EN_QUESTION_TRANSLATIONS[questionId];

  if (!translation) {
    return;
  }

  EN_QUESTION_TRANSLATIONS[questionId] = {
    prompt: normaliseMariaBritishEnglish(translation.prompt),
    options: translation.options.map(normaliseMariaBritishEnglish),
    explanation: normaliseMariaBritishEnglish(translation.explanation)
  };
});
