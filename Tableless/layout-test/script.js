window.onload = function() {
  // adjustmentImage();
  // DeviceCollection.init();
  // window.addEventListener("resize", (_) => adjustmentImage());
  
  var controller = new ScrollMagic.Controller();

  const animationPosition = anime({
    targets: ".parallax-title",
    easing: "easeInQuad",
    keyframes: [
      { 
        translateY: ["-50%", calculatePositionYTitle()],
        fontSize: '6em'
      },
      { 
        translateX: ["-50%", "calc(-83.3333333333% + 15px)"],
      },
    ],
    duration: 1000,
    autoplay: false
  });

  new ScrollMagic.Scene({
    triggerElement: '.parallax',
    // offset: ((document.body.scrollHeight - document.body.offsetHeight) / 2) + 1,
    offset: document.querySelector(".parallax").offsetHeight /2,
    duration: (document.querySelector(".parallax").offsetHeight /2) + 180
  })
  .addIndicators()
  .on("progress", (scroll) => {
    positionYTitle = calculatePositionYTitle();
    const seekValue = 1000 * scroll.progress;
    animationPosition.seek(seekValue);
  })
  .addTo(controller);

  new ScrollMagic.Scene({
    triggerElement: '#block',
    // duration: 100
  })
  .addIndicators()
  .on("progress", (scroll) => {
    var title = document.querySelector(".parallax-title");
    if(scroll.state == 'BEFORE') {
      title.classList.remove("parallax-title-animated");
      return;
    }

    title.classList.add("parallax-title-animated");
  })
  .addTo(controller);

  // animationGetToKnow(controller);


// var animationGetToKnow = function(controller) {
//   var translateY = {
//     from: "15%",
//     to: "400%",
//     top: "120px"
//   };

//   if(document.body.clientWidth < 1200) {
//     translateY = {
//       from: "20%",
//       to: "130%",
//       top: "60px"
//     };
//   }

//   const animationParallaxBanner = anime({
//     targets: ".parallax-banner",
//     keyframes: [
//       { 
//         translateY: [translateY.from, translateY.to],
//       },
//     ],
//     autoplay: false,
//     duration: 1000,
//     easing: "linear", 
//   });

//   const animationGetToKnow = anime({
//     targets: ".get-to-know .parallax-banner ~.col-12",
//     translateY: translateY.top,
//     duration: 1000,
//     easing: "linear",
//     autoplay: false,
//     complete: function() {
//       var getToKnow = document.querySelector(".get-to-know");
//       getToKnow.style.marginBottom = translateY.top;
//     }
//   });

//   new ScrollMagic.Scene({
//     triggerElement: '.banner',
//     offset: (document.querySelector(".banner").offsetHeight /2),
//     duration: (document.querySelector(".banner").offsetHeight /2) + 180
//   })
//   .addIndicators()
//   .on("progress", (scroll) => {
//     const seekValue = 1000 * scroll.progress;
//     animationParallaxBanner.seek(seekValue);
//     animationGetToKnow.seek(seekValue);
//   })
//   .addTo(controller);

//   emphasis = new ScrollMagic.Scene({
//     triggerElement: '.who-whe-are .emphasis',
//   })
//   .addIndicators()
//   .on("progress", (scroll) => {
//     if(scroll.state == 'BEFORE') return;

//     animationLeftRight('.who-whe-are');
//     controller.removeScene(emphasis);
//   })
//   .addTo(controller);

//   triggerElement = '.who-whe-are .wrapper-container';

//   flag = true;

//   wrapperContainerScene = new ScrollMagic.Scene({
//     triggerElement: triggerElement
//   })
//   .addIndicators()
//   .on("progress", (scroll) => {
//     animationLeftRight(triggerElement, '.col-xl-6');
//     controller.removeScene(wrapperContainerScene);
//   })
//   .addTo(controller);

//   scene = new ScrollMagic.Scene({
//     triggerElement: '.who-whe-are .wrapper-container + .container .col-12',
//   })
//   .addIndicators()
//   .on("progress", (scroll) => {
//     if(scroll.state == 'BEFORE') return;

//     animationTop('.who-whe-are .wrapper-container + .container');
//     controller.removeScene(scene);
//   })
//   .addTo(controller);

  animationBkgPositive = 
  document
    .querySelectorAll('.container-info .container-box')
    .forEach(function(box, index) {
      animationBox(index + 1).addTo(controller);
    });
}

var calculatePositionYTitle = function() {
  var title = document.querySelector(".parallax-title");
  var titleCurrentPosition = document.body.clientHeight / 2;

  positionYTitle = (titleCurrentPosition - title.clientHeight / 2) + 64;
  return positionYTitle  + "px"
}

var calculatePositionXTitle = function() {
  var title = document.querySelector(".parallax-title");
  var titleCurrentPosition = document.body.clientWidth / 2;
  var titleSize = parseInt(getComputedStyle(title).fontSize) * 4.72;
  var marginLeft = 20;

  return -(titleCurrentPosition - titleSize / 2) + marginLeft + "px";
}

var animationLeftRight = function(parent, childrenLeft, childrenRight) {

  childrenLeft = !childrenLeft ? ".col-6" : childrenLeft;
  childrenRight = !childrenRight ? ".col-6 + .col-6" : childrenRight;

  const animationColLeft = anime.timeline().add({
    targets: parent + " " + childrenLeft,
    keyframes: [
      { 
        translateX: [-100, 0],
        opacity: [0,1]
      },
    ],
    autoplay: false,
    duration: 1000,
    easing: "linear", 
  }).add(animationChangeColor(parent));

  const animationColRight = anime.timeline().add({
    targets: parent + " " + childrenRight,
    keyframes: [
      { 
        translateX: [100, 0],
        opacity: [0,1]
      },
    ],
    autoplay: false,
    duration: 1000,
    easing: "linear", 
  }).add(animationChangeColor(parent));

  animationColLeft.play();
  animationColRight.play();
}

var animationTop = function(parent, childrenTop, top) {
  childrenTop = !childrenTop ? ".col-12" : childrenTop;
  top = !top ? 0 : top;

  const animationColTop = anime.timeline().add({
    targets: parent + " " + childrenTop,
    keyframes: [
      { 
        translateY: [-30, top],
        opacity: [0,1]
      },
    ],
    autoplay: false,
    duration: 1000,
    easing: "linear", 
  }).add(animationChangeColor(parent));

  animationColTop.play();
}

var animationChangeColor = function(parent) {
  return anime({
    targets: parent + ' .display',
    opacity: [0.5, 1],
    color: '#7e6851',
    delay: 600,
    easing: "linear", 
  });
}

function animationBox(child) {
  var target = '.container-info .container-box:nth-child(' + child + ')';

  return new ScrollMagic.Scene({
    triggerElement: target,
    offset: -50
  })
  .addIndicators()
  .on("progress", (scroll) => {
    var box = document.querySelector(".container-info .container-box:nth-child(" + child + ") .box");
    box.classList.add('action');

    anime({
      targets: target + ' .gallery,' + target + ' .box h1,' + target + ' .box p, .container-box:not(.box, .container-box)',
      opacity: [0, 1],
      translateY: [-10, 0],
      easing: 'linear',
      delay: 1800
    }).play();

    scroll.target.remove();
  })
}