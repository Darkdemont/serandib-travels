// Package data for different categories
const packagesData = {
    safari: [
        {
            title: "🐘 5 Days Wildlife & Safari Tour",
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
            title: "🚴 5 Days Cycling Adventure",
            location: "Sigiriya – Habarana – Kandy",
            duration: "5 Days",
            itinerary: [
                {
                    day: "Day 01",
                    description: "Airport → Habarana"
                },
                {
                    day: "Day 02",
                    description: "Village cycling tour"
                },
                {
                    day: "Day 03",
                    description: "Sigiriya countryside cycling"
                },
                {
                    day: "Day 04",
                    description: "Kandy hill cycling"
                },
                {
                    day: "Day 05",
                    description: "Kandy → Colombo"
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
            title: "🏄 5 Days Surfing Experience",
            location: "Weligama – Mirissa – Ahangama",
            duration: "5 Days",
            itinerary: [
                {
                    day: "Day 01",
                    description: "Airport → Weligama"
                },
                {
                    day: "Day 02",
                    description: "Surf lessons + beach time"
                },
                {
                    day: "Day 03",
                    description: "Mirissa surfing + whale watching (optional)"
                },
                {
                    day: "Day 04",
                    description: "Ahangama surf spots"
                },
                {
                    day: "Day 05",
                    description: "Relax & return"
                }
            ]
        }
    ],
    trekking: [
        {
            title: "🥾 5 Days Trekking & Hiking Tour",
            location: "Ella – Haputale – Horton Plains",
            duration: "5 Days",
            itinerary: [
                {
                    day: "Day 01",
                    description: "Airport / Kandy → Ella"
                },
                {
                    day: "Day 02",
                    description: "Little Adam's Peak + Nine Arches"
                },
                {
                    day: "Day 03",
                    description: "Ella Rock trekking"
                },
                {
                    day: "Day 04",
                    description: "Horton Plains trek"
                },
                {
                    day: "Day 05",
                    description: "Return via scenic route"
                }
            ]
        }
    ],
    camping: [
        {
            title: "⛺ 5 Days Camping & Nature Tour",
            location: "Kithulgala – Knuckles – Riverston",
            duration: "5 Days",
            itinerary: [
                {
                    day: "Day 01",
                    description: "Airport / Colombo → Kithulgala"
                },
                {
                    day: "Day 02",
                    description: "Jungle camping + adventure"
                },
                {
                    day: "Day 03",
                    description: "Knuckles trekking"
                },
                {
                    day: "Day 04",
                    description: "Riverston camping"
                },
                {
                    day: "Day 05",
                    description: "Return"
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
    ],
    tours: [
        {
            title: "🌴 5 Days Cultural & Nature Tour",
            location: "Negombo – Sigiriya – Dambulla – Kandy – Colombo",
            duration: "5 Days",
            itinerary: [
                {
                    day: "Day 01",
                    description: "Airport / Negombo → Sigiriya"
                },
                {
                    day: "Day 02",
                    description: "Sigiriya Rock + Village Tour"
                },
                {
                    day: "Day 03",
                    description: "Dambulla Cave Temple → Kandy"
                },
                {
                    day: "Day 04",
                    description: "Kandy city tour + Cultural dance"
                },
                {
                    day: "Day 05",
                    description: "Colombo city tour → Airport / Hotel"
                }
            ]
        }
    ]
};

// WhatsApp configuration - UPDATE THIS WITH YOUR WHATSAPP NUMBER
const WHATSAPP_NUMBER = '94771234567'; // Replace with your actual number (include country code, no + or spaces)

// Format category name
function formatCategoryName(category) {
    const names = {
        safari: 'Safari Tours',
        cycling: 'Cycling Adventures',
        beach: 'Beach Tours',
        surfing: 'Surfing Experiences',
        trekking: 'Trekking Tours',
        camping: 'Camping Adventures',
        hiking: 'Hiking Tours',
        tours: 'Cultural & Nature Tours'
    };
    return names[category] || category.charAt(0).toUpperCase() + category.slice(1);
}

// Generate WhatsApp message
function generateWhatsAppMessage(packageTitle, categoryName) {
    const message = `Hi! I'm interested in the *${packageTitle}* from your ${categoryName}. Can you provide more details about pricing, availability, and inclusions?`;
    return encodeURIComponent(message);
}

// Open package modal
function openPackageModal(category) {
    const packages = packagesData[category];
    const modal = document.getElementById('packageModal');
    const modalBody = document.getElementById('packageModalBody');

    if (!packages || packages.length === 0) {
        modalBody.innerHTML = `
            <div class="modal-package-header">
                <h2>Coming Soon!</h2>
            </div>
            <div class="modal-package-body">
                <p style="text-align: center; padding: 40px 20px; color: #666; font-size: 1.1rem;">
                    We're preparing exciting ${formatCategoryName(category).toLowerCase()} for you. Stay tuned!
                </p>
            </div>
        `;
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
        return;
    }

    // Display first package (you can extend this to show multiple packages)
    const packageData = packages[0];
    const categoryName = formatCategoryName(category);

    // Generate itinerary HTML
    const itineraryHTML = packageData.itinerary.map(day => `
        <div class="modal-itinerary-day">
            <div class="modal-day-title">${day.day}</div>
            <div class="modal-day-description">${day.description}</div>
        </div>
    `).join('');

    // Generate WhatsApp link
    const whatsappMessage = generateWhatsAppMessage(packageData.title, categoryName);
    const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${whatsappMessage}`;

    // Build modal content
    modalBody.innerHTML = `
        <div class="modal-package-header">
            <h2>${packageData.title}</h2>
            <div class="modal-package-location">
                <i class="fas fa-map-marker-alt"></i>
                <span>${packageData.location}</span>
            </div>
            <div class="modal-package-duration">
                <i class="fas fa-clock"></i> ${packageData.duration}
            </div>
        </div>
        <div class="modal-package-body">
            <div class="modal-itinerary">
                <h3>
                    <i class="fas fa-route"></i> Tour Itinerary
                </h3>
                ${itineraryHTML}
            </div>
            <div class="modal-package-actions">
                <a href="${whatsappLink}" target="_blank" class="modal-whatsapp-btn">
                    <i class="fab fa-whatsapp"></i> WhatsApp Inquiry
                </a>
                <a href="tel:+${WHATSAPP_NUMBER}" class="modal-call-btn">
                    <i class="fas fa-phone"></i> Call Now
                </a>
            </div>
        </div>
    `;

    // Show modal with animation
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

// Close package modal
function closePackageModal() {
    const modal = document.getElementById('packageModal');
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
}

// Close modal when clicking outside
window.onclick = function(event) {
    const modal = document.getElementById('packageModal');
    if (event.target === modal) {
        closePackageModal();
    }
}

// Close modal with Escape key
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        closePackageModal();
    }
});
