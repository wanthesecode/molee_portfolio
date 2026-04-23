export type PortfolioCategory =
  | 'All'
  | 'Social Media'
  | 'Motion Design'
  | 'Print Design'
  | 'Logo & Branding'
  | 'Packaging'
  | 'Comic & Illustration'
  | 'UI Design'
  | 'Manipulation';

export interface PortfolioItem {
  id: string;
  title: string;
  category: PortfolioCategory;
  description: string;
  image: string;
  video?: string;
  aspect: string;
  color: string;
  tag: string;
  tools?: string[];
  year?: string;
}

export const categories: PortfolioCategory[] = [
  'All',
  'Social Media',
  'Motion Design',
  'Print Design',
  'Logo & Branding',
  'Packaging',
  'Comic & Illustration',
  'UI Design',
  // 'Manipulation',
];

export const portfolioItems: PortfolioItem[] = [
  // ── Social Media ──────────────────────────────────────
  {
    id: 'gp-5g-social',
    title: 'GP 5G Campaign',
    category: 'Social Media',
    description:
      "A bold social media story design study for Grameenphone's 5G launch — striking visuals optimized for the 9:16 vertical format with dynamic typography and vibrant gradients.",
    image: '/portfolio/social-media/GP-5G-design-study.png',
    aspect: 'aspect-[9/16]',
    color: 'from-blush/30 to-lavender-light',
    tag: '9:16',
    tools: ['Photoshop', 'Illustrator'],
  },
  {
    id: 'apex-boshonto',
    title: 'Apex Boshonto',
    category: 'Social Media',
    description:
      'A festive social media post celebrating Boshonto (Bengali Spring / New Year) for Apex — warm colors, cultural motifs and seasonal energy in a clean square layout.',
    image: '/portfolio/social-media/apex-boshonto.JPG',
    aspect: 'aspect-square',
    color: 'from-peach/30 to-blush-light',
    tag: '1:1',
    tools: ['Photoshop'],
  },
  {
    id: 'diploma-chilled-coffee',
    title: 'Diploma Chilled Coffee',
    category: 'Social Media',
    description:
      'A refreshing recipe-style social media post for Diploma brand — showcasing a chilled coffee creation with appetizing food photography and modern layout.',
    image: '/portfolio/social-media/diploma-make-chilled-coffee.jpeg',
    aspect: 'aspect-[4/5]',
    color: 'from-sage/30 to-cream',
    tag: '4:5',
    tools: ['Photoshop'],
  },
  {
    id: 'dse-lost-friends',
    title: 'DSE Lost Friends',
    category: 'Social Media',
    description:
      'An emotional social media design for DSE exploring the theme of lost connections — nostalgic tones and heartfelt typography that resonates with the audience.',
    image: '/portfolio/social-media/dse-lost-friends.png',
    aspect: 'aspect-square',
    color: 'from-lavender/30 to-blush-light',
    tag: '1:1',
    tools: ['Photoshop'],
  },
  {
    id: 'ht-hiring',
    title: 'HT Hiring Post',
    category: 'Social Media',
    description:
      'A professional "We\'re Hiring" recruitment post for HT — combining corporate credibility with eye-catching design to attract top talent on social platforms.',
    image: '/portfolio/social-media/ht-hiring.png',
    aspect: 'aspect-square',
    color: 'from-lavender-light to-blush/20',
    tag: '1:1',
    tools: ['Photoshop', 'Illustrator'],
  },
  {
    id: 'hw-free-maid',
    title: 'HouseWork Promo',
    category: 'Social Media',
    description:
      'A promotional social media post for HouseWork\'s "Get Free Maid" service offer — clear value proposition with inviting visuals and a strong call-to-action.',
    image: '/portfolio/social-media/hw-get-free-maid.png',
    aspect: 'aspect-square',
    color: 'from-peach/40 to-lavender-light',
    tag: '1:1',
    tools: ['Photoshop'],
  },
  {
    id: 'hw-social-promo',
    title: 'HouseWork Campaign',
    category: 'Social Media',
    description:
      'A social media campaign design for HouseWork — cohesive brand visuals that communicate trust and convenience for home service bookings.',
    image: '/portfolio/social-media/hw-social-promo.png',
    aspect: 'aspect-square',
    color: 'from-blush/30 to-cream',
    tag: '1:1',
    tools: ['Photoshop', 'Illustrator'],
  },
  {
    id: 'joes-classic-burger',
    title: "Joe's Classic Burger",
    category: 'Social Media',
    description:
      "A mouth-watering social media post for Joe's Classic Burger — appetizing food photography paired with bold typography and warm tones that drive cravings.",
    image: '/portfolio/social-media/joes-classic-burger.png',
    aspect: 'aspect-square',
    color: 'from-peach/30 to-blush-light',
    tag: '1:1',
    tools: ['Photoshop'],
  },
  {
    id: 'joes-opening',
    title: "Joe's Grand Opening",
    category: 'Social Media',
    description:
      "A grand opening announcement post for Joe's restaurant — exciting visuals with celebratory elements designed to generate buzz and foot traffic.",
    image: '/portfolio/social-media/joes-opening.png',
    aspect: 'aspect-square',
    color: 'from-blush/40 to-cream',
    tag: '1:1',
    tools: ['Photoshop', 'Illustrator'],
  },
  {
    id: 'nido-social-study',
    title: 'Nido Design Study',
    category: 'Social Media',
    description:
      'A design study for Nestlé Nido — exploring social media visual directions for the milk powder brand with clean layouts and family-friendly aesthetics.',
    image: '/portfolio/social-media/nido-design-study.png',
    aspect: 'aspect-square',
    color: 'from-sage/30 to-lavender-light',
    tag: '1:1',
    tools: ['Photoshop', 'Illustrator'],
  },

  // ── Motion Design ─────────────────────────────────────
  {
    id: 'diploma-iftar',
    title: 'Diploma Sharing Iftar',
    category: 'Motion Design',
    description:
      'A heartwarming Ramadan motion graphic for Diploma brand — capturing the spirit of sharing Iftar with family, featuring smooth transitions and warm golden tones.',
    image: '/portfolio/motion/diploma-sharing-iftar-thumb.jpg',
    video: '/portfolio/motion/Diploma Sharing Iftar.mp4',
    aspect: 'aspect-[4/5]',
    color: 'from-peach/30 to-blush-light',
    tag: 'Motion',
    tools: ['After Effects', 'Photoshop'],
  },
  {
    id: 'diploma-boishakh',
    title: 'Diploma Boishakh 1433',
    category: 'Motion Design',
    description:
      'A vibrant Bengali New Year (Pohela Boishakh 1433) motion design for Diploma — celebrating cultural tradition with festive colors, traditional patterns and lively animation.',
    image: '/portfolio/motion/diploma-boishakh-1433-thumb.jpg',
    video: '/portfolio/motion/Diploma boishakh 1433.mp4',
    aspect: 'aspect-[4/5]',
    color: 'from-blush/30 to-peach/20',
    tag: 'Motion',
    tools: ['After Effects', 'Photoshop'],
  },
  {
    id: 'diploma-droolecious-desert',
    title: 'Diploma Droolecious Desert',
    category: 'Motion Design',
    description:
      'A mouth-watering motion design for Diploma\'s Droolecious Desert campaign — rich dessert visuals with smooth animations and indulgent brand styling.',
    image: '/portfolio/motion/diploma---droolecious-desert-thumb.png',
    video: '/portfolio/motion/diploma-droolecious-desert.mp4',
    aspect: 'aspect-[4/5]',
    color: 'from-peach/30 to-blush-light',
    tag: 'Motion',
    tools: ['After Effects', 'Photoshop'],
  },
  {
    id: 'gp-15gb',
    title: 'GP 15 GB Free',
    category: 'Motion Design',
    description:
      "A punchy motion graphic study for Grameenphone's 15 GB free data offer — fast-paced animation with bold data visuals and telecom branding.",
    image: '/portfolio/motion/gp-15-gb-free---study-thumb.jpg',
    video: '/portfolio/motion/GP 15 GB free - study.mp4',
    aspect: 'aspect-[4/5]',
    color: 'from-lavender/30 to-blush-light',
    tag: 'Motion',
    tools: ['After Effects'],
  },
  {
    id: 'gp-5g-motion',
    title: 'GP 5G Motion',
    category: 'Motion Design',
    description:
      'A futuristic motion design study for Grameenphone 5G — sleek animations showcasing speed and connectivity with high-tech visual language.',
    image: '/portfolio/motion/gp-5g---study-thumb.jpg',
    video: '/portfolio/motion/GP-5g - study.mp4',
    aspect: 'aspect-[9/16]',
    color: 'from-blush/30 to-lavender-light',
    tag: '9:16',
    tools: ['After Effects', 'Photoshop'],
  },
  {
    id: 'gp-run',
    title: 'GP Run Campaign',
    category: 'Motion Design',
    description:
      'An energetic motion graphic for Grameenphone Run — dynamic animation with athletic visuals, kinetic typography and motivational pace.',
    image: '/portfolio/motion/gp-run---study-thumb.jpg',
    video: '/portfolio/motion/GP-run - study.mp4',
    aspect: 'aspect-[9/16]',
    color: 'from-peach/40 to-lavender-light',
    tag: '9:16',
    tools: ['After Effects'],
  },
  {
    id: 'frutzzy-concept',
    title: 'Frutzzy Concept',
    category: 'Motion Design',
    description:
      'A fun, colorful concept motion design for Frutzzy beverage brand — juicy animations with fruit splashes, playful transitions and fresh brand energy.',
    image: '/portfolio/motion/frutzzy---concept-thumb.jpg',
    video: '/portfolio/motion/frutzzy - concept.mp4',
    aspect: 'aspect-[4/5]',
    color: 'from-sage/30 to-peach/20',
    tag: 'Motion',
    tools: ['After Effects', 'Photoshop'],
  },
  {
    id: 'lays-new-flavors',
    title: "Lay's New Flavors",
    category: 'Motion Design',
    description:
      "A crunchy motion design study for Lay's new flavor launch — bold product reveals with satisfying animation and snack-worthy color palette.",
    image: '/portfolio/motion/lays-new-flavors---study-thumb.jpg',
    video: '/portfolio/motion/lays-new-flavors - study.mp4',
    aspect: 'aspect-[9/16]',
    color: 'from-peach/30 to-blush-light',
    tag: '9:16',
    tools: ['After Effects'],
  },

  // ── Print Design ──────────────────────────────────────
  {
    id: 'cerelac-project-heart',
    title: 'Cerelac Project Heart HTML DA - Phase 2',
    category: 'Print Design',
    description:
      'A large-format print campaign for Nestlé Cerelac\'s "Project Heart" initiative — emotionally driven visuals featuring loving parent-child moments with warm, nurturing brand aesthetics.',
    image: '/portfolio/print/da-cerelac-project-heart.png',
    aspect: 'aspect-[7/3]',
    color: 'from-blush/30 to-cream',
    tag: 'Print',
    tools: ['Photoshop', 'Illustrator'],
  },
  {
    id: 'cerelac-html-da',
    title: 'CCerelac Project Heart DA - Phase 1',
    category: 'Print Design',
    description:
      'A HTML UI design for Nestlé Cerelac — an HTML product DA with warm, inviting aesthetics, product showcases and parent-friendly navigation.',
    image: '/portfolio/ui/html-da-cerelac.png',
    aspect: 'aspect-[4/3]',
    color: 'from-lavender-light to-blush/20',
    tag: 'UI/UX',
    tools: ['Figma', 'Photoshop'],
  },
  {
    id: 'lactogen-print',
    title: 'Lactogen GUM DA',
    category: 'Print Design',
    description:
      'Print material design for Nestlé Lactogen — clean, trustworthy visuals communicating infant nutrition with soft colors and professional medical-grade aesthetics.',
    image: '/portfolio/print/da-lactogen.png',
    aspect: 'aspect-[5/3]',
    color: 'from-lavender-light to-blush/20',
    tag: 'Print',
    tools: ['Photoshop', 'Illustrator'],
  },
  {
    id: 'pustimix-ritual',
    title: 'Pustimix Ritual DA',
    category: 'Print Design',
    description:
      'A print campaign for Pustimix — showcasing the daily nutrition ritual with appetizing food imagery and health-conscious design for in-store and outdoor display.',
    image: '/portfolio/print/da-pustimix-ritual.png',
    aspect: 'aspect-[5/3]',
    color: 'from-sage/30 to-cream',
    tag: 'Print',
    tools: ['Photoshop', 'Illustrator'],
  },
  {
    id: 'nido-lb',
    title: 'Nido LB',
    category: 'Print Design',
    description:
      'A standing banner design for Nestlé Nido — tall portrait format with prominent product placement, nutritional messaging and family-oriented imagery.',
    image: '/portfolio/print/lb-nido-1.png',
    aspect: 'aspect-[4/5]',
    color: 'from-blush/30 to-lavender-light',
    tag: 'Standee',
    tools: ['Photoshop', 'Illustrator'],
  },
  {
    id: 'nido-lb-2',
    title: 'Nido LB 2',
    category: 'Print Design',
    description:
      'An alternate standee design for Nestlé Nido — a fresh layout variation maintaining brand consistency while exploring different visual compositions.',
    image: '/portfolio/print/lb-nido-2.png',
    aspect: 'aspect-[4/5]',
    color: 'from-peach/30 to-blush-light',
    tag: 'Standee',
    tools: ['Photoshop', 'Illustrator'],
  },
  {
    id: 'restaurant-menu',
    title: 'Restaurant Menu',
    category: 'Print Design',
    description:
      'A professional restaurant menu design — wide-format layout with appetizing food photography, elegant typography and organized sections for a polished dining experience.',
    image: '/portfolio/print/menu-restaurants.png',
    aspect: 'aspect-[3/1]',
    color: 'from-sage/30 to-peach/20',
    tag: 'Menu',
    tools: ['Photoshop', 'Illustrator'],
  },
  {
    id: 'restaurant-posters',
    title: 'Restaurant Posters',
    category: 'Print Design',
    description:
      'A collection of decorative poster designs for restaurant interiors — blending food art with wall décor aesthetics to create an inviting dining atmosphere.',
    image: '/portfolio/print/restaurant-decorative-posters.png',
    aspect: 'aspect-square',
    color: 'from-peach/40 to-cream',
    tag: 'Poster',
    tools: ['Photoshop', 'Illustrator'],
  },
  {
    id: 'xbanner-party-monsters',
    title: 'Party Monsters X-Banner',
    category: 'Print Design',
    description:
      'An eye-catching X-banner stand design for Party Monsters — bold, fun and energetic visuals designed to grab attention at events and venues.',
    image: '/portfolio/print/x-banner-party_monsters.png',
    aspect: 'aspect-[7/8]',
    color: 'from-lavender/30 to-blush-light',
    tag: 'Banner',
    tools: ['Photoshop', 'Illustrator'],
  },
  {
    id: 'xbanner-restaurants',
    title: 'Restaurant X-Banner',
    category: 'Print Design',
    description:
      'An X-banner stand design for restaurant promotion — featuring appetizing imagery and clear branding for storefront and event displays.',
    image: '/portfolio/print/x-banner-restaurants.png',
    aspect: 'aspect-[3/2]',
    color: 'from-blush/40 to-cream',
    tag: 'Banner',
    tools: ['Photoshop', 'Illustrator'],
  },
  {
    id: 'da-nan',
    title: 'DA NAN',
    category: 'Print Design',
    description:
      'A DA for NAN — bold visuals and clean layout crafted for impactful brand communication.',
    image: '/portfolio/print/da-nan.png',
    aspect: 'aspect-[5/2]',
    color: 'from-peach/30 to-blush-light',
    tag: 'Print',
    tools: ['Photoshop'],
  },

  // ── Logo & Branding ───────────────────────────────────
  {
    id: 'fit-hobo',
    title: 'Fit Hobo',
    category: 'Logo & Branding',
    description:
      'Logo design for Fit Hobo — a fitness-oriented brand identity combining health and adventure with clean, modern mark and balanced composition.',
    image: '/portfolio/logo-&-branding/fit-hobo.png',
    aspect: 'aspect-[4/3]',
    color: 'from-sage/30 to-cream',
    tag: 'Logo',
    tools: ['Illustrator'],
  },
  {
    id: 'lokchai',
    title: 'LokChai',
    category: 'Logo & Branding',
    description:
      'Logo design for LokChai tea brand — a warm, inviting wordmark that captures the essence of community tea culture with elegant Bengali-inspired typography.',
    image: '/portfolio/logo-&-branding/lokchai.png',
    aspect: 'aspect-[4/1]',
    color: 'from-peach/30 to-blush-light',
    tag: 'Logo',
    tools: ['Illustrator'],
  },
  {
    id: 'meal-harkara',
    title: 'Meal Harkara',
    category: 'Logo & Branding',
    description:
      'Logo design for Meal Harkara food delivery — a playful brand mark referencing the Bengali "harkara" (messenger) concept with appetizing food visuals.',
    image: '/portfolio/logo-&-branding/meal-harkara.png',
    aspect: 'aspect-square',
    color: 'from-blush/30 to-lavender-light',
    tag: 'Logo',
    tools: ['Illustrator'],
  },
  {
    id: 'rice-roll',
    title: 'Rice Roll',
    category: 'Logo & Branding',
    description:
      'Logo design for Rice Roll restaurant — a clean, friendly identity that communicates the specialty cuisine with appetizing visual cues.',
    image: '/portfolio/logo-&-branding/rice-roll.png',
    aspect: 'aspect-[3/2]',
    color: 'from-lavender-light to-blush/20',
    tag: 'Logo',
    tools: ['Illustrator'],
  },
  {
    id: 'tylor',
    title: 'Tylor',
    category: 'Logo & Branding',
    description:
      'Logo design for Tylor — a sleek, modern brand identity with confident typography and refined aesthetics suited for a premium brand positioning.',
    image: '/portfolio/logo-&-branding/tylor.png',
    aspect: 'aspect-[3/1]',
    color: 'from-blush/30 to-cream',
    tag: 'Logo',
    tools: ['Illustrator'],
  },
  {
    id: 'zenith',
    title: 'Zenith',
    category: 'Logo & Branding',
    description:
      'Logo design for Zenith — a bold wordmark conveying ambition and excellence with sharp geometry and professional presence.',
    image: '/portfolio/logo-&-branding/zenith.png',
    aspect: 'aspect-[3/1]',
    color: 'from-lavender/30 to-sage/20',
    tag: 'Logo',
    tools: ['Illustrator'],
  },
  {
    id: 'zero-fin',
    title: 'Zero Fin',
    category: 'Logo & Branding',
    description:
      'Logo design for Zero Fin — a creative brand mark with distinctive character, balancing minimalism and originality in a wide-format presentation.',
    image: '/portfolio/logo-&-branding/zero-fin.png',
    aspect: 'aspect-[5/2]',
    color: 'from-peach/40 to-lavender-light',
    tag: 'Logo',
    tools: ['Illustrator'],
  },

  // ── Packaging ─────────────────────────────────────────
  {
    id: 'barindra-mango-juice',
    title: 'Barindra Mango Juice',
    category: 'Packaging',
    description:
      'Packaging design for Barindra Mango Juice — tropical, juicy visuals with bold color blocking and fresh fruit imagery that pops on store shelves.',
    image: '/portfolio/packaging/barindra-mango-juice.png',
    aspect: 'aspect-[3/2]',
    color: 'from-peach/30 to-sage/20',
    tag: 'Packaging',
    tools: ['Illustrator', 'Photoshop'],
  },
  {
    id: 'live-lite',
    title: 'Live Lite',
    category: 'Packaging',
    description:
      'Packaging design for Live Lite health product — clean, minimal layout with health-conscious aesthetics communicating freshness and wellness.',
    image: '/portfolio/packaging/live-lite.png',
    aspect: 'aspect-square',
    color: 'from-sage/30 to-cream',
    tag: 'Packaging',
    tools: ['Illustrator', 'Photoshop'],
  },

  // ── Comic & Illustration ──────────────────────────────
  {
    id: 'rickshaw-madness',
    title: 'Rickshaw Madness',
    category: 'Comic & Illustration',
    description:
      'A vibrant, detailed illustration capturing the chaotic energy of Bangladeshi rickshaw culture — colorful, bustling street scenes with hand-drawn characters and playful storytelling.',
    image: '/portfolio/comic-&-illustration/riskshaw-madness.png',
    aspect: 'aspect-[4/3]',
    color: 'from-blush/40 to-peach/20',
    tag: 'Illustration',
    tools: ['Photoshop', 'Illustrator'],
  },
  {
    id: 'labbe-children-illustration-p1',
    title: 'Labbé Children Book P1',
    category: 'Comic & Illustration',
    description:
      "Page 1 of a charming children's web-book illustration for Labbé — whimsical characters and colorful scenes designed to delight young readers.",
    image: '/portfolio/comic-&-illustration/labbe-childrenwebbook-illustration-p1.png',
    aspect: 'aspect-[2/1]',
    color: 'from-peach/30 to-sage/20',
    tag: 'Illustration',
    tools: ['Photoshop', 'Illustrator'],
  },
  {
    id: 'labbe-children-illustration-p2',
    title: 'Labbé Children Book P2',
    category: 'Comic & Illustration',
    description:
      "Page 2 of a charming children's web-book illustration for Labbé — continuing the story with vibrant artwork and playful visual storytelling.",
    image: '/portfolio/comic-&-illustration/labbe-childrenwebbook-illustration-p2.png',
    aspect: 'aspect-[2/1]',
    color: 'from-lavender/30 to-peach/20',
    tag: 'Illustration',
    tools: ['Photoshop', 'Illustrator'],
  },

  // ── UI Design ─────────────────────────────────────────

  {
    id: 'ui-design-study',
    title: 'UI Design Study',
    category: 'UI Design',
    description:
      'A UI/UX design study exploring modern interface patterns — clean layouts, intuitive navigation and thoughtful micro-interactions for a polished user experience.',
    image: '/portfolio/ui/ui-study.png',
    aspect: 'aspect-video',
    color: 'from-blush/30 to-lavender-light',
    tag: 'UI/UX',
    tools: ['Figma'],
  },

  // // ── Manipulation ──────────────────────────────────────
  // {
  //   id: 'war-promo',
  //   title: 'War Promo',
  //   category: 'Manipulation',
  //   description:
  //     'A dramatic photo manipulation promo — cinematic compositing with intense mood, layered effects and powerful visual storytelling.',
  //   image: '/portfolio/manipulation/war-promo.png',
  //   aspect: 'aspect-[9/10]',
  //   color: 'from-charcoal/20 to-lavender/20',
  //   tag: 'Manipulation',
  //   tools: ['Photoshop'],
  // },
];
