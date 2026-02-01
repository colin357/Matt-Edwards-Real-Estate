/**
 * Matt Edwards Luxury Real Estate - Main JavaScript
 *
 * @package Matt_Edwards_Luxury
 */

(function() {
    'use strict';

    // DOM Ready
    document.addEventListener('DOMContentLoaded', function() {
        initHeader();
        initMobileNav();
        initScrollAnimations();
        initContactForm();
        initPropertyFilters();
        initVideoPlayer();
        initSmoothScroll();
    });

    /**
     * Header scroll behavior
     */
    function initHeader() {
        const header = document.getElementById('site-header');
        if (!header) return;

        let lastScroll = 0;

        window.addEventListener('scroll', function() {
            const currentScroll = window.pageYOffset;

            if (currentScroll > 100) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }

            lastScroll = currentScroll;
        }, { passive: true });
    }

    /**
     * Mobile navigation toggle
     */
    function initMobileNav() {
        const menuToggle = document.getElementById('menu-toggle');
        const mobileNav = document.getElementById('mobile-nav-overlay');

        if (!menuToggle || !mobileNav) return;

        menuToggle.addEventListener('click', function() {
            const isOpen = menuToggle.classList.toggle('active');
            mobileNav.classList.toggle('active');
            document.body.classList.toggle('nav-open');
            menuToggle.setAttribute('aria-expanded', isOpen);
        });

        // Close mobile nav when clicking a link
        const mobileNavLinks = mobileNav.querySelectorAll('a');
        mobileNavLinks.forEach(function(link) {
            link.addEventListener('click', function() {
                menuToggle.classList.remove('active');
                mobileNav.classList.remove('active');
                document.body.classList.remove('nav-open');
                menuToggle.setAttribute('aria-expanded', 'false');
            });
        });

        // Close on escape key
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape' && mobileNav.classList.contains('active')) {
                menuToggle.classList.remove('active');
                mobileNav.classList.remove('active');
                document.body.classList.remove('nav-open');
                menuToggle.setAttribute('aria-expanded', 'false');
            }
        });
    }

    /**
     * Scroll-triggered animations
     */
    function initScrollAnimations() {
        const fadeElements = document.querySelectorAll('.fade-in');

        if (!fadeElements.length) return;

        // Check if IntersectionObserver is supported
        if ('IntersectionObserver' in window) {
            const observer = new IntersectionObserver(function(entries) {
                entries.forEach(function(entry) {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                        observer.unobserve(entry.target);
                    }
                });
            }, {
                threshold: 0.1,
                rootMargin: '0px 0px -50px 0px'
            });

            fadeElements.forEach(function(el) {
                observer.observe(el);
            });
        } else {
            // Fallback for older browsers
            fadeElements.forEach(function(el) {
                el.classList.add('visible');
            });
        }
    }

    /**
     * Contact form handler
     */
    function initContactForm() {
        const form = document.getElementById('contact-form');
        if (!form) return;

        form.addEventListener('submit', function(e) {
            e.preventDefault();

            const submitBtn = form.querySelector('button[type="submit"]');
            const responseDiv = form.querySelector('.form-response');
            const originalBtnText = submitBtn.textContent;

            // Disable button and show loading state
            submitBtn.disabled = true;
            submitBtn.textContent = 'Sending...';

            // Gather form data
            const formData = new FormData(form);
            formData.append('action', 'matt_edwards_contact');

            // Send AJAX request
            fetch(mattEdwards.ajaxUrl, {
                method: 'POST',
                body: formData,
                credentials: 'same-origin'
            })
            .then(function(response) {
                return response.json();
            })
            .then(function(data) {
                responseDiv.textContent = data.data.message;
                responseDiv.className = 'form-response ' + (data.success ? 'success' : 'error');

                if (data.success) {
                    form.reset();
                }
            })
            .catch(function(error) {
                responseDiv.textContent = 'An error occurred. Please try again.';
                responseDiv.className = 'form-response error';
            })
            .finally(function() {
                submitBtn.disabled = false;
                submitBtn.textContent = originalBtnText;
            });
        });
    }

    /**
     * Property listing filters
     */
    function initPropertyFilters() {
        const filterBtns = document.querySelectorAll('.filter-btn');
        const listings = document.querySelectorAll('.listing-card[data-category]');

        if (!filterBtns.length || !listings.length) return;

        filterBtns.forEach(function(btn) {
            btn.addEventListener('click', function() {
                const filter = this.getAttribute('data-filter');

                // Update active button
                filterBtns.forEach(function(b) {
                    b.classList.remove('active');
                });
                this.classList.add('active');

                // Filter listings
                listings.forEach(function(listing) {
                    const categories = listing.getAttribute('data-category');

                    if (filter === 'all' || categories.includes(filter)) {
                        listing.style.display = 'block';
                        setTimeout(function() {
                            listing.style.opacity = '1';
                            listing.style.transform = 'translateY(0)';
                        }, 50);
                    } else {
                        listing.style.opacity = '0';
                        listing.style.transform = 'translateY(20px)';
                        setTimeout(function() {
                            listing.style.display = 'none';
                        }, 300);
                    }
                });
            });
        });
    }

    /**
     * Video player modal
     */
    function initVideoPlayer() {
        const playButtons = document.querySelectorAll('.play-button[data-video]');

        if (!playButtons.length) return;

        playButtons.forEach(function(btn) {
            btn.addEventListener('click', function() {
                const videoUrl = this.getAttribute('data-video');
                openVideoModal(videoUrl);
            });
        });
    }

    function openVideoModal(videoUrl) {
        // Create modal
        const modal = document.createElement('div');
        modal.className = 'video-modal';
        modal.innerHTML = `
            <div class="video-modal-overlay"></div>
            <div class="video-modal-content">
                <button class="video-modal-close" aria-label="Close video">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <line x1="18" y1="6" x2="6" y2="18"></line>
                        <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                </button>
                <div class="video-modal-wrapper">
                    <iframe src="${videoUrl}?autoplay=1" frameborder="0" allowfullscreen allow="autoplay"></iframe>
                </div>
            </div>
        `;

        // Add styles
        const style = document.createElement('style');
        style.textContent = `
            .video-modal {
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                z-index: 9999;
                display: flex;
                align-items: center;
                justify-content: center;
            }
            .video-modal-overlay {
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: rgba(0, 0, 0, 0.9);
            }
            .video-modal-content {
                position: relative;
                width: 90%;
                max-width: 1000px;
            }
            .video-modal-close {
                position: absolute;
                top: -50px;
                right: 0;
                background: none;
                border: none;
                color: white;
                cursor: pointer;
                padding: 10px;
            }
            .video-modal-wrapper {
                position: relative;
                padding-bottom: 56.25%;
                height: 0;
            }
            .video-modal-wrapper iframe {
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
            }
        `;
        document.head.appendChild(style);

        // Add to DOM
        document.body.appendChild(modal);
        document.body.style.overflow = 'hidden';

        // Close handlers
        const closeBtn = modal.querySelector('.video-modal-close');
        const overlay = modal.querySelector('.video-modal-overlay');

        function closeModal() {
            modal.remove();
            style.remove();
            document.body.style.overflow = '';
        }

        closeBtn.addEventListener('click', closeModal);
        overlay.addEventListener('click', closeModal);
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape') closeModal();
        });
    }

    /**
     * Smooth scroll for anchor links
     */
    function initSmoothScroll() {
        const links = document.querySelectorAll('a[href^="#"]');

        links.forEach(function(link) {
            link.addEventListener('click', function(e) {
                const href = this.getAttribute('href');
                if (href === '#') return;

                const target = document.querySelector(href);
                if (target) {
                    e.preventDefault();
                    const headerHeight = document.getElementById('site-header').offsetHeight;
                    const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - headerHeight;

                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            });
        });
    }

})();
