// Destination Detail Page JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // Get destination ID from URL
    const urlParams = new URLSearchParams(window.location.search);
    const destId = urlParams.get('id');
    
    if (destId && destinationsData[destId]) {
        loadDestinationDetails(destId);
    } else {
        // If no valid destination, redirect to destinations page
        window.location.href = 'destinations.html';
    }
    
    // Booking form submission
    const bookingForm = document.getElementById('bookingForm');
    if (bookingForm) {
        bookingForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Thank you for your inquiry! We will contact you shortly.');
            bookingForm.reset();
        });
    }
});

function loadDestinationDetails(destId) {
    const dest = destinationsData[destId];
    
    // Update page title
    document.title = `${dest.name} - TRAVELIN`;
    
    // Update header
    document.getElementById('destTitle').textContent = dest.name;
    document.getElementById('destBreadcrumb').textContent = dest.name;
    
    // Update main info
    document.getElementById('destName').textContent = dest.name;
    document.getElementById('destLocation').textContent = dest.location;
    document.getElementById('destRating').textContent = dest.rating;
    
    // Update reviews count if available
    const ratingElement = document.querySelector('.detail-rating');
    if (dest.reviews && ratingElement) {
        const reviewText = ratingElement.querySelector('span:last-child');
        if (reviewText) {
            reviewText.textContent = `${dest.rating} (${dest.reviews} Reviews)`;
        }
    }
    
    // Handle pricing (special case for Sri Lanka packages)
    const priceElement = document.getElementById('destPrice');
    const pricePerElement = document.querySelector('.price-per');
    
    if (typeof dest.price === 'string') {
        // Price on request or custom string
        priceElement.textContent = dest.price;
        pricePerElement.textContent = dest.priceNote || '';
    } else if (dest.priceWithHotels) {
        // First Sri Lanka package with two pricing options
        priceElement.innerHTML = `$${dest.price}`;
        pricePerElement.innerHTML = `per person (without hotels)<br><strong style="color: #FFA500; font-size: 18px; margin-top: 5px; display: block;">$${dest.priceWithHotels} for 2 persons (with hotels)</strong>`;
    } else if (dest.priceNote) {
        // Classic Sri Lanka package with custom note
        priceElement.textContent = `$${dest.price}`;
        pricePerElement.textContent = dest.priceNote;
    } else {
        // Standard pricing
        priceElement.textContent = `$${dest.price}`;
        pricePerElement.textContent = 'per person';
    }
    
    document.getElementById('destDescription').textContent = dest.description;
    document.getElementById('destDuration').textContent = dest.duration;
    document.getElementById('destGroup').textContent = dest.group;
    document.getElementById('destLanguages').textContent = dest.languages;
    
    // Update availability if exists
    const availabilityElements = document.querySelectorAll('.quick-info-item');
    availabilityElements.forEach(item => {
        const label = item.querySelector('.info-label');
        if (label && label.textContent === 'Available') {
            const valueElement = item.querySelector('.info-value');
            if (valueElement && dest.availability) {
                valueElement.textContent = dest.availability;
            }
        }
    });
    
    // Update images
    if (dest.images && dest.images.length > 0) {
        const mainImage = document.getElementById('mainImage');
        mainImage.src = dest.images[0];
        mainImage.alt = dest.name;
        
        // Create thumbnails
        const thumbsContainer = document.getElementById('galleryThumbs');
        thumbsContainer.innerHTML = '';
        
        dest.images.forEach((img, index) => {
            const thumb = document.createElement('div');
            thumb.className = 'gallery-thumb' + (index === 0 ? ' active' : '');
            thumb.innerHTML = `<img src="${img}" alt="${dest.name} ${index + 1}">`;
            thumb.addEventListener('click', function() {
                mainImage.src = img;
                document.querySelectorAll('.gallery-thumb').forEach(t => t.classList.remove('active'));
                thumb.classList.add('active');
            });
            thumbsContainer.appendChild(thumb);
        });
    }
    
    // Update highlights
    const highlightsList = document.getElementById('destHighlights');
    highlightsList.innerHTML = '';
    dest.highlights.forEach(highlight => {
        const li = document.createElement('li');
        li.innerHTML = `<i class="fas fa-check-circle"></i> ${highlight}`;
        highlightsList.appendChild(li);
    });
    
    // Update included items
    const includedList = document.getElementById('destIncluded');
    includedList.innerHTML = '';
    dest.included.forEach(item => {
        const li = document.createElement('li');
        li.innerHTML = `<i class="fas fa-check"></i> ${item}`;
        includedList.appendChild(li);
    });
    
    // Update excluded items
    const excludedList = document.getElementById('destExcluded');
    excludedList.innerHTML = '';
    dest.excluded.forEach(item => {
        const li = document.createElement('li');
        li.innerHTML = `<i class="fas fa-times"></i> ${item}`;
        excludedList.appendChild(li);
    });
}
