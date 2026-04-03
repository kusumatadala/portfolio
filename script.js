/* ========================================
   SMOOTH SCROLLING & NAVIGATION
   ======================================== */

/**
 * Initialize smooth scroll for anchor links
 * Enables smooth scroll behavior for all navigation links
 */
function initSmoothScroll() {
  document.querySelectorAll('.nav-links a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      if(this.getAttribute('href').startsWith('#')) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        if(targetElement) {
          targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    });
  });
}

/**
 * Handle resume snapshot button click
 * Shows alert with resume info
 */
function initResumeButton() {
  const resumeBtn = document.querySelector('.btn-resume-snapshot');
  if(resumeBtn) {
    resumeBtn.addEventListener('click', function(e) {
      e.preventDefault();
      alert('📄 Resume PDF – contact for detailed version');
    });
  }
}

/**
 * Initialize all functionality on DOM load
 */
document.addEventListener('DOMContentLoaded', function() {
  initSmoothScroll();
  initResumeButton();
  console.log("Portfolio ready — Kusuma Sai, full-stack engineer");
});
