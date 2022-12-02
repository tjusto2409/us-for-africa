// window.onload = function() {
//   adjustmentImage();
//   window.addEventListener("resize", (_) => adjustmentImage());
// }

let adjustmentImage = function() {
  if(window.screen.width >= 1200) {
    var wrapperContainers = document.querySelectorAll(".wrapper-container");
    var containerWidth = (document.body.clientWidth - 1140) / 2;
    var percentageLeft = (containerWidth * 100) / document.body.clientWidth;
    var wrapperContainerWidth = 100 - percentageLeft;

    wrapperContainers.forEach(wrapperContainer => {
      wrapperContainer.style.left = percentageLeft + "%";
      wrapperContainer.style.maxWidth = wrapperContainerWidth + "%";
    })
  }
}