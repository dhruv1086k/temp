document.addEventListener("DOMContentLoaded", function () {
  var navContainer = document.querySelector(".nav-container");
  var menuOpen = document.querySelector(".menu-open");
  var menuClose = document.querySelector(".menu-close");
  var menuItems = document.querySelectorAll(".menu__item");
  var socials = document.querySelector(".socials");

  function openMenu() {
    navContainer.style.left = "0";
    menuItems.forEach((item, index) => {
      item.style.transitionDelay = `${0.1 * index}s`;
      item.style.transform = "translateY(0)";
      item.style.opacity = "1";
    });
    socials.style.transitionDelay = `${0.4 + 0.1 * menuItems.length}s`;
    socials.style.transform = "translateY(0)";
    socials.style.opacity = "1";
  }

  function closeMenu() {
    navContainer.style.left = "-100%";
    menuItems.forEach((item) => {
      item.style.transitionDelay = "0s";
      item.style.transform = "translateY(100px)";
      item.style.opacity = "0";
    });
    socials.style.transitionDelay = "0s";
    socials.style.transform = "translateY(100px)";
    socials.style.opacity = "0";
  }

  menuOpen.addEventListener("click", openMenu);
  menuClose.addEventListener("click", closeMenu);
});
