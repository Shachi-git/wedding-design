export const wedding = {
  couple: 'Emma & Daniel',
  date: 'October 18, 2026',
  venue: 'The Glasshouse',
  city: 'Taguig City',
  address: '5th Avenue, Bonifacio Global City, Taguig',
  ceremony: '4:00 PM',
  reception: '6:00 PM',
  dressCode: 'Formal / Black Tie Optional',
  story: "We first met through a mutual friend and quickly discovered how easy it was to talk for hours. What started as a simple coffee turned into countless dinners, weekend trips, and a life we slowly built together.\n\nAfter six years of growing, learning, and laughing together, we're excited to celebrate the next chapter with the people who mean the most to us.",
  storyChapters: [
    {
      date: '2019',
      title: 'It started with a coffee.',
      text: 'We met through a mutual friend and ended up talking long after our coffee was gone. What began as an ordinary afternoon became the beginning of something neither of us expected.',
      image: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1400&q=88',
      alt: 'A quiet afternoon together',
    },
    {
      date: '2021',
      title: 'Then came the adventures.',
      text: 'Weekend trips, long drives, favorite restaurants, and countless little moments slowly became our favorite kind of life — the one we were building together.',
      image: 'https://images.unsplash.com/photo-1494783367193-149034c05e8f?auto=format&fit=crop&w=1400&q=88',
      alt: 'A weekend trip together',
    },
    {
      date: '2024',
      title: 'A question, a yes.',
      text: 'After years of growing side by side, Daniel asked the question that changed the shape of our next chapter. Emma said yes, and the wedding plans began.',
      image: 'https://images.unsplash.com/photo-1544078751-58fee2d8a03b?auto=format&fit=crop&w=1400&q=88',
      alt: 'The proposal',
    },
    {
      date: '2026',
      title: 'Now, we celebrate.',
      text: 'Six years after that first coffee, we are bringing our favorite people together to celebrate the beginning of our next chapter as husband and wife.',
      image: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=1400&q=88',
      alt: 'The wedding venue',
    },
  ],
  storyTimeline: [
    ['2019', 'First coffee'],
    ['2021', 'Our first trip together'],
    ['2024', 'We got engaged'],
    ['2026', "We're getting married"],
  ],
  schedule: [
    ['3:30 PM', 'Guest Arrival'], ['4:00 PM', 'Ceremony'], ['5:00 PM', 'Cocktails & Photos'], ['6:00 PM', 'Reception'], ['7:00 PM', 'Dinner'], ['8:00 PM', 'Speeches & Celebration'], ['10:00 PM', 'End of Reception'],
  ],
  gallery: [
    ['Couple portrait', 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=85', 'portrait'],
    ['Engagement hands', 'https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=900&q=85', 'landscape'],
    ['A quiet afternoon', 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=900&q=85', 'portrait'],
    ['Golden hour', 'https://images.unsplash.com/photo-1507504031003-b417219a0fde?auto=format&fit=crop&w=1200&q=85', 'wide'],
    ['On the road', 'https://images.unsplash.com/photo-1494783367193-149034c05e8f?auto=format&fit=crop&w=900&q=85', 'portrait'],
    ['The proposal', 'https://images.unsplash.com/photo-1544078751-58fee2d8a03b?auto=format&fit=crop&w=900&q=85', 'landscape'],
    ['Sunday morning', 'https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&w=900&q=85', 'portrait'],
    ['A summer escape', 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1000&q=85', 'wide'],
    ['Before the vows', 'https://images.unsplash.com/photo-1504150558240-0b4fd8946624?auto=format&fit=crop&w=900&q=85', 'portrait'],
    ['The glasshouse', 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=1200&q=85', 'wide'],
    ['Just us', 'https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?auto=format&fit=crop&w=900&q=85', 'landscape'],
    ['A little wild', 'https://images.unsplash.com/photo-1474552226712-ac0f0961a954?auto=format&fit=crop&w=900&q=85', 'portrait'],
  ],
  faqs: [
    ['What should I wear?', 'The dress code is Formal / Black Tie Optional. Please choose something comfortable enough to enjoy the evening with us.'],
    ['Can I bring a guest?', 'Please refer to your invitation for the number of seats reserved for you.'],
    ['Is parking available?', 'Yes. Complimentary parking is available at the venue.'],
    ['What time should I arrive?', 'Please arrive 20–30 minutes before the ceremony.'],
    ['Can I take photos during the ceremony?', "We kindly ask guests to keep phones away during the ceremony. We'll have professional photographers capturing the moment for everyone to enjoy afterward."],
  ],
} as const

export type GalleryItem = (typeof wedding.gallery)[number]
export type FAQItem = (typeof wedding.faqs)[number]
