import React, { useState, useEffect, useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';

const Link = ({ to, children, ...props }) => (
  <a href={to} {...props}>
    {children}
  </a>
);

// ═══════════════════════════════════════════════════════════════
// DATA SECTION - All mock data
// ═══════════════════════════════════════════════════════════════

const services = [
  {
    icon: '🚚',
    title: 'Fast Delivery',
    desc: 'Pan-India delivery within 3-7 business days with real-time tracking.'
  },
  {
    icon: '💰',
    title: 'Wholesale Pricing',
    desc: 'Competitive bulk pricing for dealers and contractors with volume discounts.'
  },
  {
    icon: '🛡️',
    title: 'Quality Assured',
    desc: 'All products are ISI marked and certified, backed by manufacturer warranty.'
  },
  {
    icon: '🤝',
    title: 'Expert Support',
    desc: 'Dedicated sales team and technical support for product selection and installation.'
  }
];

const featuredProducts = [
  {
    id: 1,
    name: 'UPVC Pipes & Fittings',
    category: 'Plumbing',
    image: '🔵',
    description: 'Durable UPVC pipes for water supply systems. Available in various sizes from 15mm to 200mm.',
    price: 2500,
    features: ['ISI Marked', 'Lead Free', '25 Year Warranty']
  },
  {
    id: 2,
    name: 'CPVC Pipe System',
    category: 'Plumbing',
    image: '🔴',
    description: 'Hot & cold water piping system. Temperature resistant up to 90°C.',
    price: 3200,
    features: ['Fire Resistant', 'NSF Certified', '50 Year Life']
  },
  {
    id: 3,
    name: 'SWR Drainage System',
    category: 'Drainage',
    image: '⚫',
    description: 'Soil, Waste & Rainwater drainage pipes. Chemical and corrosion resistant.',
    price: 1800,
    features: ['Impact Resistant', 'Weather Proof', 'Low Maintenance']
  },
  {
    id: 4,
    name: 'HDPE Pipe Coils',
    category: 'Agriculture',
    image: '⚪',
    description: 'Flexible HDPE pipes for agricultural and industrial applications.',
    price: 4500,
    features: ['UV Resistant', 'Flexible', 'Long Lasting']
  },
  {
    id: 5,
    name: 'Column Pipes',
    category: 'Construction',
    image: '🟡',
    description: 'Heavy-duty column pipes for submersible pumps and deep well applications.',
    price: 3800,
    features: ['High Pressure', 'Thread Type', 'ISI Approved']
  }
];

const initialProducts = [
  {
    id: 1,
    name: 'UPVC Pipes',
    category: 'Plumbing',
    image: '💧',
    description: 'Premium quality UPVC pipes for residential and commercial water supply.',
    price: 2500
  },
  {
    id: 2,
    name: 'CPVC Pipes',
    category: 'Plumbing',
    image: '🔥',
    description: 'Heat resistant CPVC piping system for hot and cold water distribution.',
    price: 3200
  },
  {
    id: 3,
    name: 'SWR Pipes',
    category: 'Drainage',
    image: '🚿',
    description: 'Efficient drainage solution for soil, waste and rainwater management.',
    price: 1800
  }
];

const testimonials = [
  {
    id: 1,
    name: 'Rajesh Kumar',
    role: 'Contractor, Delhi',
    initials: 'RK',
    rating: 5,
    text: 'Been working with Prince for over 10 years. Product quality is top-notch and delivery is always on time. Highly recommend for large construction projects.'
  },
  {
    id: 2,
    name: 'Priya Sharma',
    role: 'Dealer, Mumbai',
    initials: 'PS',
    rating: 5,
    text: 'Excellent support from the sales team. The wholesale pricing is very competitive and my customers are always satisfied with the product durability.'
  },
  {
    id: 3,
    name: 'Amit Patel',
    role: 'Builder, Ahmedabad',
    initials: 'AP',
    rating: 5,
    text: 'Prince pipes have become our go-to choice for all residential projects. The ISI certification and warranty gives confidence to our clients.'
  },
  {
    id: 4,
    name: 'Sunita Reddy',
    role: 'Plumbing Contractor, Bangalore',
    initials: 'SR',
    rating: 5,
    text: 'The technical support team is very knowledgeable. They helped us choose the right products for our commercial plumbing project.'
  }
];

const trustedBrands = [
  {
    id: 1,
    name: 'Prince',
    logo: '👑',
    color: '#cc1f1f',
    tagline: "India's No.1 Piping Brand"
  },
  {
    id: 2,
    name: 'Supreme',
    logo: '⭐',
    color: '#0d9f6e',
    tagline: 'Quality You Trust'
  },
  {
    id: 3,
    name: 'Finolex',
    logo: '🔷',
    color: '#1a6dc8',
    tagline: 'Pipes for Life'
  },
  {
    id: 4,
    name: 'Astral',
    logo: '💎',
    color: '#e07b00',
    tagline: 'Building Tomorrow'
  },
  {
    id: 5,
    name: 'Ashirvad',
    logo: '🌟',
    color: '#9333ea',
    tagline: 'Trusted Nationwide'
  }
];

const productCategories = [
  {
    id: 'plumbing',
    name: 'Plumbing Materials',
    icon: '🔧',
    description: 'Complete range of UPVC, CPVC pipes and fittings'
  },
  {
    id: 'paint',
    name: 'Paint Materials',
    icon: '🎨',
    description: 'Premium quality paints and coatings'
  },
  {
    id: 'construction',
    name: 'Construction Materials',
    icon: '🏗️',
    description: 'Building materials for all construction needs'
  },
  {
    id: 'agriculture',
    name: 'Agriculture Materials',
    icon: '🌾',
    description: 'Irrigation pipes and agricultural solutions'
  }
];

const contactInfo = {
  phone: '+91 1800-XXX-XXXX',
  email: 'sales@princepipes.com',
  whatsapp: '+91 98765-43210',
  address: 'Prince Piping Systems Pvt. Ltd., New Delhi, India',
  hours: 'Mon–Sat, 9:00 AM – 6:00 PM IST'
};

const stats = [
  { number: '37+', label: 'Years', icon: '🏆', color: '#e84040' },
  { number: '5000+', label: 'Dealers', icon: '🤝', color: '#60b3ff' },
  { number: '500+', label: 'Products', icon: '📦', color: '#4de8b0' },
  { number: '28', label: 'States', icon: '🗺️', color: '#ffd166' }
];

// ═══════════════════════════════════════════════════════════════
// HELPER COMPONENTS
// ═══════════════════════════════════════════════════════════════

const SectionLabel = ({ text }) => (
  <div className="flex items-center gap-2.5 text-[#cc1f1f] text-[0.7rem] tracking-[4px] uppercase font-bold mb-3">
    <span className="block w-[26px] h-[2px] bg-[#cc1f1f]" />
    {text}
  </div>
);

const Stars = ({ n }) =>
  Array.from({ length: n }).map((_, i) => (
    <span key={i} className="text-[#f59e0b] text-sm">
      ★
    </span>
  ));

// ═══════════════════════════════════════════════════════════════
// PRODUCT CAROUSEL COMPONENT
// ═══════════════════════════════════════════════════════════════

const ProductCarousel = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 3000, stopOnInteraction: false })
  ]);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on('select', onSelect);
    return () => emblaApi.off('select', onSelect);
  }, [emblaApi, onSelect]);

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  return (
    <div className="relative">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {featuredProducts.map((product) => (
            <div key={product.id} className="flex-[0_0_100%] min-w-0">
              <div className="bg-gradient-to-br from-[#1a1a2e] via-[#2d1040] to-[#1a2a4e] rounded-3xl p-12 mx-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
                  <div className="order-2 md:order-1">
                    <div className="inline-flex items-center gap-2 bg-[rgba(204,31,31,0.15)] border border-[rgba(204,31,31,0.3)] rounded-full px-3.5 py-1.5 mb-6">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#e84040]" />
                      <span className="text-[#ff8080] text-[0.72rem] font-semibold tracking-wider uppercase">
                        {product.category}
                      </span>
                    </div>
                    <h2 className="text-5xl font-black leading-tight mb-5 text-white tracking-tight">
                      {product.name}
                    </h2>
                    <p className="text-[rgba(255,255,255,0.6)] text-lg leading-relaxed mb-8 max-w-md">
                      {product.description}
                    </p>
                    <div className="flex flex-wrap gap-3 mb-8">
                      {product.features.map((feature, idx) => (
                        <span
                          key={idx}
                          className="bg-[rgba(255,255,255,0.1)] border border-[rgba(255,255,255,0.2)] text-white px-4 py-2 rounded-lg text-sm font-medium backdrop-blur-sm"
                        >
                          ✓ {feature}
                        </span>
                      ))}
                    </div>
                    <div className="flex items-center gap-6">
                      <div>
                        <div className="text-[rgba(255,255,255,0.5)] text-xs uppercase tracking-widest mb-1">
                          Starting From
                        </div>
                        <div className="text-[#4de8b0] text-4xl font-black tracking-tight">
                          ₹{product.price.toLocaleString()}
                        </div>
                      </div>
                      <Link
                        to="/login"
                        className="bg-gradient-to-r from-[#cc1f1f] to-[#e84040] text-white px-8 py-3.5 rounded-lg font-bold text-sm shadow-lg shadow-[rgba(204,31,31,0.4)] hover:shadow-xl transition-all"
                      >
                        Enquire Now →
                      </Link>
                    </div>
                  </div>
                  <div className="order-1 md:order-2 flex items-center justify-center">
                    <div className="text-[15rem] leading-none filter drop-shadow-2xl">
                      {product.image}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={scrollPrev}
        className="absolute left-8 top-1/2 -translate-y-1/2 w-12 h-12 bg-[rgba(255,255,255,0.1)] hover:bg-[rgba(255,255,255,0.2)] border border-[rgba(255,255,255,0.2)] rounded-full flex items-center justify-center text-white backdrop-blur-md transition-all z-10"
      >
        ←
      </button>
      <button
        onClick={scrollNext}
        className="absolute right-8 top-1/2 -translate-y-1/2 w-12 h-12 bg-[rgba(255,255,255,0.1)] hover:bg-[rgba(255,255,255,0.2)] border border-[rgba(255,255,255,0.2)] rounded-full flex items-center justify-center text-white backdrop-blur-md transition-all z-10"
      >
        →
      </button>

      {/* Dots */}
      <div className="flex justify-center gap-2 mt-6">
        {featuredProducts.map((_, index) => (
          <button
            key={index}
            onClick={() => emblaApi && emblaApi.scrollTo(index)}
            className={`h-2 rounded-full transition-all ${
              index === selectedIndex
                ? 'w-8 bg-[#cc1f1f]'
                : 'w-2 bg-[rgba(26,26,46,0.2)] hover:bg-[rgba(26,26,46,0.3)]'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

// ═══════════════════════════════════════════════════════════════
// MAIN HOME PAGE COMPONENT
// ═══════════════════════════════════════════════════════════════

const HomePage = () => {
  return (
    <div className="bg-[#f8f6f2] text-[#1a1a2e] font-['Outfit','Segoe_UI',sans-serif] overflow-x-hidden">
      {/* ═══ HEADER ═══════════════════════════════════════════════════ */}
      <header className="bg-white border-b border-[rgba(26,26,46,0.08)] sticky top-0 z-50 shadow-sm">
        <div className="max-w-[1400px] mx-auto px-10">
          {/* Top Bar - Logo and Name */}
          <div className="flex items-center justify-between py-4">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#cc1f1f] to-[#e84040] flex items-center justify-center text-2xl font-black text-white font-['Georgia',serif] shadow-md">
                P
              </div>
              <div>
                <div className="text-[#1a1a2e] font-black text-base tracking-[2.5px] font-['Georgia',serif] leading-none">
                  PRINCE
                </div>
                <div className="text-[#cc1f1f] text-[0.52rem] tracking-[3px] font-bold">
                  PIPING SYSTEMS
                </div>
              </div>
            </div>

            {/* Center - Distributor Name */}
            <div className="hidden md:block text-center">
              <h1 className="text-2xl font-black text-[#1a1a2e] tracking-tight">
                Authorized Distributor Portal
              </h1>
              <p className="text-xs text-[#9898b8] tracking-widest uppercase mt-1">
                Pan-India Distribution Network
              </p>
            </div>

            {/* Right - Dealer Login Button */}
            <Link
              to="/login"
              className="bg-gradient-to-r from-[#cc1f1f] to-[#e84040] text-white px-6 py-2.5 rounded-lg font-bold text-sm shadow-md hover:shadow-lg transition-all"
            >
              Dealer Login
            </Link>
          </div>

          {/* Navigation Bar */}
          <nav className="border-t border-[rgba(26,26,46,0.06)]">
            <div className="flex items-center justify-center gap-8 py-4">
              <a
                href="#home"
                className="text-sm font-semibold text-[#1a1a2e] hover:text-[#cc1f1f] transition-colors"
              >
                Home
              </a>
              <a
                href="#about"
                className="text-sm font-semibold text-[#1a1a2e] hover:text-[#cc1f1f] transition-colors"
              >
                About Distributor
              </a>
              <a
                href="#products"
                className="text-sm font-semibold text-[#1a1a2e] hover:text-[#cc1f1f] transition-colors"
              >
                Product Categories
              </a>
              <a
                href="#contact"
                className="text-sm font-semibold text-[#1a1a2e] hover:text-[#cc1f1f] transition-colors"
              >
                Contact Distributor
              </a>
            </div>
          </nav>
        </div>
      </header>

      {/* ═══ HERO CAROUSEL ═══════════════════════════════════════════════ */}
      <section id="home" className="bg-[#f8f6f2] py-16">
        <div className="max-w-[1400px] mx-auto px-10">
          <div className="text-center mb-12">
            <SectionLabel text="Featured Products" />
            <h2 className="text-5xl font-black mb-4 tracking-tight">
              New Arrivals & <span className="text-[#cc1f1f]">Best Sellers</span>
            </h2>
            <p className="text-[#6b6b8d] text-lg max-w-2xl mx-auto leading-relaxed">
              Explore our latest collection of premium piping systems and solutions
            </p>
          </div>
          <ProductCarousel />
        </div>
      </section>

      {/* ═══ ABOUT DISTRIBUTOR ═══════════════════════════════════════════ */}
      <section id="about" className="bg-white py-24">
        <div className="max-w-[1400px] mx-auto px-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
            <div>
              <SectionLabel text="About Us" />
              <h2 className="text-5xl font-black mb-5 leading-tight tracking-tight">
                Building India's <span className="text-[#cc1f1f]">Infrastructure</span> For 37
                Years
              </h2>
              <p className="text-[#6b6b8d] text-base leading-relaxed mb-4">
                Prince Piping Systems Pvt. Ltd. was established in 1987 with a vision to
                provide high-quality, durable piping solutions to India's rapidly growing
                construction and infrastructure sectors.
              </p>
              <p className="text-[#9898b8] text-sm leading-relaxed mb-8">
                With state-of-the-art manufacturing facilities, stringent quality control, and a
                pan-India distribution network of over 5,000 active dealers, we continue to set
                the benchmark for piping excellence.
              </p>
              <div className="flex gap-3.5 flex-wrap">
                {[['ISO 9001', 'Certified'], ['ISI', 'Marked'], ['BIS', 'Approved']].map(
                  ([t, s]) => (
                    <div
                      key={t}
                      className="text-center px-4 py-3.5 bg-[#fef5f5] border border-[rgba(204,31,31,0.15)] rounded-xl"
                    >
                      <div className="text-[#cc1f1f] font-extrabold text-base">{t}</div>
                      <div className="text-[#9898b8] text-[0.65rem] tracking-wider uppercase mt-0.5">
                        {s}
                      </div>
                    </div>
                  )
                )}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3.5">
              {stats.map(({ number, label, icon, color }) => (
                <div
                  key={label}
                  className="bg-[#f8f6f2] border border-[rgba(26,26,46,0.08)] rounded-2xl p-6 text-center hover:border-[rgba(204,31,31,0.2)] transition-all hover:shadow-lg"
                  style={{ borderColor: `${color}22` }}
                >
                  <div className="text-4xl mb-2">{icon}</div>
                  <div
                    className="text-4xl font-black tracking-tighter mb-1"
                    style={{ color }}
                  >
                    {number}
                  </div>
                  <div className="text-[#9898b8] text-xs">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══ TRUSTED BRANDS ══════════════════════════════════════════════ */}
      <section className="bg-[#f8f6f2] py-24">
        <div className="max-w-[1400px] mx-auto px-10">
          <div className="text-center mb-14">
            <SectionLabel text="Our Partners" />
            <h2 className="text-5xl font-black mb-4 tracking-tight">
              Trusted <span className="text-[#cc1f1f]">Brands</span> We Distribute
            </h2>
            <p className="text-[#6b6b8d] text-base max-w-xl mx-auto leading-relaxed">
              We partner with India's leading manufacturers to bring you the best quality
              products
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-5">
            {trustedBrands.map((brand) => (
              <div
                key={brand.id}
                className="bg-white border border-[rgba(26,26,46,0.07)] rounded-2xl p-8 text-center hover:border-[rgba(204,31,31,0.25)] hover:shadow-xl hover:-translate-y-1 transition-all cursor-default"
              >
                <div className="text-6xl mb-4">{brand.logo}</div>
                <h3
                  className="text-xl font-black mb-2 tracking-tight"
                  style={{ color: brand.color }}
                >
                  {brand.name}
                </h3>
                <p className="text-[#9898b8] text-xs leading-relaxed">{brand.tagline}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ SERVICES ═════════════════════════════════════════════════════ */}
      <section className="bg-white py-24">
        <div className="max-w-[1400px] mx-auto px-10">
          <div className="text-center mb-14">
            <SectionLabel text="What We Offer" />
            <h2 className="text-5xl font-black mb-4 tracking-tight">Our Services</h2>
            <p className="text-[#6b6b8d] text-base max-w-xl mx-auto leading-relaxed">
              More than just pipes — end-to-end solutions for your construction needs
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
            {services.map((s, i) => (
              <div
                key={i}
                className="bg-[#f8f6f2] border border-[rgba(26,26,46,0.07)] rounded-2xl p-8 hover:border-[rgba(204,31,31,0.3)] hover:-translate-y-1 hover:shadow-lg transition-all cursor-default"
              >
                <div className="text-5xl mb-3.5">{s.icon}</div>
                <h3 className="text-[#1a1a2e] text-base font-bold mb-2.5">{s.title}</h3>
                <p className="text-[#6b6b8d] text-[0.83rem] leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ PRODUCT CATEGORIES ══════════════════════════════════════════ */}
      <section id="products" className="bg-[#f8f6f2] py-24">
        <div className="max-w-[1400px] mx-auto px-10">
          <div className="text-center mb-14">
            <SectionLabel text="Product Range" />
            <h2 className="text-5xl font-black mb-4 tracking-tight">
              Product <span className="text-[#cc1f1f]">Categories</span>
            </h2>
            <p className="text-[#6b6b8d] text-base max-w-xl mx-auto leading-relaxed">
              Comprehensive range of materials for all your construction needs
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-5 mb-16">
            {productCategories.map((cat) => (
              <div
                key={cat.id}
                className="bg-white border border-[rgba(26,26,46,0.07)] rounded-2xl p-8 text-center hover:border-[rgba(204,31,31,0.3)] hover:-translate-y-1 hover:shadow-lg transition-all cursor-pointer"
              >
                <div className="text-6xl mb-4">{cat.icon}</div>
                <h3 className="text-[#1a1a2e] text-lg font-bold mb-2">{cat.name}</h3>
                <p className="text-[#9898b8] text-sm leading-relaxed">{cat.description}</p>
              </div>
            ))}
          </div>

          {/* Featured Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {initialProducts.map((p) => (
              <div
                key={p.id}
                className="bg-white border border-[rgba(26,26,46,0.07)] rounded-2xl overflow-hidden hover:border-[rgba(204,31,31,0.25)] hover:-translate-y-1 hover:shadow-lg transition-all cursor-default"
              >
                <div className="h-32 bg-gradient-to-br from-[#fef0f0] to-[#f0f0ff] flex items-center justify-center text-6xl">
                  {p.image}
                </div>
                <div className="p-5">
                  <div className="text-[#cc1f1f] text-[0.63rem] font-bold tracking-widest uppercase mb-1.5">
                    {p.category}
                  </div>
                  <h3 className="text-[#1a1a2e] text-base font-bold mb-2">{p.name}</h3>
                  <p className="text-[#6b6b8d] text-[0.82rem] mb-3.5 leading-relaxed">
                    {p.description.substring(0, 80)}...
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-[#cc1f1f] font-extrabold text-lg">
                      ₹{p.price.toLocaleString()}
                    </span>
                    <Link
                      to="/login"
                      className="text-[#9898b8] hover:text-[#cc1f1f] text-xs font-semibold transition-colors"
                    >
                      Enquire →
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ TESTIMONIALS ═════════════════════════════════════════════════ */}
      <section className="bg-white py-24">
        <div className="max-w-[1400px] mx-auto px-10">
          <div className="text-center mb-14">
            <SectionLabel text="Client Stories" />
            <h2 className="text-5xl font-black mb-4 tracking-tight">
              What Our <span className="text-[#cc1f1f]">Partners</span> Say
            </h2>
            <p className="text-[#6b6b8d] text-base max-w-xl mx-auto leading-relaxed">
              Trusted by thousands of contractors, builders, and dealers across India
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {testimonials.map((t) => (
              <div
                key={t.id}
                className="bg-[#f8f6f2] border border-[rgba(26,26,46,0.07)] rounded-2xl p-7 hover:border-[rgba(204,31,31,0.2)] hover:shadow-lg transition-all"
              >
                <div className="mb-3.5">
                  <Stars n={t.rating} />
                </div>
                <p className="text-[#4a4a6a] text-sm leading-relaxed mb-5 italic">
                  "{t.text}"
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-full bg-gradient-to-br from-[#cc1f1f] to-[#e84040] flex items-center justify-center text-white font-bold text-sm shadow-md">
                    {t.initials}
                  </div>
                  <div>
                    <div className="text-[#1a1a2e] font-bold text-sm">{t.name}</div>
                    <div className="text-[#9898b8] text-xs">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ CTA / GET STARTED ════════════════════════════════════════════ */}
      <section className="bg-[#f8f6f2] py-24">
        <div className="max-w-[1400px] mx-auto px-10">
          <div className="bg-gradient-to-br from-[#1a1a2e] via-[#2d1040] to-[#1a2a4e] rounded-3xl p-16 text-center relative overflow-hidden">
            {/* Decorative glow */}
            <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-[radial-gradient(circle,rgba(204,31,31,0.2),transparent_70%)] pointer-events-none" />
            
            <SectionLabel text="Become a Partner" />
            <h2 className="text-white text-5xl font-black mb-3.5 tracking-tight">
              Join Our Dealer Network
            </h2>
            <p className="text-[rgba(255,255,255,0.5)] text-base max-w-xl mx-auto mb-8 leading-relaxed">
              Become an authorised Prince Piping dealer and access exclusive pricing, marketing
              support, and a dedicated sales team.
            </p>
            <Link
              to="/login"
              className="inline-block bg-gradient-to-r from-[#cc1f1f] to-[#e84040] text-white px-11 py-4 rounded-lg font-extrabold text-sm shadow-xl shadow-[rgba(204,31,31,0.45)] hover:shadow-2xl transition-all"
            >
              Get Started →
            </Link>
          </div>
        </div>
      </section>

      {/* ═══ CONTACT ══════════════════════════════════════════════════════ */}
      <section id="contact" className="bg-white py-24">
        <div className="max-w-[1400px] mx-auto px-10">
          <div className="text-center mb-14">
            <SectionLabel text="Get In Touch" />
            <h2 className="text-5xl font-black mb-4 tracking-tight">
              Contact <span className="text-[#cc1f1f]">Distributor</span>
            </h2>
            <p className="text-[#6b6b8d] text-base max-w-xl mx-auto leading-relaxed">
              We're here to help. Reach out to us through any of these channels
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4.5">
            {[
              {
                icon: '📞',
                t: 'Call Us',
                v: contactInfo.phone,
                s: contactInfo.hours,
                c: '#0d9f6e',
                bg: '#e6f9f3'
              },
              {
                icon: '✉️',
                t: 'Email Us',
                v: contactInfo.email,
                s: 'We reply within 24 hours',
                c: '#1a6dc8',
                bg: '#e8f2fe'
              },
              {
                icon: '💬',
                t: 'WhatsApp Chat',
                v: contactInfo.whatsapp,
                s: 'Quick response guaranteed',
                c: '#25d366',
                bg: '#e6f9ed'
              }
            ].map(({ icon, t, v, s, c, bg }) => (
              <div
                key={t}
                className="rounded-2xl p-6 flex items-start gap-3.5 border transition-all hover:shadow-lg"
                style={{ background: bg, borderColor: `${c}22` }}
              >
                <div
                  className="w-11 h-11 rounded-xl bg-white flex items-center justify-center text-2xl flex-shrink-0 shadow-sm"
                >
                  {icon}
                </div>
                <div>
                  <div
                    className="text-[0.68rem] tracking-widest uppercase font-bold mb-1"
                    style={{ color: `${c}cc` }}
                  >
                    {t}
                  </div>
                  <div className="text-[#1a1a2e] font-bold text-sm mb-0.5">{v}</div>
                  <div className="text-[#9898b8] text-xs">{s}</div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <div className="bg-[#f8f6f2] border border-[rgba(26,26,46,0.07)] rounded-2xl p-6">
              <div className="text-2xl mb-2">🏢</div>
              <div className="text-[#1a1a2e] font-bold text-base mb-1">Head Office</div>
              <div className="text-[#6b6b8d] text-sm">{contactInfo.address}</div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ FOOTER ═══════════════════════════════════════════════════════ */}
      <footer className="bg-[#1a1a2e] py-16">
        <div className="max-w-[1400px] mx-auto px-10">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-14 mb-12">
            <div>
              <div className="flex items-center gap-2.5 mb-4.5">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#cc1f1f] to-[#e84040] flex items-center justify-center text-lg font-black text-white font-['Georgia',serif]">
                  P
                </div>
                <div>
                  <div className="text-white font-black text-sm tracking-[2.5px] font-['Georgia',serif] leading-none">
                    PRINCE
                  </div>
                  <div className="text-[#cc1f1f] text-[0.52rem] tracking-[3px] font-bold">
                    PIPING SYSTEMS
                  </div>
                </div>
              </div>
              <p className="text-[rgba(255,255,255,0.4)] text-[0.83rem] leading-relaxed max-w-xs">
                India's most trusted piping brand since 1987. Committed to quality, innovation,
                and sustainable infrastructure.
              </p>
            </div>
            {[
              [
                'Products',
                ['UPVC Pipes', 'CPVC Pipes', 'SWR Drainage', 'Column Pipes', 'HDPE Pipes']
              ],
              ['Company', ['About Us', 'Certifications', 'Careers', 'News & Press', 'CSR']],
              [
                'Support',
                ['Dealer Login', 'Technical Docs', 'Installation Guide', 'Warranty', 'Contact Us']
              ]
            ].map(([title, links]) => (
              <div key={title}>
                <h4 className="text-white text-xs tracking-widest uppercase font-bold mb-4.5">
                  {title}
                </h4>
                {links.map((l) => (
                  <div
                    key={l}
                    className="text-[rgba(255,255,255,0.4)] hover:text-[rgba(255,255,255,0.8)] text-[0.82rem] mb-2 cursor-pointer transition-colors"
                  >
                    {l}
                  </div>
                ))}
              </div>
            ))}
          </div>
          <div className="border-t border-[rgba(255,255,255,0.08)] pt-6.5 flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-[rgba(255,255,255,0.25)] text-xs">
              © 2026 Prince Piping Systems Pvt. Ltd. All rights reserved.
            </div>
            <div className="flex gap-4.5">
              {['Privacy Policy', 'Terms of Use', 'Cookie Policy'].map((l) => (
                <span
                  key={l}
                  className="text-[rgba(255,255,255,0.25)] hover:text-[rgba(255,255,255,0.65)] text-xs cursor-pointer transition-colors"
                >
                  {l}
                </span>
              ))}
            </div>
          </div>
        </div>
      </footer>

      {/* ═══ GLOBAL STYLES ════════════════════════════════════════════════ */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800;900&family=Playfair+Display:wght@700;800&display=swap');
        html { scroll-behavior: smooth; }
        * { box-sizing: border-box; }
        ::-webkit-scrollbar { width: 6px; }
        ::-webkit-scrollbar-track { background: #f0ede8; }
        ::-webkit-scrollbar-thumb { background: #cc1f1f; border-radius: 3px; }
        ::-webkit-scrollbar-thumb:hover { background: #e84040; }
      `}</style>
    </div>
  );
};

// ═══════════════════════════════════════════════════════════════
// APP WRAPPER WITH ROUTER
// ═══════════════════════════════════════════════════════════════

export default HomePage;
