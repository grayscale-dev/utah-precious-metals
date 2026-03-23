import type { SiteContent } from '../types/site'

export const siteContent: SiteContent = {
  metadata: {
    siteName: 'Utah Precious Metals',
    tagline: 'Custom steel landscape design and fabrication in Utah.',
    description:
      'Luxury steel landscape and outdoor metal fabrication tailored for Utah homes, with direct local communication and straightforward project planning.',
    sourceUrl: 'https://utahpreciousmetals.godaddysites.com/'
  },
  navItems: [
    { label: 'Home', to: '#home' },
    { label: 'What We Build', to: '#build' },
    { label: 'Featured Work', to: '#work' },
    { label: 'Contact', to: '#contact' }
  ],
  hero: {
    eyebrow: 'Springville, Utah',
    title: 'Here We Fabricate',
    subtitle:
      'Custom steel landscape and outdoor pieces designed for Utah homes.',
    primaryCta: { label: 'No Pressure - Reach Out Today', href: '#contact' },
    secondaryCta: { label: 'View Work', href: '#work' }
  },
  processSteps: [
    {
      title: 'Share Your Project',
      description:
        'Call, text, or email with your goals, dimensions, and preferred style direction.'
    },
    {
      title: 'Design + Fabrication',
      description:
        'We shape a practical custom approach and fabricate steel pieces to fit your space.'
    },
    {
      title: 'Finalize + Deliver',
      description:
        'Review final details, schedule completion, and coordinate the best handoff for your project.'
    }
  ],
  features: [
    {
      title: 'Custom Steel Planters',
      description:
        'Clean, durable planters built for real outdoor use.',
      icon: 'pi pi-box'
    },
    {
      title: 'Landscape Features',
      description:
        'Steel elements that add structure and visual balance to your yard.',
      icon: 'pi pi-th-large'
    },
    {
      title: 'One-Off Custom Work',
      description:
        'Project-specific fabrication tailored to your property and goals.',
      icon: 'pi pi-wrench'
    }
  ],
  galleryImages: [
    {
      src: '/frontyard.png',
      alt: 'Front yard steel landscape feature'
    },
    {
      src: '/backyard.png',
      alt: 'Back yard custom steel landscaping'
    },
    {
      src: '/bench.png',
      alt: 'Custom steel bench detail'
    },
    {
      src: '/box.png',
      alt: 'Custom steel planter box'
    },
    {
      src: '/garden.png',
      alt: 'Steel feature within a garden layout'
    }
  ],
  testimonials: [],
  faq: [
    {
      question: 'What is the best way to start a project?',
      answer:
        'Start with a quick call, text, or email and share your project goals. We will guide next steps from there.'
    },
    {
      question: 'What information should I send first?',
      answer:
        'Helpful details include your location, rough measurements, photos of the space, and the style you are aiming for.'
    },
    {
      question: 'Do you offer custom designs?',
      answer:
        'Yes. Utah Precious Metals focuses on custom steel work tailored to each outdoor project.'
    },
    {
      question: 'How can I contact you?',
      answer:
        'You can call or text 801-368-5880, email utahpreciousmetals@gmail.com, or use the contact form on this site.'
    }
  ],
  cta: {
    title: 'Ready To Talk About Your Project?',
    body: 'Share your idea and we will help you map the next step.',
    action: { label: 'Contact Utah Precious Metals', href: '#contact' }
  },
  contact: {
    headline: 'Call, Text, Or Email',
    body: 'Reach out with your project details and we will follow up with a straightforward conversation about scope and fit.',
    email: 'utahpreciousmetals@gmail.com',
    phone: '801-368-5880',
    addressLines: ['Springville, UT 84663'],
    hours: 'Monday-Friday, 9:00 AM-5:00 PM'
  },
  footer: {
    columns: [
      {
        title: 'Explore',
        links: [
          { label: 'Home', href: '#home' },
          { label: 'What We Build', href: '#build' },
          { label: 'Featured Work', href: '#work' },
          { label: 'Contact', href: '#contact' }
        ]
      },
      {
        title: 'Contact',
        links: [
          { label: 'Call/Text: 801-368-5880', href: 'tel:8013685880' },
          {
            label: 'Email: utahpreciousmetals@gmail.com',
            href: 'mailto:utahpreciousmetals@gmail.com'
          },
          { label: 'Springville, UT 84663' }
        ]
      }
    ],
    copyright: 'Utah Precious Metals. All rights reserved.',
    legal:
      'Utah custom metal design and fabrication for landscape and outdoor spaces.'
  },
  pages: {
    about: {
      title: 'About Utah Precious Metals',
      subtitle: 'Custom steel work designed to elevate outdoor living.',
      paragraphs: [
        'Utah Precious Metals focuses on handcrafted steel landscape and outdoor fabrication projects for local homeowners.',
        'Our mission is to turn ordinary yards into visually strong, practical spaces with custom metal elements that fit each property.',
        'Every project starts with direct communication, clear expectations, and design decisions grounded in your site and style.'
      ],
      highlights: [
        'Custom-first project planning',
        'Locally focused communication',
        'Premium look with practical durability'
      ]
    },
    services: {
      title: 'Steel Fabrication Services',
      subtitle: 'Landscape-focused custom metal work for residential projects.',
      intro:
        'Service scope is tailored per project, with a focus on landscape structures, steel planters, and outdoor statement pieces built for long-term use.',
      services: [
        {
          name: 'Custom Steel Planters',
          summary:
            'Built-to-fit steel planters that add structure and visual balance to patios, entries, and garden zones.'
        },
        {
          name: 'Landscape Steel Features',
          summary:
            'Custom steel elements designed to define spaces and elevate the look of outdoor environments.'
        },
        {
          name: 'Outdoor Accent Fabrication',
          summary:
            'Purpose-built decorative or functional pieces that support your overall landscape design direction.'
        },
        {
          name: 'Project Consultation',
          summary:
            'Early-stage conversations to align design intent, scope, and next-step fabrication planning.'
        }
      ]
    },
    contact: {
      title: 'Contact',
      subtitle: 'No pressure. Tell us what you are planning.',
      intro:
        'Call, text, or email for the fastest response, or send details through the form and we will follow up.'
    }
  }
}
