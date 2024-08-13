console.clear();

const cards = [
  {
    id: "1",
    isBookmarked: false,
    question: "How often can I use <header>?",
    answer: "As often as you like.",
    tags: ["html", "elements", "basic"],
  },
  {
    id: "2",
    isBookmarked: false,
    question: "How often can I use <aside>?",
    answer: "As often as you like.",
    tags: ["html", "elements", "basic"],
  },
  {
    id: "3",
    isBookmarked: true,
    question: "On which types can I use destructuring assignment?",
    answer: "On Objects and Arrays",
    tags: ["js", "next", "advanced"],
  },
];

// const lowerCaseAnswers = ; // ['as often as you like.', ...]

// const questionsAndAnswersTogether = ; // ["How often can I use <header>? - As often as you like.", ...]

// const questionAndAnswer = ; // [{ question: 'How often can I use <header>?', answer: 'As often as you like.'}, {...}]

// ---------------------------------------------------------------------

const lowerCaseAnswers = cards.map((card) => card.answer.toLowerCase());
console.log("lowerCaseAnswers", lowerCaseAnswers);

// ---------------------------------------------------------------------

const questionsAndAnswersTogether = cards.map(
  (card) => `${card.question} - ${card.answer}`
);
console.log("question and answer together", questionsAndAnswersTogether);

// ---------------------------------------------------------------------

const questionAndAnswer = cards.map(
  (card) => `question: ${card.question}, ${card.answer}`
);
console.log("question and answer", questionAndAnswer);

// ---------------------------------------------------------------------

export { lowerCaseAnswers, questionsAndAnswersTogether, questionAndAnswer };
