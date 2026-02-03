// Destination Detail Page JavaScript
let currentDestination = null;

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
            
            // Get form data
            const fullName = bookingForm.querySelector('[name="fullName"]').value;
            const email = bookingForm.querySelector('[name="email"]').value;
            const travelDate = bookingForm.querySelector('[name="travelDate"]').value;
            const travelers = bookingForm.querySelector('[name="travelers"]').value;
            const specialRequests = bookingForm.querySelector('[name="specialRequests"]').value;
            
            // Create WhatsApp message with package details
            let message = `🎯 *New Tour Inquiry*\n\n`;
            message += `📦 *Package:* ${currentDestination.name}\n`;
            message += `📍 *Location:* ${currentDestination.location}\n`;
            message += `⏱️ *Duration:* ${currentDestination.duration}\n`;
            message += `💰 *Price:* $${currentDestination.price}${currentDestination.priceNote ? ' ' + currentDestination.priceNote : ''}\n\n`;
            message += `👤 *Customer Details:*\n`;
            message += `Name: ${fullName}\n`;
            message += `Email: ${email}\n`;
            message += `Travel Date: ${travelDate}\n`;
            message += `Number of Travelers: ${travelers}\n`;
            if (specialRequests) {
                message += `\n📝 *Special Requests:*\n${specialRequests}`;
            }
            
            // Replace with your WhatsApp number (include country code without + or spaces)
            // Example: For +94 771234567, use 94771234567
            const whatsappNumber = '94707096220'; // Ceylonova Tours WhatsApp
            
            // Encode message for URL
            const encodedMessage = encodeURIComponent(message);
            
            // Open WhatsApp
            window.open(`https://wa.me/${whatsappNumber}?text=${encodedMessage}`, '_blank');
            
            // Reset form
            bookingForm.reset();
        });
    }
});

function loadDestinationDetails(destId) {
    const dest = destinationsData[destId];
    currentDestination = dest; // Store for booking form
    
    // Update page title
    document.title = `${dest.name} - TRAVELIN`;
    
    // Update header
    document.getElementById('destTitle').textContent = dest.name;
    document.getElementById('destBreadcrumb').textContent = dest.name;
    
    // Update main info
    document.getElementById('destName').textContent = dest.name;
    document.getElementById('destLocation').textContent = dest.location;
    document.getElementById('destRating').textContent = dest.rating;
    
    // Update rating display
    const ratingElement = document.querySelector('.detail-rating');
    if (ratingElement) {
        const reviewText = ratingElement.querySelector('span:last-child');
        if (reviewText) {
            reviewText.textContent = dest.rating;
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
    
    document.getElementById('destDescription').innerHTML = dest.fullDescription ? 
        dest.fullDescription.split('\n\n').map(para => `<p>${para}</p>`).join('') : 
        dest.description;
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
        
        // Check if highlight is an object with title and description
        if (typeof highlight === 'object' && highlight.title) {
            li.innerHTML = `
                <div class="highlight-item">
                    <div class="highlight-title">
                        <i class="fas fa-check-circle"></i> 
                        <strong>${highlight.title}</strong>
                    </div>
                    <div class="highlight-description">${highlight.description}</div>
                </div>
            `;
        } else {
            // Simple string highlight (backward compatibility)
            li.innerHTML = `<i class="fas fa-check-circle"></i> ${highlight}`;
        }
        
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
