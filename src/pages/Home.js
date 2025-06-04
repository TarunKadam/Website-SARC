import "./Home.css";

import Carousel from '../components/Carousel.jsx';

function Home() {
  return (
    <div>
      <h1 style={{ textAlign: "center",fontSize: "40px", marginTop: 0 }}>Why go for Solar?</h1>
      <p className="animated-paragraph">
  Solar Power generation has emerged as one of the most rapidly growing renewable sources of electricity. Solar power is a primary pillar for a clean energy future for all of us. Solar power generation has several advantages over other forms of electricity generation.
  <br /><br />
  Solar is an essential component of the global renewable energy mix. Solar photovoltaic technology produces electricity without emitting carbon dioxide, noise or other gaseous emissions and uses only sunlight as fuel which is available everywhere free of cost.
  <br /><br />
  The return on investment of going solar is highly valuable not only financially but also in terms of public health and environmental sustainability. With every passing year, solar energy has become more popular for home and business owners as people have become aware of its various benefits like decrease in installation costs.
</p>
      <h1 style={{ textAlign: "center",fontSize: "40px", marginTop: 0 }}>Solar Energy Projects</h1>
      <div className="text-block slide-in-up">
      <p>We have installed many Solar projects, generating electricity with high energy conversion ratio. We prefer quality to quantity. We have built Solar Grid Connected System, Solar OFF Grid System and Solar Hoarding Power System and many more. </p>
         <p>
          <a href="/projects" className="project-link">View our Projects →</a>
        </p>
    </div>
<br /><br />
     <h1 style={{ textAlign: "center",fontSize: "40px", marginTop: 0 }}>Solar and LED Products</h1>
      <div className="text-block slide-in-up">
      <p>We are manufacturer of Solar and LED products besides being a "MNRE, Government of India for Solar Grid connected rooftop and Small power plants programme" Channel Partner. 
        We are working on “Innovation for Social Cause” where solar energy is the most abundantly available renewable source of energy.</p>
         <p>
          <a href="/products" className="project-link">View our Products →</a>
        </p>
        
    </div>
    <br /><br />
    <Carousel />
    </div>


  );
}

export default Home;