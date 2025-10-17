// src/data/events.js

const events = [
    {
        id: 1,
        title: 'Business Networking Breakfast',
        subheading: 'Connect, collaborate, and grow your professional network.',
        description:
            'Join fellow business leaders for an early morning networking session. Connect with like-minded professionals, share insights, and explore potential collaborations over breakfast.',
        detailedDescription:
            'This networking breakfast brings together entrepreneurs, small business owners, and corporate leaders from across Essex. You’ll enjoy a relaxed and welcoming environment designed to foster genuine business connections. Coffee and a full English breakfast are provided.',
        date: 'Wednesday, 15th November 2025',
        time: '7:30 AM - 9:30 AM',
        location: 'Essex Chambers House, Chelmsford',
        image:
            'https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=800',
        type: 'Networking',
        format: 'in-person',
        highlights: [
            'Meet business professionals across multiple industries',
            'Enjoy a complimentary breakfast buffet',
            'Build meaningful local connections',
            'Spotlight networking introductions available',
        ],
        includes: [
            'Breakfast and refreshments',
            'Access to attendee contact list',
            'Networking guide',
        ],
        memberPrice: 20,
        nonMemberPrice: 35,
        maxTickets: 10,
    },
    {
        id: 2,
        title: 'Digital Marketing Masterclass',
        subheading: 'Master SEO, content, and social media strategy in one day.',
        description:
            'Learn the latest digital marketing strategies and techniques to boost your online presence.',
        detailedDescription:
            'This one-day intensive training covers key aspects of digital marketing including SEO, PPC, social media management, and content creation. Perfect for small business owners and marketing professionals looking to sharpen their skills.',
        date: 'Friday, 17th November 2025',
        time: '9:00 AM - 4:30 PM',
        location: 'Colchester Business Hub',
        image:
            'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=800',
        type: 'Training',
        format: 'in-person',
        highlights: [
            'Learn practical SEO techniques for 2025',
            'Improve ad performance on Google & Meta',
            'Develop a content strategy that converts',
        ],
        includes: [
            'Training materials & templates',
            'Certificate of completion',
            'Lunch and refreshments',
        ],
        memberPrice: 20,
        nonMemberPrice: 35,
        maxTickets: 10,
    },
    {
        id: 3,
        title: 'Leadership Skills Workshop',
        subheading: 'Empower yourself to lead with confidence and clarity.',
        description:
            'Develop essential leadership skills to inspire and motivate your team.',
        detailedDescription:
            'An interactive workshop designed to help current and aspiring leaders enhance their ability to lead effectively. You’ll gain insights into communication, motivation, and conflict resolution through practical exercises and group discussions.',
        date: 'Tuesday, 21st November 2025',
        time: '1:00 PM - 5:00 PM',
        location: 'Southend Conference Centre',
        image:
            'https://images.pexels.com/photos/1181622/pexels-photo-1181622.jpeg?auto=compress&cs=tinysrgb&w=800',
        type: 'Workshop',
        format: 'in-person',
        highlights: [
            'Interactive role-play and discussion sessions',
            'Personal leadership assessment',
            'Guidance from experienced mentors',
        ],
        includes: [
            'Workshop materials',
            'Networking session',
            'Certificate of participation',
        ],
        memberPrice: 20,
        nonMemberPrice: 35,
        maxTickets: 10,
    },
    {
        id: 4,
        title: 'Annual Business Conference',
        subheading: 'The premier event for business growth and innovation in Essex.',
        description:
            'Join industry leaders, entrepreneurs, and professionals for a full-day business conference with keynote sessions, panels, and networking opportunities.',
        detailedDescription:
            'The Annual Business Conference is the highlight of the year, featuring visionary speakers, hands-on breakout sessions, and the chance to meet investors and innovators from across the region.',
        date: 'Thursday, 23rd November 2025',
        time: '8:00 AM - 6:00 PM',
        location: 'Chelmsford City Racecourse',
        image:
            'https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg?auto=compress&cs=tinysrgb&w=800',
        type: 'Conference',
        format: 'virtual',
        highlights: [
            'Keynotes from national business leaders',
            'Panel discussions and Q&A sessions',
            'Networking exhibitions and business showcases',
        ],
        includes: [
            'Full-day access to all sessions',
            'Conference guide and materials',
            'Lunch and refreshments',
        ],
        memberPrice: 20,
        nonMemberPrice: 35,
        maxTickets: 10,
    },
    {
        id: 5,
        title: 'Export Essentials Training',
        subheading: 'Master the fundamentals of international trade and export.',
        description:
            'Comprehensive training on international trade and export procedures.',
        detailedDescription:
            'A hands-on course designed to help businesses expand globally. You’ll learn export documentation, customs compliance, and trade finance essentials from expert instructors.',
        date: 'Monday, 27th November 2025',
        time: '9:30 AM - 3:30 PM',
        location: 'Essex Chambers House, Chelmsford',
        image:
            'https://images.pexels.com/photos/7661590/pexels-photo-7661590.jpeg?auto=compress&cs=tinysrgb&w=800',
        type: 'Training',
        format: 'in-person',
        highlights: [
            'Learn key export documentation and customs rules',
            'Understand Incoterms and international payment systems',
            'Plan for global market expansion',
        ],
        includes: [
            'Printed workbook',
            'Expert-led Q&A sessions',
            'Certificate of completion',
        ],
        memberPrice: 20,
        nonMemberPrice: 35,
        maxTickets: 10,
    },
    {
        id: 6,
        title: 'Women in Business Network',
        subheading: 'Empowering women entrepreneurs to connect and thrive.',
        description:
            'An exclusive networking event for female entrepreneurs and business leaders.',
        detailedDescription:
            'A welcoming evening of networking and empowerment. Meet inspiring women from diverse sectors, share your business journey, and access support and collaboration opportunities.',
        date: 'Wednesday, 29th November 2025',
        time: '6:00 PM - 8:30 PM',
        location: 'The Grand Hotel, Southend',
        image:
            'https://images.pexels.com/photos/3183186/pexels-photo-3183186.jpeg?auto=compress&cs=tinysrgb&w=800',
        type: 'Networking',
        format: 'in-person',
        highlights: [
            'Inspiring guest speakers',
            'Networking with local female leaders',
            'Opportunities for mentorship and partnerships',
        ],
        includes: [
            'Welcome drink and canapés',
            'Gift bag for attendees',
            'Access to future women’s network events',
        ],
        memberPrice: 20,
        nonMemberPrice: 35,
        maxTickets: 2,
    },
];

export default events;
