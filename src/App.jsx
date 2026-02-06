import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { 
  Menu, X, Globe, Cpu, Users, Zap, Layers, 
  ArrowRight, Play, Mic, ChevronDown, 
  Twitter, Mail, ShieldCheck
} from 'lucide-react';

// --- 0. INTRO ANIMATION COMPONENT ---
const IntroAnimation = ({ onComplete }) => {
  const [textIndex, setTextIndex] = useState(0);
  const [isExiting, setIsExiting] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  const phrases = [
    "Web3 Accelerator",
    "Real World Assets",
    "Cryptocurrency",
    "DeFi Architecture",
    "Global Influence",
    "Future Economies",
    "Cognition Network"
  ];

  // Rotate text every 2.5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setTextIndex((prev) => (prev + 1) % phrases.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  const handleClick = () => {
    setIsExiting(true);
    // Wait for animation (zoom effect) to finish before unmounting
    setTimeout(() => {
      onComplete();
    }, 1200); 
  };

  return (
    <div 
      className={`fixed inset-0 z-[10000] flex items-center justify-center bg-white cursor-pointer overflow-hidden transition-all duration-[1200ms] ease-[cubic-bezier(0.7,0,0.3,1)]
        ${isExiting ? 'opacity-0 scale-[5] pointer-events-none' : 'opacity-100 scale-100'}
      `}
      onClick={handleClick}
    >
      {/* Background Subtle Grid */}
      <div className="absolute inset-0 opacity-[0.03]" 
           style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '30px 30px' }}>
      </div>

      <div className="relative w-full h-full flex items-center justify-center">
        
        {/* ROTATING LOGO STRUCTURE */}
        <div 
          className={`relative w-[60vmin] h-[60vmin] transition-all duration-700 ease-out ${isHovering ? 'scale-110' : 'scale-100'}`}
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          <div className={`absolute inset-0 w-full h-full animate-spin-slow ${isExiting ? 'animate-spin-fast' : ''}`}>
            
            {/* Pink Lobe */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-[60%] origin-bottom transition-all duration-500"
                 style={{ transform: `rotate(0deg) translateY(${isHovering ? '-10%' : '0'})` }}>
               <div className="w-full h-full rounded-full bg-gradient-to-b from-pink-500 to-pink-300 mix-blend-multiply opacity-80 blur-xl"></div>
            </div>

            {/* Blue Lobe */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-[60%] origin-bottom transition-all duration-500"
                 style={{ transform: `rotate(120deg) translateY(${isHovering ? '-10%' : '0'})` }}>
               <div className="w-full h-full rounded-full bg-gradient-to-b from-blue-500 to-blue-300 mix-blend-multiply opacity-80 blur-xl"></div>
            </div>

            {/* Green Lobe */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-[60%] origin-bottom transition-all duration-500"
                 style={{ transform: `rotate(240deg) translateY(${isHovering ? '-10%' : '0'})` }}>
               <div className="w-full h-full rounded-full bg-gradient-to-b from-green-500 to-green-300 mix-blend-multiply opacity-80 blur-xl"></div>
            </div>

          </div>
          
          {/* Inner White Core */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[30%] h-[30%] bg-white rounded-full blur-xl"></div>
        </div>

        {/* DIGITAL TEXT OVERLAY */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center pointer-events-none">
          {phrases.map((phrase, idx) => (
            <h2 
              key={idx}
              className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-3xl md:text-5xl font-bold tracking-tighter uppercase transition-all duration-1000 transform whitespace-nowrap
                ${idx === textIndex ? 'opacity-20 blur-0 scale-100' : 'opacity-0 blur-md scale-90'}
              `}
              style={{ color: '#111' }}
            >
              {phrase}
            </h2>
          ))}
        </div>

        {/* TRENDY INTERACTIVE BUTTON */}
        <div 
          className="absolute bottom-20 left-1/2 -translate-x-1/2 group"
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          <button className="relative px-8 py-3 rounded-full border border-gray-200 bg-white/50 backdrop-blur-sm text-gray-900 font-mono text-xs uppercase tracking-[0.2em] overflow-hidden transition-all duration-500 group-hover:tracking-[0.3em] group-hover:border-transparent hover:shadow-xl">
            <span className="relative z-10 group-hover:text-white transition-colors duration-500">Enter Valley</span>
            {/* Hover Fill Effect */}
            <div className="absolute inset-0 bg-black translate-y-full transition-transform duration-500 ease-out group-hover:translate-y-0"></div>
          </button>
        </div>

      </div>
      
      <style>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 10s linear infinite;
        }
        .animate-spin-fast {
          animation: spin-slow 1.5s cubic-bezier(0.5, 0, 1, 1) infinite;
        }
      `}</style>
    </div>
  );
};

// --- 1. CUSTOM CURSOR COMPONENT (Instant, Crisp, Branded) ---
const CustomCursor = () => {
  const cursorRef = useRef(null);
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);

  useEffect(() => {
    const onMouseMove = (e) => {
      // Direct, instant movement using transform for performance (No Lag)
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0) translate(-50%, -50%)`;
      }

      // Check clickable elements for hover state
      const target = e.target;
      const isInteractive = 
        target.tagName === 'BUTTON' || 
        target.tagName === 'A' || 
        target.closest('button') || 
        target.closest('a') ||
        target.classList.contains('interactive-hover');
      
      setIsHovering(!!isInteractive);
    };

    const onMouseDown = () => setIsClicking(true);
    const onMouseUp = () => setIsClicking(false);

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mouseup', onMouseUp);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mouseup', onMouseUp);
    };
  }, []);

  return (
    <>
      <style>{`
        /* DEFAULT: Hide Cursor logic completely to prevent touch interference */
        .custom-cursor-container {
          display: none;
        }

        /* ONLY enable on devices that support hover AND have a fine pointer (Mouse/Trackpad) */
        @media (hover: hover) and (pointer: fine) {
          /* Hide the system cursor */
          body { cursor: none; }
          a, button, [role="button"] { cursor: none; }
          
          /* Show the custom cursor container */
          .custom-cursor-container {
            display: flex;
          }
        }

        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 4s linear infinite;
        }
      `}</style>

      {/* Main Cursor Container - Follows Mouse Instantly */}
      <div 
        ref={cursorRef}
        className="custom-cursor-container fixed top-0 left-0 pointer-events-none z-[9999] items-center justify-center will-change-transform"
        style={{ transform: 'translate(-50%, -50%)' }} // Initial centering
      >
        {/* The Gradient Ring */}
        <div 
          className={`relative flex items-center justify-center rounded-full transition-all duration-200 ease-out
            ${isHovering ? 'w-16 h-16' : 'w-10 h-10'}
            ${isClicking ? 'scale-90' : 'scale-100'}
          `}
        >
          {/* Animated Gradient Border - Sharp, No Blur */}
          <div className="absolute inset-0 rounded-full p-[2px] animate-spin-slow" 
               style={{ 
                 background: 'conic-gradient(from 0deg, #EC4899, #3B82F6, #10B981, #EC4899)', 
                 mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                 maskComposite: 'exclude',
                 WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                 WebkitMaskComposite: 'xor',
                 borderRadius: '50%'
               }} 
          />
        </div>

        {/* The Center Dot - Stays sharp and centered */}
        <div 
          className={`absolute w-2 h-2 bg-pink-500 rounded-full transition-all duration-200 
            ${isHovering ? 'bg-blue-500 scale-125' : ''}
          `}
        />
      </div>
    </>
  );
};

// --- 2. PHYSICS ASSETS (Ball & Card) ---

// Custom "Digital" Tennis Ball SVG
const TennisBall = ({ 
  fillColor = "#ffffff", 
  seamColor = "#000000", 
  size = 60, 
  className = "", 
  style = {} 
}) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 100 100" 
    className={`drop-shadow-2xl ${className}`} 
    style={style}
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <linearGradient id="ballShine" x1="20" y1="20" x2="80" y2="80" gradientUnits="userSpaceOnUse">
        <stop stopColor="white" stopOpacity="0.9"/>
        <stop offset="1" stopColor="white" stopOpacity="0.1"/>
      </linearGradient>
    </defs>
    <circle cx="50" cy="50" r="48" fill={fillColor} />
    <circle cx="50" cy="50" r="48" fill="url(#ballShine)" opacity="0.3" />
    <path d="M2,50 C20,50 35,35 35,2" stroke={seamColor} strokeWidth="6" strokeLinecap="round" />
    <path d="M65,2 C65,35 80,50 98,50" stroke={seamColor} strokeWidth="6" strokeLinecap="round" />
    <path d="M98,50 C80,50 65,65 65,98" stroke={seamColor} strokeWidth="6" strokeLinecap="round" />
    <path d="M35,98 C35,65 20,50 2,50" stroke={seamColor} strokeWidth="6" strokeLinecap="round" />
  </svg>
);

// Interactive Card with "Racket Hit" Physics
const InteractiveCard = ({ item }) => {
  const cardRef = useRef(null);
  const ballRef = useRef(null);
  const requestRef = useRef(null);
  const isHovered = useRef(false);
  const mousePos = useRef({ x: -1000, y: -1000 });
  const prevMousePos = useRef({ x: -1000, y: -1000 });
  
  // Physics State
  const physics = useRef({
    pos: { x: 0, y: 0 },
    vel: { x: 0, y: 0 },
    angle: 0,          
    radius: 35,        // Half of 70px ball size
    friction: 0.99,    // Light friction for fluid drift
    restitution: 0.9   // Bounciness
  });

  const handleMouseEnter = () => {
    isHovered.current = true;
    if (cardRef.current) {
      const rect = cardRef.current.getBoundingClientRect();
      physics.current.pos = { x: rect.width / 2, y: rect.height / 2 };
      
      // Spawn Logic: Slow Float
      const speed = 1.5;
      const angle = Math.random() * Math.PI * 2;
      physics.current.vel = { 
        x: Math.cos(angle) * speed, 
        y: Math.sin(angle) * speed 
      };
    }
    if (!requestRef.current) {
      requestRef.current = requestAnimationFrame(animate);
    }
  };

  const handleMouseLeave = () => {
    isHovered.current = false;
    mousePos.current = { x: -1000, y: -1000 };
  };

  const handleMouseMove = (e) => {
    if (cardRef.current) {
      const rect = cardRef.current.getBoundingClientRect();
      prevMousePos.current = { ...mousePos.current };
      mousePos.current = { 
        x: e.clientX - rect.left, 
        y: e.clientY - rect.top 
      };
    }
  };

  const animate = () => {
    if (!cardRef.current || !ballRef.current) return;
    
    if (!isHovered.current) {
        requestRef.current = null;
        return; 
    }

    const rect = cardRef.current.getBoundingClientRect();
    const p = physics.current;

    // 1. Update Position
    p.pos.x += p.vel.x;
    p.pos.y += p.vel.y;

    // 2. Rotation (based on speed)
    const speed = Math.sqrt(p.vel.x * p.vel.x + p.vel.y * p.vel.y);
    p.angle += speed * 1.5; 

    // 3. Wall Collision
    if (p.pos.x - p.radius < 0) {
      p.pos.x = p.radius;
      p.vel.x *= -1 * p.restitution;
    } else if (p.pos.x + p.radius > rect.width) {
      p.pos.x = rect.width - p.radius;
      p.vel.x *= -1 * p.restitution;
    }

    if (p.pos.y - p.radius < 0) {
      p.pos.y = p.radius;
      p.vel.y *= -1 * p.restitution;
    } else if (p.pos.y + p.radius > rect.height) {
      p.pos.y = rect.height - p.radius;
      p.vel.y *= -1 * p.restitution;
    }

    // 4. "RACKET HIT" COLLISION logic
    const dx = p.pos.x - mousePos.current.x;
    const dy = p.pos.y - mousePos.current.y;
    const dist = Math.sqrt(dx * dx + dy * dy);
    
    // Hit radius = ball radius + buffer
    const hitRadius = p.radius + 15; 

    if (dist < hitRadius) {
      let nx = dx / dist;
      let ny = dy / dist;
      if (dist === 0) { nx = 1; ny = 0; }

      // Strong Impulse Force
      const hitStrength = 18; 
      
      p.vel.x += nx * hitStrength;
      p.vel.y += ny * hitStrength;
      
      // Prevent sticking
      p.pos.x += nx * 2;
      p.pos.y += ny * 2;
    }

    // 5. Friction & Speed Cap
    p.vel.x *= p.friction;
    p.vel.y *= p.friction;
    
    // Maintain Minimum Drift (Never fully stop)
    const minSpeed = 1.0;
    const currentSpeed = Math.sqrt(p.vel.x * p.vel.x + p.vel.y * p.vel.y);
    if (currentSpeed < minSpeed && currentSpeed > 0.01) {
       const scale = minSpeed / currentSpeed;
       p.vel.x *= scale;
       p.vel.y *= scale;
    }
    
    const maxSpeed = 25;
    if (currentSpeed > maxSpeed) {
       const scale = maxSpeed / currentSpeed;
       p.vel.x *= scale;
       p.vel.y *= scale;
    }

    // 6. Render
    const renderX = p.pos.x - p.radius;
    const renderY = p.pos.y - p.radius;
    ballRef.current.style.transform = `translate3d(${renderX}px, ${renderY}px, 0) rotate(${p.angle}deg)`;

    requestRef.current = requestAnimationFrame(animate);
  };

  useEffect(() => {
    return () => {
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
    };
  }, []);

  return (
    <div 
      ref={cardRef}
      className={`${item.color} ${item.size} relative rounded-3xl p-8 text-white overflow-hidden group hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 min-h-[260px] flex flex-col justify-between interactive-hover`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onMouseMove={handleMouseMove}
    >
      <div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-10 rounded-bl-full transform translate-x-10 -translate-y-10"></div>
      
      <div className="relative z-10 pointer-events-none">
        <div className="flex justify-between items-start mb-4">
            <div className="p-3 bg-white/20 rounded-2xl backdrop-blur-sm">
              {item.icon}
            </div>
            
            <div 
              ref={ballRef}
              className="absolute top-0 left-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 will-change-transform pointer-events-auto"
            >
              <TennisBall 
                fillColor="#ffffff" 
                seamColor={item.accentColor} 
                size={70} 
              />
            </div>
        </div>
        
        <h3 className="text-2xl md:text-3xl font-bold mb-2 leading-tight drop-shadow-md text-white">{item.title}</h3>
        <p className="text-white/95 font-medium text-lg leading-relaxed opacity-90 group-hover:opacity-100">
          {item.desc}
        </p>
      </div>
    </div>
  );
};

// --- 3. DATA & CONTENT ---

const philosophyBlocks = [
  {
    title: "Self-Heating Individuals",
    icon: <Zap className="w-8 h-8 text-white" />,
    desc: "We generate momentum internally—curiosity, execution energy, and insight—without external forcing.",
    color: "bg-gradient-to-br from-pink-500 to-rose-600",
    accentColor: "#db2777", // Darker pink for seams
    size: "col-span-1 md:col-span-2"
  },
  {
    title: "Cognition Network",
    icon: <Cpu className="w-8 h-8 text-white" />,
    desc: "Collective intelligence formed when experts, operators, creators, and AI agents collaborate.",
    color: "bg-gradient-to-br from-blue-500 to-indigo-600",
    accentColor: "#2563eb", // Blue for seams
    size: "col-span-1"
  },
  {
    title: "Tech x Humanity",
    icon: <Users className="w-8 h-8 text-white" />,
    desc: "Technology accelerates, not replaces, human spirit, meaning, creativity, and connection.",
    color: "bg-gradient-to-br from-green-500 to-emerald-600",
    accentColor: "#059669", // Green for seams
    size: "col-span-1"
  },
  {
    title: "Bridge Identity",
    icon: <Globe className="w-8 h-8 text-white" />,
    desc: "Connecting East & West, Traditional & Emerging, Capital & Tech, Business & Culture.",
    color: "bg-gradient-to-br from-purple-500 to-violet-600",
    accentColor: "#7c3aed", // Purple for seams
    size: "col-span-1 md:col-span-2"
  },
  {
    title: "Network, Not Stack",
    icon: <Layers className="w-8 h-8 text-white" />,
    desc: "Instead of silos, we operate as a distributed network with multiple intelligence nodes.",
    color: "bg-gradient-to-br from-orange-400 to-red-500",
    accentColor: "#ea580c", // Orange for seams
    size: "col-span-1"
  },
  {
    title: "Infinite Patience",
    icon: <Play className="w-8 h-8 text-white" />,
    desc: "AI agents create an environment where knowledge, iteration, and support are always available.",
    color: "bg-gradient-to-br from-cyan-500 to-blue-500",
    accentColor: "#0891b2", // Cyan for seams
    size: "col-span-1 md:col-span-2"
  }
];

const teamData = [
  { name: "Ms. Valley (Zoe)", role: "Founder & Vision CEO", color: "from-pink-500 to-purple-500" },
  { name: "Aaron", role: "Co-Founder & Architect", color: "from-blue-500 to-cyan-500" },
  { name: "Kenji", role: "COO & North America Lead", color: "from-green-500 to-emerald-500" },
  { name: "Pete", role: "CGO & Europe Lead", color: "from-orange-500 to-red-500" },
  { name: "Donald", role: "CTO / DeFi Architect", color: "from-indigo-500 to-blue-600" },
  { name: "Lu Di", role: "Chief Legal Officer", color: "from-gray-600 to-gray-800" },
  { name: "Van", role: "Chief Art Officer", color: "from-pink-400 to-rose-400" },
  { name: "Patrick", role: "Product Ops", color: "from-teal-400 to-teal-600" },
];

// --- 4. SITE SECTIONS ---

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { label: 'Identity', type: 'scroll', target: 'identity' },
    { label: 'Philosophy', type: 'scroll', target: 'philosophy' },
    { label: 'ValleyCast', type: 'scroll', target: 'valleycast' },
    { label: 'Team', type: 'scroll', target: 'team' },
    { label: 'Contact', type: 'scroll', target: 'contact' },
    { label: 'Media Kit', type: 'link', target: 'https://drive.google.com/drive/folders/1LNhbwyq77HmVXTBqKbsHWmbUypfHKRDs?usp=sharing' },
    { label: 'Deck', type: 'route', target: '/deck' }
  ];

  const scrollTo = (id) => {
    setIsOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-50 flex justify-center pt-6 pointer-events-none">
        <nav
          className={`pointer-events-auto transition-all duration-500 ease-out ${
            scrolled || isOpen 
              ? 'w-[90%] md:w-[760px] bg-white/90 backdrop-blur-2xl border border-white/60 shadow-xl shadow-bv-primary/10' 
              : 'w-full max-w-7xl bg-transparent'
          } rounded-full px-3 py-2.5 flex items-center justify-between mx-auto ${
            scrolled ? 'gap-3' : 'gap-4'
          }`}
        >
          {/* Logo - Switch between Full and Icon based on scroll */}
          <div
            className={`cursor-pointer relative flex items-center justify-center transition-all duration-300 ${
              scrolled ? 'h-10 w-10 min-w-[40px]' : 'h-14 min-w-[180px]'
            }`}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            {/* Full Logo (Visible when NOT scrolled) */}
            <img
              src="/BlockValley_Logo_Dark.png"
              alt="Block Valley"
              className={`h-14 w-auto object-contain transition-all duration-300 absolute left-1/2 -translate-x-1/2 ${
                scrolled ? 'opacity-0 scale-75 pointer-events-none' : 'opacity-100 scale-100'
              }`}
            />

            {/* Icon Logo (Visible when scrolled) */}
            <img
              src="/BlockValleyLogoCut.png"
              alt="BV Icon"
              className={`h-10 w-10 object-contain transition-all duration-300 absolute left-1/2 -translate-x-1/2 ${
                scrolled ? 'opacity-100 scale-100' : 'opacity-0 scale-50 pointer-events-none'
              }`}
            />
          </div>

          {/* Desktop Nav Pills */}
          <div className={`hidden md:flex items-center rounded-full transition-all duration-300 ${
            scrolled ? 'bg-transparent p-0 gap-0.5' : 'bg-bv-secondary/5 p-1.5 gap-1 backdrop-blur-sm border border-white/20'
          }`}>
            {menuItems.map((item, index) =>
              item.type === 'scroll' ? (
                <button
                  key={item.label}
                  onClick={() => scrollTo(item.target)}
                  className={`rounded-full text-sm font-medium text-bv-secondary hover:text-bv-primary transition-all duration-300 relative group overflow-hidden ${
                    scrolled ? 'px-4 py-1.5 hover:bg-bv-secondary/5' : 'px-5 py-2 hover:bg-white/80'
                  }`}
                >
                  <span className="relative z-10">{item.label}</span>
                  {!scrolled && <span className="absolute inset-0 bg-white/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full shadow-sm"></span>}
                </button>
              ) : item.type === 'route' ? (
                <Link
                  key={item.label}
                  to={item.target}
                  className={`rounded-full text-sm font-semibold transition-all duration-300 relative group overflow-hidden flex items-center ${
                    scrolled 
                      ? 'px-5 py-2 border-2 border-pink-500 text-pink-600 hover:bg-pink-500 hover:text-white hover:scale-105' 
                      : 'px-6 py-2.5 border-2 border-pink-500 text-pink-600 hover:bg-pink-500 hover:text-white hover:scale-105 ml-2'
                  }`}
                >
                  <span className="relative z-10">{item.label}</span>
                </Link>
              ) : (
                <a
                  key={item.label}
                  href={item.target}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`rounded-full text-sm font-medium text-bv-secondary hover:text-bv-primary transition-all duration-300 relative group overflow-hidden flex items-center ${
                    scrolled ? 'px-4 py-1.5 hover:bg-bv-secondary/5' : 'px-5 py-2 hover:bg-white/80'
                  }`}
                >
                  <span className="relative z-10">{item.label}</span>
                  {!scrolled && <span className="absolute inset-0 bg-white/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full shadow-sm"></span>}
                </a>
              )
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden w-10 h-10 rounded-full bg-white/80 backdrop-blur-md flex items-center justify-center shadow-lg shadow-bv-primary/5 text-bv-primary border border-white/40"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </nav>
      </header>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="fixed top-24 left-1/2 -translate-x-1/2 w-[90%] max-w-md bg-white/95 backdrop-blur-2xl rounded-3xl shadow-2xl shadow-bv-primary/10 z-40 p-4 md:hidden border border-white/50">
          <div className="flex flex-col space-y-1">
            {menuItems.map((item) =>
              item.type === 'scroll' ? (
                <button
                  key={item.label}
                  onClick={() => scrollTo(item.target)}
                  className="text-left py-3 px-4 text-base font-display font-semibold text-bv-secondary hover:text-bv-primary hover:bg-bv-secondary/5 rounded-xl transition-colors flex items-center justify-between group w-full"
                >
                  {item.label}
                  <span className="w-2 h-2 rounded-full bg-bv-cta opacity-0 group-hover:opacity-100 transition-opacity"></span>
                </button>
              ) : item.type === 'route' ? (
                <Link
                  key={item.label}
                  to={item.target}
                  className="text-center py-4 px-6 text-base font-display font-bold border-2 border-pink-500 text-pink-600 rounded-2xl transition-all flex items-center justify-center group w-full hover:bg-pink-500 hover:text-white hover:scale-[1.02] mt-3"
                  onClick={() => setIsOpen(false)}
                >
                  <span className="relative z-10">{item.label}</span>
                </Link>
              ) : (
                <a
                  key={item.label}
                  href={item.target}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-left py-3 px-4 text-base font-display font-semibold text-bv-secondary hover:text-bv-primary hover:bg-bv-secondary/5 rounded-xl transition-colors flex items-center justify-between group w-full"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                  <span className="w-2 h-2 rounded-full bg-bv-cta opacity-0 group-hover:opacity-100 transition-opacity"></span>
                </a>
              )
            )}
          </div>
        </div>
      )}
    </>
  );
};

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-32 md:pt-20 overflow-hidden bg-bv-background">
      {/* Background Ribbons - Refined for Liquid Glass feel */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-10">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <path d="M0,20 Q25,50 50,20 T100,50" fill="none" stroke="#3B82F6" strokeWidth="0.5" className="animate-float" />
          <path d="M0,40 Q25,10 50,40 T100,10" fill="none" stroke="#0369A1" strokeWidth="0.5" className="animate-float" style={{ animationDelay: '1s' }} />
          <path d="M0,60 Q25,90 50,60 T100,90" fill="none" stroke="#334155" strokeWidth="0.5" className="animate-float" style={{ animationDelay: '2s' }} />
          <path d="M0,80 Q40,40 60,80 T100,30" fill="none" stroke="#0F172A" strokeWidth="0.5" className="animate-float" style={{ animationDelay: '3s' }} />
        </svg>
      </div>

      <div className="container mx-auto px-6 z-10 flex flex-col lg:flex-row items-center justify-between gap-16">
        {/* Left Content */}
        <div className="lg:w-1/2 relative z-10">
          <div className="inline-block px-4 py-1.5 rounded-full bg-bv-secondary/5 text-xs font-bold tracking-widest uppercase text-bv-secondary mb-8 border border-bv-secondary/10">
            Global Venture Studio
          </div>

          <h1 className="text-6xl md:text-7xl font-display font-bold leading-[0.95] mb-8 tracking-tight">
            <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent animate-gradient">
              Level Up Your Brand.
            </span>
          </h1>

          <p className="text-xl text-gray-700 leading-relaxed mb-10 max-w-lg font-light">
            We operate as a bridge between systems, cultures, and eras. Combining <strong className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent font-semibold">Capital × Technology × Narrative × Humanity</strong> to architect the next generation of digital economies.
            <br /><span className="bg-gradient-to-r from-pink-600 to-orange-500 bg-clip-text text-transparent font-semibold">Play. Build. Grow.</span>
          </p>

          <div className="flex flex-wrap gap-4">
            <button className="px-8 py-4 bg-bv-primary text-white rounded-full font-bold hover:bg-bv-secondary shadow-lg shadow-bv-primary/20 transition-transform transform hover:scale-105 flex items-center justify-center interactive-hover">
              Our Vision <ArrowRight className="ml-2 w-5 h-5" />
            </button>
            <button className="px-8 py-4 bg-white/50 text-bv-primary border border-bv-secondary/20 rounded-full font-bold hover:bg-white transition-all backdrop-blur-sm interactive-hover">
              Explore Services
            </button>
          </div>
        </div>

        {/* Right Content - Abstract Card Graphic */}
        <div className="lg:w-1/2 relative w-full">
          <div className="relative aspect-[4/3] bg-white/40 rounded-[2.5rem] overflow-hidden shadow-2xl shadow-bv-primary/5 border border-white/60 backdrop-blur-3xl">
            {/* Video Background - Optimized for Mobile */}
            <video
              poster="/BlockValley_Logo_FullText.png"
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              loading="lazy"
              className="w-full h-full object-cover opacity-90 mix-blend-multiply"
            >
              <source src="/IMG_4443.MP4" type="video/mp4" />
              {/* Fallback image */}
              <img src="/BlockValley_Logo_FullText.png" alt="Block Valley Banner" className="w-full h-full object-cover" loading="lazy" />
            </video>

            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-bv-primary/10 to-transparent pointer-events-none"></div>

            {/* Floating Hubs Pill */}
            <div className="absolute bottom-8 left-8 bg-white/80 backdrop-blur-md shadow-lg shadow-bv-primary/5 rounded-2xl p-4 flex items-center gap-4 border border-white/50 max-w-xs z-20">
              <div className="w-10 h-10 rounded-full bg-bv-cta/10 text-bv-cta flex items-center justify-center">
                <Globe size={20} />
              </div>
              <div>
                <div className="text-[10px] font-bold text-bv-secondary/80 uppercase tracking-wider">Hubs In</div>
                <div className="text-sm font-bold text-bv-primary">HK • SG • UAE • US</div>
              </div>
            </div>
          </div>

          {/* Background Decor Layer behind the card */}
          <div className="absolute -inset-4 bg-gradient-to-r from-bv-cta/20 to-purple-500/20 rounded-[3rem] blur-3xl -z-10 opacity-60 animate-pulse-slow"></div>
        </div>
      </div>
    </section>
  );
};

const IdentitySection = () => {
  return (
    <section id="identity" className="py-32 relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-gray-50">
      {/* Background Ambient Effects */}
      <div className="absolute top-20 right-0 w-[800px] h-[800px] bg-gradient-to-bl from-pink-200/20 via-purple-200/20 to-transparent rounded-full blur-[120px]"></div>
      <div className="absolute bottom-0 left-0 w-[700px] h-[700px] bg-gradient-to-tr from-blue-200/20 via-cyan-200/20 to-transparent rounded-full blur-[100px]"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="mb-20 flex flex-col items-start w-full max-w-4xl">
          <span className="text-pink-600 font-bold tracking-[0.3em] uppercase mb-6 text-xs">Who We Are</span>
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-display font-black leading-[0.9] tracking-tight">
            <span className="text-gray-900">THE IDENTITY</span> <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500">MATRIX.</span>
          </h2>
        </div>

        {/* Cards Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 w-full">
          {/* Card 1: Venture Studio */}
          <div className="md:col-span-5 md:col-start-2 group interactive-hover z-10">
            <div className="relative bg-white/60 backdrop-blur-xl p-10 rounded-[2rem] border border-white/40 shadow-xl shadow-black/5 hover:shadow-2xl hover:shadow-pink-500/10 transition-all duration-500 hover:-translate-y-1">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6 text-blue-600 group-hover:scale-110 transition-transform duration-500">
                <Layers size={32} />
              </div>
              <h3 className="text-3xl font-display font-bold mb-4 text-gray-900">Venture Studio</h3>
              <p className="text-gray-700 leading-relaxed text-lg">Architecting new financial and technological systems from the ground up. We don't just invest; we build the infrastructure.</p>
            </div>
          </div>

          {/* Card 2: Influence Engine - Positioned lower */}
          <div className="md:col-span-6 md:col-start-7 md:mt-32 group interactive-hover z-10">
            <div className="relative bg-white/30 backdrop-blur-2xl p-12 rounded-[2.5rem] border-2 border-purple-500/40 shadow-2xl shadow-purple-500/20 hover:shadow-purple-500/30 transform md:rotate-1 hover:rotate-0 transition-all duration-700 hover:-translate-y-2 overflow-hidden">
              {/* Animated gradient background */}
              <div className="absolute inset-0 bg-gradient-to-br from-pink-500/10 via-purple-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              
              {/* Floating orbs */}
              <div className="absolute -top-20 -right-20 w-64 h-64 bg-gradient-to-br from-purple-400/30 to-pink-400/30 rounded-full blur-3xl group-hover:scale-125 transition-transform duration-1000"></div>
              <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-gradient-to-tr from-blue-400/30 to-purple-400/30 rounded-full blur-3xl group-hover:scale-125 transition-transform duration-1000 delay-150"></div>
              
              <div className="relative z-10">
                <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mb-6 text-pink-600 group-hover:scale-110 transition-all duration-500">
                  <Mic size={32} />
                </div>
                <h3 className="text-4xl font-display font-bold mb-4 text-gray-900">
                  Influence Engine
                </h3>
                <p className="text-gray-700 leading-relaxed text-lg">
                  Enabling global influence through media, community, and powerful narrative construction. We amplify the signal in the noise.
                </p>
              </div>
            </div>
          </div>

          {/* Card 3: Legal-First Web3 - Overlays Influence Engine */}
          <div className="md:col-span-5 md:col-start-3 md:-mt-20 group interactive-hover z-30">
            <div className="relative bg-white/60 backdrop-blur-xl p-10 rounded-[2rem] border-l-8 border-emerald-500 border-t border-r border-b border-t-white/40 border-r-white/40 border-b-white/40 shadow-xl hover:shadow-2xl hover:shadow-emerald-500/10 transition-all duration-500 hover:-translate-y-1">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mb-6 text-emerald-600 group-hover:scale-110 transition-transform duration-500">
                <ShieldCheck size={32} />
              </div>
              <h3 className="text-2xl font-display font-bold mb-4 text-gray-900">Legal-First Web3</h3>
              <p className="text-gray-700 leading-relaxed">Regulatory intelligence meets DeFi architecture. Building compliant, lasting systems.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const PhilosophySection = () => {
  return (
    <section id="philosophy" className="py-24 bg-white relative overflow-hidden">
      {/* Subtle Background Effects */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-pink-100/30 rounded-full blur-[150px]"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-100/30 rounded-full blur-[120px]"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
           <span className="text-pink-600 font-bold tracking-widest uppercase mb-4 block text-sm">Our DNA</span>
           <h2 className="text-5xl md:text-7xl font-display font-black mb-6">
             <span className="text-gray-900">Core </span>
             <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 animate-gradient">Philosophy</span>
           </h2>
           <p className="text-gray-600 text-lg max-w-2xl mx-auto">Hover to spawn the node. Strike it with your cursor.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {philosophyBlocks.map((item, index) => (
            <InteractiveCard key={index} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

const ValleyCastSection = () => {
  return (
    <section id="valleycast" className="py-24 bg-black text-white overflow-hidden relative">
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")` }}></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
              <span className="text-red-500 font-mono text-sm tracking-widest uppercase">Live on Air</span>
            </div>
            <h2 className="text-5xl md:text-7xl font-bold mb-8 leading-none tracking-tight text-white">
              Valley<span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500">Cast</span>
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Not just a podcast. BV's global influence engine. We decode AI, Web3, Global Macro shifts, and the bridges between East & West.
            </p>
            
            <div className="space-y-4 mb-10">
              {['AI x Web3 Narratives', 'RWA Deep Dives', 'Founder Mental Models'].map((tag, i) => (
                <div key={i} className="flex items-center space-x-4">
                  <ArrowRight className="text-pink-500 w-5 h-5" />
                  <span className="text-lg font-medium">{tag}</span>
                </div>
              ))}
            </div>

            <button className="bg-white text-black px-8 py-4 rounded-full font-bold hover:bg-gray-200 transition-colors flex items-center interactive-hover">
              <Play className="w-5 h-5 mr-3 fill-current" /> Listen Now
            </button>
          </div>

          <div className="lg:w-1/2 relative">
        <div className="relative z-10 bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-1 border border-gray-700 shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500 interactive-hover">
          {/* Replace the dynamic sound-wave placeholder with the VALLEYCAST image from media/public */}
        <div className="bg-black rounded-2xl overflow-hidden aspect-video relative flex items-center justify-center group">
            {/* ValleyCast: static poster/image (no play overlay) */}
            <img src="/VALLEYCAST8AM2.png" alt="ValleyCast Latest Episode" className="w-full h-full object-cover object-right" loading="lazy" />
          </div>
               <div className="p-6">
                 <div className="flex justify-between items-center mb-2">
                    <h3 className="text-xl font-bold text-white">Latest Episode: The Cognition Network</h3>
                    <span className="text-gray-300 text-sm">42:15</span>
                 </div>
                 <p className="text-gray-300 text-sm">Exploring how AI agents and human operators merge to form new intelligence nodes.</p>
               </div>
            </div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] border border-gray-800 rounded-full -z-0"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] border border-gray-900 rounded-full -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

const TeamSection = () => {
  return (
    <section id="team" className="py-32 bg-bv-background relative overflow-hidden">
      {/* Background Decor - Fluid Gradients */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-bv-cta/5 rounded-full blur-[120px] pointer-events-none animate-pulse-slow"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-purple-500/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-7xl font-display font-black mb-6 text-bv-primary tracking-tight">
            THE ARCHITECTS
          </h2>
          <p className="text-bv-secondary text-xl max-w-2xl mx-auto font-light">
            A distributed network of explorers and operators.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamData.map((member, index) => (
            <div
              key={index}
              className="bg-white/40 backdrop-blur-xl rounded-[2.5rem] overflow-hidden shadow-xl shadow-bv-primary/5 hover:shadow-2xl hover:bg-white/60 transition-all duration-300 group border border-white/50 interactive-hover"
            >
              <div className={`h-2 w-full bg-gradient-to-r ${member.color} opacity-80`}></div>
              <div className="p-8 flex flex-col items-center text-center">
                <div className="mb-6 relative">
                  <div className={`w-24 h-24 rounded-full bg-gradient-to-br ${member.color} p-[2px] shadow-lg group-hover:scale-110 transition-transform duration-500`}>
                    <div className="w-full h-full rounded-full bg-white flex items-center justify-center">
                      <span className={`text-3xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-br ${member.color}`}>
                        {member.name.charAt(0)}
                      </span>
                    </div>
                  </div>
                  <div className={`absolute inset-0 rounded-full bg-gradient-to-br ${member.color} blur-xl opacity-20 group-hover:opacity-60 transition-opacity duration-500 -z-10`}></div>
                </div>

                <h3 className="text-2xl font-display font-bold text-bv-primary mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-bv-cta group-hover:to-purple-500 transition-all duration-300">
                  {member.name}
                </h3>
                <p className="text-xs text-bv-secondary uppercase tracking-widest font-bold opacity-70">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer id="contact" className="bg-white/80 backdrop-blur-lg pt-24 pb-12 border-t border-white/20 relative z-10">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <img src="/BlockValley_Logo_Dark.png" alt="Logo" className="h-10 w-auto mb-8 opacity-90" />
            <p className="text-xl text-bv-secondary font-medium mb-8 max-w-md leading-relaxed">
              Combining capital, technology, narrative, and humanity to build the frontier.
            </p>
            <div className="flex flex-wrap gap-3">
              <a href="https://x.com/theblockvalley" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-2xl bg-black text-white flex items-center justify-center hover:bg-gray-800 transition-colors shadow-lg shadow-gray-200 cursor-pointer" title="Business Updates">
                <Twitter size={20} />
              </a>
              <a href="https://x.com/0xblockvalley" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 text-white flex items-center justify-center hover:from-blue-600 hover:to-purple-700 transition-colors shadow-lg shadow-gray-200 cursor-pointer" title="Community">
                <Twitter size={20} />
              </a>
              <a href="https://blockvalley.medium.com/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-2xl bg-black text-white flex items-center justify-center hover:bg-gray-800 transition-colors shadow-lg shadow-gray-200 cursor-pointer" title="Medium Blog">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z"/>
                </svg>
              </a>
              <a href="mailto:admin@blockvalley.io" rel="noopener noreferrer" className="w-12 h-12 rounded-2xl bg-bv-cta text-white flex items-center justify-center hover:bg-bv-cta/90 transition-colors shadow-lg shadow-gray-200 cursor-pointer" title="Email Us">
                <Mail size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-display font-bold text-bv-primary mb-6 text-lg">Global Hubs</h4>
            <ul className="space-y-6 text-bv-secondary">
              <li className="flex items-start group">
                <span className="w-2 h-2 mt-2 bg-bv-cta rounded-full mr-3 group-hover:scale-150 transition-transform duration-300"></span>
                <div>
                  <span className="font-medium block mb-1">North America</span>
                  <span className="text-sm text-gray-400 font-normal">Led by Kenji</span>
                </div>
              </li>
              <li className="flex items-start group">
                <span className="w-2 h-2 mt-2 bg-purple-500 rounded-full mr-3 group-hover:scale-150 transition-transform duration-300"></span>
                <div>
                  <span className="font-medium block mb-1">Asia & Middle East</span>
                  <span className="text-sm text-gray-400 font-normal">Led by Zoe</span>
                </div>
              </li>
              <li className="flex items-start group">
                <span className="w-2 h-2 mt-2 bg-emerald-500 rounded-full mr-3 group-hover:scale-150 transition-transform duration-300"></span>
                <div>
                  <span className="font-medium block mb-1">Europe</span>
                  <span className="text-sm text-gray-400 font-normal">Led by Pete</span>
                </div>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold text-bv-primary mb-6 text-lg">Quick Links</h4>
            <ul className="space-y-4 text-bv-secondary font-medium">
              <li>
                <a href="mailto:admin@blockvalley.io" className="hover:text-bv-cta transition-colors flex items-center group">
                  <span className="w-0 h-[1px] bg-bv-cta mr-0 group-hover:w-4 group-hover:mr-2 transition-all duration-300"></span>
                  Work With Us
                </a>
              </li>
              <li>
                <a href="https://x.com/theblockvalley" target="_blank" rel="noopener noreferrer" className="hover:text-bv-cta transition-colors flex items-center group">
                  <span className="w-0 h-[1px] bg-bv-cta mr-0 group-hover:w-4 group-hover:mr-2 transition-all duration-300"></span>
                  ValleyCast Episodes
                </a>
              </li>
              <li>
                <a href="https://mp.weixin.qq.com/s/1TFJitCvjV6i99JKm5kHwA" target="_blank" rel="noopener noreferrer" className="hover:text-bv-cta transition-colors flex items-center group">
                  <span className="w-0 h-[1px] bg-bv-cta mr-0 group-hover:w-4 group-hover:mr-2 transition-all duration-300"></span>
                  RWA Research
                </a>
              </li>
              <li>
                <Link to="/privacy" className="hover:text-bv-cta transition-colors flex items-center group">
                  <span className="w-0 h-[1px] bg-bv-cta mr-0 group-hover:w-4 group-hover:mr-2 transition-all duration-300"></span>
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-gray-100">
          <p className="text-gray-400 text-sm">© 2025 Block Valley Labs. All rights reserved.</p>
          <p className="text-gray-400 text-sm mt-2 md:mt-0 font-mono tracking-wider opacity-60">DESIGNED FOR THE FUTURE</p>
        </div>
      </div>
    </footer>
  );
};

const App = () => {
  const [showIntro, setShowIntro] = useState(() => {
    // Check if intro has been shown in this session
    const introShown = sessionStorage.getItem('introShown');
    return !introShown;
  });

  const handleIntroComplete = () => {
    sessionStorage.setItem('introShown', 'true');
    setShowIntro(false);
  };

  return (
    <div className="font-sans antialiased text-bv-text bg-bv-background selection:bg-bv-cta/30 selection:text-bv-primary relative">
      {showIntro && <IntroAnimation onComplete={handleIntroComplete} />}
      <CustomCursor />
      <style>{`
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(-5%); }
          50% { transform: translateY(5%); }
        }
        .animate-bounce-slow {
          animation: bounce-slow 3s infinite ease-in-out;
        }
        @keyframes sound-wave {
          0%, 100% { height: 10%; }
          50% { height: 100%; }
        }
        .animate-sound-wave {
          animation: sound-wave 1s infinite ease-in-out;
        }
      `}</style>
      <Header />
      <main className="relative z-10">
        <Hero />
        <IdentitySection />
        <PhilosophySection />
        <ValleyCastSection />
        <TeamSection />
      </main>
      <Footer />
    </div>
  );
};

export default App;

