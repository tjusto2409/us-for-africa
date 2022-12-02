var width = window.screen.width;

const animationScroll = {
  init: function() {
    var animationId = document.body.dataset.animation;

    if(animationId == 'home') this.home();
    if(animationId == 'what-we-do') this.whatWeDo();
    if(animationId == 'donate') this.donate();
    if(animationId == 'donate') this.donate();
  },
  home: function() {
    var controller = new ScrollMagic.Controller();
    
    scrollConnecting();
    scrollGetToKnow();
    scrollAbout();
    scrollDonate();
    scrollMap();

    function scrollConnecting() {
      new ScrollMagic.Scene({
        triggerElement: '.connecting'
      })
      .addIndicators()
      .on("progress", (scroll) => {
        animationRound();
        animationDisplay('.connecting');
        scroll.target.remove();
      })
      .addTo(controller);
    }
    
    function scrollGetToKnow() {
      if(width >= 1000) {
        new ScrollMagic.Scene({
          triggerElement: '.real-africa'
        })
        .addIndicators()
        .on("progress", (scroll) => {
          anime({
            targets: '.real-africa .device-img',
            translateX: [-100, 0],
            opacity: [0,1],
            easing: 'linear'
          });
    
          anime({
            targets: '.real-africa .get-know',
            translateX: [0, 100],
            opacity: [1, 0],
            direction: 'reverse',
            easing: 'linear'
          });
    
          scroll.target.remove();
        })
        .addTo(controller);
    
        return;
      }
    
      new ScrollMagic.Scene({
        triggerElement: '.real-africa'
      })
      .addIndicators()
      .on("progress", (scroll) => {
        anime({
          targets: '.real-africa .get-know *',
          translateY: [-10, 0],
          opacity: [0, 1],
          easing: 'linear'
        });
    
        scroll.target.remove();
      })
      .addTo(controller);
    }
    
    function scrollAbout() {
      new ScrollMagic.Scene({
        triggerElement: '.about'
      })
      .addIndicators()
      .on("progress", (scroll) => {
        anime({
          targets: '.about .bkg-negative *',
          translateY: [-50, 0],
          opacity: [0, 1],
          easing: 'linear'
        });
    
        scroll.target.remove();
      })
      .addTo(controller);
    }
    
    function scrollDonate() {
      if(width >= 1000) {
        new ScrollMagic.Scene({
          triggerElement: '.donate'
        })
        .addIndicators()
        .on("progress", (scroll) => {
          anime({
            targets: '.donate img',
            translateX: [-100, 0],
            opacity: [0,1],
            easing: 'linear'
          });
    
          anime({
            targets: '.donate .context',
            translateX: [0, 100],
            opacity: [1, 0],
            direction: 'reverse',
            easing: 'linear'
          });
    
          scroll.target.remove();
        })
        .addTo(controller);
    
        return;
      }
    
      new ScrollMagic.Scene({
        triggerElement: '.donate img'
      })
      .addIndicators()
      .on("progress", (scroll) => {
        anime({
          targets: '.donate .context *',
          translateY: [-10, 0],
          opacity: [0, 1],
          easing: 'linear'
        });
    
        anime({
          targets: '.donate img',
          translateY: [-10, 0],
          opacity: [0, 1],
          easing: 'linear'
        });
    
        scroll.target.remove();
      })
      .addTo(controller);
    }
    
    function scrollMap() {
      if(width >= 1000) {
        new ScrollMagic.Scene({
          triggerElement: '.africa-map',
          offset: -100
        })
        .addIndicators()
        .on("progress", (scroll) => {
          anime
          .timeline()
          .add({
            targets: '.africa-map .info',
            translateX: [-100, 0],
            opacity: [0,1],
            easing: 'linear',
            complete: function() {
              document.querySelectorAll(".africa-map .info span:not(.light)").forEach(function(item, i) {
                setTimeout(function(){
                  item.classList.add("start");
                  console.log("wait")
                }, i * 800); 
              })          
            }
          })
          .add({
            targets: '.light',
            color: '#7e6851',
            easing: 'easeInOutQuad',
            delay: 1000
          })
    
          anime({
            targets: '.africa-map .map',
            translateX: [0, 100],
            opacity: [1, 0],
            direction: 'reverse',
            easing: 'linear'
          });
    
          scroll.target.remove();
        })
        .addTo(controller);
    
        return;
      }
    
      new ScrollMagic.Scene({
        triggerElement: '.africa-map',
        offset: -100
      })
      .addIndicators()
      .on("progress", (scroll) => {
        anime({
          targets: '.africa-map .info',
          translateY: [-10, 0],
          opacity: [0, 1],
          easing: 'linear',
          complete: function() {
            document.querySelectorAll(".africa-map .info span:not(.light)").forEach(function(item, i) {
              setTimeout(function(){
                item.classList.add("start");
                console.log("wait")
              }, i * 800); 
            })          
          }
        });
    
        anime
        .timeline()
        .add({
          targets: '.africa-map .map',
          translateY: [-50, 0],
          opacity: [0, 1],
          easing: 'linear',
        })
        .add({
          targets: '.light',
          color: '#7e6851',
          easing: 'easeInOutQuad',
          delay: 1000
        })
    
        scroll.target.remove();
      })
      .addTo(controller);
    }
  },
  whatWeDo: function() {
    var controller = new ScrollMagic.Controller();

    parallaxScroll(controller, "calc(-83.3333333333% + 15px)");

    emphasis();    

    if(width > 1000) {
      document
        .querySelectorAll(".container .col-md-6:not(.emphasis), .container-fluid .col-xl-6 ~ .col-xl-6, .container-fluid .col-xl-5 ~ .col-xl-6")
        .forEach(function(item) {
          animationRight(item);        
        });

      document
        .querySelectorAll(".container-fluid .col-xl-6:not(.col-xl-6 ~ .col-xl-6, .col-xl-5 ~ .col-xl-6), .container-fluid .col-xl-5")
        .forEach(function(item) {
          animationLeft(item);
        });

      document
        .querySelectorAll(".container .col-12:not(.col-12.col-md-6, .box, .get-to-know-body, .parallax-banner)")
        .forEach(function(item) {
          animationTop(item);
        });

      animationGetToknow();
    } else {
      document
        .querySelectorAll(".container-fluid .col-12:not(.col-12.col-md-6, .box)")
        .forEach(function(item) {
          animationTop(item);
        });
      
      document
        .querySelectorAll(".container .col-12:not(.box, .title-mobile)")
        .forEach(function(item) {
          animationTop(item);
        });
    }

    animationOpenCurtains();

    document
      .querySelectorAll('.container-info .container-box')
      .forEach(function(box, index) {
        animationBox(index + 1).addTo(controller);
      });

    function emphasis() {
      emphasis = document.querySelector(".emphasis");

      new ScrollMagic.Scene({
        triggerElement: emphasis.parentElement
      })
      .addIndicators()
      .on("progress", (scroll) => {
        emphasis.querySelector('h1').classList.add('display');
        scroll.target.remove();
      })
      .addTo(controller);
    }

    function animation(item, callback) {
      new ScrollMagic.Scene({
        triggerElement: item.parentElement
      })
      .addIndicators()
      .on("progress", (scroll) => {
        callback();
        scroll.target.remove();
      })
      .addTo(controller);
    }

    function animationRight(item) {
      animation(item, function() {
        anime({
          targets: item,
          translateX: [0, 100],
          opacity: [1, 0],
          easing: 'linear',
          direction: 'reverse',
          complete: function() {
            animationDisplay(item);
          }
        });
      })
    }

    function animationLeft(item) {
      animation(item, function() {
        anime({
          targets: item,
          translateX: [-100, 0],
          opacity: [0,1],
          easing: 'linear',
          complete: function() {
            animationDisplay(item);
          }
        });
      });
    }
    function animationTop(item) {
      animation(item, function() {
        anime({
          targets: item,
          translateY: [-50, 0],
          opacity: [0,1],
          easing: 'linear',
          complete: function() {
            animationDisplay(item);
          }
        });
      })
    }

    function animationDisplay(item) {
      item.parentElement.querySelectorAll(item.nodeName + ' span').forEach(function(child) {
        child.classList.add('display');
      });
    };

    function animationOpenCurtains() {
      new ScrollMagic.Scene({
        triggerElement: '.bkg-negative',
      })
      .addIndicators()
      .on("progress", (scroll) => {
        anime({
          targets: '.bkg-positive.first',
          keyframes: [
            { 
              translateY: [0, -500],
            },
          ],
          autoplay: false,
          duration: 1000,
          easing: "linear", 
        }).play();
    
        anime({
          targets: '.bkg-positive.second',
          keyframes: [
            { 
              translateY: ['50%', '100%'],
            },
          ],
          autoplay: false,
          duration: 1000,
          easing: "linear", 
        }).play();
    
        scroll.target.remove();
      })
      .addTo(controller);
    
    }

    function animationGetToknow() {
      var translateY = {
        from: - (document.querySelector(".banner").clientHeight / 2) + "px",
        to: "30px",
        top: "150px"
      }
      
        const animationParallaxBanner = anime({
          targets: ".parallax-banner",
          keyframes: [
            { 
              translateY: [translateY.from, translateY.to],
            },
          ],
          autoplay: false,
          duration: 1000,
          easing: "linear", 
        });
      
        const animationGetToKnow = anime({
          targets: ".get-to-know .get-to-know-body",
          translateY: translateY.top,
          duration: 1000,
          easing: "linear",
          autoplay: false,
          complete: function() {
            var getToKnow = document.querySelector(".get-to-know");
            getToKnow.style.marginBottom = translateY.top;

            document.querySelectorAll(".get-to-know .get-to-know-body span").forEach(function(child) {
              child.classList.add('display');
            });
          }
        });
      
        new ScrollMagic.Scene({
          triggerElement: '.banner',
          offset: (document.querySelector(".banner").offsetHeight /2),
          duration: (document.querySelector(".banner").offsetHeight /2) + 180
        })
        .addIndicators()
        .on("progress", (scroll) => {
          const seekValue = 1000 * scroll.progress;
          animationParallaxBanner.seek(seekValue);
          animationGetToKnow.seek(seekValue);
        })
        .addTo(controller);
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
  },
  donate: function() {
    var controller = new ScrollMagic.Controller();

    parallaxScroll(controller, "calc(-131.3333% + 15px)");
  },
  contact: function() {
    var controller = new ScrollMagic.Controller();

    parallaxScroll(controller, "calc(-120.3333% + 15px)");    
  }
}

function animationRound() {
  document.querySelectorAll('.panel .amount').forEach(item => {
    anime({
      targets: item,
      innerHTML: [0, item.innerHTML],
      round: 1,
      easing: 'easeInOutExpo'
    });
  });  
}

function animationDisplay(parent) {
  anime({
    targets: parent + ' .display',
    color: ['black', '#7e6851'],
    opacity: [0, 1],
    easing: 'linear'
  });
}

function parallaxScroll(controller, axle) {
  var title = document.querySelector(".parallax-title");

  console.log(axle)

  animation = anime({
    targets: ".parallax-title",
    easing: "easeInQuad",
    keyframes: [
      { 
        translateY: ["-50%", calculatePositionYTitle()],
      },
      { 
        translateX: ["-50%", axle],
      },
    ],
    duration: 1000,
    autoplay: false,
    update: function(anim) {
      if(Math.round(anim.progress) < 100){
        title.classList.remove("parallax-title-animated");     
      } else {
        title.classList.add("parallax-title-animated"); 
      }
    },
  });

  new ScrollMagic.Scene({
    triggerElement: '.parallax.banner-header',
    offset: document.querySelector(".parallax.banner-header").offsetHeight /2,
    duration: (document.querySelector(".parallax.banner-header").offsetHeight /2)
  })
  .addIndicators()
  .on("progress", (scroll) => {
    const seekValue = 1000 * scroll.progress;
    animation.seek(seekValue);    
  })
  .addTo(controller);
}

var calculatePositionYTitle = function() {
  var title = document.querySelector(".parallax-title");
  var titleCurrentPosition = document.querySelector('.parallax.banner-header').clientHeight / 2;

  positionYTitle = (titleCurrentPosition - title.clientHeight / 2);
  return positionYTitle  + "px"
}