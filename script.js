function filterCollection(category) {
    const cards = document.querySelectorAll('.collection-card');
    cards.forEach(card => {
      card.style.display = card.dataset.category === category || category === 'all' ? 'block' : 'none';
    });
  }
  // Countdown Timer
  const countdownElement = document.getElementById('countdown');
  const targetDate = new Date('2025-02-10T23:59:59').getTime();

  setInterval(() => {
    const now = new Date().getTime();
    const difference = targetDate - now;

    if (difference > 0) {
      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      countdownElement.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
    } else {
      countdownElement.innerHTML = "Offer expired!";
    }
  }, 1000);

  // Modal Functionality
  const modal = document.getElementById('offer-modal');
  const overlay = document.getElementById('modal-overlay');

  function showModal() {
    modal.classList.add('active');
    overlay.classList.add('active');
  }

  function closeModal() {
    modal.classList.remove('active');
    overlay.classList.remove('active');
  }


   // Toggle Between Sign Up and Log In
   function toggleForm() {
    const formBox = document.getElementById('formBox');
    formBox.classList.toggle('active');
  }