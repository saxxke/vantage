import { Product } from '../types';

export const INITIAL_PRODUCTS: Product[] = [
  {
    id: 'prod-1',
    name: 'The Oversized Tee',
    color: 'Obsidian Black',
    colorHex: '#1a1a1a',
    category: 'Tees',
    price: 65,
    primaryImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBUkwUQMLLSa2c1ui15JfkEH1sBdqlsihDNKEj1LBhJ37t2f8lbbWAojv7aa9ZKDUqagn9dhEja9vzZcHeh_SEw-yPbXPD6BwXqyTJPBcx8KqMU-_4ROGr69Rxs0rWPer8XegSK9G4rMBFQn3XGgxqM5IaBXg7y8OKjH6AEvx9v597zB4Hyn5Qk57qg-3SWG_Cwg9Huaqrpk0oL1oP3qKrOL-03STnjgp3uIQPTUA_-gXmbgoUHEbWy',
    secondaryImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCZw7ev1SQiaAUdTKV9d6GyrDeEG0NwiHPo5-Npvs1bEqiqOekQ4eAMOW8HJQz1c6uuW7URLBNFOJSP5BNppBK6jOYEtRYLAolvYEbtHKts5PYweZA8P1TVP7Xvxy0RPdn6IxHpG8SIGxcYRIPZKtkeLq0WyWLUOwqZIBwwDILhE8eCq8Xlmz9ra-30WEQmzBwH2RHmrKyillywPSqSwXbH_4vP-WRDC-h51fNOK7cPfWmwHktMnnUP',
    description: 'Crafted from heavyweight 280gsm organic cotton jersey, The Oversized Tee offers a structured drop-shoulder drape with a clean, ribbed crewneck.',
    details: [
      '100% Organic Heavyweight Cotton (280 GSM)',
      'Relaxed drop-shoulder silhouette',
      'Pre-shrunk for enduring shape',
      'Signature minimal neck binding'
    ],
    sizes: ['S', 'M', 'L', 'XL'],
    colorsAvailable: [
      { name: 'Obsidian Black', hex: '#1a1a1a' },
      { name: 'Pure White', hex: '#ffffff' },
      { name: 'Sandstone', hex: '#d2c1b0' }
    ],
    fabric: '280 GSM Organic Cotton',
    care: 'Machine wash cold inside-out, tumble dry low or line dry.',
    isBestseller: true
  },
  {
    id: 'prod-2',
    name: 'Relaxed Chino',
    color: 'Sandstone',
    colorHex: '#d2c1b0',
    category: 'Pants',
    price: 145,
    primaryImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAMTpKsJ7S5GV1fFM-Gfx29FtXz2xc4nBza4gYjr4NGEOMhbMpHwE5If9VUrozEPI3Wuo7R2KLpSUjuWtSnh4SZhZw4FwGs-E31CXN40cLM4QQQiysn8qmdzAHl_Ieq2ulyZ8JoAV5lqss-eXt0FGe1JktM2zdLigV6mkFjJdYWxFTgRv0LqAWRxUX252-WovKxPi_ig3yNw8_C_1j9km0-WhHnIzfFikzXIDzLZWrhDMXYnpIPltSi',
    secondaryImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCbuxhw7etU2NbEZxXDwgzRka8-g1AeSC3Bk2-Pmg56BszBebC9-Z9dV-n65Dfyj5h3rgkLJD983L5cDWL7f0zl2PVKw-n5UTp621tCVTSF3R4rD4_obRQtTD9mwftlE4ePOKtIjDjERbA56IO4RrT-9J0fGlt7hsqwW3PGY1xh27nUv6f2s7e_J7ckqgFs_9cWZzKQyZrikIFv9Ylo78r8tq_E9IebcFbEHWaBOPLN6qy0XZJTnO1G',
    description: 'Tailored with a soft stretch-cotton twill, these relaxed chinos blend effortless comfort with crisp architectural tailoring.',
    details: [
      '98% Organic Cotton, 2% Elastane',
      'Straight-leg casual cut with slight taper',
      'Hidden key pocket inside coin slot',
      'Custom Horn-tone button fastener'
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colorsAvailable: [
      { name: 'Sandstone', hex: '#d2c1b0' },
      { name: 'Charcoal', hex: '#404040' },
      { name: 'Obsidian Black', hex: '#1a1a1a' }
    ],
    fabric: 'Japanese Stretch Twill Cotton',
    care: 'Dry clean recommended or gentle wash cold.',
    isBestseller: true
  },
  {
    id: 'prod-3',
    name: 'Linen Button-Down',
    color: 'Pure White',
    colorHex: '#ffffff',
    category: 'Shirts',
    price: 120,
    primaryImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCH4b5A_sLN_wb6vUs1Uol9ttF6leOatmIlRI6wZzI6-f1BT7Grh1utzZW5Tf2rJPuhzK7mfF0ca2yuPn_ctH3Gz4mYMczohUopx9GmwTEutdEnjuYkafwGalkvV4GjiRkOo3oa71Nk383jn9Yqh5cvrtq0QNivO6uBlV3tPl0blRJTMxPvIBsWuUOcKjn63NES7U1mXZIXeqwVuoCKkY7SDQBrZHJMMSJNyQjE-UQ2aKGglAH3D_Oy',
    secondaryImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBHul4v-dMsWE4oOgPmejgm4ioPe1POAxw4lSHemEQ3vA1GzpJVSWZ1KvPc3TmLx8EP4Alj2D_rrdPj36QB9nfm7wP22xsc39VAc5DBc0Ya9rJgTYR9L42ZYfBNyyRI-YR-Lowg-VQVvVIeob7ms0mKWf8C-u_JQEP-ToR77K6dyMxO39zehcgfugpqBrxxCuI_NUmvq2Kp2QZEoHnxgyD0X1Y-c65gkWXF4vFtjt8GHzlrqKxQER0H',
    description: 'Woven from 100% French flax, this airy linen button-down features natural breathability and a relaxed spread collar.',
    details: [
      '100% Premium French Flax Linen',
      'Garment-dyed and soft-washed',
      'Mother-of-pearl buttons',
      'Curved hemline for untucked styling'
    ],
    sizes: ['S', 'M', 'L', 'XL'],
    colorsAvailable: [
      { name: 'Pure White', hex: '#ffffff' },
      { name: 'Sandstone', hex: '#d2c1b0' }
    ],
    fabric: '100% French Flax Linen',
    care: 'Hand wash cold or gentle cycle, line dry in shade.',
    isNew: true
  },
  {
    id: 'prod-4',
    name: 'Structured Overshirt',
    color: 'Charcoal',
    colorHex: '#404040',
    category: 'Jackets',
    price: 185,
    primaryImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCDdGi58ysOoxoq3C-vtNNiOWGA_iSRJwAlkM7fXzYQNTHq3bxw65g0L_9ykov4_kxzWFNwJKP5wQ3cqdpYs3US5RFVWWFn04WnaEDYmKjyeDnQilpfj92NBpfAQcunCtdTCLVthU2fs--EFVkMeyzDmneef50KR9iNK1ty2_lyzIttI3h2Cs7kUMTfS8j2v2j_jevblDhDKHoq5e1tTGl6fOr93bZrgITWxXeT6H4giyXtIFBOqyjs',
    secondaryImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDnxndmuJ4Ili83tCax2ebYN_kKnPWi7vFo5tK7I8qe3117lSBjtBJ_PzPXPOQxEhijE9JUS82XyWV3hnUCJpttDL4Ou7l9Kxv5JVkgDdxvId3Wm19nkLs7i9kIRlEoGyuE-ajsnSyf9EoBi-yFKz2cnjpxfNcYn5mn0wSHj4AiHxUvUPsRFSyyttc729CexuAvb-dVKVE7rYMcAOtAWqvxLY7LsJnJU47zZIChn0CepZF7W0Owe8UU',
    description: 'Designed as a versatile transitional layer, this overshirt combines wool blend warmth with tailored military pocket accents.',
    details: [
      '60% Recycled Wool, 40% Organic Cotton',
      'Dual chest flap utility pockets',
      'Heavy-duty matte black snap fasteners',
      'Fully unlined interior with bound seams'
    ],
    sizes: ['S', 'M', 'L', 'XL'],
    colorsAvailable: [
      { name: 'Charcoal', hex: '#404040' },
      { name: 'Obsidian Black', hex: '#1a1a1a' }
    ],
    fabric: 'Wool Cotton Blend Heavyweight Canvas',
    care: 'Dry clean only.',
    isNew: true
  },
  {
    id: 'prod-5',
    name: 'Ribbed Minimal Tank',
    color: 'Pure White',
    colorHex: '#ffffff',
    category: 'Tees',
    price: 48,
    primaryImage: 'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?q=80&w=800&auto=format&fit=crop',
    secondaryImage: 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?q=80&w=800&auto=format&fit=crop',
    description: 'A finely ribbed cotton modal tank with a sculpted scoop neckline and clean flatlock side seams.',
    details: [
      '70% Organic Cotton, 30% Tencel Modal',
      'Micro-rib texture for soft form-fitting drape',
      'Flat seam construction to eliminate chafing',
      'Clean bind neckline and armholes'
    ],
    sizes: ['XS', 'S', 'M', 'L'],
    colorsAvailable: [
      { name: 'Pure White', hex: '#ffffff' },
      { name: 'Obsidian Black', hex: '#1a1a1a' }
    ],
    fabric: 'Ribbed Cotton Modal Blend',
    care: 'Machine wash cold, tumble dry low.',
    isBestseller: false
  },
  {
    id: 'prod-6',
    name: 'Cashmere Crewneck',
    color: 'Oatmeal',
    colorHex: '#e0d6c8',
    category: 'Knitwear',
    price: 240,
    primaryImage: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?q=80&w=800&auto=format&fit=crop',
    secondaryImage: 'https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?q=80&w=800&auto=format&fit=crop',
    description: 'Sumptuous 100% Grade-A Mongolian cashmere knit in a timeless regular silhouette with ultra-fine ribbed trims.',
    details: [
      '100% Grade-A Mongolian Cashmere',
      '2-ply 12-gauge knit construction',
      'Hand-finished seams',
      'Hypoallergenic and naturally temperature regulating'
    ],
    sizes: ['S', 'M', 'L', 'XL'],
    colorsAvailable: [
      { name: 'Oatmeal', hex: '#e0d6c8' },
      { name: 'Charcoal', hex: '#404040' }
    ],
    fabric: 'Pure Mongolian Cashmere',
    care: 'Hand wash cold with wool detergent or dry clean.',
    isBestseller: true
  },
  {
    id: 'prod-7',
    name: 'Tailored Pleated Trouser',
    color: 'Obsidian Black',
    colorHex: '#1a1a1a',
    category: 'Pants',
    price: 195,
    primaryImage: 'https://images.unsplash.com/photo-1509551388413-e18d0ac5d495?q=80&w=800&auto=format&fit=crop',
    secondaryImage: 'https://images.unsplash.com/photo-1517445312882-bc9910d016b7?q=80&w=800&auto=format&fit=crop',
    description: 'Double pleated front dress trousers with an extended waist tab and a high-rise, wide-leg drape.',
    details: [
      '100% Italian Virgin Wool',
      'Double front knife pleats',
      'Side adjustable waist tabs',
      'Unhemmed length for custom alteration'
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colorsAvailable: [
      { name: 'Obsidian Black', hex: '#1a1a1a' },
      { name: 'Charcoal', hex: '#404040' }
    ],
    fabric: 'Fine Italian Virgin Wool',
    care: 'Dry clean only.',
    isNew: true
  },
  {
    id: 'prod-8',
    name: 'Minimal Leather Tote',
    color: 'Sandstone',
    colorHex: '#d2c1b0',
    category: 'Accessories',
    price: 290,
    primaryImage: 'https://images.unsplash.com/photo-1590874103328-eac38a683ce7?q=80&w=800&auto=format&fit=crop',
    secondaryImage: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?q=80&w=800&auto=format&fit=crop',
    description: 'Sculpted from full-grain vegetable-tanned leather with unlined suede interior and a magnetic top enclosure.',
    details: [
      '100% Full-grain Tuscan Calfskin Leather',
      'Internal zippered laptop compartment (fits up to 15")',
      'Hand-painted finished edges',
      'Debossed subtle VANTAGE wordmark'
    ],
    sizes: ['M'],
    colorsAvailable: [
      { name: 'Sandstone', hex: '#d2c1b0' },
      { name: 'Obsidian Black', hex: '#1a1a1a' }
    ],
    fabric: 'Vegetable Tanned Leather',
    care: 'Clean with specialized leather conditioner.',
    isBestseller: true
  },
  {
    id: 'prod-9',
    name: 'Heavyweight Poplin Shirt',
    color: 'Sky Tint',
    colorHex: '#e1e8ed',
    category: 'Shirts',
    price: 135,
    primaryImage: 'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?q=80&w=800&auto=format&fit=crop',
    secondaryImage: 'https://images.unsplash.com/photo-1598033129183-c4f50c736f10?q=80&w=800&auto=format&fit=crop',
    description: 'Crisp poplin shirt tailored with dropped shoulders, minimalist placket detail, and sharp square cuffs.',
    details: [
      '100% Long-staple Egyptian Cotton',
      'High-density 120s two-ply weave',
      'Concealed front button placket',
      'Box pleat back yoke for movement'
    ],
    sizes: ['S', 'M', 'L', 'XL'],
    colorsAvailable: [
      { name: 'Sky Tint', hex: '#e1e8ed' },
      { name: 'Pure White', hex: '#ffffff' }
    ],
    fabric: 'Egyptian Cotton Poplin',
    care: 'Warm iron or dry clean.',
    isNew: false
  },
  {
    id: 'prod-10',
    name: 'Architectural Trench Coat',
    color: 'Sandstone',
    colorHex: '#d2c1b0',
    category: 'Jackets',
    price: 380,
    primaryImage: 'https://images.unsplash.com/photo-1544441893-675973e31985?q=80&w=800&auto=format&fit=crop',
    secondaryImage: 'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?q=80&w=800&auto=format&fit=crop',
    description: 'A double-breasted minimalist trench featuring water-repellent gabardine weave, storm flap, and a waist-cinching belt.',
    details: [
      '100% Weatherproof Cotton Gabardine',
      'Storm flap back yoke with horn buttons',
      'Deep welt pass-through hand pockets',
      'Satin cupro partial lining'
    ],
    sizes: ['S', 'M', 'L'],
    colorsAvailable: [
      { name: 'Sandstone', hex: '#d2c1b0' },
      { name: 'Obsidian Black', hex: '#1a1a1a' }
    ],
    fabric: 'Weatherproof Gabardine',
    care: 'Specialist dry clean only.',
    isNew: true
  },
  {
    id: 'prod-11',
    name: 'Merino Knit Polo',
    color: 'Charcoal',
    colorHex: '#404040',
    category: 'Knitwear',
    price: 160,
    primaryImage: 'https://images.unsplash.com/photo-1617137968427-85924c800a22?q=80&w=800&auto=format&fit=crop',
    secondaryImage: 'https://images.unsplash.com/photo-1618354691373-d851c5c3a990?q=80&w=800&auto=format&fit=crop',
    description: 'Extrafine 19.5 micron merino wool knitted into an open-collar resort polo with soft ribbed hems.',
    details: [
      '100% Extrafine Australian Merino Wool',
      'Buttonless open Johnny collar',
      'Seamless shoulder construction',
      'Odor-resistant natural wool fibers'
    ],
    sizes: ['S', 'M', 'L', 'XL'],
    colorsAvailable: [
      { name: 'Charcoal', hex: '#404040' },
      { name: 'Sandstone', hex: '#d2c1b0' }
    ],
    fabric: '100% Extrafine Merino Wool',
    care: 'Hand wash cold flat dry.',
    isBestseller: false
  },
  {
    id: 'prod-12',
    name: 'Relaxed Silk Slip Dress',
    color: 'Obsidian Black',
    colorHex: '#1a1a1a',
    category: 'Tees',
    price: 210,
    primaryImage: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=800&auto=format&fit=crop',
    secondaryImage: 'https://images.unsplash.com/photo-1496747611176-843222e1e57c?q=80&w=800&auto=format&fit=crop',
    description: 'Fluid bias-cut silk charmeuse gown with delicate spaghetti straps and a subtle cowl neckline.',
    details: [
      '100% Mulberry Silk Charmeuse (19 Momme)',
      'Bias cut for natural fluid silhouette',
      'Adjustable slim silk shoulder straps',
      'Double layered bust lining'
    ],
    sizes: ['XS', 'S', 'M', 'L'],
    colorsAvailable: [
      { name: 'Obsidian Black', hex: '#1a1a1a' },
      { name: 'Pure White', hex: '#ffffff' }
    ],
    fabric: '100% Mulberry Silk',
    care: 'Dry clean or gentle silk wash cold.',
    isNew: true
  }
];
