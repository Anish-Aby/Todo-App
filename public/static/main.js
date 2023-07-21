$(".bubble-button").on("click", (e) => {
  console.log(e);
  $(e.currentTarget.parentElement.parentElement).toggleClass("task-complete");
  $(e.currentTarget).toggleClass("button-task-complete");
});
