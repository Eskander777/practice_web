interface Card {
  start: string;
  end: string;
}

const unsortedCards: Card[] = [
  { start: "Washighton", end: "New York" },
  { start: "Madrid", end: "Washighton" },
  { start: "Amsterdam", end: "Paris" },
  { start: "Paris", end: "Madrid" },
  { start: "Moscow", end: "Amsterdam" },
];

const sortedCards: Card[] = new Array();

const startPoints = unsortedCards.map((card) => card.start);
const endPoints = unsortedCards.map((card) => card.end);

let firstStartPoint: string;

for (let pointName of startPoints) {
  for (let i = 0; i < endPoints.length; i++) {
    if (pointName === endPoints[i] && firstStartPoint === pointName) {
      firstStartPoint = "";
      break;
    } else if (pointName !== endPoints[i] && !firstStartPoint) {
      firstStartPoint = pointName;
    }
  }
}

for (let card of unsortedCards) {
  if (card.start === firstStartPoint) {
    sortedCards.push(card);
    break;
  }
}

let i = 0;
let curEndPoint = sortedCards[0].end;

while (i < unsortedCards.length - 1) {
  for (let card of unsortedCards) {
    if (card.start === curEndPoint) {
      sortedCards.push(card);
      curEndPoint = card.end;
      i++;
    }
  }
}

console.log({ sortedCards });
