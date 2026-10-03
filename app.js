// ==========================================
// BINCY BABY WORK EXPERIENCE & PORTFOLIO JS
// ==========================================

document.addEventListener('DOMContentLoaded', () => {
  // Dialog Modals
  const achievementsModal = document.getElementById('achievementsModal');
  const mach10AboutModal = document.getElementById('mach10AboutModal');
  const resumeModal = document.getElementById('resumeModal');

  // Trigger Buttons
  const achievementsBtn = document.getElementById('achievementsBtn');
  const navAchievementsBtn = document.getElementById('navAchievementsBtn');
  const closeAchievementsBtn = document.getElementById('closeAchievementsBtn');
  const dismissAchievementsBtn = document.getElementById('dismissAchievementsBtn');

  const mach10AboutBtn = document.getElementById('mach10AboutBtn');
  const closeMach10AboutBtn = document.getElementById('closeMach10AboutBtn');
  const dismissMach10AboutBtn = document.getElementById('dismissMach10AboutBtn');

  const viewResumeBtn = document.getElementById('viewResumeBtn');
  const closeResumeBtn = document.getElementById('closeResumeBtn');
  const dismissResumeBtn = document.getElementById('dismissResumeBtn');
  const printResumeBtn = document.getElementById('printResumeBtn');

  // Footer Copy Buttons
  const footerCopyEmailBtn = document.getElementById('footerCopyEmailBtn');
  const footerCopyEmailText = document.getElementById('footerCopyEmailText');
  const footerCopyPhoneBtn = document.getElementById('footerCopyPhoneBtn');
  const footerCopyPhoneText = document.getElementById('footerCopyPhoneText');

  function openDialog(dialog) {
    if (dialog && typeof dialog.showModal === 'function') {
      dialog.showModal();
      document.body.style.overflow = 'hidden';
    }
  }

  function closeDialog(dialog) {
    if (dialog && typeof dialog.close === 'function') {
      dialog.close();
      document.body.style.overflow = '';
    }
  }

  // Light-dismiss fallback for native <dialog>
  [achievementsModal, mach10AboutModal, resumeModal].forEach((dialog) => {
    if (!dialog) return;

    dialog.addEventListener('close', () => {
      document.body.style.overflow = '';
    });

    if (!('closedBy' in HTMLDialogElement.prototype)) {
      dialog.addEventListener('click', (event) => {
        if (event.target !== dialog) return;

        const rect = dialog.getBoundingClientRect();
        const isDialogContent = (
          rect.top <= event.clientY &&
          event.clientY <= rect.top + rect.height &&
          rect.left <= event.clientX &&
          event.clientX <= rect.left + rect.width
        );

        if (!isDialogContent) {
          closeDialog(dialog);
        }
      });
    }
  });

  // Achievements Modal Events
  if (achievementsBtn) {
    achievementsBtn.addEventListener('click', () => openDialog(achievementsModal));
  }
  if (navAchievementsBtn) {
    navAchievementsBtn.addEventListener('click', () => openDialog(achievementsModal));
  }
  if (closeAchievementsBtn) {
    closeAchievementsBtn.addEventListener('click', () => closeDialog(achievementsModal));
  }
  if (dismissAchievementsBtn) {
    dismissAchievementsBtn.addEventListener('click', () => closeDialog(achievementsModal));
  }

  // Mach 10 About Modal Events
  if (mach10AboutBtn) {
    mach10AboutBtn.addEventListener('click', () => openDialog(mach10AboutModal));
  }
  if (closeMach10AboutBtn) {
    closeMach10AboutBtn.addEventListener('click', () => closeDialog(mach10AboutModal));
  }
  if (dismissMach10AboutBtn) {
    dismissMach10AboutBtn.addEventListener('click', () => closeDialog(mach10AboutModal));
  }

  // Resume Modal Events
  if (viewResumeBtn) {
    viewResumeBtn.addEventListener('click', () => openDialog(resumeModal));
  }
  if (closeResumeBtn) {
    closeResumeBtn.addEventListener('click', () => closeDialog(resumeModal));
  }
  if (dismissResumeBtn) {
    dismissResumeBtn.addEventListener('click', () => closeDialog(resumeModal));
  }
  if (printResumeBtn) {
    printResumeBtn.addEventListener('click', () => window.print());
  }

  // Copy Email Address Action
  if (footerCopyEmailBtn && footerCopyEmailText) {
    footerCopyEmailBtn.addEventListener('click', async () => {
      const email = 'bincybaby053512@gmail.com';
      try {
        await navigator.clipboard.writeText(email);
        footerCopyEmailText.textContent = 'Copied!';
        setTimeout(() => {
          footerCopyEmailText.textContent = 'Copy Email';
        }, 2200);
      } catch (err) {
        footerCopyEmailText.textContent = 'Copied!';
      }
    });
  }

  // Copy Mobile Number Action
  if (footerCopyPhoneBtn && footerCopyPhoneText) {
    footerCopyPhoneBtn.addEventListener('click', async () => {
      const phone = '+91 - 8714046121';
      try {
        await navigator.clipboard.writeText(phone);
        footerCopyPhoneText.textContent = 'Copied!';
        setTimeout(() => {
          footerCopyPhoneText.textContent = 'Copy Number';
        }, 2200);
      } catch (err) {
        footerCopyPhoneText.textContent = 'Copied!';
      }
    });
  }

  // Copy LinkedIn URL Action
  const footerCopyLinkedinBtn = document.getElementById('footerCopyLinkedinBtn');
  const footerCopyLinkedinText = document.getElementById('footerCopyLinkedinText');
  if (footerCopyLinkedinBtn && footerCopyLinkedinText) {
    footerCopyLinkedinBtn.addEventListener('click', async () => {
      const linkedin = 'https://www.linkedin.com/in/bincy-baby-0558841a7';
      try {
        await navigator.clipboard.writeText(linkedin);
        footerCopyLinkedinText.textContent = 'Copied!';
        setTimeout(() => {
          footerCopyLinkedinText.textContent = 'Copy URL';
        }, 2200);
      } catch (err) {
        footerCopyLinkedinText.textContent = 'Copied!';
      }
    });
  }

  // Scroll to Page Top (v up icon buttons)
  const footerBackToTopBtn = document.getElementById('footerBackToTopBtn');
  const floatingTopBtn = document.getElementById('floatingTopBtn');

  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

  if (footerBackToTopBtn) {
    footerBackToTopBtn.addEventListener('click', scrollToTop);
  }

  if (floatingTopBtn) {
    floatingTopBtn.addEventListener('click', scrollToTop);

    const updateFloatingBtnVisibility = () => {
      if (window.scrollY > 280) {
        floatingTopBtn.style.opacity = '1';
        floatingTopBtn.style.pointerEvents = 'auto';
        floatingTopBtn.style.transform = 'translateY(0)';
      } else {
        floatingTopBtn.style.opacity = '0';
        floatingTopBtn.style.pointerEvents = 'none';
        floatingTopBtn.style.transform = 'translateY(12px)';
      }
    };

    window.addEventListener('scroll', updateFloatingBtnVisibility, { passive: true });
    updateFloatingBtnVisibility();
  }

  // ==========================================
  // ACTIVE NAVIGATION & SCROLL-SPY
  // ==========================================
  const navLinks = {
    home: document.getElementById('navHome'),
    about: document.getElementById('navAbout'),
    experience: document.getElementById('navExperience'),
    skills: document.getElementById('navSkills'),
    projects: document.getElementById('navProjects'),
    education: document.getElementById('navEducation'),
    contact: document.getElementById('navContact')
  };

  function setActiveNavLink(targetKey) {
    Object.entries(navLinks).forEach(([key, el]) => {
      if (!el) return;
      if (key === targetKey) {
        el.classList.add('active');
      } else {
        el.classList.remove('active');
      }
    });
  }

  let isManualScroll = false;
  let manualScrollTimeout = null;

  function handleManualNavClick(key) {
    setActiveNavLink(key);
    isManualScroll = true;
    clearTimeout(manualScrollTimeout);
    manualScrollTimeout = setTimeout(() => {
      isManualScroll = false;
      updateScrollSpy();
    }, 1800);
  }

  // Attach click handlers to nav links for instant green selection
  Object.keys(navLinks).forEach((key) => {
    const el = navLinks[key];
    if (el) {
      el.addEventListener('click', (e) => {
        if (key === 'home') {
          e.preventDefault();
          scrollToTop();
          if (history.pushState) {
            history.pushState(null, null, '#home');
          }
        }
        handleManualNavClick(key);
      });
    }
  });

  // Dynamic Scroll-Spy for viewport-based active green selection
  function updateScrollSpy() {
    if (isManualScroll) return;

    const scrollPos = window.scrollY + 220; // account for sticky header and scroll-mt
    const contactSection = document.getElementById('contact');
    const educationSection = document.getElementById('education');
    const projectsSection = document.getElementById('projects');
    const skillsSection = document.getElementById('skills');
    const experienceSection = document.getElementById('experience');
    const aboutSection = document.getElementById('about');
    const homeSection = document.getElementById('home');

    // If near bottom of document (in footer contact), keep contact active
    const docHeight = document.documentElement.scrollHeight;
    const winHeight = window.innerHeight;
    if (window.scrollY + winHeight >= docHeight - 80 || (contactSection && scrollPos >= contactSection.offsetTop - 60)) {
      setActiveNavLink('contact');
      return;
    }

    if (educationSection && scrollPos >= educationSection.offsetTop) {
      setActiveNavLink('education');
    } else if (projectsSection && scrollPos >= projectsSection.offsetTop) {
      setActiveNavLink('projects');
    } else if (skillsSection && scrollPos >= skillsSection.offsetTop) {
      setActiveNavLink('skills');
    } else if (experienceSection && scrollPos >= experienceSection.offsetTop) {
      setActiveNavLink('experience');
    } else if (aboutSection && scrollPos >= aboutSection.offsetTop) {
      setActiveNavLink('about');
    } else {
      setActiveNavLink('home');
    }
  }

  window.addEventListener('scroll', updateScrollSpy, { passive: true });

  // Initial active state based on URL hash or page position
  const initialHash = window.location.hash.replace('#', '');
  if (initialHash && navLinks[initialHash]) {
    setActiveNavLink(initialHash);
  } else {
    updateScrollSpy();
  }
});

