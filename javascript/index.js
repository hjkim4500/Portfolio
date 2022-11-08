(function () {
  var WIDTH = window.innerWidth;
  var portfolio = document.querySelector(".portfolio");
  const navbar_toggle = document.querySelector(".navbar_toggle ");
  const menu = document.querySelector(".navbar_menu");
  

  //헤더 메뉴바 토클
  navbar_toggle.addEventListener("click", () => {
    menu.classList.toggle("active");
  });

 

  function setportfolio(e) {
    WIDTH = window.innerWidth;
    portfolio.style.width = `${WIDTH}px`;
  }

  setportfolio();
  window.addEventListener("resize", setportfolio);
})();
