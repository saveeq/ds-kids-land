document.addEventListener('DOMContentLoaded', function() {
      const tabs = document.querySelectorAll('.tab');
      const contentPanels = document.querySelectorAll('.content-panel');
      let currentIndex = 0;
      let autoRotateInterval;
      
      // Function to activate a specific tab and its content
      function activateTab(index) {
        // Reset all tabs and content panels
        tabs.forEach(tab => tab.classList.remove('active'));
        contentPanels.forEach(panel => panel.classList.remove('active'));
        
        // Activate the selected tab and corresponding content panel
        tabs[index].classList.add('active');
        const tabId = tabs[index].getAttribute('data-tab');
        document.querySelector(`.content-panel[data-content="${tabId}"]`).classList.add('active');
        
        currentIndex = index;
      }
      
      // Start auto-rotation
      function startAutoRotation() {
        stopAutoRotation(); // Clear any existing interval
        
        autoRotateInterval = setInterval(() => {
          let nextIndex = (currentIndex + 1) % tabs.length;
          activateTab(nextIndex);
        }, 5000); // Rotate every 5 seconds
      }
      
      // Stop auto-rotation
      function stopAutoRotation() {
        if (autoRotateInterval) {
          clearInterval(autoRotateInterval);
        }
      }
      
      // Add click event listeners to tabs
      tabs.forEach((tab, index) => {
        tab.addEventListener('click', function() {
          activateTab(index);
          stopAutoRotation();
          startAutoRotation(); // Restart the timer after manual selection
        });
      });
      
      // Initialize - activate the first tab and start rotation
      activateTab(0);
      startAutoRotation();
    });