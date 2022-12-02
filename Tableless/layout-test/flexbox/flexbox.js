window.onload = function() {
  DeviceCollection.init();
  animationBox();
}

function animationBox() {
  anime({
    targets: '.container *:not(.conteudo)',
    opacity: [0, 1],
    translateY: [-10, 0],
    easing: 'linear',
    delay: 1600 
  });
}