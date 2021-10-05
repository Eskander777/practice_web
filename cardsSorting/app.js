var unsortedCards = [
    { start: "Washighton", end: "New York" },
    { start: "Madrid", end: "Washighton" },
    { start: "Amsterdam", end: "Paris" },
    { start: "Paris", end: "Madrid" },
    { start: "Moscow", end: "Amsterdam" },
];
var sortedCards = new Array();
var startPoints = unsortedCards.map(function (card) { return card.start; });
var endPoints = unsortedCards.map(function (card) { return card.end; });
var firstStartPoint;
for (var _i = 0, startPoints_1 = startPoints; _i < startPoints_1.length; _i++) {
    var pointName = startPoints_1[_i];
    for (var i_1 = 0; i_1 < endPoints.length; i_1++) {
        if (pointName === endPoints[i_1] && firstStartPoint === pointName) {
            firstStartPoint = "";
            break;
        }
        else if (pointName !== endPoints[i_1] && !firstStartPoint) {
            firstStartPoint = pointName;
        }
    }
}
for (var _a = 0, unsortedCards_1 = unsortedCards; _a < unsortedCards_1.length; _a++) {
    var card = unsortedCards_1[_a];
    if (card.start === firstStartPoint) {
        sortedCards.push(card);
        break;
    }
}
var i = 0;
var curEndPoint = sortedCards[0].end;
while (i < unsortedCards.length - 1) {
    for (var _b = 0, unsortedCards_2 = unsortedCards; _b < unsortedCards_2.length; _b++) {
        var card = unsortedCards_2[_b];
        if (card.start === curEndPoint) {
            sortedCards.push(card);
            curEndPoint = card.end;
            i++;
        }
    }
}
console.log({ sortedCards: sortedCards });
