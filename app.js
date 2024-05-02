function countdown() {
    const currentDate = new Date();
    const targetDate = new Date('June 17, 2024 00:00:00');
  
    const totalSeconds = Math.floor((targetDate - currentDate) / 1000);
    const totalMinutes = Math.floor(totalSeconds / 60);
    const totalHours = Math.floor(totalMinutes / 60);
    const totalDays = Math.floor(totalHours / 24);
    const totalMonths = Math.floor(totalDays / 30);
  
    const months = totalMonths % 12;
    const days = totalDays % 30;
    const hours = totalHours % 24;
    const minutes = totalMinutes % 60;
    const seconds = totalSeconds % 60;
  
    document.getElementById('months').querySelector('.count').textContent = months;
    document.getElementById('days').querySelector('.count').textContent = days;
    document.getElementById('hours').querySelector('.count').textContent = hours;
    document.getElementById('minutes').querySelector('.count').textContent = minutes;
    document.getElementById('seconds').querySelector('.count').textContent = seconds;
  }
  
  countdown();
  setInterval(countdown, 1000);                    
    
  document.addEventListener('DOMContentLoaded', function() {
    const heading = document.querySelector('.countdown-heading');
    const text = "BAKRA EID 2024";
    let index = 0;
  
    function type() {
      if (index < text.length) {
        heading.textContent += text.charAt(index);
        index++;
        setTimeout(type, 250); // Adjust typing speed here (in milliseconds)
      }
    }
  
    type( );
  });
  
  
  