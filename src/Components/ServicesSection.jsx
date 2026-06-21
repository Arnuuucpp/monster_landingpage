import crd2img from '../assets/monster3.jpg'
import crd3img from '../assets/cover.jfif'

const ServicesSection = () => {
  return (
    <section>
      <div className="services-section">
        <div className="crds">
          <div className="crd1">
            <button className="tag-btn">Our Lineup</button>
            <p className="crd1-para">From classic green to zero-sugar options, explore the full Monster range built for every kind of hustle.</p>
            <button className="foot-btn">View All Flavors</button>
          </div>

          <div className="crd2" style={{backgroundImage: ` url(${crd2img})`}}>
            <button className='crd2-btn'>Zero Sugar</button>
            <div className='crd2-footer'>
              <p>All the energy, none of the sugar.</p>
              <a href="#" target='blank'>⚡</a>
            </div>
          </div>

          <div className="crd3" style={{backgroundImage: ` url(${crd3img})`}}>
            <div className="crd3-bottom-section">
              {/* 1. Headline: Matches the "Beast" branding */}
    <h2 className="crd3-title">Unleash The Beast</h2>
    
    {/* 2. Description: Short and energetic */}
    <p className="crd3-desc">The original high-performance energy drink for those who demand more.</p>
    
    {/* 3. Action Link: Similar to crd2 but distinct */}
    <a href="/flavors/original" className="crd3-link">
      Get The Original ⚡
    </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ServicesSection