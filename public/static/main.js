// get started button
$(".bubble-button").on("click", (e) => {
  $(e.currentTarget.parentElement.parentElement).toggleClass("task-complete");
  $(e.currentTarget).toggleClass("button-task-complete");
});

// button functionality for the second page
let tracker = 1;
const today = $("#today");
const work = $("#work");

today.on("click", (e) => {
  if (tracker === 2) {
    today.toggleClass("second-page-button-active");
    work.toggleClass("second-page-button-active");
    tracker = 1;
  }
});

work.on("click", (e) => {
  if (tracker === 1) {
    today.toggleClass("second-page-button-active");
    work.toggleClass("second-page-button-active");
    tracker = 2;
  }
});

// add item button functionality
const addItemButton = $("#item-modal");
const addItemModal = $(".modal-card");
const cancelModalButton = $("#cancel");
const overlay = $(".overlay");
addItemButton.on("click", (e) => {
  addItemModal.toggleClass("hidden");
  overlay.toggleClass("hidden");
});

cancelModalButton.on("click", (e) => {
  addItemModal.toggleClass("hidden");
  overlay.toggleClass("hidden");
});
