document.addEventListener("mousemove", parallax);
function parallax(e) {
  document.querySelectorAll(".object").forEach(function (move) {
    var moving_value = move.getAttribute("data-value") || 1;
    var x = (e.clientX * moving_value) / 50;
    var y = (e.clientY * moving_value) / 50;

    move.style.transform = "translateX(" + x + "px) translateY(" + y + "px)";
  });
}
