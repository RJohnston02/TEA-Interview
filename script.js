// Wait for DOM to load
document.addEventListener('DOMContentLoaded', function() {
    // Initialize charts
    initCharts();
    
    // Smooth scrolling for nav links
    initSmoothScroll();
    
    // Sticky nav behavior
    initStickyNav();
    
    // Animate elements on scroll
    initScrollAnimations();
});

// Initialize all charts
function initCharts() {
    createLMSChart();
    createSISChart();
}

// LMS Distribution Chart
function createLMSChart() {
    const ctx = document.getElementById('lmsChart');
    if (!ctx) return;
    
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Rural', 'Suburban', 'Urban'],
            datasets: [
                {
                    label: 'Schoology',
                    data: [333, 107, 79],
                    backgroundColor: '#0066cc',
                    borderRadius: 6
                },
                {
                    label: 'Canvas',
                    data: [133, 179, 79],
                    backgroundColor: '#00a896',
                    borderRadius: 6
                },
                {
                    label: 'Google Classroom',
                    data: [399, 214, 119],
                    backgroundColor: '#ff6b35',
                    borderRadius: 6
                },
                {
                    label: 'Other',
                    data: [33, 18, 10],
                    backgroundColor: '#9aa5b1',
                    borderRadius: 6
                },
                {
                    label: 'None',
                    data: [33, 18, 10],
                    backgroundColor: '#cbd2d9',
                    borderRadius: 6
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: true,
            plugins: {
                legend: {
                    position: 'bottom',
                    labels: {
                        padding: 15,
                        font: {
                            size: 12,
                            family: 'Inter'
                        }
                    }
                },
                title: {
                    display: false
                },
                tooltip: {
                    backgroundColor: 'rgba(26, 26, 46, 0.95)',
                    padding: 12,
                    titleFont: {
                        size: 14,
                        family: 'Inter'
                    },
                    bodyFont: {
                        size: 13,
                        family: 'Inter'
                    },
                    callbacks: {
                        afterLabel: function(context) {
                            const total = context.dataset.data.reduce((a, b) => a + b, 0);
                            const percentage = ((context.parsed.y / total) * 100).toFixed(1);
                            return `${percentage}% of ${context.label} districts`;
                        }
                    }
                }
            },
            scales: {
                x: {
                    stacked: false,
                    grid: {
                        display: false
                    },
                    ticks: {
                        font: {
                            size: 12,
                            family: 'Inter'
                        }
                    }
                },
                y: {
                    stacked: false,
                    beginAtZero: true,
                    grid: {
                        color: '#e4e7eb'
                    },
                    ticks: {
                        font: {
                            size: 12,
                            family: 'Inter'
                        }
                    },
                    title: {
                        display: true,
                        text: 'Number of Districts',
                        font: {
                            size: 13,
                            family: 'Inter',
                            weight: 600
                        }
                    }
                }
            }
        }
    });
}

// SIS Distribution Chart
function createSISChart() {
    const ctx = document.getElementById('sisChart');
    if (!ctx) return;
    
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Rural', 'Suburban', 'Urban'],
            datasets: [
                {
                    label: 'Ascender',
                    data: [599, 89, 0],
                    backgroundColor: '#0066cc',
                    borderRadius: 6
                },
                {
                    label: 'Skyward',
                    data: [33, 89, 79],
                    backgroundColor: '#00a896',
                    borderRadius: 6
                },
                {
                    label: 'Frontline TEAMS',
                    data: [20, 107, 79],
                    backgroundColor: '#ff6b35',
                    borderRadius: 6
                },
                {
                    label: 'PowerSchool',
                    data: [7, 36, 20],
                    backgroundColor: '#f59e0b',
                    borderRadius: 6
                },
                {
                    label: 'Infinite Campus',
                    data: [7, 36, 10],
                    backgroundColor: '#10b981',
                    borderRadius: 6
                },
                {
                    label: 'Other',
                    data: [7, 0, 10],
                    backgroundColor: '#9aa5b1',
                    borderRadius: 6
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: true,
            plugins: {
                legend: {
                    position: 'bottom',
                    labels: {
                        padding: 15,
                        font: {
                            size: 12,
                            family: 'Inter'
                        }
                    }
                },
                title: {
                    display: false
                },
                tooltip: {
                    backgroundColor: 'rgba(26, 26, 46, 0.95)',
                    padding: 12,
                    titleFont: {
                        size: 14,
                        family: 'Inter'
                    },
                    bodyFont: {
                        size: 13,
                        family: 'Inter'
                    },
                    callbacks: {
                        afterLabel: function(context) {
                            // Calculate total districts for this type
                            const totals = {
                                'Rural': 665,
                                'Suburban': 357,
                                'Urban': 198
                            };
                            const total = totals[context.label];
                            const percentage = ((context.parsed.y / total) * 100).toFixed(1);
                            return `${percentage}% of ${context.label} districts`;
                        }
                    }
                }
            },
            scales: {
                x: {
                    stacked: false,
                    grid: {
                        display: false
                    },
                    ticks: {
                        font: {
                            size: 12,
                            family: 'Inter'
                        }
                    }
                },
                y: {
                    stacked: false,
                    beginAtZero: true,
                    grid: {
                        color: '#e4e7eb'
                    },
                    ticks: {
                        font: {
                            size: 12,
                            family: 'Inter'
                        }
                    },
                    title: {
                        display: true,
                        text: 'Number of Districts',
                        font: {
                            size: 13,
                            family: 'Inter',
                            weight: 600
                        }
                    }
                }
            }
        }
    });
}

// Smooth scrolling for navigation
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const navHeight = document.querySelector('.nav').offsetHeight;
                const targetPosition = target.offsetTop - navHeight - 20;
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Sticky navigation
function initStickyNav() {
    const nav = document.querySelector('.nav');
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('.section[id]');
    
    window.addEventListener('scroll', function() {
        // Update active nav link based on scroll position
        let current = '';
        const navHeight = nav.offsetHeight;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop - navHeight - 100;
            const sectionHeight = section.offsetHeight;
            if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
}

// Scroll animations
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe cards and important elements
    const elementsToAnimate = document.querySelectorAll(`
        .exec-card,
        .segment-card,
        .criteria-card,
        .win-card,
        .team-card,
        .stakeholder-card,
        .risk-item,
        .success-card,
        .financial-card
    `);
    
    elementsToAnimate.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        observer.observe(el);
    });
}

// Add active class style for nav
const style = document.createElement('style');
style.textContent = `
    .nav-link.active {
        color: var(--primary);
        background: var(--gray-100);
    }
`;
document.head.appendChild(style);
