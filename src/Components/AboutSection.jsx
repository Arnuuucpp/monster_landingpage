import monster1 from "../assets/monster1.jfif"
import monster2 from "../assets/monster2.jpg"
import monster3 from "../assets/monster-logo.png"

const AboutSection = () => {
  return (
    <section className="about-section">
      <div className="about-content">
        <button className="about-btn">About Monster</button>
        <p className="about-para">Since 2002, Monster has fueled gamers, athletes, and grinders who refuse to slow down. Whether you're crushing a workout or pulling an all-nighter, we've got the can for it.</p>
      </div>

      <div className="cards">
        <div className="card1">
          <img src={monster3} alt="no"/>
          <p className="card1-title">Premium ingredients with the right blend of caffeine, taurine & B-vitamins — built for sustained energy, not just a spike.</p>
          <button className="card1-btn">Energy Mode</button>
        </div>

        <div className="card2" style={{backgroundImage: ` url(${monster2})`}}>
          <button className="card2-btn">35+ Flavors</button>
        </div>

        <div className="card3" style={{backgroundImage: ` url(${monster1})`}}>
        </div>
      </div>
    </section>
  )
}

export default AboutSection