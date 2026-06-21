import heroVideo from '../assets/hero.mp4'; 

const HeroSection = () => {
  return (
    <section className="hero">
      <video 
        autoPlay 
        loop 
        muted 
        playsInline
        className="hero-video-bg"
      >
        <source src={heroVideo} type="video/mp4" />
      </video>

      <div className="hero-content">
        <h1 className="hero-headline">Unleash the Beast Within.</h1>
        <p className="hero-subheadline">
          Fuel your grind — Monster Energy gives you the power to push past limits, every single day.
        </p>
        <button className="hero-btn">Explore Flavors</button>
      </div>

      <div className="hero-footer">
        <p className="hero-caption">Trusted by athletes. Built for grinders.</p>
        <div className="hero-socials">
          <a href="#">Instagram ↗</a>
          <a href="#">Facebook ↗</a>
          <a href="#">X ↗</a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection