// Hero Slider Functionality
const heroSlides = document.querySelectorAll('.hero-slide');
const prevBtn = document.getElementById('prevSlide');
const nextBtn = document.getElementById('nextSlide');

// Welcome Text Alternation
const welcomeTexts = document.querySelectorAll('.hero-welcome-sinhala');
let isEnglish = false;

function toggleWelcomeText() {
    welcomeTexts.forEach(text => {
        // Fade out
        text.style.opacity = '0';
        
        setTimeout(() => {
            // Change text
            if (isEnglish) {
                text.textContent = 'ආයුබෝවන්!';
            } else {
                text.textContent = 'Ayubowan!';
            }
            // Fade in
            text.style.opacity = '1';
        }, 500);
    });
    isEnglish = !isEnglish;
}

// Alternate welcome text every 3 seconds
if (welcomeTexts.length > 0) {
    setInterval(toggleWelcomeText, 3000);
}

let currentSlide = 0;

function showSlide(index) {
    // Remove active class from all slides
    heroSlides.forEach(slide => {
        slide.classList.remove('active');
    });

    // Add active class to current slide
    heroSlides[index].classList.add('active');
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % heroSlides.length;
    showSlide(currentSlide);
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + heroSlides.length) % heroSlides.length;
    showSlide(currentSlide);
}

// Event listeners - only if elements exist
if (prevBtn && nextBtn && heroSlides.length > 0) {
    prevBtn.addEventListener('click', prevSlide);
    nextBtn.addEventListener('click', nextSlide);
    
    // Auto-advance slides every 5 seconds
    setInterval(nextSlide, 5000);
}

// Mobile Menu Toggle
const menuToggle = document.getElementById('menuToggle');
const navMenu = document.querySelector('.nav-menu');

if (menuToggle && navMenu) {
    menuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        const icon = menuToggle.querySelector('i');
        if (navMenu.classList.contains('active')) {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-times');
        } else {
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
    });

    // Close menu when clicking on a link
    const navLinks = navMenu.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            const icon = menuToggle.querySelector('i');
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        });
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!navMenu.contains(e.target) && !menuToggle.contains(e.target)) {
            navMenu.classList.remove('active');
            const icon = menuToggle.querySelector('i');
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
    });
}

// Tour Packages Slider
const packagesSlider = document.querySelector('.packages-slider');
const prevPackageBtn = document.querySelector('.prev-package');
const nextPackageBtn = document.querySelector('.next-package');
let packageIndex = 0;

function slidePackages(direction) {
    if (!packagesSlider) return;
    
    const packageCard = document.querySelector('.package-card');
    if (!packageCard) return;
    
    const cardWidth = packageCard.offsetWidth;
    const gap = 30;
    const slideAmount = cardWidth + gap;
    
    if (direction === 'next') {
        packageIndex++;
        if (packageIndex > 1) packageIndex = 0;
    } else {
        packageIndex--;
        if (packageIndex < 0) packageIndex = 1;
    }
    
    packagesSlider.style.transform = `translateX(-${packageIndex * slideAmount}px)`;
}

if (prevPackageBtn && nextPackageBtn && packagesSlider) {
    prevPackageBtn.addEventListener('click', () => slidePackages('prev'));
    nextPackageBtn.addEventListener('click', () => slidePackages('next'));
    
    // Auto-slide packages every 4 seconds
    setInterval(() => {
        slidePackages('next');
    }, 4000);
}

// Categories auto-scroll - continuous smooth scrolling
const categoriesSlider = document.querySelector('.categories-slider');

// Duplicate the category items for seamless loop
if (categoriesSlider) {
    const categoryItems = categoriesSlider.innerHTML;
    categoriesSlider.innerHTML += categoryItems;
}

function autoScrollCategories() {
    if (categoriesSlider) {
        categoriesSlider.scrollLeft += 1;
        
        // Reset to beginning when halfway through (seamless loop)
        if (categoriesSlider.scrollLeft >= categoriesSlider.scrollWidth / 2) {
            categoriesSlider.scrollLeft = 0;
        }
    }
}

// Auto-scroll categories every 20ms for smooth motion
setInterval(autoScrollCategories, 20);

// Duplicate testimonial tours for infinite scroll
const testimonialToursSlider = document.querySelector('.testimonial-tours-slider');
if (testimonialToursSlider) {
    const tourCards = testimonialToursSlider.innerHTML;
    testimonialToursSlider.innerHTML += tourCards;
}

// Scroll to Top Button
const scrollToTopBtn = document.getElementById('scrollToTop');

if (scrollToTopBtn) {
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            scrollToTopBtn.classList.add('show');
        } else {
            scrollToTopBtn.classList.remove('show');
        }
    });

    scrollToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// Testimonials Slider for About Page
const testimonialCards = document.querySelectorAll('.testimonial-card');
const prevTestimonialBtn = document.getElementById('prevTestimonial');
const nextTestimonialBtn = document.getElementById('nextTestimonial');
let currentTestimonial = 0;

function showTestimonial(index) {
    testimonialCards.forEach((card, i) => {
        card.classList.remove('active');
        if (i === index) {
            card.classList.add('active');
        }
    });
}

function nextTestimonial() {
    currentTestimonial = (currentTestimonial + 1) % testimonialCards.length;
    showTestimonial(currentTestimonial);
}

function prevTestimonialFunc() {
    currentTestimonial = (currentTestimonial - 1 + testimonialCards.length) % testimonialCards.length;
    showTestimonial(currentTestimonial);
}

if (prevTestimonialBtn && nextTestimonialBtn) {
    prevTestimonialBtn.addEventListener('click', prevTestimonialFunc);
    nextTestimonialBtn.addEventListener('click', nextTestimonial);
    
    // Auto-advance testimonials every 5 seconds
    setInterval(nextTestimonial, 5000);
}

// Destinations Page - Filter and Search Functionality
document.addEventListener('DOMContentLoaded', function() {
    const destinationsGrid = document.getElementById('destinationsGrid');
    const searchInput = document.getElementById('searchInput');
    const filterButtons = document.querySelectorAll('.filter-btn');
    const sortSelect = document.getElementById('sortSelect');
    const resultCount = document.getElementById('resultCount');
    const noResults = document.getElementById('noResults');
    const seeMoreBtn = document.getElementById('seeMoreBtn');
    const seeMoreContainer = document.getElementById('seeMoreContainer');

    let currentFilter = 'all';
    let currentSearchTerm = '';
    let isExpanded = false;

    // Initialize page
    if (destinationsGrid) {
        initializeDestinations();
    }

    // Filter button click handlers
    if (filterButtons.length > 0) {
        filterButtons.forEach(button => {
            button.addEventListener('click', function() {
                // Update active button
                filterButtons.forEach(btn => btn.classList.remove('active'));
                this.classList.add('active');
                
                // Get filter value
                currentFilter = this.getAttribute('data-filter');
                
                // Apply filter
                filterDestinations();
            });
        });
    }

    // Search input handler
    if (searchInput) {
        searchInput.addEventListener('input', function(e) {
            currentSearchTerm = e.target.value.toLowerCase().trim();
            filterDestinations();
        });
    }

    // Sort select handler
    if (sortSelect) {
        sortSelect.addEventListener('change', function(e) {
            sortDestinations(e.target.value);
        });
    }

    // See More button handler
    if (seeMoreBtn) {
        seeMoreBtn.addEventListener('click', function() {
            toggleSeeMore();
        });
    }

    function initializeDestinations() {
        const allCards = destinationsGrid.querySelectorAll('.destination-card');
        
        allCards.forEach((card, index) => {
            // Add transition styles
            card.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
            
            // Only show non-hidden cards initially
            if (card.classList.contains('hidden-card')) {
                card.style.display = 'none';
            } else {
                card.style.display = 'block';
                card.style.opacity = '0';
                card.style.transform = 'translateY(20px)';
                
                setTimeout(() => {
                    card.style.opacity = '1';
                    card.style.transform = 'translateY(0)';
                }, 50 * index);
            }
        });
        
        updateResultCount();
    }

    function filterDestinations() {
        if (!destinationsGrid) return;
        
        const allCards = destinationsGrid.querySelectorAll('.destination-card');
        let visibleCount = 0;
        
        allCards.forEach((card, index) => {
            const category = card.getAttribute('data-category');
            const name = card.getAttribute('data-name').toLowerCase();
            const regionElement = card.querySelector('.destination-region');
            const region = regionElement ? regionElement.textContent.toLowerCase() : '';
            const isHiddenCard = card.classList.contains('hidden-card');
            
            // Check if card matches filter
            const matchesFilter = currentFilter === 'all' || category === currentFilter;
            
            // Check if card matches search
            const matchesSearch = currentSearchTerm === '' || 
                                name.includes(currentSearchTerm) || 
                                region.includes(currentSearchTerm) ||
                                category.includes(currentSearchTerm);
            
            // Determine if card should be visible
            const shouldShow = matchesFilter && matchesSearch;
            
            if (shouldShow) {
                // Check if we should respect the hidden-card class
                if (isHiddenCard && !isExpanded && currentFilter === 'all' && currentSearchTerm === '') {
                    // Keep hidden cards hidden when not expanded and no filters active
                    card.style.display = 'none';
                } else {
                    // Show the card
                    card.style.display = 'block';
                    setTimeout(() => {
                        card.style.opacity = '1';
                        card.style.transform = 'translateY(0)';
                    }, 20 * index);
                    visibleCount++;
                }
            } else {
                // Hide the card
                card.style.opacity = '0';
                card.style.transform = 'translateY(20px)';
                setTimeout(() => {
                    card.style.display = 'none';
                }, 300);
            }
        });
        
        // Update result count
        if (resultCount) {
            resultCount.textContent = visibleCount;
        }
        
        // Show/hide no results message
        if (noResults) {
            if (visibleCount === 0) {
                noResults.style.display = 'block';
            } else {
                noResults.style.display = 'none';
            }
        }
        
        // Update See More button visibility
        updateSeeMoreVisibility();
    }

    function toggleSeeMore() {
        const hiddenCards = destinationsGrid.querySelectorAll('.destination-card.hidden-card');
        
        if (!isExpanded) {
            // Expand - show all hidden cards
            isExpanded = true;
            
            hiddenCards.forEach((card, index) => {
                card.style.display = 'block';
                card.style.opacity = '0';
                card.style.transform = 'translateY(20px)';
                
                setTimeout(() => {
                    card.style.opacity = '1';
                    card.style.transform = 'translateY(0)';
                }, 50 * index);
            });
            
            // Update button text and icon
            const btnText = seeMoreBtn.querySelector('.btn-text');
            if (btnText) {
                btnText.textContent = 'Show Less';
            }
            seeMoreBtn.classList.add('expanded');
            
            // Update count
            updateResultCount();
            
        } else {
            // Collapse - hide the hidden cards
            isExpanded = false;
            
            hiddenCards.forEach(card => {
                card.style.opacity = '0';
                card.style.transform = 'translateY(20px)';
                
                setTimeout(() => {
                    card.style.display = 'none';
                }, 300);
            });
            
            // Update button text and icon
            const btnText = seeMoreBtn.querySelector('.btn-text');
            if (btnText) {
                btnText.textContent = 'See More Destinations';
            }
            seeMoreBtn.classList.remove('expanded');
            
            // Reset filters
            currentFilter = 'all';
            currentSearchTerm = '';
            if (searchInput) searchInput.value = '';
            
            filterButtons.forEach(btn => {
                if (btn.getAttribute('data-filter') === 'all') {
                    btn.classList.add('active');
                } else {
                    btn.classList.remove('active');
                }
            });
            
            // Update count
            updateResultCount();
            
            // Scroll back to results
            const resultsInfo = document.querySelector('.results-info');
            if (resultsInfo) {
                setTimeout(() => {
                    resultsInfo.scrollIntoView({ behavior: 'smooth', block: 'center' });
                }, 100);
            }
        }
    }

    function updateResultCount() {
        if (!resultCount || !destinationsGrid) return;
        
        const allCards = destinationsGrid.querySelectorAll('.destination-card');
        let count = 0;
        
        allCards.forEach(card => {
            if (card.style.display !== 'none' && card.style.opacity !== '0') {
                count++;
            }
        });
        
        // If no filter is active and not expanded, count only visible cards
        if (currentFilter === 'all' && currentSearchTerm === '' && !isExpanded) {
            const visibleCards = destinationsGrid.querySelectorAll('.destination-card:not(.hidden-card)');
            count = visibleCards.length;
        }
        
        resultCount.textContent = count;
    }

    function updateSeeMoreVisibility() {
        if (!seeMoreContainer) return;
        
        // Hide See More button if filter or search is active
        if (currentFilter !== 'all' || currentSearchTerm !== '') {
            seeMoreContainer.style.display = 'none';
        } else {
            seeMoreContainer.style.display = 'block';
        }
    }

    function sortDestinations(sortType) {
        if (!destinationsGrid) return;
        
        const cards = Array.from(destinationsGrid.querySelectorAll('.destination-card'));
        
        cards.sort((a, b) => {
            switch(sortType) {
                case 'name':
                    return a.getAttribute('data-name').localeCompare(b.getAttribute('data-name'));
                case 'tours-high':
                    return parseInt(b.getAttribute('data-tours')) - parseInt(a.getAttribute('data-tours'));
                case 'tours-low':
                    return parseInt(a.getAttribute('data-tours')) - parseInt(b.getAttribute('data-tours'));
                default:
                    return 0;
            }
        });
        
        // Re-append cards in sorted order
        cards.forEach(card => destinationsGrid.appendChild(card));
    }
});

// Video Modal Functionality
document.addEventListener('DOMContentLoaded', function() {
    const videoPlayBtn = document.getElementById('videoPlayBtn');
    const videoModal = document.getElementById('videoModal');
    const videoModalClose = document.getElementById('videoModalClose');
    const videoModalOverlay = document.getElementById('videoModalOverlay');
    const videoIframe = document.getElementById('videoIframe');
    
    // YouTube video ID - replace with your actual video
    const videoId = 'dQw4w9WgXcQ'; // Example: Rick Astley - Never Gonna Give You Up
    const videoUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`;
    
    // Open video modal
    if (videoPlayBtn) {
        videoPlayBtn.addEventListener('click', function() {
            if (videoModal && videoIframe) {
                videoIframe.src = videoUrl;
                videoModal.classList.add('active');
                document.body.style.overflow = 'hidden';
            }
        });
    }
    
    // Close video modal
    function closeVideoModal() {
        if (videoModal && videoIframe) {
            videoModal.classList.remove('active');
            videoIframe.src = '';
            document.body.style.overflow = 'auto';
        }
    }
    
    if (videoModalClose) {
        videoModalClose.addEventListener('click', closeVideoModal);
    }
    
    if (videoModalOverlay) {
        videoModalOverlay.addEventListener('click', closeVideoModal);
    }
    
    // Close on Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && videoModal && videoModal.classList.contains('active')) {
            closeVideoModal();
        }
    });
});

// ===== DESTINATION PAGE ENHANCEMENTS =====

// View Toggle (Grid / List View)
document.addEventListener('DOMContentLoaded', function() {
    const viewToggleBtns = document.querySelectorAll('.view-toggle-btn');
    const destinationsGrid = document.getElementById('destinationsGrid');

    if (viewToggleBtns.length > 0 && destinationsGrid) {
        viewToggleBtns.forEach(btn => {
            btn.addEventListener('click', function() {
                const view = this.getAttribute('data-view');
                
                // Update active button
                viewToggleBtns.forEach(b => b.classList.remove('active'));
                this.classList.add('active');
                
                // Toggle view
                if (view === 'list') {
                    destinationsGrid.classList.add('list-view');
                } else {
                    destinationsGrid.classList.remove('list-view');
                }
            });
        });
    }
});

// Image Carousel for Destination Cards
document.addEventListener('DOMContentLoaded', function() {
    const destinationCards = document.querySelectorAll('.destination-card');
    
    destinationCards.forEach(card => {
        const slider = card.querySelector('.destination-image-slider');
        if (!slider) return;
        
        const images = slider.querySelectorAll('.slider-image');
        const dots = slider.querySelectorAll('.dot');
        
        if (images.length <= 1) return;
        
        let currentImageIndex = 0;
        let intervalId;
        
        function showImage(index) {
            // Hide all images
            images.forEach(img => img.classList.remove('active'));
            dots.forEach(dot => dot.classList.remove('active'));
            
            // Show current image
            images[index].classList.add('active');
            if (dots[index]) {
                dots[index].classList.add('active');
            }
        }
        
        function nextImage() {
            currentImageIndex = (currentImageIndex + 1) % images.length;
            showImage(currentImageIndex);
        }
        
        function startAutoSlide() {
            intervalId = setInterval(nextImage, 3000); // Change every 3 seconds
        }
        
        function stopAutoSlide() {
            if (intervalId) {
                clearInterval(intervalId);
            }
        }
        
        // Start auto-sliding
        startAutoSlide();
        
        // Pause on hover
        card.addEventListener('mouseenter', stopAutoSlide);
        card.addEventListener('mouseleave', startAutoSlide);
        
        // Click on dots to change image
        dots.forEach((dot, index) => {
            dot.addEventListener('click', function(e) {
                e.preventDefault();
                e.stopPropagation();
                currentImageIndex = index;
                showImage(currentImageIndex);
                stopAutoSlide();
                startAutoSlide();
            });
        });
    });
});
