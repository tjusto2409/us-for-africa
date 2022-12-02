function menu() {
  const box = document.querySelector("header .box-menu");
  const menu_burguer = document.querySelector("header .menu-btn__burguer");

  window.onscroll = function() {
    scrollFunction()
  };

  box.addEventListener("click", function() {
    menu_burguer.classList.toggle("menu-btn__open");
    const menu = document.querySelector("section.menu");
    menu.classList.toggle('open');

    anime({
      targets: 'nav a',
      opacity: [0, 1],
      delay: anime.stagger(100, {start: 500}),
      easing: 'easeInOutQuad'
    });

    anime({
      targets: '.bkg-menu',
      opacity: [0, 1],
      translateX: [0, -40],
      easing: 'easeInOutQuad',
      delay: 900
    });

    if(menu_burguer.classList.contains("menu-btn__open")) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
      scrollFunction();
    }
  });

  if(window.screen.width >= 1000) {
    box.addEventListener("mouseover", function() {
      menu_burguer.classList.add("menu-btn__over");
    });

    box.addEventListener("mouseout", function() {
      menu_burguer.classList.remove("menu-btn__over");
    });
  }
}

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    console.log(document.querySelector("header"))
    document.querySelector("header").style.background = "#1D1D1BAA";
  } else {
    document.querySelector("header").style.background = ""
  }
}
