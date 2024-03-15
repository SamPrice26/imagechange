document.addEventListener('DOMContentLoaded', function() {
    const slider = document.getElementById('imageSlider');
    const topImage = slider.querySelector('.top-image');
  
    slider.addEventListener('mousemove', function(e) {
      const rect = slider.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const width = rect.width;
      
      const percentage = (x / width) * 100;
      topImage.style.clipPath = `polygon(0 0, ${percentage}% 0, ${percentage}% 100%, 0 100%)`;
    });
  });