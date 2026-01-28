// All Destinations Data
const destinationsData = {
    'sri-lanka-explorer': {
        name: 'Sri Lanka Explorer Tour',
        location: 'Cultural Triangle & Beach Escape',
        price: 400,
        priceWithHotels: 750,
        rating: 4.6,
        reviews: 245,
        duration: '4 Days / 3 Nights',
        group: 'Private (1-4 people)',
        languages: 'English',
        availability: 'Available all year',
        description: 'Experience the best of Sri Lanka in just 4 days! This private tour takes you through ancient UNESCO heritage sites, scenic hill capital Kandy, and the relaxing southern beaches of Bentota. Perfect for travelers who want culture, nature, and beach time in one smooth journey.',
        highlights: [
            'Sigiriya Rock Fortress & Dambulla Cave Temple (UNESCO Sites)',
            'Sacred Temple of the Tooth Relic – Kandy',
            'Scenic cultural city tour & spice gardens',
            'Relaxing beach stay in Bentota',
            'Private vehicle with local driver-guide'
        ],
        included: [
            'Airport pickup & drop-off',
            'Private air-conditioned vehicle',
            'English-speaking driver / guide',
            'Fuel, parking & highway charges',
            'All transfers as per itinerary'
        ],
        excluded: [
            'Hotel accommodation',
            'Meals & beverages',
            'Entrance tickets to attractions',
            'Optional activities',
            'Personal expenses'
        ],
        images: [
            'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&h=600&fit=crop',
            'https://images.unsplash.com/photo-1564507592333-c60657eea523?w=800&h=600&fit=crop',
            'https://images.unsplash.com/photo-1552375846-8b2e118bd6e7?w=800&h=600&fit=crop',
            'https://images.unsplash.com/photo-1588954404937-c4e17f9b7c1f?w=800&h=600&fit=crop'
        ]
    },
    'classic-sri-lanka': {
        name: 'Classic Sri Lanka Tour',
        location: 'Cultural Icons, Hill Country & Coast',
        price: 700,
        priceNote: 'for 2 persons (without hotels)',
        rating: 4.7,
        reviews: 310,
        duration: '6 Days / 5 Nights',
        group: 'Private Tour',
        languages: 'English',
        availability: 'All year',
        description: 'A perfectly balanced Sri Lanka itinerary covering ancient ruins, misty hill towns, scenic train rides, and stunning beaches—ideal for travelers who want "everything".',
        highlights: [
            'Sigiriya Rock & Dambulla Cave Temple',
            'Kandy cultural capital',
            'Nuwara Eliya tea country',
            'Ella scenic train journey',
            'Galle Fort & southern beaches'
        ],
        included: [
            'Airport pickup & drop',
            'Private A/C vehicle',
            'English-speaking driver',
            'Sightseeing as per itinerary'
        ],
        excluded: [
            'Hotels',
            'Entrance tickets',
            'Train tickets & meals'
        ],
        images: [
            'https://images.unsplash.com/photo-1552375846-8b2e118bd6e7?w=800&h=600&fit=crop',
            'https://images.unsplash.com/photo-1589308078059-be1415eab4c3?w=800&h=600&fit=crop',
            'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&h=600&fit=crop',
            'https://images.unsplash.com/photo-1577717903315-1691ae25ab3f?w=800&h=600&fit=crop'
        ]
    },
    'cultural-beach-sri-lanka': {
        name: 'Sri Lanka Cultural & Beach Tour',
        location: 'Hill Country, Wildlife & Coastline',
        price: 'Price on request',
        priceNote: '(without hotels)',
        rating: 4.6,
        reviews: 198,
        duration: '7 Days / 6 Nights',
        group: 'Private Tour',
        languages: 'English',
        availability: 'All year',
        description: 'This tour connects Sri Lanka\'s ancient cities, scenic hill country, wildlife experiences, and beautiful southern beaches—perfect for adventure and culture lovers.',
        highlights: [
            'Sigiriya Rock Fortress',
            'Kandy & Temple of the Tooth',
            'Nuwara Eliya & Ella viewpoints',
            'Optional Yala Safari',
            'Bentota beach stay'
        ],
        included: [
            'Airport transfers',
            'Private air-conditioned vehicle',
            'English-speaking driver'
        ],
        excluded: [
            'Hotels',
            'Entrance tickets',
            'Safari, train tickets & meals'
        ],
        images: [
            'https://images.unsplash.com/photo-1589308078059-be1415eab4c3?w=800&h=600&fit=crop',
            'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&h=600&fit=crop',
            'https://images.unsplash.com/photo-1577717903315-1691ae25ab3f?w=800&h=600&fit=crop',
            'https://images.unsplash.com/photo-1552375846-8b2e118bd6e7?w=800&h=600&fit=crop'
        ]
    },
    'japan': {
        name: 'Japan',
        location: 'Tokyo, Japan',
        price: 1299,
        rating: 4.9,
        duration: '7 Days / 6 Nights',
        group: 'Max 15 People',
        languages: 'English, Japanese',
        description: 'Experience the perfect blend of ancient traditions and cutting-edge technology in Japan. From the bustling streets of Tokyo to the serene temples of Kyoto, discover a land where cherry blossoms bloom and centuries-old culture thrives alongside modern innovation. Explore historic castles, sample authentic cuisine, and immerse yourself in the unique Japanese way of life.',
        highlights: [
            'Visit iconic Tokyo landmarks including Senso-ji Temple and Tokyo Skytree',
            'Experience traditional tea ceremony in Kyoto',
            'Explore historic Osaka Castle',
            'Ride the famous Shinkansen bullet train',
            'Visit Mount Fuji for breathtaking views',
            'Enjoy authentic Japanese cuisine including sushi and ramen'
        ],
        included: [
            'Accommodation in 4-star hotels',
            'Daily breakfast',
            'Professional English-speaking guide',
            'All entrance fees to attractions',
            'Airport transfers',
            'Domestic flights within Japan'
        ],
        excluded: [
            'International flights',
            'Travel insurance',
            'Lunch and dinner',
            'Personal expenses',
            'Tips for guide and driver',
            'Optional activities'
        ],
        images: [
            'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=800&h=600&fit=crop',
            'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=800&h=600&fit=crop',
            'https://images.unsplash.com/photo-1526481280693-3bfa7568e0f3?w=800&h=600&fit=crop',
            'https://images.unsplash.com/photo-1480796927426-f609979314bd?w=800&h=600&fit=crop'
        ]
    },
    'thailand': {
        name: 'Thailand',
        location: 'Bangkok, Thailand',
        price: 899,
        rating: 4.8,
        duration: '6 Days / 5 Nights',
        group: 'Max 12 People',
        languages: 'English, Thai',
        description: 'Discover the Land of Smiles with its golden temples, tropical beaches, and vibrant culture. From the bustling markets of Bangkok to the pristine islands of Phuket, Thailand offers an unforgettable blend of ancient traditions, delicious cuisine, and warm hospitality. Experience elephant sanctuaries, floating markets, and breathtaking sunsets.',
        highlights: [
            'Explore the Grand Palace and Wat Pho in Bangkok',
            'Visit floating markets and experience river cruises',
            'Enjoy island hopping in Phuket and Phi Phi Islands',
            'Experience authentic Thai cooking class',
            'Visit ancient temples in Ayutthaya',
            'Relax on pristine beaches with crystal-clear waters'
        ],
        included: [
            'Accommodation in beachfront resorts',
            'Daily breakfast',
            'Domestic flights Bangkok-Phuket',
            'All tours and excursions',
            'Licensed tour guide',
            'Airport transfers'
        ],
        excluded: [
            'International airfare',
            'Visa fees',
            'Meals not mentioned',
            'Travel insurance',
            'Personal shopping',
            'Spa treatments'
        ],
        images: [
            'https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?w=800&h=600&fit=crop',
            'https://images.unsplash.com/photo-1528181304800-259b08848526?w=800&h=600&fit=crop',
            'https://images.unsplash.com/photo-1519451241324-20b4ea2c4220?w=800&h=600&fit=crop',
            'https://images.unsplash.com/photo-1506665531195-80942b4a8401?w=800&h=600&fit=crop'
        ]
    },
    'france': {
        name: 'France',
        location: 'Paris, France',
        price: 1599,
        rating: 4.9,
        duration: '8 Days / 7 Nights',
        group: 'Max 20 People',
        languages: 'English, French',
        description: 'Fall in love with the romance of Paris and the beauty of the French Riviera. From the iconic Eiffel Tower to charming Provence villages, experience world-class art, exquisite cuisine, and timeless elegance. Explore magnificent châteaux, stroll through lavender fields, and indulge in fine wine and cheese.',
        highlights: [
            'Visit the Eiffel Tower and Louvre Museum',
            'Cruise along the Seine River',
            'Explore Palace of Versailles',
            'Wine tasting in French vineyards',
            'Visit Notre-Dame Cathedral and Arc de Triomphe',
            'Experience French culinary delights'
        ],
        included: [
            'Luxury hotel accommodation',
            'Daily breakfast and 4 dinners',
            'High-speed train tickets',
            'All museum entrance fees',
            'Expert guide services',
            'Seine River cruise'
        ],
        excluded: [
            'International flights',
            'Travel insurance',
            'Some meals',
            'Personal expenses',
            'Optional tours',
            'Gratuities'
        ],
        images: [
            'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800&h=600&fit=crop',
            'https://images.unsplash.com/photo-1511739001486-6bfe10ce785f?w=800&h=600&fit=crop',
            'https://images.unsplash.com/photo-1549144511-f099e773c147?w=800&h=600&fit=crop',
            'https://images.unsplash.com/photo-1550340499-a6c60fc8287c?w=800&h=600&fit=crop'
        ]
    },
    'italy': {
        name: 'Italy',
        location: 'Rome, Italy',
        price: 1499,
        rating: 4.9,
        duration: '9 Days / 8 Nights',
        group: 'Max 18 People',
        languages: 'English, Italian',
        description: 'Immerse yourself in the art, history, and culinary excellence of Italy. From ancient Rome to Renaissance Florence and romantic Venice, discover masterpieces at every turn. Savor authentic Italian cuisine, explore historic landmarks, and experience la dolce vita in one of the world\'s most beautiful countries.',
        highlights: [
            'Explore the Colosseum and Roman Forum',
            'Visit Vatican City and Sistine Chapel',
            'Tour Florence\'s Uffizi Gallery',
            'Gondola ride in Venice canals',
            'Leaning Tower of Pisa',
            'Tuscan countryside wine tour'
        ],
        included: [
            '4-star hotel accommodation',
            'Daily breakfast',
            'High-speed train tickets between cities',
            'All entrance fees',
            'Local expert guides',
            'Airport transfers'
        ],
        excluded: [
            'International flights',
            'Lunch and dinner',
            'Travel insurance',
            'Optional activities',
            'Personal shopping',
            'Tips'
        ],
        images: [
            'https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?w=800&h=600&fit=crop',
            'https://images.unsplash.com/photo-1515542622106-78bda8ba0e5b?w=800&h=600&fit=crop',
            'https://images.unsplash.com/photo-1516483638261-f4dbaf036963?w=800&h=600&fit=crop',
            'https://images.unsplash.com/photo-1520175480921-4edfa2983e0f?w=800&h=600&fit=crop'
        ]
    },
    'indonesia': {
        name: 'Indonesia',
        location: 'Bali, Indonesia',
        price: 999,
        rating: 4.7,
        duration: '7 Days / 6 Nights',
        group: 'Max 14 People',
        languages: 'English, Indonesian',
        description: 'Discover paradise in Bali with its stunning beaches, ancient temples, and lush rice terraces. Experience the perfect blend of relaxation and adventure with yoga retreats, surf lessons, and cultural ceremonies. Explore volcanic landscapes, traditional villages, and world-class diving spots.',
        highlights: [
            'Visit iconic Tanah Lot Temple',
            'Explore Ubud rice terraces and monkey forest',
            'Sunrise trek to Mount Batur',
            'Beach hopping in Seminyak and Nusa Dua',
            'Traditional Balinese cooking class',
            'Water sports and snorkeling'
        ],
        included: [
            'Beach resort accommodation',
            'Daily breakfast',
            'All tours and activities',
            'Private driver and guide',
            'Entrance fees',
            'Airport transfers'
        ],
        excluded: [
            'International flights',
            'Visa on arrival fee',
            'Meals not specified',
            'Travel insurance',
            'Spa treatments',
            'Personal expenses'
        ],
        images: [
            'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800&h=600&fit=crop',
            'https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?w=800&h=600&fit=crop',
            'https://images.unsplash.com/photo-1559628376-f3fe5f782a2e?w=800&h=600&fit=crop',
            'https://images.unsplash.com/photo-1555400038-63f5ba517a47?w=800&h=600&fit=crop'
        ]
    }
};

// Add more destinations (showing structure for remaining ones)
destinationsData['caspian-valley'] = {
    name: 'Caspian Valley',
    location: 'Caspian Region, Asia',
    price: 1199,
    rating: 4.6,
    duration: '6 Days / 5 Nights',
    group: 'Max 10 People',
    languages: 'English, Russian',
    description: 'Explore the stunning Caspian Valley with its unique blend of mountain landscapes and coastal beauty. Experience rich cultural heritage, traditional cuisine, and breathtaking natural scenery in this hidden gem of Central Asia.',
    highlights: [
        'Explore ancient mountain villages',
        'Experience traditional Caspian cuisine',
        'Visit historic sites and monuments',
        'Hiking in pristine mountain trails',
        'Local cultural performances',
        'Scenic valley drives'
    ],
    included: ['Accommodation', 'Meals', 'Guide', 'Transport', 'Entry fees', 'Activities'],
    excluded: ['Flights', 'Insurance', 'Personal expenses', 'Tips', 'Optional tours', 'Drinks'],
    images: [
        'https://images.unsplash.com/photo-1541696443271-cd4137c4d921?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1519904981063-b0cf448d479e?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1506929562872-bb421503ef21?w=800&h=600&fit=crop'
    ]
};

destinationsData['russia'] = {
    name: 'Russia',
    location: 'Moscow, Russia',
    price: 1399,
    rating: 4.7,
    duration: '8 Days / 7 Nights',
    group: 'Max 16 People',
    languages: 'English, Russian',
    description: 'Discover the grandeur of Russia from the historic Kremlin to the magnificent Winter Palace. Experience world-class ballet, explore stunning cathedrals, and journey through centuries of fascinating history.',
    highlights: [
        'Red Square and St. Basil\'s Cathedral',
        'Kremlin and Armoury Museum',
        'High-speed train to St. Petersburg',
        'Hermitage Museum visit',
        'Traditional Russian ballet',
        'Metro tour of Moscow\'s famous stations'
    ],
    included: ['4-star hotels', 'Breakfast daily', 'Train tickets', 'Museum passes', 'City tours', 'Airport transfers'],
    excluded: ['International flights', 'Visa fees', 'Lunch/dinner', 'Insurance', 'Shopping', 'Tips'],
    images: [
        'https://images.unsplash.com/photo-1547448415-e9f5b28e570d?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1513326738677-b964603b136d?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1520106212299-d99c443e4568?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1512495039889-d9557f0e78c2?w=800&h=600&fit=crop'
    ]
};

destinationsData['america'] = {
    name: 'America',
    location: 'Florida, USA',
    price: 1799,
    rating: 4.8,
    duration: '10 Days / 9 Nights',
    group: 'Max 20 People',
    languages: 'English',
    description: 'Experience the magic of Florida with its world-famous theme parks, stunning beaches, and vibrant cities. From Miami\'s Art Deco district to the Everglades\' wildlife, discover America\'s Sunshine State.',
    highlights: [
        'Walt Disney World and Universal Studios',
        'Miami Beach and Art Deco District',
        'Everglades National Park airboat tour',
        'Key West sunset celebration',
        'Kennedy Space Center',
        'Shopping at Premium Outlets'
    ],
    included: ['Hotel accommodation', 'Breakfast', 'Theme park tickets', 'Tours', 'Guide', 'Transportation'],
    excluded: ['Flights', 'Some meals', 'Insurance', 'Personal spending', 'Optional activities', 'Gratuities'],
    images: [
        'https://images.unsplash.com/photo-1505118380757-91f5f5632de0?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1494145904049-0dca59b4bbad?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1506084868230-bb9d95c24759?w=800&h=600&fit=crop'
    ]
};

// New Sri Lankan Tour Packages
destinationsData['grand-sri-lanka'] = {
    name: 'Grand Sri Lanka Tour',
    location: 'Anuradhapura to Colombo',
    price: 850,
    priceNote: '(without hotels)',
    rating: 4.8,
    reviews: 189,
    duration: '10 Days / 9 Nights',
    group: 'Private Tour',
    languages: 'English',
    availability: 'All year',
    description: 'Comprehensive 10-day journey covering all major attractions from ancient kingdoms in the north to southern beaches. Experience Sri Lanka\'s complete cultural and natural heritage with visits to Anuradhapura, Sigiriya, Polonnaruwa, Kandy, hill country, wildlife safaris, and coastal gems.',
    highlights: [
        'Ancient kingdoms: Anuradhapura, Sigiriya, Polonnaruwa',
        'Kandy Temple of the Tooth & cultural show',
        'Hill country train route (Nuwara Eliya to Ella)',
        'Optional Yala wildlife safari',
        'Galle Fort & southern beaches',
        'Colombo city tour'
    ],
    included: [
        'Airport pickup & drop-off',
        'Private air-conditioned vehicle',
        'English-speaking driver/guide',
        'All transfers as per itinerary',
        'Fuel, parking & highway charges'
    ],
    excluded: [
        'Hotel accommodation',
        'Meals & beverages',
        'Entrance tickets to attractions',
        'Safari jeep fees',
        'Train tickets',
        'Personal expenses'
    ],
    images: [
        'https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1577717903315-1691ae25ab3f?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1588954404937-c4e17f9b7c1f?w=800&h=600&fit=crop'
    ]
};

destinationsData['honeymoon-sri-lanka'] = {
    name: 'Honeymoon Tour Package',
    location: 'Kandy → Nuwara Eliya → Bentota',
    price: 680,
    priceNote: '(without hotels)',
    rating: 4.9,
    reviews: 156,
    duration: '4 Days / 3 Nights',
    group: 'Private Tour for Couples',
    languages: 'English',
    availability: 'All year',
    description: 'A romantic 4-day getaway designed for newlyweds. Experience the misty hill country romance, scenic tea plantations, breathtaking waterfalls, and pristine beaches. Includes luxury private vehicle, custom honeymoon itinerary, and optional candle light dinner arrangements.',
    highlights: [
        'Romantic hill country stays',
        'Tea plantations & scenic viewpoints',
        'Waterfalls & nature walks',
        'Beach relaxation in Bentota',
        'Candle light dinner (optional)',
        'Private luxury vehicle & custom itinerary'
    ],
    included: [
        'Airport pickup & drop-off',
        'Luxury private air-conditioned vehicle',
        'English-speaking driver',
        'Romantic setup assistance',
        'All transfers as per itinerary'
    ],
    excluded: [
        'Hotels & meals',
        'Entrance tickets',
        'Candle light dinner (optional extra)',
        'Spa treatments',
        'Personal expenses'
    ],
    images: [
        'https://images.unsplash.com/photo-1519904981063-b0cf448d479e?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1577717903315-1691ae25ab3f?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&h=600&fit=crop'
    ]
};

destinationsData['ultimate-sri-lanka'] = {
    name: 'Ultimate Sri Lanka Grand Tour',
    location: 'Complete Island Experience',
    price: 1150,
    priceNote: '(without hotels)',
    rating: 4.9,
    reviews: 234,
    duration: '14 Days / 13 Nights',
    group: 'Private & Customizable',
    languages: 'English',
    availability: 'All year',
    description: 'The complete Sri Lankan experience! Perfect for first-time visitors and nature + culture lovers. This comprehensive 14-day tour covers ancient cities, hill country, rainforests, wildlife safaris, pristine beaches, and modern Colombo. Fully private and customizable to your preferences.',
    highlights: [
        'Cultural Triangle: Anuradhapura, Sigiriya, Kandy',
        'Hill country: Nuwara Eliya, Ella, Haputale',
        'Yala National Park wildlife safari',
        'Sinharaja Rainforest trek',
        'Bentota beach & water sports',
        'Colombo shopping & city tour'
    ],
    included: [
        'Airport transfers',
        'Private luxury vehicle',
        'English-speaking driver/guide',
        'All transportation as per itinerary',
        'Flexible schedule'
    ],
    excluded: [
        'Hotels',
        'Meals',
        'Entrance tickets',
        'Safari & activity fees',
        'Train tickets',
        'Personal expenses'
    ],
    images: [
        'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1588954404937-c4e17f9b7c1f?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1577717903315-1691ae25ab3f?w=800&h=600&fit=crop'
    ]
};

destinationsData['beach-vacation-sri-lanka'] = {
    name: 'Beach Vacation Tour',
    location: 'Bentota → Mirissa',
    price: 450,
    priceNote: '(without hotels)',
    rating: 4.7,
    reviews: 142,
    duration: '5 Days / 4 Nights',
    group: 'Private Tour',
    languages: 'English',
    availability: 'All year (whale watching seasonal)',
    description: 'Relax and unwind on Sri Lanka\'s stunning southern coastline. Perfect beach vacation with Bentota river safari, historic Galle Fort exploration, seasonal whale watching in Mirissa, and plenty of time to soak up the sun on pristine beaches.',
    highlights: [
        'Bentota beach & river safari',
        'Galle Fort UNESCO site',
        'Whale watching in Mirissa (seasonal)',
        'Beach hopping along the south coast',
        'Water sports & relaxation',
        'Fresh seafood dining'
    ],
    included: [
        'Airport pickup & drop-off',
        'Private air-conditioned vehicle',
        'English-speaking driver',
        'Coastal sightseeing',
        'All transfers'
    ],
    excluded: [
        'Hotels',
        'Meals',
        'Whale watching tickets',
        'Water sports fees',
        'Entrance to Galle Fort sites',
        'Personal expenses'
    ],
    images: [
        'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1505142468610-359e7d316be0?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1473496169904-658ba7c44d8a?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&h=600&fit=crop'
    ]
};

destinationsData['hill-country-escape'] = {
    name: 'Hill Country Escape',
    location: 'Kandy → Mandaramnuwara → Nuwara Eliya → Ella → Haputale',
    price: 520,
    priceNote: '(without hotels)',
    rating: 4.8,
    reviews: 167,
    duration: '5 Days / 4 Nights',
    group: 'Private Tour',
    languages: 'English',
    availability: 'All year',
    description: 'Escape to the cool misty mountains of Sri Lanka\'s hill country. Explore lush tea estates, cascading waterfalls, scenic viewpoints, and charming mountain villages. Experience the famous scenic train ride and breathtaking landscapes.',
    highlights: [
        'Tea estates & factory tours',
        'Waterfalls: Ramboda, Ravana, Diyaluma',
        'Scenic viewpoints: World\'s End, Ella Rock',
        'Cool climate mountain villages',
        'Scenic train ride (optional)',
        'Colonial architecture & gardens'
    ],
    included: [
        'Airport pickup & drop-off',
        'Private air-conditioned vehicle',
        'English-speaking driver',
        'Scenic mountain drives',
        'All transfers'
    ],
    excluded: [
        'Hotels',
        'Meals',
        'Train tickets',
        'Entrance fees',
        'Trekking guides',
        'Personal expenses'
    ],
    images: [
        'https://images.unsplash.com/photo-1577717903315-1691ae25ab3f?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1586492885419-1cf0c2c7ac06?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1543716091-a840c05249ec?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&h=600&fit=crop'
    ]
};

destinationsData['highlights-tour-sri-lanka'] = {
    name: 'Sri Lanka Highlights Tour',
    location: 'Anuradhapura to Colombo via East Coast',
    price: 590,
    priceNote: '(without hotels)',
    rating: 4.7,
    reviews: 178,
    duration: '7 Days / 6 Nights',
    group: 'Private Tour',
    languages: 'English',
    availability: 'All year',
    description: 'Experience Sri Lanka\'s best highlights in one week! Cultural triangle ancient sites, pristine east coast beaches, hill country tea estates, optional white water rafting adventure in Kitulgala, and modern Colombo city tour.',
    highlights: [
        'Cultural Triangle: Anuradhapura, Sigiriya',
        'Trincomalee east coast beaches',
        'Kandy cultural capital',
        'Nuwara Eliya tea country',
        'White water rafting in Kitulgala (optional)',
        'Colombo city & shopping tour'
    ],
    included: [
        'Airport pickup & drop-off',
        'Private air-conditioned vehicle',
        'English-speaking driver/guide',
        'All transfers as per itinerary',
        'Flexible schedule'
    ],
    excluded: [
        'Hotels & accommodation',
        'Meals & beverages',
        'Entrance tickets',
        'Rafting fees (optional)',
        'Beach activities',
        'Personal expenses'
    ],
    images: [
        'https://images.unsplash.com/photo-1588442686675-d8c3d14f27e6?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1552375846-8b2e118bd6e7?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1577717903315-1691ae25ab3f?w=800&h=600&fit=crop'
    ]
};

destinationsData['sri-lanka-explorer'] = {
    name: 'Sri Lanka Explorer Tour',
    location: 'Colombo to Cultural Triangle',
    price: 350,
    priceNote: '(without hotels)',
    rating: 4.6,
    reviews: 45,
    duration: '4 Days / 3 Nights',
    group: 'Private Tour',
    languages: 'English',
    availability: 'All year',
    description: 'Experience the best of Sri Lanka in 4 days - ancient temples, scenic hills, and vibrant culture. Perfect for first-time visitors wanting to see the highlights.',
    highlights: [
        'Sigiriya Rock Fortress',
        'Ancient city of Polonnaruwa',
        'Temple of the Tooth - Kandy',
        'Royal Botanical Gardens',
        'Traditional cultural show',
        'Scenic mountain views'
    ],
    included: [
        'Airport pickup & drop-off',
        'Private air-conditioned vehicle',
        'English-speaking driver/guide',
        'All transfers as per itinerary',
        'Bottled water daily'
    ],
    excluded: [
        'Hotels & accommodation',
        'Meals & beverages',
        'Entrance tickets',
        'Cultural show tickets',
        'Personal expenses'
    ],
    images: [
        'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1589308078059-be1415eab4c3?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1552375846-8b2e118bd6e7?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1577717903315-1691ae25ab3f?w=800&h=600&fit=crop'
    ]
};

destinationsData['classic-sri-lanka'] = {
    name: 'Classic Sri Lanka Tour',
    location: 'Colombo to South Coast',
    price: 520,
    priceNote: '(without hotels)',
    rating: 4.8,
    reviews: 62,
    duration: '6 Days / 5 Nights',
    group: 'Private Tour',
    languages: 'English',
    availability: 'All year',
    description: 'Discover Sigiriya Rock, Kandy Temple, tea plantations, and stunning beaches in 6 magical days. The perfect blend of culture, nature, and relaxation.',
    highlights: [
        'Sigiriya Rock Fortress & frescoes',
        'Dambulla Cave Temple',
        'Temple of the Tooth - Kandy',
        'Nuwara Eliya tea plantations',
        'Scenic train ride through hills',
        'South coast beaches - Bentota/Mirissa'
    ],
    included: [
        'Airport pickup & drop-off',
        'Private air-conditioned vehicle',
        'English-speaking driver/guide',
        'All transfers as per itinerary',
        'Train tickets for scenic route',
        'Bottled water daily'
    ],
    excluded: [
        'Hotels & accommodation',
        'Meals & beverages',
        'Entrance tickets',
        'Beach activities',
        'Personal expenses'
    ],
    images: [
        'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1577717903315-1691ae25ab3f?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1586492885419-1cf0c2c7ac06?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&h=600&fit=crop'
    ]
};

