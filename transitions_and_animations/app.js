// Helper func that creates new div with a given class
function createNewDivEl(className) {
  const newDiv = this.document.createElement("div");
  newDiv.className = className;
  return newDiv;
}

// Add actions on scroll
window.addEventListener("scroll", function () {
  // Get items on page to work with them
  const items = this.document.querySelectorAll(".row");
  const main = this.document.getElementsByTagName("main")[0];

  // Get last item in items
  const lastItem = items[items.length - 1];

  // Get position data of last item
  const lastItemPosData = lastItem.getBoundingClientRect();

  // Get window position data
  const widowClientData = window.scrollY + window.innerHeight;

  // Compare last item position data with window position data
  if (widowClientData > lastItemPosData.bottom) {
    const newRow = createNewDivEl("row");
    for (let i = 0; i < 3; i++) {
      const newSquare = createNewDivEl("square");
      const newRound = createNewDivEl("round");
      newSquare.appendChild(newRound);
      newRow.appendChild(newSquare);
    }
    main.appendChild(newRow);
  }
});
