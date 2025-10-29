// Personal Timeline Website JavaScript
// Handles scroll animations, timeline progress, and navigation

class TimelineWebsite {
    constructor() {
        this.timelineSections = document.querySelectorAll('.timeline-section');
        this.timelineLine = document.querySelector('.timeline-line');
        this.currentSection = 0;
        
        this.init();
    }
    
    init() {
        this.setupIntersectionObserver();
        this.setupScrollProgress();
        this.setupSmoothScrolling();
    }
    
    // Intersection Observer for scroll animations
    setupIntersectionObserver() {
        const observerOptions = {
            threshold: 0.3,
            rootMargin: '0px 0px -100px 0px'
        };
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, observerOptions);
        
        this.timelineSections.forEach(section => {
            observer.observe(section);
        });
    }
    
    
    // Setup scroll progress for timeline line
    setupScrollProgress() {
        window.addEventListener('scroll', () => {
            this.updateTimelineProgress();
        });
    }
    
    // Update timeline line progress based on scroll position
    updateTimelineProgress() {
        const scrollTop = window.pageYOffset;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrollPercent = (scrollTop / docHeight) * 100;
        
        // Update timeline line fill
        const timelineFill = this.timelineLine.querySelector('::after') || 
                           this.timelineLine.style;
        
        if (this.timelineLine.style) {
            this.timelineLine.style.setProperty('--timeline-height', `${scrollPercent}%`);
        }
        
        // Add CSS custom property for timeline height
        document.documentElement.style.setProperty('--timeline-height', `${scrollPercent}%`);
    }
    
    // Setup smooth scrolling for all internal links
    setupSmoothScrolling() {
        // Add smooth scrolling behavior to CSS
        document.documentElement.style.scrollBehavior = 'smooth';
    }
    
    // Utility method to add parallax effect (optional enhancement)
    addParallaxEffect() {
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const parallaxElements = document.querySelectorAll('.parallax');
            
            parallaxElements.forEach(element => {
                const speed = element.dataset.speed || 0.5;
                const yPos = -(scrolled * speed);
                element.style.transform = `translateY(${yPos}px)`;
            });
        });
    }
    
    // Method to add new timeline sections dynamically
    addTimelineSection(sectionData) {
        const timelineContainer = document.querySelector('.timeline-container');
        const newSection = this.createTimelineSection(sectionData);
        timelineContainer.appendChild(newSection);
        
        // Re-observe the new section
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, { threshold: 0.3, rootMargin: '0px 0px -100px 0px' });
        
        observer.observe(newSection);
    }
    
    // Helper method to create timeline section HTML
    createTimelineSection(data) {
        const section = document.createElement('section');
        section.className = 'timeline-section';
        section.id = data.id;
        
        section.innerHTML = `
            <div class="timeline-dot"></div>
            <div class="timeline-content">
                <div class="timeline-card">
                    <div class="card-header">
                        <h2 class="chapter-title">${data.title}</h2>
                        <span class="chapter-date">${data.date}</span>
                    </div>
                    <div class="card-image">
                        <div class="illustration-placeholder">
                            <span class="placeholder-text">Pencil Illustration</span>
                            <div class="placeholder-icon">✏️</div>
                        </div>
                    </div>
                    <div class="card-body">
                        <p class="chapter-description">${data.description}</p>
                        <div class="chapter-tags">
                            ${data.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
                        </div>
                    </div>
                </div>
            </div>
        `;
        
        return section;
    }
}

// Initialize the website when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new TimelineWebsite();
});

// Add some additional CSS for timeline progress via JavaScript
const style = document.createElement('style');
style.textContent = `
    .timeline-line::after {
        height: var(--timeline-height, 0%);
    }
`;
document.head.appendChild(style);

// Add scroll-to-top functionality
const scrollToTopBtn = document.createElement('button');
scrollToTopBtn.innerHTML = '↑';
scrollToTopBtn.className = 'scroll-to-top';
scrollToTopBtn.style.cssText = `
    position: fixed;
    bottom: 2rem;
    right: 2rem;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background: var(--primary-color);
    color: white;
    border: none;
    font-size: 1.2rem;
    cursor: pointer;
    opacity: 0;
    visibility: hidden;
    transition: all 0.3s ease;
    z-index: 1000;
    box-shadow: var(--shadow-lg);
`;

document.body.appendChild(scrollToTopBtn);

// Show/hide scroll to top button
window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        scrollToTopBtn.style.opacity = '1';
        scrollToTopBtn.style.visibility = 'visible';
    } else {
        scrollToTopBtn.style.opacity = '0';
        scrollToTopBtn.style.visibility = 'hidden';
    }
});

// Scroll to top functionality
scrollToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Add loading animation
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});

// Add CSS for loading state
const loadingStyle = document.createElement('style');
loadingStyle.textContent = `
    body:not(.loaded) .timeline-section {
        opacity: 0;
        transform: translateY(50px);
    }
    
    body.loaded .timeline-section {
        transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
    }
`;
document.head.appendChild(loadingStyle);
