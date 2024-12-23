        // ScrollReveal Animations
        ScrollReveal().reveal('.marvel-card', { 
            delay: 200,
            distance: '50px',
            origin: 'bottom',
            easing: 'cubic-bezier(0.5, 0, 0, 1)'
        });

        // Security measures
        window.addEventListener('keydown', function(event) {
            if (event.ctrlKey && event.shiftKey && event.key === 'I') {
                event.preventDefault();
                alert('⚠️ Access Denied ⚠️');
            }
        });

        document.addEventListener('contextmenu', function(event) {
            event.preventDefault();
            alert('⚠️ Access Denied ⚠️');
        });

        document.addEventListener('keydown', function(event) {
            if (event.ctrlKey && event.key === 'u') {
                event.preventDefault();
            }
        });
        function toggleMobileMenu() {
    const mobileMenu = document.getElementById('mobileMenu');
    mobileMenu.classList.toggle('active');
}

// Close mobile menu when clicking on a link
document.querySelectorAll('.mobile-menu a').forEach(link => {
    link.addEventListener('click', () => {
        document.getElementById('mobileMenu').classList.remove('active');
    });
});
  // Initialize Particles.js
particlesJS('particles-js', {
    particles: {
        number: {
            value: 80,
            density: {
                enable: true,
                value_area: 800
            }
        },
        color: {
            value: '#e62429'
        },
        shape: {
            type: 'circle'
        },
        opacity: {
            value: 0.5,
            random: false
        },
        size: {
            value: 3,
            random: true
        },
        line_linked: {
            enable: true,
            distance: 150,
            color: '#e62429',
            opacity: 0.2,
            width: 1
        },
        move: {
            enable: true,
            speed: 2,
            direction: 'none',
            random: false,
            straight: false,
            out_mode: 'out',
            bounce: false
        }
    },
    interactivity: {
        detect_on: 'canvas',
        events: {
            onhover: {
                enable: true,
                mode: 'grab'
            },
            onclick: {
                enable: true,
                mode: 'push'
            },
            resize: true
        }
    },
    modes: {
        grab: {
            distance: 140,
            line_linked: {
                opacity: 1
            }
        },
        bubble: {
            distance: 200,
            size: 10,
            duration: 3, // Set duration between 3 to 5 seconds
            opacity: 0.8,
            speed: 3
        },
        repulse: {
            distance: 100,
            duration: 0.4
        },
        push: {
            particles_nb: 4
        },
        remove: {
            particles_nb: 2
        }
    },
    retina_detect: true
});