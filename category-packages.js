// Package data for different categories
const packagesData = {
    safari: [
        {
            title: "Safari Adventure Package",
            location: "Udawalawe – Yala – Bundala",
            duration: "5 Days",
            itinerary: [
                {
                    day: "Day 01",
                    description: "Airport / Colombo → Udawalawe"
                },
                {
                    day: "Day 02",
                    description: "Udawalawe Safari → Yala"
                },
                {
                    day: "Day 03",
                    description: "Yala Morning Safari"
                },
                {
                    day: "Day 04",
                    description: "Bundala Bird Sanctuary"
                },
                {
                    day: "Day 05",
                    description: "Beach relax / Return"
                }
            ]
        }
    ],
    cycling: [
        {
            title: "5 Days Cycling Adventure",
            location: "Sri Lanka Countryside",
            duration: "5 Days",
            itinerary: [
                {
                    day: "Day 01",
                    description: "Arrival and bike fitting - Easy warm-up ride"
                },
                {
                    day: "Day 02",
                    description: "Coastal cycling route - 40km"
                },
                {
                    day: "Day 03",
                    description: "Hill country cycling - Tea plantation visit"
                },
                {
                    day: "Day 04",
                    description: "Village cycling tour - Cultural experience"
                },
                {
                    day: "Day 05",
                    description: "Final ride and departure"
                }
            ]
        }
    ],
    beach: [
        {
            title: "Beach Paradise Tour",
            location: "South Coast of Sri Lanka",
            duration: "4 Days",
            itinerary: [
                {
                    day: "Day 01",
                    description: "Arrival to Bentota - Beach relaxation"
                },
                {
                    day: "Day 02",
                    description: "Unawatuna & Galle Fort visit"
                },
                {
                    day: "Day 03",
                    description: "Mirissa - Whale watching & beach activities"
                },
                {
                    day: "Day 04",
                    description: "Beach leisure & departure"
                }
            ]
        }
    ],
    surfing: [
        {
            title: "Surfing Experience Package",
            location: "Arugam Bay & Weligama",
            duration: "6 Days",
            itinerary: [
                {
                    day: "Day 01",
                    description: "Arrival to Arugam Bay - Beach orientation"
                },
                {
                    day: "Day 02-03",
                    description: "Surfing lessons at Arugam Bay"
                },
                {
                    day: "Day 04",
                    description: "Transfer to Weligama"
                },
                {
                    day: "Day 05",
                    description: "Weligama surfing & beach fun"
                },
                {
                    day: "Day 06",
                    description: "Final surf session & departure"
                }
            ]
        }
    ],
    trekking: [
        {
            title: "Mountain Trekking Adventure",
            location: "Central Highlands",
            duration: "5 Days",
            itinerary: [
                {
                    day: "Day 01",
                    description: "Arrival to Nuwara Eliya - Acclimatization"
                },
                {
                    day: "Day 02",
                    description: "Horton Plains National Park trek"
                },
                {
                    day: "Day 03",
                    description: "Knuckles Mountain Range trek"
                },
                {
                    day: "Day 04",
                    description: "Adams Peak (Sri Pada) climb"
                },
                {
                    day: "Day 05",
                    description: "Rest and return"
                }
            ]
        }
    ],
    camping: [
        {
            title: "Wild Camping Experience",
            location: "National Parks & Wilderness",
            duration: "4 Days",
            itinerary: [
                {
                    day: "Day 01",
                    description: "Setup camp at Wilpattu National Park"
                },
                {
                    day: "Day 02",
                    description: "Wilderness exploration & wildlife spotting"
                },
                {
                    day: "Day 03",
                    description: "Beach camping at Kalpitiya"
                },
                {
                    day: "Day 04",
                    description: "Morning activities & departure"
                }
            ]
        }
    ],
    hiking: [
        {
            title: "Hill Country Hiking Tour",
            location: "Ella & Kandy Region",
            duration: "5 Days",
            itinerary: [
                {
                    day: "Day 01",
                    description: "Arrival to Ella - Little Adams Peak hike"
                },
                {
                    day: "Day 02",
                    description: "Ella Rock & Nine Arch Bridge"
                },
                {
                    day: "Day 03",
                    description: "Transfer to Kandy - Temple visit"
                },
                {
                    day: "Day 04",
                    description: "Knuckles Range day hike"
                },
                {
                    day: "Day 05",
                    description: "Tea plantation walk & departure"
                }
            ]
        }
    ]
};

// Get category from URL parameter
function getCategoryFromURL() {
    const params = new URLSearchParams(window.location.search);
    return params.get('category') || 'safari';
}

// Get category icon
function getCategoryIcon(category) {
    const icons = {
        safari: 'fa-binoculars',
        cycling: 'fa-bicycle',
        beach: 'fa-umbrella-beach',
        surfing: 'fa-person-swimming',
        trekking: 'fa-person-hiking',
        camping: 'fa-campground',
        hiking: 'fa-mountain'
    };
    return icons[category] || 'fa-map';
}

// Format category name
function formatCategoryName(category) {
    const names = {
        safari: 'Safari Tours',
        cycling: 'Cycling Adventures',
        beach: 'Beach Tours',
        surfing: 'Surfing Experiences',
        trekking: 'Trekking Tours',
        camping: 'Camping Adventures',
        hiking: 'Hiking Tours'
    };
    return names[category] || category.charAt(0).toUpperCase() + category.slice(1);
}

// Generate WhatsApp message
function generateWhatsAppMessage(packageTitle, categoryName) {
    const message = `Hi! I'm interested in the ${packageTitle} from your ${categoryName}. Can you provide more details?`;
    return encodeURIComponent(message);
}

// Display packages
function displayPackages() {
    const category = getCategoryFromURL();
    const categoryName = formatCategoryName(category);
    const packages = packagesData[category];

    // Update page title and breadcrumb
    document.getElementById('categoryTitle').textContent = categoryName;
    document.getElementById('categoryBreadcrumb').textContent = categoryName;
    document.title = `${categoryName} - TRAVELIN`;

    const container = document.getElementById('packagesContainer');

    if (!packages || packages.length === 0) {
        container.innerHTML = `
            <div class="no-packages">
                <i class="fas fa-box-open"></i>
                <h3>No Packages Available</h3>
                <p>We're currently preparing exciting ${categoryName.toLowerCase()} for you!</p>
                <a href="index.html" class="back-btn">Back to Home</a>
            </div>
        `;
        return;
    }

    // Display each package
    packages.forEach(package => {
        const packageCard = document.createElement('div');
        packageCard.className = 'package-card';

        // Generate itinerary HTML
        const itineraryHTML = package.itinerary.map(day => `
            <div class="itinerary-day">
                <div class="day-title">${day.day}</div>
                <div class="day-description">${day.description}</div>
            </div>
        `).join('');

        // WhatsApp number (replace with actual number)
        const whatsappNumber = '1234567890'; // Replace with actual WhatsApp number
        const whatsappMessage = generateWhatsAppMessage(package.title, categoryName);
        const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

        packageCard.innerHTML = `
            <div class="package-header">
                <h2>${package.title}</h2>
                <div class="package-location">
                    <i class="fas fa-map-marker-alt"></i> ${package.location}
                </div>
                <div class="package-duration">
                    <i class="fas fa-clock"></i> ${package.duration}
                </div>
            </div>
            <div class="package-body">
                <div class="itinerary">
                    <h3 style="margin-bottom: 20px; color: #333; font-size: 1.5rem;">
                        <i class="fas fa-route"></i> Tour Itinerary
                    </h3>
                    ${itineraryHTML}
                </div>
                <div class="package-actions">
                    <a href="${whatsappLink}" target="_blank" class="whatsapp-btn">
                        <i class="fab fa-whatsapp"></i> WhatsApp Inquiry
                    </a>
                    <a href="tel:+${whatsappNumber}" class="call-btn">
                        <i class="fas fa-phone"></i> Call Now
                    </a>
                </div>
            </div>
        `;

        container.appendChild(packageCard);
    });
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', displayPackages);
