import bannerStack from '../../assets/banner-stack.png';
export const Hero = () => {
  return (
    <section className="hero-section">
      <div className="container hero-container">
        <div className="hero-content">
          <span className="eyebrow-text">Built for makers and developers</span>
          <h1 className="hero-title">
            Create the stack<br />
            that fits your next <span className="gradient-text-hero">big idea</span>
          </h1>
          <p className="hero-subtitle">
            Pick the tools you actually want to work with, compare the essentials, and design a setup that feels personal, practical, and ready for real projects.
          </p>
          <div className="hero-cta-group">
            <a href="#technologies" className="btn-hero-primary">Explore Technologies</a>
            <a href="#learn-more" className="btn-hero-secondary">See the workflow</a>
          </div>
        </div>

        <div className="hero-graphic-container">
          <img 
            src={bannerStack} 
            alt="DevStack Graphic" 
            className="hero-graphic-img"
          />
        </div>
      </div>
    </section>
  );
};