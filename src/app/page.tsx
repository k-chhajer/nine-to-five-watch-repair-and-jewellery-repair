'use client';

import { useState, useEffect, useRef } from "react";
import Image from "next/image";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [animatedServices, setAnimatedServices] = useState<boolean[]>([]);
  const [isHeroVisible, setIsHeroVisible] = useState(false);
  const [isAboutVisible, setIsAboutVisible] = useState(false);
  const [isServicesHeaderVisible, setIsServicesHeaderVisible] = useState(false);
  const [isContactVisible, setIsContactVisible] = useState(false);
  const [isReviewsVisible, setIsReviewsVisible] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const servicesRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const servicesHeaderRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);
  const reviewsRef = useRef<HTMLDivElement>(null);

  const backgroundImages = [
    "/images/watch_repair.jpg",
    "/images/jewellery_repair.webp",
    "/images/jewellery_necklace.jpg",
    "/images/omega_watch.jpg",
    "/images/watch.jpg"
  ];

  const services = [
    {
      title: "Watch Repair",
      description: "Professional watch repair services including battery replacement, strap adjustment, movement repair, and full servicing for all brands.",
      features: ["Battery Replacement", "Strap Adjustment", "Movement Repair", "Water Resistance Testing"],
      image: "/images/watch_repair.jpg"
    },
    {
      title: "Jewellery Repair",
      description: "Expert jewellery repair and restoration services to bring your precious pieces back to life.",
      features: ["Ring Resizing", "Chain Repair", "Stone Setting", "Cleaning & Polishing", "Engagement Ring Designs"],
      image: "/images/jewellery_repair.webp"
    },
    {
      title: "Key Cutting",
      description: "Precise key cutting services for all types of keys including house and specialty keys.",
      features: ["House Keys", "Office Keys", "Specialty Keys"],
      image: "/images/key_cutting.jpeg"
    },
    {
      title: "Fob Duplication",
      description: "Fast and accurate key duplication including electronic fobs.",
      features: ["Electronic Fobs"],
      image: "/images/fob_duplicate.jpg"
    }
  ];

  const reviews = [
    {
      name: "Roberto Savoia",
      rating: 5,
      comment: "Excellent service! Fixed my grandmother's watch in just a few hours. Very professional and reasonably priced."
    },
    {
      name: "Josh Nahmias",
      rating: 5,
      comment: "Literally fixed my watch strap in 30 minutes for zero charge. Nobody, and I mean nobody, would have ever done that for me. Seriously, thanks a lot. I highly, highly recommend Andrew, literally the best in the business."
    },
    {
      name: "Angela Ho",
      rating: 5,
      comment: "Had two watch batteries replaced, it was done very quickly and efficiently - both were ready for pick up in 10 minutes. The owner was also very nice and friendly. I would recommend coming here for watch battery replacements, I certainly would come back!"
    },
    {
      name: "Amir Mito",
      rating: 5,
      comment: "Replaced my watch battery in 5 minutes, great price and customer service. Highly recommend!"
    },
    {
      name: "Jacqueline Cho",
      rating: 5,
      comment: "I have had multiple watches repaired here and the owner is always kind, courteous, and efficient. I have never had a repair take more than 15 minutes, and prices are more than fair for the quality of service. Cannot recommend highly enough."
    }
  ];

  // Rotating background images
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        (prevIndex + 1) % backgroundImages.length
      );
    }, 2000);

    return () => clearInterval(interval);
  }, [backgroundImages.length]);

  // Intersection Observer for hero animation
  useEffect(() => {
    const heroObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsHeroVisible(entry.isIntersecting);
        });
      },
      { threshold: 0.3 }
    );

    if (heroRef.current) {
      heroObserver.observe(heroRef.current);
    }

    return () => {
      if (heroRef.current) {
        heroObserver.unobserve(heroRef.current);
      }
    };
  }, []);

  // Intersection Observer for services animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Animate all services at the same time
            setAnimatedServices(new Array(services.length).fill(true));
          } else {
            // Reset animations when section is out of view
            setAnimatedServices(new Array(services.length).fill(false));
          }
        });
      },
      { threshold: 0.3 }
    );

    if (servicesRef.current) {
      observer.observe(servicesRef.current);
    }

    return () => {
      if (servicesRef.current) {
        observer.unobserve(servicesRef.current);
      }
    };
  }, []);

  // Intersection Observer for about section animation
  useEffect(() => {
    const aboutObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsAboutVisible(entry.isIntersecting);
        });
      },
      { threshold: 0.3 }
    );

    if (aboutRef.current) {
      aboutObserver.observe(aboutRef.current);
    }

    return () => {
      if (aboutRef.current) {
        aboutObserver.unobserve(aboutRef.current);
      }
    };
  }, []);

  // Intersection Observer for services header animation
  useEffect(() => {
    const servicesHeaderObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsServicesHeaderVisible(entry.isIntersecting);
        });
      },
      { threshold: 0.3 }
    );

    if (servicesHeaderRef.current) {
      servicesHeaderObserver.observe(servicesHeaderRef.current);
    }

    return () => {
      if (servicesHeaderRef.current) {
        servicesHeaderObserver.unobserve(servicesHeaderRef.current);
      }
    };
  }, []);

  // Intersection Observer for contact section animation
  useEffect(() => {
    const contactObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsContactVisible(entry.isIntersecting);
        });
      },
      { threshold: 0.3 }
    );

    if (contactRef.current) {
      contactObserver.observe(contactRef.current);
    }

    return () => {
      if (contactRef.current) {
        contactObserver.unobserve(contactRef.current);
      }
    };
  }, []);

  // Intersection Observer for reviews section animation
  useEffect(() => {
    const reviewsObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsReviewsVisible(entry.isIntersecting);
        });
      },
      { threshold: 0.3 }
    );

    if (reviewsRef.current) {
      reviewsObserver.observe(reviewsRef.current);
    }

    return () => {
      if (reviewsRef.current) {
        reviewsObserver.unobserve(reviewsRef.current);
      }
    };
  }, []);

  // Scroll effect for navbar transparency
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Infinite scroll animation for reviews
  useEffect(() => {
    let animationFrameId: number;
    const scrollSpeed = 1.2; // pixels per frame, tweak for desired speed
    const reviewCardWidth = 320 + 32; // min-w-[320px] + 2rem (32px) gap
    const totalWidth = reviews.length * reviewCardWidth;

    const animate = () => {
      setScrollPosition(prev => {
        const newPosition = prev + scrollSpeed;
        // When we've scrolled the width of the original set, reset by subtracting totalWidth
        return newPosition >= totalWidth ? newPosition - totalWidth : newPosition;
      });
      animationFrameId = requestAnimationFrame(animate);
    };
    animationFrameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrameId);
  }, [reviews.length]);

  // Function to handle navigation clicks and close mobile menu
  const handleNavigationClick = () => {
    setIsMenuOpen(false);
  };

  // Function to handle smooth scrolling
  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      const startY = window.scrollY;
      const endY = targetElement.getBoundingClientRect().top + window.scrollY;
      const duration = 1200; // ms
      const startTime = performance.now();

      function scrollStep(currentTime: number) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const ease = progress < 0.5
          ? 2 * progress * progress
          : -1 + (4 - 2 * progress) * progress;
        window.scrollTo(0, startY + (endY - startY) * ease);
        if (progress < 1) {
          requestAnimationFrame(scrollStep);
        }
      }
      requestAnimationFrame(scrollStep);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white font-['Inter']">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-black/95 backdrop-blur-sm shadow-lg border-b border-yellow-500' 
          : 'bg-transparent border-b border-yellow-500/0'
      }`}>
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-yellow-400 font-['Poppins']">Nine Two Five Watch and Jewellery Repair</h1>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-12 flex items-baseline space-x-8">
                <a href="#home" onClick={(e) => handleSmoothScroll(e, 'home')} className="text-gray-300 hover:text-yellow-400 px-4 py-3 rounded-md text-base font-medium transition-colors font-['Inter']">Home</a>
                <a href="#services" onClick={(e) => handleSmoothScroll(e, 'services')} className="text-gray-300 hover:text-yellow-400 px-4 py-3 rounded-md text-base font-medium transition-colors font-['Inter']">Services</a>
                <a href="#about" onClick={(e) => handleSmoothScroll(e, 'about')} className="text-gray-300 hover:text-yellow-400 px-4 py-3 rounded-md text-base font-medium transition-colors font-['Inter']">About</a>
                <a href="#reviews" onClick={(e) => handleSmoothScroll(e, 'reviews')} className="text-gray-300 hover:text-yellow-400 px-4 py-3 rounded-md text-base font-medium transition-colors font-['Inter']">Reviews</a>
                <a href="#contact" onClick={(e) => handleSmoothScroll(e, 'contact')} className="text-gray-300 hover:text-yellow-400 px-4 py-3 rounded-md text-base font-medium transition-colors font-['Inter']">Contact</a>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-300 hover:text-yellow-400 focus:outline-none focus:text-yellow-400"
              >
                <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden">
              <div className={`px-4 pt-3 pb-4 space-y-2 sm:px-5 border-b border-yellow-500 transition-all duration-300 ${
                isScrolled ? 'bg-black/95 backdrop-blur-sm' : 'bg-black/80 backdrop-blur-sm'
              }`}>
                <a href="#home" onClick={(e) => { handleSmoothScroll(e, 'home'); handleNavigationClick(); }} className="text-gray-300 hover:text-yellow-400 block px-4 py-3 rounded-md text-lg font-medium font-['Inter']">Home</a>
                <a href="#services" onClick={(e) => { handleSmoothScroll(e, 'services'); handleNavigationClick(); }} className="text-gray-300 hover:text-yellow-400 block px-4 py-3 rounded-md text-lg font-medium font-['Inter']">Services</a>
                <a href="#about" onClick={(e) => { handleSmoothScroll(e, 'about'); handleNavigationClick(); }} className="text-gray-300 hover:text-yellow-400 block px-4 py-3 rounded-md text-lg font-medium font-['Inter']">About</a>
                <a href="#reviews" onClick={(e) => { handleSmoothScroll(e, 'reviews'); handleNavigationClick(); }} className="text-gray-300 hover:text-yellow-400 block px-4 py-3 rounded-md text-lg font-medium font-['Inter']">Reviews</a>
                <a href="#contact" onClick={(e) => { handleSmoothScroll(e, 'contact'); handleNavigationClick(); }} className="text-gray-300 hover:text-yellow-400 block px-4 py-3 rounded-md text-lg font-medium font-['Inter']">Contact</a>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative bg-black py-20 min-h-screen flex items-center pt-20">
        {/* Background Images */}
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black opacity-40"></div>
        {backgroundImages.map((image, index) => (
          <div 
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentImageIndex ? 'opacity-60' : 'opacity-0'
            }`}
          >
            <Image 
              src={image} 
              alt={`Background ${index + 1}`} 
              fill 
              className="object-cover"
              priority={index === 0}
            />
          </div>
        ))}
        
        <div ref={heroRef} className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className={`text-5xl md:text-6xl font-bold text-white mb-6 font-['Poppins'] transform transition-all duration-1000 ease-out ${
            isHeroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            Nine Two Five Watch Repair & Jewellery Repair
          </h1>
          <p className={`text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto font-['Inter'] transform transition-all duration-1000 ease-out delay-300 ${
            isHeroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            Expert repairs for watches, jewellery, key cutting and fob duplication. Fast, friendly, and reliable service with over 35 years of experience.
          </p>
          <div className={`flex flex-col sm:flex-row gap-4 justify-center transform transition-all duration-1000 ease-out delay-500 ${
            isHeroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <a 
              href="#services" 
              onClick={(e) => handleSmoothScroll(e, 'services')}
              className="bg-yellow-500 hover:bg-yellow-600 text-black px-8 py-3 rounded-lg font-semibold transition-colors font-['Inter']"
            >
              Our Services
            </a>
            <a 
              href="#contact" 
              onClick={(e) => handleSmoothScroll(e, 'contact')}
              className="bg-transparent border-2 border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-black px-8 py-3 rounded-lg font-semibold transition-colors font-['Inter']"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div ref={servicesHeaderRef} className="text-center mb-16">
            <h2 className={`text-4xl font-bold text-white mb-4 font-['Poppins'] transform transition-all duration-1000 ease-out ${
              isServicesHeaderVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}>Our <span className="text-yellow-400">Services</span></h2>
            <p className={`text-xl text-gray-300 max-w-2xl mx-auto font-['Inter'] transform transition-all duration-1000 ease-out delay-300 ${
              isServicesHeaderVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}>
              Professional repair and duplication services for all your needs
            </p>
          </div>
          
          <div ref={servicesRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div 
                key={index} 
                className={`bg-black rounded-2xl overflow-hidden transition-all duration-300 border border-yellow-500/20 shadow-lg hover:border-yellow-500 hover:shadow-yellow-500/20 hover:scale-105 cursor-pointer group transform transition-all duration-700 ease-out ${
                  animatedServices[index] 
                    ? 'opacity-100 translate-y-0 scale-100' 
                    : 'opacity-0 translate-y-20 scale-95'
                }`}
              >
                {/* Service Image */}
                <div className="relative h-48 overflow-hidden">
                  <Image 
                    src={service.image} 
                    alt={service.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                
                {/* Service Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-3 text-center font-['Poppins']">{service.title}</h3>
                  <p className="text-gray-300 mb-4 text-center font-['Inter'] leading-relaxed text-sm">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="text-xs text-gray-400 flex items-center font-['Inter']">
                        <span className="text-yellow-400 mr-2 text-sm">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-black relative overflow-hidden">
        <div ref={aboutRef} className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className={`text-4xl font-bold text-white mb-6 font-['Poppins'] transform transition-all duration-1000 ease-out ${
                isAboutVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}>Meet <span className="text-yellow-400">Andrew</span> - &quot;Mr Fix It&quot;</h2>
              
              {/* Mobile Andrew Picture */}
              <div className={`lg:hidden text-center mb-6 transform transition-all duration-1000 ease-out delay-200 ${
                isAboutVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-95'
              }`}>
                <span className="text-8xl block">👨‍🔧</span>
                <p className="text-gray-300 font-['Inter'] mt-2">Andrew&apos;s Picture</p>
              </div>
              
              <p className={`text-lg text-gray-300 mb-6 font-['Inter'] leading-relaxed transform transition-all duration-1000 ease-out delay-300 ${
                isAboutVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}>
                Known as &quot;Mr Fix It&quot; around the neighborhood, Andrew is always willing to help fix your watches, get keys cut, or even help you out with anything else! With over 35 years of experience in the repair industry, he&apos;s become the go-to person for all things that need fixing.
              </p>
              <p className={`text-lg text-gray-300 mb-6 font-['Inter'] leading-relaxed transform transition-all duration-1000 ease-out delay-400 ${
                isAboutVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}>
                Always smiling, cheerful, and with a dry sense of humour, Andrew&apos;s passion for his craft shines through in every repair. Whether it&apos;s a delicate watch movement, a precious piece of jewellery, or a simple key duplication, he approaches each job with the same dedication and attention to detail.
              </p>
              <p className={`text-lg text-gray-300 mb-8 font-['Inter'] leading-relaxed transform transition-all duration-1000 ease-out delay-500 ${
                isAboutVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}>
                His workshop at Nine Two Five Watch Repair &amp; Jewellery Repair is more than just a business - it&apos;s a place where customers become friends, and every repair tells a story. Andrew&apos;s commitment to quality workmanship and genuine care for his customers has made him a trusted name in the community.
              </p>
              <div className={`grid grid-cols-2 gap-6 transform transition-all duration-1000 ease-out delay-600 ${
                isAboutVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}>
                <div className="text-center">
                  <div className="text-3xl font-bold text-yellow-400 font-['Poppins']">35+</div>
                  <div className="text-gray-400 font-['Inter']">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-yellow-400 font-['Poppins']">1000+</div>
                  <div className="text-gray-400 font-['Inter']">Happy Customers</div>
                </div>
              </div>
            </div>
            <div className={`hidden lg:block bg-gray-800 rounded-2xl p-8 h-96 flex items-center justify-center border border-yellow-500/20 shadow-lg transform transition-all duration-1000 ease-out delay-200 ${
              isAboutVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-95'
            }`}>
              <div className="text-center">
                <span className="text-8xl mb-4 block">👨‍🔧</span>
                <p className="text-gray-300 font-['Inter']">Andrew&apos;s Picture</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="py-20 bg-gray-900">
        <div ref={reviewsRef} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                      <div className="text-center mb-16">
              <h2 className={`text-4xl font-bold text-white mb-4 font-['Poppins'] transform transition-all duration-1000 ease-out ${
                isReviewsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}>What Our <span className="text-yellow-400">Customers Say</span></h2>
            <p className={`text-xl text-gray-300 font-['Inter'] transform transition-all duration-1000 ease-out delay-300 ${
              isReviewsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}>Read reviews from our satisfied customers</p>
          </div>
          
          <div className={`overflow-hidden transform transition-all duration-1000 ease-out delay-500 ${
            isReviewsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <div 
              id="reviews-scroll" 
              className="flex space-x-8 pb-4"
              style={{ transform: `translateX(-${scrollPosition}px)` }}
            >
              {/* Original reviews */}
              {reviews.map((review, index) => (
                <div 
                  key={`original-${index}`} 
                  className="bg-black rounded-2xl p-6 border border-yellow-500/20 min-w-[320px] max-w-[320px] shadow-lg hover:border-yellow-500 hover:shadow-yellow-500/20 transition-all duration-300 cursor-pointer"
                >
                  <div className="flex items-center mb-4">
                    <div className="flex text-yellow-400">
                      {[...Array(review.rating)].map((_, i) => (
                        <span key={i} className="text-lg">⭐</span>
                      ))}
                    </div>
                  </div>
                  <p className="text-gray-300 mb-3 italic font-['Inter'] leading-relaxed text-base">&quot;{review.comment}&quot;</p>
                  <p className="text-yellow-400 font-semibold font-['Poppins'] text-sm">- {review.name}</p>
                </div>
              ))}
              {/* Duplicate reviews for seamless loop */}
              {reviews.map((review, index) => (
                <div 
                  key={`duplicate-${index}`} 
                  className="bg-black rounded-2xl p-6 border border-yellow-500/20 min-w-[320px] max-w-[320px] shadow-lg hover:border-yellow-500 hover:shadow-yellow-500/20 transition-all duration-300 cursor-pointer"
                >
                  <div className="flex items-center mb-4">
                    <div className="flex text-yellow-400">
                      {[...Array(review.rating)].map((_, i) => (
                        <span key={i} className="text-lg">⭐</span>
                      ))}
                    </div>
                  </div>
                  <p className="text-gray-300 mb-3 italic font-['Inter'] leading-relaxed text-base">&quot;{review.comment}&quot;</p>
                  <p className="text-yellow-400 font-semibold font-['Poppins'] text-sm">- {review.name}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div className={`text-center mt-12 transform transition-all duration-1000 ease-out delay-700 ${
            isReviewsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <a 
              href="https://www.google.com/search?q=9+to+5+watch+repair+jewellery+repair+reviews" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center bg-yellow-500 hover:bg-yellow-600 text-black px-6 py-3 rounded-lg font-semibold transition-colors font-['Inter']"
            >
              <span className="mr-2">⭐</span>
              Read More Google Reviews
            </a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-black">
        <div ref={contactRef} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className={`text-4xl font-bold text-white mb-4 font-['Poppins'] transform transition-all duration-1000 ease-out ${
              isContactVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}><span className="text-yellow-400">Contact</span> Us</h2>
            <p className={`text-xl text-gray-300 font-['Inter'] transform transition-all duration-1000 ease-out delay-300 ${
              isContactVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}>Get in touch with us today</p>
          </div>
          
          <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 transform transition-all duration-1000 ease-out delay-500 ${
            isContactVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            {/* Contact Information */}
            <div className="bg-gray-800 rounded-2xl p-8 border border-yellow-500/20 shadow-lg">
              <h3 className="text-2xl font-bold text-white mb-6 font-['Poppins']">Get In Touch</h3>
              
              <div className="space-y-8">
                <div className="flex items-start">
                  <span className="text-2xl mr-4 mt-1">📍</span>
                  <div>
                    <p className="text-white font-semibold font-['Inter'] mb-1">Address</p>
                    <p className="text-gray-300 font-['Inter']">777 Bay Street, Toronto, ON M5G 2C8</p>
                    <p className="text-gray-300 font-['Inter']">Across from Farm Boys</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <span className="text-2xl mr-4 mt-1">📞</span>
                  <div>
                    <p className="text-white font-semibold font-['Inter'] mb-1">Phone</p>
                    <p className="text-gray-300 font-['Inter']">(416) 979-9883</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="text-2xl mr-4 mt-1">✉️</span>
                  <div>
                    <p className="text-white font-semibold font-['Inter'] mb-1">Email</p>
                    <p className="text-gray-300 font-['Inter']">925@mail.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <span className="text-2xl mr-4 mt-1">🕐</span>
                  <div>
                    <p className="text-white font-semibold font-['Inter'] mb-1">Hours</p>
                    <p className="text-gray-300 font-['Inter']">Monday - Friday: 11:00 AM - 4:00 PM</p>
                    <p className="text-gray-300 font-['Inter']">Saturday - Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Store Image */}
            <div className="bg-gray-800 rounded-2xl p-8 border border-yellow-500/20 shadow-lg">
              <h3 className="text-2xl font-bold text-white mb-6 font-['Poppins']">Our Store</h3>
              <div className="space-y-4">
                <div className="relative rounded-xl h-64 overflow-hidden">
                  <Image 
                    src="/images/store_2.jpg" 
                    alt="9 to 5 Watch Repair Store"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="text-center">
                  <a 
                    href="https://maps.google.com/?q=777+Bay+Street+Toronto+ON" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center bg-yellow-500 hover:bg-yellow-600 text-black px-4 py-2 rounded-lg font-semibold transition-colors font-['Inter']"
                  >
                    Open in Google Maps
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 py-8 border-t border-yellow-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-300 font-['Inter']">
            © 2025 9 to 5 Watch Repair & Jewellery Repair. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
