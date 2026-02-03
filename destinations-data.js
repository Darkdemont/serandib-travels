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
        description: 'This tour is a perfect introduction to Sri Lanka, combining the island\'s ancient heritage, cultural richness, and tropical beach relaxation in one well-balanced journey. Designed around three of Sri Lanka\'s most iconic destinations — Sigiriya Rock Fortress, Kandy, and Bentota — this experience offers travelers a diverse and unforgettable glimpse into the heart of the island.',
        highlights: [
            {
                title: 'Sigiriya Rock Fortress',
                description: 'The journey begins in the Cultural Triangle with Sigiriya, home to the world-famous Sigiriya Rock Fortress, a UNESCO World Heritage Site and one of Asia\'s most remarkable ancient monuments. Rising dramatically above the surrounding plains, Sigiriya showcases extraordinary ancient engineering, royal gardens, frescoes, and breathtaking panoramic views from the summit. Visitors can also enjoy nearby viewpoints and optional village experiences that reveal the authentic rural lifestyle of Sri Lanka.'
            },
            {
                title: 'Ancient city of Polonnaruwa',
                description: 'Explore the magnificent ruins of Polonnaruwa, Sri Lanka\'s medieval capital and another UNESCO World Heritage Site. This ancient city features remarkably preserved stone sculptures, royal palaces, and sacred temples that tell the story of a once-thriving kingdom. Cycle through the archaeological park to witness the famous Gal Vihara rock sculptures, the Royal Palace complex, and beautiful lotus ponds that transport you back to the golden age of Sinhalese civilization.'
            },
            {
                title: 'Temple of the Tooth - Kandy',
                description: 'The tour then continues to Kandy, the cultural capital and last royal kingdom of Sri Lanka. Nestled among lush hills and centered around a scenic lake, Kandy offers a calm yet deeply spiritual atmosphere. The city is home to the sacred Temple of the Tooth Relic, one of the most important Buddhist pilgrimage sites in the world. Cultural performances, traditional architecture, and vibrant local life provide visitors with a meaningful insight into Sri Lanka\'s living heritage and traditions.'
            },
            {
                title: 'Royal Botanical Gardens',
                description: 'Visit the stunning Royal Botanical Gardens in Peradeniya, just outside Kandy. Spanning 147 acres along the Mahaweli River, these gardens showcase an incredible collection of over 4,000 plant species from around the world. Stroll through avenues lined with towering royal palms, discover rare orchids in the Orchid House, and relax beneath the famous giant Javan fig tree. The gardens offer a peaceful retreat and a perfect opportunity to appreciate Sri Lanka\'s rich botanical heritage.'
            },
            {
                title: 'Traditional cultural show',
                description: 'Experience the vibrant spirit of Sri Lankan culture through a traditional Kandyan dance performance. Watch skilled dancers perform ancient rituals and folk tales through elaborate costumes, rhythmic drumming, and acrobatic movements. The show culminates with the spectacular fire-walking ceremony, where performers walk barefoot across burning coals. This cultural evening provides an authentic glimpse into centuries-old traditions that continue to thrive in modern Sri Lanka.'
            },
            {
                title: 'Scenic mountain views & Beach Relaxation',
                description: 'The final stage of the journey takes you to the sun-kissed southern coast, where Bentota welcomes travelers with golden sandy beaches, warm turquoise waters, and a relaxed coastal charm. After days of cultural exploration, Bentota is the ideal destination to unwind, enjoy beachside leisure, and experience Sri Lanka\'s tropical beauty. Guests can relax by the ocean, enjoy peaceful sunsets, or explore nearby coastal attractions at their own pace. Carefully paced and thoughtfully designed, this tour is ideal for first-time visitors and travelers seeking a short yet comprehensive Sri Lankan experience. With a perfect blend of history, culture, scenery, and relaxation, this journey delivers the true essence of Sri Lanka in just a few unforgettable days.'
            }
        ],
        included: [
            'Airport pickup & drop-off',
            'Private air-conditioned vehicle',
            'English-speaking driver',
            'Fuel, parking & highway charges',
            'All transfers as per itinerary',
            'Complimentary water throughout the tour',
            'Parking charges and tolls included'
        ],
        excluded: [
            'Hotel accommodation',
            'Meals & beverages',
            'Entrance tickets to attractions',
            'Optional activities',
            'Personal expenses'
        ],
        images: [
            'images/sigiriya.png',
            'images/polonnaru.png',
            'images/kandy1.png',
            'images/B1.png'
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
        description: 'Experience the true essence of Sri Lanka on this unforgettable journey that takes you from ancient cultural landmarks to misty hill country and finally to the golden beaches of the south coast. The Classic Sri Lanka Tour is thoughtfully designed for travelers who wish to explore history, culture, nature, wildlife, and relaxation in one perfectly balanced itinerary. This tour covers Sri Lanka\'s most iconic destinations including Sigiriya, Kandy, Ella, Tissamaharama, and Bentota, offering a rich and diverse travel experience.',
        highlights: [
            {
                title: 'Sigiriya Rock & Dambulla Cave Temple',
                description: 'Sigiriya Rock Fortress is one of Sri Lanka\'s most iconic landmarks and a UNESCO World Heritage Site. Rising nearly 200 meters above the surrounding plains, this ancient citadel is a masterpiece of engineering and art. Visitors can explore the famous Lion\'s Paws, beautifully preserved frescoes, the mirror wall inscriptions, and the landscaped royal gardens. The panoramic view from the summit is truly breathtaking and one of the highlights of the tour.'
            },
            {
                title: 'Kandy – Cultural Capital of Sri Lanka',
                description: 'Nestled among lush hills, Kandy is the cultural heart of Sri Lanka and home to the sacred Temple of the Tooth Relic. Visitors can experience the spiritual atmosphere of this important pilgrimage site, enjoy a peaceful walk around Kandy Lake, and witness a traditional cultural dance performance. The surrounding tea plantations and scenic landscapes add charm and elegance to this historic city.'
            },
            {
                title: 'Ella – Scenic Hill Country Escape',
                description: 'Ella is a picturesque hill town known for its cool climate, stunning landscapes, and relaxed atmosphere. Surrounded by tea plantations and rolling mountains, Ella offers breathtaking viewpoints and nature experiences such as Little Adam\'s Peak, Ella Rock, and the famous Nine Arch Bridge. This destination is perfect for nature lovers and photographers seeking tranquil beauty.'
            },
            {
                title: 'Tissamaharama – Wildlife and Nature Experience',
                description: 'Tissamaharama is the gateway to Sri Lanka\'s most famous wildlife reserves, including Yala National Park. This region offers exciting wildlife safari experiences where travelers may encounter elephants, leopards, crocodiles, and a variety of bird species. The area is also known for its ancient stupas and peaceful lakes, creating a calm and authentic rural atmosphere.'
            },
            {
                title: 'Bentota – Beach Relaxation on the South Coast',
                description: 'The journey concludes in Bentota, a beautiful coastal town known for its golden sandy beaches and turquoise waters. Bentota is ideal for relaxation, beach walks, and optional water sports activities. Guests can also enjoy a scenic river safari along the Bentota River or simply unwind while watching stunning tropical sunsets by the ocean.'
            }
        ],
        included: [
            'Airport pickup & drop',
            'Private A/C vehicle',
            'English-speaking driver',
            'Sightseeing as per itinerary',
            'Complimentary water throughout the tour',
            'Parking charges and tolls included'
        ],
        excluded: [
            'Hotels',
            'Entrance tickets',
            'Train tickets & meals'
        ],
        images: [
            'images/sigiriya.png',
            'images/kandy1.png',
            'images/E1.png',
            'images/7.png'
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
        description: 'This Sri Lanka Cultural & Beach Tour offers a perfect combination of ancient heritage, scenic hill country, wildlife, and relaxing beach experiences. Designed for travelers who want to explore the cultural heart of Sri Lanka and unwind along the beautiful southern coastline, this journey showcases the island\'s most iconic destinations. The tour covers Sigiriya, Kandy, Nuwara Eliya, Ella, Mirissa, and Bentota, delivering a rich and well-balanced Sri Lankan travel experience.',
        highlights: [
            {
                title: 'Sigiriya – Ancient Rock Fortress',
                description: 'Sigiriya is one of Sri Lanka\'s most famous UNESCO World Heritage Sites and a true symbol of the country\'s ancient civilization. This magnificent rock fortress rises nearly 200 meters above the surrounding plains. Visitors can explore the Lion\'s Paws, ancient frescoes, mirror wall inscriptions, and beautifully landscaped royal gardens. The panoramic views from the summit are breathtaking and unforgettable.'
            },
            {
                title: 'Kandy – Cultural Capital of Sri Lanka',
                description: 'Kandy is the cultural heart of Sri Lanka and home to the sacred Temple of the Tooth Relic. Surrounded by lush hills, the city offers a blend of spirituality, history, and natural beauty. Visitors can enjoy a peaceful walk around Kandy Lake, experience traditional cultural dance performances, and explore nearby tea plantations that reflect Sri Lanka\'s colonial heritage.'
            },
            {
                title: 'Nuwara Eliya – Little England',
                description: 'Known as "Little England," Nuwara Eliya is a charming hill town famous for its cool climate, colonial architecture, and endless tea plantations. Visitors can enjoy scenic landscapes, waterfalls, misty mountains, and well-manicured gardens. A visit to Nuwara Eliya provides insight into Sri Lanka\'s tea industry and offers a refreshing escape into the cool hill country.'
            },
            {
                title: 'Ella – Scenic Hill Country Paradise',
                description: 'Ella is a relaxed hill town surrounded by breathtaking mountain views and lush greenery. It is well known for natural attractions such as Little Adam\'s Peak, Ella Rock, and the iconic Nine Arch Bridge. The cool climate, scenic hiking trails, and peaceful atmosphere make Ella a favorite destination for nature lovers and photographers.'
            },
            {
                title: 'Mirissa – Tropical Beach Experience',
                description: 'Mirissa is a laid-back beach town on Sri Lanka\'s south coast, famous for its golden sandy beaches and turquoise waters. It is one of the best places in Sri Lanka for whale watching and offers a relaxed coastal vibe. Visitors can enjoy beach walks, swimming, fresh seafood, and stunning sunsets by the ocean.'
            },
            {
                title: 'Bentota – Relaxation on the South Coast',
                description: 'Bentota is a popular beach destination known for its calm beaches and tropical charm. It is ideal for relaxation after exploring Sri Lanka\'s cultural and hill country regions. Visitors can enjoy beach leisure, optional water sports, river safaris along the Bentota River, or simply unwind while enjoying the serene coastal atmosphere.'
            }
        ],
        included: [
            'Airport transfers',
            'Private air-conditioned vehicle',
            'English-speaking driver',
            'Complimentary water throughout the tour',
            'Parking charges and tolls included'
        ],
        excluded: [
            'Hotels',
            'Entrance tickets',
            'Safari, train tickets & meals'
        ],
        images: [
            'images/sigiriya.png',
            'images/kandy1.png',
            'images/N.png',
            'images/M.png'
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
            'images/wes.png',
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
        'images/B1.png',
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
    description: 'The Grand Sri Lanka Tour is a complete and immersive journey designed to showcase the very best of Sri Lanka\'s cultural heritage, ancient history, scenic hill country, wildlife, and tropical beaches. This tour takes travelers across the island, from ancient kingdoms and sacred temples to misty mountains and the stunning southern coastline. Covering Negombo, Anuradhapura, Polonnaruwa, Sigiriya, Dambulla, Kandy, Nuwara Eliya, Ella, Tissamaharama, Mirissa, and Galle, this tour offers a truly well-rounded Sri Lankan experience.',
    highlights: [
        {
            title: 'Negombo – Coastal Start',
            description: 'Negombo is a lively coastal town located close to the international airport and serves as an ideal starting point for the journey. Known for its sandy beaches, fishing villages, and colonial heritage, Negombo offers a relaxing introduction to Sri Lanka with a blend of local culture and coastal charm.'
        },
        {
            title: 'Anuradhapura – Ancient Kingdom',
            description: 'Anuradhapura is one of Sri Lanka\'s most important ancient cities and a UNESCO World Heritage Site. This sacred city is home to impressive dagobas, ancient monasteries, and the Sri Maha Bodhi tree, the oldest recorded living tree in the world. Visitors can explore the rich history and spiritual atmosphere of Sri Lanka\'s first great kingdom.'
        },
        {
            title: 'Polonnaruwa – Medieval Capital',
            description: 'Polonnaruwa, another UNESCO World Heritage Site, showcases the grandeur of Sri Lanka\'s medieval civilization. The city features well-preserved ruins including royal palaces, stone temples, massive Buddha statues, and ancient irrigation systems that highlight the engineering skills of ancient Sri Lanka.'
        },
        {
            title: 'Sigiriya – Iconic Rock Fortress',
            description: 'Sigiriya Rock Fortress is one of Sri Lanka\'s most iconic landmarks. Rising nearly 200 meters above the surrounding plains, this ancient rock citadel features stunning frescoes, mirror wall inscriptions, landscaped gardens, and the famous Lion\'s Paws. The panoramic view from the summit is one of the most breathtaking sights in the country.'
        },
        {
            title: 'Dambulla – Golden Cave Temple',
            description: 'Dambulla is home to the famous Golden Cave Temple, a UNESCO World Heritage Site with over 150 Buddha statues and beautifully painted cave ceilings. This sacred complex is one of the best-preserved cave temples in Asia and an important religious site in Sri Lanka.'
        },
        {
            title: 'Kandy – Cultural Capital',
            description: 'Kandy is the cultural heart of Sri Lanka and home to the sacred Temple of the Tooth Relic. Surrounded by hills and lush greenery, the city offers a blend of spirituality, history, and natural beauty. Visitors can enjoy Kandy Lake, traditional cultural dance performances, and nearby tea plantations.'
        },
        {
            title: 'Nuwara Eliya – Little England',
            description: 'Nuwara Eliya is a charming hill town known for its cool climate, colonial-era architecture, and endless tea plantations. Often referred to as "Little England," this destination offers scenic landscapes, waterfalls, and insight into Sri Lanka\'s famous tea industry.'
        },
        {
            title: 'Ella – Scenic Hill Country',
            description: 'Ella is a picturesque hill town surrounded by misty mountains and tea-covered slopes. Highlights include Little Adam\'s Peak, Ella Rock, and the iconic Nine Arch Bridge. The relaxed atmosphere and breathtaking scenery make Ella a favorite for nature lovers.'
        },
        {
            title: 'Tissamaharama – Wildlife Experience',
            description: 'Tissamaharama is the gateway to Sri Lanka\'s top wildlife parks, including Yala National Park. This region offers exciting safari experiences where visitors may spot elephants, leopards, crocodiles, and diverse birdlife. The area is also known for its peaceful lakes and ancient stupas.'
        },
        {
            title: 'Mirissa – Tropical Beach Paradise',
            description: 'Mirissa is a popular beach destination famous for its golden sands and turquoise waters. It is one of the best locations in Sri Lanka for whale watching and offers a relaxed coastal vibe, beach walks, fresh seafood, and stunning sunsets.'
        },
        {
            title: 'Galle – Colonial Heritage City',
            description: 'Galle is a historic coastal city known for the UNESCO-listed Galle Fort. Built during the Dutch colonial era, the fort features cobblestone streets, colonial buildings, boutique shops, and ocean views. Galle beautifully blends history, culture, and seaside charm.'
        }
    ],
    included: [
        'Airport pickup & drop-off',
        'Private air-conditioned vehicle',
        'English-speaking driver',
        'All transfers as per itinerary',
        'Fuel, parking & highway charges',
        'Complimentary water throughout the tour',
        'Parking charges and tolls included'
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
        'images/wes.png',
        'images/sigiriya.png',
        'images/polonnaru.png',
        'images/ella.png'
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
    description: 'This Honeymoon Tour Package is thoughtfully designed for couples seeking romance, comfort, and unforgettable moments in Sri Lanka. Blending scenic hill country beauty with peaceful beach relaxation, this journey offers the perfect balance of adventure, tranquility, and intimate experiences for newlyweds. Covering Kandy, Nuwara Eliya, and Bentota, this tour promises a magical honeymoon filled with natural beauty, cultural charm, and relaxation.',
    highlights: [
        {
            title: 'Kandy – Romantic Cultural City',
            description: 'Kandy is a charming hill city surrounded by lush greenery and misty mountains, offering a romantic and peaceful atmosphere. Couples can visit the sacred Temple of the Tooth Relic, enjoy a serene walk around Kandy Lake, and experience traditional cultural dance performances. The cool climate and scenic views make Kandy a perfect start to a romantic journey.'
        },
        {
            title: 'Nuwara Eliya – Misty Hill Country Romance',
            description: 'Often referred to as "Little England," Nuwara Eliya is one of the most romantic destinations in Sri Lanka. With its cool climate, rolling tea plantations, colonial-style buildings, and beautiful waterfalls, this hill town offers a dreamy escape for couples. Enjoy quiet walks through tea estates, scenic viewpoints, and peaceful moments surrounded by nature.'
        },
        {
            title: 'Bentota – Beachside Relaxation',
            description: 'Bentota is an ideal honeymoon destination for couples looking to relax by the ocean. Known for its golden sandy beaches and calm turquoise waters, Bentota offers the perfect setting for beach walks, sunset views, and private relaxation. Couples can also enjoy optional water sports, river safaris, or simply unwind in a romantic beachfront resort.'
        }
    ],
    included: [
        'Airport pickup & drop-off',
        'Luxury private air-conditioned vehicle',
        'English-speaking driver',
        'Romantic setup assistance',
        'All transfers as per itinerary',
        'Complimentary water throughout the tour',
        'Parking charges and tolls included'
    ],
    excluded: [
        'Hotels & meals',
        'Entrance tickets',
        'Candle light dinner (optional extra)',
        'Spa treatments',
        'Personal expenses'
    ],
    images: [
        'images/kandy.png',
        'images/N.png',
        'images/ella.png',
        'images/B1.png'
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
    description: 'The Ultimate Sri Lanka Grand Tour is a complete island-wide journey designed for travelers who want to experience Sri Lanka in its entirety. This immersive tour combines ancient history, cultural heritage, scenic hill country, rich biodiversity, wildlife experiences, pristine beaches, and vibrant city life into one unforgettable adventure. Covering Negombo, Anuradhapura, Sigiriya, Kandy, Nuwara Eliya, Ella, Tissamaharama, Sinharaja Rainforest, Mirissa, Galle, Bentota, and Colombo, this tour offers the most comprehensive Sri Lankan travel experience.',
    highlights: [
        {
            title: 'Negombo – Coastal Welcome',
            description: 'Negombo is a lively seaside town close to the international airport, making it the perfect starting point for the journey. Known for its sandy beaches, fishing villages, and colonial heritage, Negombo offers a relaxing introduction to Sri Lanka\'s coastal charm and local culture.'
        },
        {
            title: 'Anuradhapura – Ancient Sacred City',
            description: 'Anuradhapura, a UNESCO World Heritage Site, is one of Sri Lanka\'s most sacred and historically significant cities. Home to massive dagobas, ancient monasteries, and the revered Sri Maha Bodhi tree, this ancient capital reflects the spiritual and architectural brilliance of Sri Lanka\'s early civilization.'
        },
        {
            title: 'Sigiriya – Iconic Rock Fortress',
            description: 'Sigiriya Rock Fortress is one of the most iconic landmarks in Sri Lanka. Rising dramatically above the surrounding plains, this ancient citadel features world-famous frescoes, mirror wall inscriptions, landscaped water gardens, and the legendary Lion\'s Paws. The panoramic views from the summit are truly breathtaking.'
        },
        {
            title: 'Kandy – Cultural Heart of Sri Lanka',
            description: 'Kandy is the cultural capital of Sri Lanka and home to the sacred Temple of the Tooth Relic. Surrounded by lush hills, the city offers a blend of spirituality, history, and natural beauty. Visitors can enjoy Kandy Lake, traditional cultural dance performances, and scenic tea-covered landscapes.'
        },
        {
            title: 'Nuwara Eliya – Cool Hill Country Escape',
            description: 'Often called "Little England," Nuwara Eliya is known for its cool climate, colonial architecture, and endless tea plantations. The misty mountains, waterfalls, and manicured gardens make this hill town a refreshing and picturesque retreat.'
        },
        {
            title: 'Ella – Scenic Mountain Paradise',
            description: 'Ella is a peaceful hill town surrounded by dramatic mountain views and tea plantations. Highlights include Little Adam\'s Peak, Ella Rock, and the iconic Nine Arch Bridge. The relaxed atmosphere and stunning scenery make Ella a favorite destination for nature lovers.'
        },
        {
            title: 'Tissamaharama – Wildlife & Safari Experience',
            description: 'Tissamaharama serves as the gateway to Sri Lanka\'s most famous wildlife parks, including Yala National Park. This region offers thrilling safari experiences where visitors may spot elephants, leopards, crocodiles, and a wide variety of bird species, along with serene lakes and ancient stupas.'
        },
        {
            title: 'Sinharaja Rainforest – Biodiversity Hotspot',
            description: 'Sinharaja Rainforest is a UNESCO World Heritage Site and one of Sri Lanka\'s last remaining primary rainforests. This biodiversity hotspot is home to rare endemic flora and fauna. Guided nature walks allow visitors to experience the dense jungle, waterfalls, and rich wildlife in a truly natural environment.'
        },
        {
            title: 'Mirissa – Tropical Beach Escape',
            description: 'Mirissa is a laid-back beach town famous for its golden sands and turquoise waters. It is one of the best places in Sri Lanka for whale watching and offers a relaxed coastal vibe with stunning sunsets and fresh seafood.'
        },
        {
            title: 'Galle – Colonial Heritage City',
            description: 'Galle is a historic coastal city centered around the UNESCO-listed Galle Fort. With its colonial architecture, cobblestone streets, boutique shops, and ocean views, Galle beautifully blends history, culture, and seaside charm.'
        },
        {
            title: 'Bentota – Beach Relaxation',
            description: 'Bentota is known for its calm beaches and tropical atmosphere, making it ideal for relaxation and leisure. Visitors can enjoy beach walks, optional water sports, scenic river safaris, or simply unwind by the ocean.'
        },
        {
            title: 'Colombo – Modern Capital City',
            description: 'The journey concludes in Colombo, Sri Lanka\'s vibrant commercial capital. This bustling city offers a mix of modern development, colonial landmarks, shopping, dining, and cultural attractions, providing a fitting end to a comprehensive island adventure.'
        }
    ],
    included: [
        'Airport transfers',
        'Private luxury vehicle',
        'English-speaking driver',
        'All transportation as per itinerary',
        'Flexible schedule',
        'Complimentary water throughout the tour',
        'Parking charges and tolls included'
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
        'images/w1.png',
        'images/sigiriya.png',
        'images/ella.png',
        'images/polonnaru.png'
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
    description: 'The Beach Vacation Tour is designed for travelers who want to relax, unwind, and experience the natural beauty of Sri Lanka\'s southern coastline. This tour offers the perfect blend of golden beaches, turquoise waters, coastal culture, and laid-back tropical vibes, making it ideal for beach lovers and leisure travelers. Covering Bentota, Galle, Mirissa, and Tangalle, this journey takes you through some of the most beautiful beach destinations in Sri Lanka.',
    highlights: [
        {
            title: 'Bentota – Coastal Relaxation',
            description: 'Bentota is a popular beach destination known for its wide sandy beaches and calm ocean waters. It is ideal for swimming, beach walks, and relaxation. Visitors can also enjoy optional water sports, river safaris along the Bentota River, or simply unwind at a beachfront resort while enjoying tropical sunsets.'
        },
        {
            title: 'Galle – Historic Coastal City',
            description: 'Galle is a charming coastal city famous for the UNESCO-listed Galle Fort. The fort\'s colonial architecture, cobblestone streets, and ocean views offer a unique cultural experience by the sea. Visitors can explore boutique shops, cafés, historic landmarks, and enjoy scenic walks along the fort walls.'
        },
        {
            title: 'Mirissa – Tropical Beach Paradise',
            description: 'Mirissa is a laid-back beach town known for its golden sands and crystal-clear waters. It is one of the best locations in Sri Lanka for seasonal whale watching and offers a relaxed atmosphere perfect for beach relaxation. Visitors can enjoy swimming, fresh seafood, beach cafés, and breathtaking sunsets.'
        },
        {
            title: 'Tangalle – Tranquil Beach Escape',
            description: 'Tangalle is a peaceful beach destination ideal for travelers seeking serenity and natural beauty. With its pristine beaches, swaying palm trees, and fewer crowds, Tangalle offers a truly relaxing coastal escape. It is perfect for quiet beach walks, ocean views, and complete relaxation away from busy tourist areas.'
        }
    ],
    included: [
        'Airport pickup & drop-off',
        'Private air-conditioned vehicle',
        'English-speaking driver',
        'Coastal sightseeing',
        'All transfers',
        'Complimentary water throughout the tour',
        'Parking charges and tolls included'
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
        'images/ella.png',
        'images/B1.png',
        'images/galle.png',
        'images/E1.png'
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
    description: 'The Hill Country Escape is a refreshing journey into the cool, misty mountains of Sri Lanka, perfect for travelers seeking scenic beauty, peaceful surroundings, and authentic hill country experiences. This tour takes you through lush tea plantations, charming mountain towns, waterfalls, and breathtaking viewpoints, offering a calm and rejuvenating escape from busy city life. Covering Kandy, Mandaramnuwara, Nuwara Eliya, and Haputale, this tour showcases the most beautiful and tranquil regions of Sri Lanka\'s hill country.',
    highlights: [
        {
            title: 'Kandy – Cultural Hill City',
            description: 'Kandy is the cultural heart of Sri Lanka, surrounded by green hills and scenic landscapes. Home to the sacred Temple of the Tooth Relic, Kandy offers a peaceful blend of culture, history, and natural beauty. Visitors can enjoy a walk around Kandy Lake, explore local markets, and experience traditional cultural performances before heading deeper into the mountains.'
        },
        {
            title: 'Mandaramnuwara – Hidden Mountain Village',
            description: 'Mandaramnuwara is a remote and picturesque mountain village known for its untouched natural beauty, mist-covered valleys, and cool climate. Surrounded by dense forests, waterfalls, and tea plantations, this hidden gem offers a truly authentic hill country experience. It is ideal for nature lovers seeking tranquility, fresh mountain air, and scenic viewpoints away from crowds.'
        },
        {
            title: 'Nuwara Eliya – Little England',
            description: 'Nuwara Eliya, often called "Little England," is famous for its cool weather, colonial-era architecture, and endless tea estates. Visitors can enjoy scenic landscapes, waterfalls, well-manicured gardens, and a glimpse into Sri Lanka\'s tea-growing heritage. The calm atmosphere and fresh climate make Nuwara Eliya one of the most relaxing destinations in the hill country.'
        },
        {
            title: 'Haputale – Panoramic Mountain Views',
            description: 'Haputale is a charming hill town offering some of the most spectacular panoramic views in Sri Lanka. Surrounded by rolling hills and tea plantations, Haputale is known for its peaceful environment and scenic viewpoints such as mountain ridges and valleys stretching far into the distance. The cool climate and quiet surroundings make it an ideal place to relax and enjoy nature.'
        }
    ],
    included: [
        'Airport pickup & drop-off',
        'Private air-conditioned vehicle',
        'English-speaking driver',
        'Scenic mountain drives',
        'All transfers',
        'Complimentary water throughout the tour',
        'Parking charges and tolls included'
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
        'images/polonnaru.png',
        'images/ella.png',
        'images/B1.png',
        'images/sigiriya.png'
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
    description: 'The Sri Lanka Highlights Tour is a carefully designed journey that brings together the island\'s most important cultural landmarks, scenic hill country, beautiful eastern coastline, and vibrant modern city life. This tour is ideal for travelers who want to experience Sri Lanka\'s top attractions in one well-balanced and unforgettable itinerary. Covering Anuradhapura, Trincomalee, Sigiriya, Kandy, Nuwara Eliya, and Colombo, this tour showcases the very best highlights of Sri Lanka.',
    highlights: [
        {
            title: 'Anuradhapura – Ancient Sacred City',
            description: 'Anuradhapura is one of Sri Lanka\'s most sacred and historically significant cities and a UNESCO World Heritage Site. This ancient capital is home to massive dagobas, ancient monasteries, and the revered Sri Maha Bodhi tree, the oldest recorded living tree in the world. Visitors can explore the rich history, spiritual heritage, and impressive architecture of Sri Lanka\'s first great kingdom.'
        },
        {
            title: 'Trincomalee – East Coast Paradise',
            description: 'Trincomalee is a stunning coastal city on Sri Lanka\'s east coast, famous for its pristine beaches, turquoise waters, and natural harbor. Visitors can relax on beautiful beaches, enjoy optional snorkeling or swimming, and visit cultural landmarks such as the historic Koneswaram Temple. Trincomalee offers a perfect blend of beach relaxation and cultural discovery.'
        },
        {
            title: 'Sigiriya – Iconic Rock Fortress',
            description: 'Sigiriya Rock Fortress is one of Sri Lanka\'s most iconic landmarks and a UNESCO World Heritage Site. Rising dramatically above the surrounding plains, this ancient rock citadel features famous frescoes, mirror wall inscriptions, landscaped water gardens, and the impressive Lion\'s Paws. The panoramic views from the summit are truly breathtaking.'
        },
        {
            title: 'Kandy – Cultural Heart of Sri Lanka',
            description: 'Kandy is the cultural capital of Sri Lanka and home to the sacred Temple of the Tooth Relic. Surrounded by lush hills, the city offers a blend of spirituality, history, and natural beauty. Visitors can enjoy Kandy Lake, experience traditional cultural dance performances, and explore nearby tea plantations.'
        },
        {
            title: 'Nuwara Eliya – Cool Hill Country Retreat',
            description: 'Often referred to as "Little England," Nuwara Eliya is known for its cool climate, colonial-era architecture, and endless tea estates. Visitors can enjoy misty mountain views, scenic waterfalls, well-maintained gardens, and a glimpse into Sri Lanka\'s world-famous tea industry.'
        },
        {
            title: 'Colombo – Modern Capital Experience',
            description: 'The tour concludes in Colombo, Sri Lanka\'s dynamic commercial capital. This bustling city offers a mix of modern development, colonial landmarks, shopping areas, cultural attractions, and vibrant dining experiences, providing a perfect ending to a diverse island journey.'
        }
    ],
    included: [
        'Airport pickup & drop-off',
        'Private air-conditioned vehicle',
        'English-speaking driver',
        'All transfers as per itinerary',
        'Flexible schedule',
        'Complimentary water throughout the tour',
        'Parking charges and tolls included'
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
        'images/B1.png',
        'images/sigiriya.png',
        'images/galle.png',
        'images/polonnaru.png'
    ]
};

