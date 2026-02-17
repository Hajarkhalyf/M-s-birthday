const heartsContainer = document.querySelector('.hearts-container');
const confettiContainer = document.querySelector('.confetti-container');

// Function to create floating hearts
function createHeart() {
  const heart = document.createElement('div');
  heart.classList.add('heart');
  heart.innerText = '💖';
  heart.style.left = Math.random() * 100 + '%';
  heart.style.fontSize = (16 + Math.random() * 24) + 'px';
  heartsContainer.appendChild(heart);

  // Remove heart after animation
  setTimeout(() => {
    heart.remove();
  }, 6000);

  // Make it clickable to pop
  heart.addEventListener('click', () => {
    heart.style.transform = 'scale(2) rotate(360deg)';
    setTimeout(() => heart.remove(), 300);
  });
}

// Create multiple hearts continuously
setInterval(createHeart, 500);

// Create confetti
function createConfetti() {
  const confetti = document.createElement('div');
  confetti.classList.add('confetti');
  confetti.style.left = Math.random() * 100 + '%';
  confetti.style.backgroundColor = ['#fff', '#ffe4e1', '#ff69b4', '#ff1493'][Math.floor(Math.random() * 4)];
  confettiContainer.appendChild(confetti);

  setTimeout(() => confetti.remove(), 3000);
}

// Trigger confetti when cake appears
const cake = document.querySelector('.cake');
cake.addEventListener('mouseenter', () => {
  for(let i=0;i<30;i++){
    setTimeout(createConfetti, i*50);
  }
});
