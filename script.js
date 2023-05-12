const clickButton = document.getElementById("btn");

const showJavascript = document.getElementById("viewjavaScript");
const showhtml = document.getElementById("viewhtml");

clickButton.addEventListener("click", function () {
  const isShowing = showJavascript.style.display !== "none";
  const isShowingHtml = showhtml.style.display !== "none";

  if (isShowing) {
    showJavascript.style.display = "none";
    showhtml.style.display = "block";
  } else if (isShowingHtml) {
    showJavascript.style.display = "block";
    showhtml.style.display = "none";
  }
});
