// Simple click ripple effect (expanding circle)
document.addEventListener('click', function (event) {
  // Only handle left mouse button
  if (event.button !== 0) return;

  const ripple = document.createElement('span');
  ripple.className = 'click-ripple';

  // Position at mouse click
  ripple.style.left = event.clientX + 'px';
  ripple.style.top = event.clientY + 'px';

  document.body.appendChild(ripple);

  // Remove element after animation ends
  ripple.addEventListener('animationend', function () {
    ripple.remove();
  });
});