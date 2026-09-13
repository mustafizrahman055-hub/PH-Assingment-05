import { useState, useEffect } from 'react';
import logoText from '../../assets/logo-text.png';
import hamburgerIcon from '../../ui/hamburger.png';

export const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 18);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`navbar-header ${scrolled ? 'is-scrolled' : ''}`}>
      <div className="container navbar-container">
        <button 
          className="mobile-toggle"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle Navigation"
        >
          <img src={hamburgerIcon} alt="Menu" width="22" height="22" />
        </button>

        <a href="#" className="navbar-logo">
          <img src={logoText} alt="DevStack Logo" height="32" />
        </a>

        <nav className="navbar-nav">
          <a href="#" className="nav-link active">Home</a>
          <a href="#technologies" className="nav-link">Technologies</a>
          <a href="#projects" className="nav-link">Projects</a>
          <a href="#about" className="nav-link">About</a>
          <a href="#contact" className="nav-link">Contact</a>
        </nav>

        <div className="navbar-actions">
          <a href="#signin" className="btn-signin">Sign In</a>
          <a href="#signup" className="btn-signup">Sign Up</a>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="mobile-menu">
          <a href="#" className="mobile-nav-link active" onClick={() => setMobileMenuOpen(false)}>Home</a>
          <a href="#technologies" className="mobile-nav-link" onClick={() => setMobileMenuOpen(false)}>Technologies</a>
          <a href="#projects" className="mobile-nav-link" onClick={() => setMobileMenuOpen(false)}>Projects</a>
          <a href="#about" className="mobile-nav-link" onClick={() => setMobileMenuOpen(false)}>About</a>
          <a href="#contact" className="mobile-nav-link" onClick={() => setMobileMenuOpen(false)}>Contact</a>
        </div>
      )}
    </header>
  );
};
