console.clear();

const cards = [
  {
    id: "1",
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
    tags: ["js", "next"],
  },
];

// const onlyCardWithIdTwo = null;

// const allCardsWith3Tags = null;

// const allCardsThatAreNotBookmarked = null;

// const allCardsWithTagsHTMLOrJSThatAreBookmarked = null;

// ---------------------------------------------------------------------

const onlyCardWithIdTwo = cards.filter((card) => {
  // if (card.id == 2) {
  //   return true;
  // }
  // return false;
  return card.id == 2;
});
// or:
// const onlyCardWithIdTwo = cards.filter((card) => card.id == 2);
console.log("onlyCardWithIdTwo", onlyCardWithIdTwo);

// ---------------------------------------------------------------------

const allCardsWith3Tags = cards.filter((card) => {
  if (card.tags.length === 3) {
    return true;
  }
  return false;
});
console.log("allCardsWith3Tags", allCardsWith3Tags);

// ---------------------------------------------------------------------

const allCardsThatAreNotBookmarked = cards.filter(
  (card) => card.isBookmarked === false
);
console.log("allCardsThatAreNotBookmarked", allCardsThatAreNotBookmarked);

// ---------------------------------------------------------------------

const allCardsWithTagsHTMLOrJSThatAreBookmarked = cards.filter((card) => {
  return (
    (card.tags.includes("html") || card.tags.includes("js")) &&
    card.isBookmarked === true
  );
});
console.log(
  "allCardsWithTagsHTMLOrJSThatAreBookmarked",
  allCardsWithTagsHTMLOrJSThatAreBookmarked
);

// ---------------------------------------------------------------------

export {
  onlyCardWithIdTwo,
  allCardsWith3Tags,
  allCardsThatAreNotBookmarked,
  allCardsWithTagsHTMLOrJSThatAreBookmarked,
};
