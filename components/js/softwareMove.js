// Function to create automatic movement
function autoMove() {
  document.querySelectorAll(".object").forEach(function (move, index) {
    var moving_value = move.getAttribute("data-value") || 1;

    // Adjust the speed of movement by reducing the angle increment
    var angle = (Date.now() / 8000) * (index + 1); // Adjust the divisor to slow down or speed up the movement
    var x = Math.cos(angle) * 20 * moving_value;
    var y = Math.sin(angle) * 20 * moving_value;

    move.style.transform = `translateX(${x}px) translateY(${y}px)`;
  });
  document.querySelectorAll(".object1").forEach(function (move, index) {
    var moving_value = move.getAttribute("data-value") || 1;

    // Adjust the speed of movement by reducing the angle increment
    var angle = (Date.now() / 3000) * (index + 1); // Adjust the divisor to slow down or speed up the movement
    var x = Math.cos(angle) * 20 * moving_value;
    var y = Math.sin(angle) * 20 * moving_value;

    move.style.transform = `translateX(${x}px) translateY(${y}px)`;
  });
  document.querySelectorAll(".object2").forEach(function (move, index) {
    var moving_value = move.getAttribute("data-value") || 1;

    // Adjust the speed of movement by reducing the time increment
    var time = Date.now() / 6000; // Adjust this divisor to control speed

    // Create an up-down motion
    var amplitude = 50 * moving_value; // Adjust the amplitude of the motion
    var frequency = 0.5 * (index + 1); // Adjust the frequency of the motion

    var x = 0; // No horizontal movement (you can adjust this if needed)
    var y = amplitude * Math.sin(frequency * time);

    move.style.transform = `translateX(${x}px) translateY(${y}px)`;
  });
}

// Call the autoMove function at regular intervals
setInterval(autoMove, 50);
