import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Trophy,
  ShieldCheck,
  Play,
  Hammer,
  Star,
  ChevronRight,
  ChevronLeft,
  Cpu,
  Globe,
  Rocket,
  Home
} from 'lucide-react';
import { Link } from 'react-router-dom';

const Presentation = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(0);

  const slides = [
    // Slide 1: Title
    {
      type: 'hero',
      title: "Block Valley {LABS}",
      tagline: "Where Entertainment Becomes Infrastructure",
      mantra: "Play with curiosity. Build with discipline. Grow with integrity.",
      bg: "from-[#FF007A] to-[#0075FF]",
      content: (
        <div className="animate-pulse flex flex-col items-center">
          <div className="w-16 h-16 md:w-20 md:h-20 bg-white/20 rounded-full flex items-center justify-center mb-4">
            <Trophy size={32} className="text-white md:w-12 md:h-12" />
          </div>
          <p className="text-sm md:text-lg tracking-[0.3em] uppercase opacity-80">Master Presentation 2026</p>
        </div>
      )
    },
    // Slide 2: Vision & Belief
    {
      title: "Our Vision",
      subtitle: "Culture as the Onramp",
      bg: "from-[#00D1FF] to-[#00FF85]",
      content: (
        <div className="grid md:grid-cols-2 gap-6 md:gap-8 items-center">
          <div className="space-y-3 md:space-y-4">
            <h3 className="text-2xl md:text-3xl font-bold leading-tight">
              "People adopt technology through culture, not explanations."
            </h3>
            <p className="text-base md:text-lg opacity-80 border-l-4 border-white pl-4">
              Entertainment creates trust. Trust creates curiosity. Curiosity opens the door to Web3.
            </p>
          </div>
          <div className="bg-white/10 p-4 md:p-6 rounded-2xl md:rounded-3xl backdrop-blur-md">
            <div className="flex items-center gap-3 mb-3 md:mb-4">
              <Globe className="text-[#00FF85] w-5 h-5" />
              <span className="text-xs md:text-sm font-bold uppercase tracking-widest">Long Term Vision</span>
            </div>
            <p className="text-sm md:text-base leading-relaxed">
              Block Valley aims to become the leading bridge between Web2 culture and Web3 infrastructure by turning live entertainment and competition into long-term digital economies.
            </p>
          </div>
        </div>
      )
    },
    // Slide 3: The Core Idea
    {
      title: "The Core Idea",
      subtitle: "Entertainment First, Tech Second",
      bg: "from-[#FF007A] to-[#FF5C00]",
      content: (
        <div className="space-y-4 md:space-y-6">
          <p className="text-lg md:text-xl font-medium">We design live sports tournaments where Web2 and Web3 brands exist in the same physical environment.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-3">
            {[
              "Lead with live entertainment, not tech pitches",
              "Mix Web2 and Web3 through shared experiences",
              "Earn trust before introducing infrastructure",
              "Only build Web3 when curiosity exists",
              "Align long-term incentives vs short-term hype"
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3 bg-black/20 p-3 rounded-xl">
                <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center shrink-0">
                  <Star size={12} fill="white" />
                </div>
                <span className="text-sm md:text-base font-semibold">{item}</span>
              </div>
            ))}
          </div>
        </div>
      )
    },
    // Slide 4: Dual Layer Architecture
    {
      title: "The Two Faces of BV",
      subtitle: "Front Stage vs. Backstage",
      bg: "from-[#00D1FF] to-[#0075FF]",
      content: (
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-[#FF007A]/20 border border-[#FF007A]/40 p-8 rounded-3xl group hover:bg-[#FF007A]/30 transition-all">
            <div className="flex items-center gap-3 mb-4">
              <Play className="text-[#FF007A]" fill="#FF007A" size={32} />
              <h4 className="text-3xl font-black uppercase italic">Front Stage</h4>
            </div>
            <p className="text-sm font-bold tracking-widest text-[#FF007A] mb-4">ENTERTAINMENT LAYER</p>
            <ul className="space-y-3 opacity-90">
              <li>• Pickleball & Lifestyle sports</li>
              <li>• Content-first environments</li>
              <li>• Low technical barriers</li>
              <li>• Trust-building through play</li>
            </ul>
          </div>
          <div className="bg-[#00FF85]/10 border border-[#00FF85]/40 p-8 rounded-3xl group hover:bg-[#00FF85]/20 transition-all">
            <div className="flex items-center gap-3 mb-4">
              <Cpu className="text-[#00FF85]" size={32} />
              <h4 className="text-3xl font-black uppercase italic">Backstage</h4>
            </div>
            <p className="text-sm font-bold tracking-widest text-[#00FF85] mb-4">INFRASTRUCTURE LAYER</p>
            <ul className="space-y-3 opacity-90">
              <li>• Tokenization & RWA strategy</li>
              <li>• Legal-first compliant structuring</li>
              <li>• Capital & Ecosystem networking</li>
              <li>• Strategic digital asset design</li>
            </ul>
          </div>
        </div>
      )
    },
    // Slide 5: The Funnel
    {
      title: "The Power Funnel",
      subtitle: "Monetizing the Journey",
      bg: "from-[#00D1FF] to-[#FF007A]",
      content: (
        <div className="flex flex-col md:flex-row gap-4 items-stretch h-full">
          {[
            {
              step: "01. PLAY",
              layer: "Entertainment",
              color: "border-[#00FF85]",
              icon: <Trophy />,
              desc: "Earn attention and emotional buy-in through live formats."
            },
            {
              step: "02. BUILD",
              layer: "Transition",
              color: "border-[#00D1FF]",
              icon: <Hammer />,
              desc: "Convert curiosity into strategy and digital identity."
            },
            {
              step: "03. GROW",
              layer: "Infrastructure",
              color: "border-[#FF007A]",
              icon: <Rocket />,
              desc: "Fully build and scale Web3 presence with long-term alignment."
            }
          ].map((item, i) => (
            <div key={i} className={`flex-1 bg-black/30 p-8 rounded-3xl border-t-8 ${item.color} flex flex-col`}>
              <div className="mb-6">{item.icon}</div>
              <h5 className="text-4xl font-black italic tracking-tighter mb-2">{item.step}</h5>
              <p className="text-xs font-bold uppercase tracking-widest opacity-60 mb-4">{item.layer}</p>
              <p className="opacity-80 leading-relaxed">{item.desc}</p>
              <div className="mt-auto pt-6 flex flex-wrap gap-2">
                <div className="px-3 py-1 bg-white/10 rounded-full text-[10px] font-bold">REVENUE SOURCE</div>
              </div>
            </div>
          ))}
        </div>
      )
    },
    // Slide 6: Revenue Model
    {
      title: "Revenue Model",
      subtitle: "Diversified & Scalable",
      bg: "from-[#FF007A] to-[#00D1FF]",
      content: (
        <div className="grid md:grid-cols-3 gap-6">
          <div className="space-y-4">
            <h6 className="text-2xl font-bold text-[#00FF85]">Events</h6>
            <ul className="space-y-2 opacity-70">
              <li>• Sponsorships</li>
              <li>• Ticket Sales</li>
              <li>• Entry Fees</li>
              <li>• Media Rights</li>
            </ul>
          </div>
          <div className="space-y-4">
            <h6 className="text-2xl font-bold text-[#00D1FF]">Services</h6>
            <ul className="space-y-2 opacity-70">
              <li>• Web3 Identity Setup</li>
              <li>• Token Strategy</li>
              <li>• Community Mgmt</li>
              <li>• Marketing Systems</li>
            </ul>
          </div>
          <div className="space-y-4">
            <h6 className="text-2xl font-bold text-[#FF007A]">Alignment</h6>
            <ul className="space-y-2 opacity-70">
              <li>• Token Allocation</li>
              <li>• RWA Profit Share</li>
              <li>• Strategic Partnerships</li>
              <li>• Digital Sales Cut</li>
            </ul>
          </div>
        </div>
      )
    },
    // Slide 7: Philosophy & Culture
    {
      title: "Operating Philosophy",
      subtitle: "The Brand DNA",
      bg: "from-[#0A0A0A] to-[#1A1A1A]",
      content: (
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-4">
            <h4 className="text-xl font-bold text-[#00FF85] uppercase tracking-widest">Principles</h4>
            <div className="space-y-2">
              {[
                "Entertainment earns attention",
                "Trust precedes technology",
                "Discipline protects value",
                "Integrity compounds reputation",
                "Culture is the fastest onramp"
              ].map((p, i) => (
                <div key={i} className="flex items-center gap-3">
                  <ShieldCheck size={18} className="text-[#00FF85]" />
                  <span className="opacity-90">{p}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-[#FF007A] to-[#00D1FF] p-1 rounded-3xl">
              <div className="bg-black p-8 rounded-[22px]">
                <h4 className="text-xl font-bold mb-4">The Personality</h4>
                <div className="flex flex-wrap gap-2">
                  {["Entertaining", "Human", "Confident", "Trustworthy", "Long-term oriented"].map(p => (
                    <span key={p} className="px-3 py-1 bg-white/10 rounded-full text-xs font-bold uppercase">{p}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    // Slide 8: Partner Profile
    {
      title: "Who is this for?",
      subtitle: "Selecting for Alignment",
      bg: "from-[#00D1FF] to-[#00FF85]",
      content: (
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white/10 p-8 rounded-3xl border-l-4 border-[#00FF85]">
            <h4 className="text-2xl font-bold mb-6">Ideal Partners</h4>
            <ul className="space-y-3 opacity-90">
              <li>• Web2 brands curious about Web3</li>
              <li>• KOLs seeking digital upside</li>
              <li>• Sports & lifestyle brands</li>
              <li>• Enterprises exploring RWAs</li>
            </ul>
          </div>
          <div className="bg-red-500/10 p-8 rounded-3xl border-l-4 border-red-500">
            <h4 className="text-2xl font-bold mb-6">Not For</h4>
            <ul className="space-y-3 opacity-90">
              <li>• Short-term hype seekers</li>
              <li>• Purely speculative projects</li>
              <li>• Brands avoiding culture</li>
              <li>• Quick-flip token schemes</li>
            </ul>
          </div>
        </div>
      )
    },
    // Slide 9: North Star
    {
      type: 'hero',
      title: "North Star",
      tagline: "Building value that lasts.",
      bg: "from-[#FF007A] via-[#00D1FF] to-[#00FF85]",
      content: (
        <div className="max-w-3xl text-center space-y-8">
          <h2 className="text-4xl md:text-6xl font-black italic uppercase tracking-tighter">
            "Block Valley turns live entertainment into long-term digital value."
          </h2>
          <div className="h-1 w-24 bg-white mx-auto"></div>
          <p className="text-2xl font-light opacity-80">Bridging culture, community, and Web3 with discipline and integrity.</p>
        </div>
      )
    }
  ];

  const nextSlide = () => {
    setDirection(1);
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const current = slides[currentSlide];

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  };

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset, velocity) => {
    return Math.abs(offset) * velocity;
  };

  return (
    <div className="h-screen bg-[#0A0A0A] text-white flex flex-col font-sans overflow-hidden [&_h1]:text-white [&_h2]:text-white [&_h3]:text-white [&_h4]:text-white [&_h5]:text-white [&_h6]:text-white">
      {/* Background Gradient Effect */}
      <div className={`fixed inset-0 bg-gradient-to-br ${current.bg} opacity-20 blur-[100px] transition-all duration-1000`} />

      {/* Header */}
      <nav className="relative z-10 p-4 md:p-6 flex justify-between items-center flex-shrink-0">
        <div className="flex items-center gap-2 md:gap-3">
          <img
            src="/LABS_2.png"
            alt="Block Valley Labs"
            className="h-8 md:h-12 object-contain"
          />
        </div>
        <div className="flex items-center gap-4 md:gap-8">
          <div className="hidden md:flex gap-8 lg:gap-12 text-[10px] font-bold uppercase tracking-[0.3em] opacity-40">
            <span>Entertainment</span>
            <span>Infrastructure</span>
            <span>Integrity</span>
          </div>
          <Link
            to="/"
            className="flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors text-sm md:text-base"
          >
            <Home className="w-4 h-4" />
            <span className="hidden md:inline">Home</span>
          </Link>
        </div>
      </nav>

      {/* Slide Content */}
      <main className="relative z-10 flex-1 flex items-center justify-center px-4 md:px-8 lg:px-12 py-4 overflow-hidden">
        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.div
            key={currentSlide}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 }
            }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={1}
            onDragEnd={(e, { offset, velocity }) => {
              const swipe = swipePower(offset.x, velocity.x);

              if (swipe < -swipeConfidenceThreshold) {
                nextSlide();
              } else if (swipe > swipeConfidenceThreshold) {
                prevSlide();
              }
            }}
            className="w-full max-w-6xl h-full flex items-center justify-center absolute"
          >
            <div className="w-full h-full flex items-center justify-center">
              {current.type === 'hero' ? (
                <div className="flex flex-col items-center text-center space-y-6 md:space-y-8">
                  <div className="space-y-2 md:space-y-4 flex flex-col items-center">
                    {current.title === "Block Valley {LABS}" ? (
                      <img
                        src="/LABS_2.png"
                        alt="Block Valley Labs"
                        className="w-full max-w-2xl md:max-w-4xl h-auto object-contain"
                      />
                    ) : (
                      <h1 className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-black uppercase italic tracking-tighter leading-none">
                        {current.title}
                      </h1>
                    )}
                    <p className="text-xl md:text-2xl lg:text-3xl font-bold tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-white to-white/40 uppercase italic">
                      {current.tagline}
                    </p>
                  </div>
                  {current.mantra && (
                    <div className="p-3 md:p-4 bg-white/5 border border-white/10 rounded-full px-6 md:px-12">
                      <p className="text-xs md:text-sm lg:text-base font-mono tracking-widest opacity-60 uppercase">{current.mantra}</p>
                    </div>
                  )}
                  {current.content}
                </div>
              ) : (
                <div className="space-y-4 md:space-y-6 lg:space-y-8 max-h-full overflow-auto">
                  <div className="border-l-4 md:border-l-8 border-white pl-4 md:pl-8">
                    <h2 className="text-3xl md:text-5xl lg:text-6xl font-black uppercase italic tracking-tighter leading-none">
                      {current.title}
                    </h2>
                    <p className="text-base md:text-xl lg:text-2xl font-bold uppercase tracking-widest text-[#00FF85] mt-2 md:mt-4 italic opacity-80">
                      {current.subtitle}
                    </p>
                  </div>
                  <div className="pt-2 md:pt-4">
                    {current.content}
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Footer Navigation */}
      <footer className="relative z-10 p-4 md:p-6 flex justify-between items-center flex-shrink-0">
        <div className="flex gap-3 md:gap-4">
          <button
            onClick={prevSlide}
            className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 transition-colors"
          >
            <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
          </button>
          <button
            onClick={nextSlide}
            className="group h-12 md:h-14 px-6 md:px-10 rounded-full bg-white text-black font-black uppercase tracking-widest flex items-center gap-2 hover:scale-105 transition-transform text-xs md:text-sm"
          >
            Next <ChevronRight className="group-hover:translate-x-1 transition-transform w-4 h-4 md:w-5 md:h-5" />
          </button>
        </div>
        <div className="text-xs md:text-sm font-mono opacity-40 uppercase tracking-widest">
          {currentSlide + 1} / {slides.length}
        </div>
      </footer>

      {/* Interactive Element: Funnel indicator (bottom) */}
      <div className="fixed bottom-0 left-0 w-full h-1 flex bg-white/5 z-20">
        <div
          className="h-full bg-white transition-all duration-500 ease-out"
          style={{ width: `${((currentSlide + 1) / slides.length) * 100}%` }}
        />
      </div>
    </div>
  );
};

export default Presentation;
