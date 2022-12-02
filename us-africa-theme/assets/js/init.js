window.onload = function() {
  adjustmentImage();
  DeviceCollection.init();
  window.addEventListener("resize", (_) => adjustmentImage());
  animationScroll.init();
  menu();  
}