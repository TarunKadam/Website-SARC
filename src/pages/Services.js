import { Link } from 'react-router-dom';
function Services() {
  return (
    <div>
      <h1 style={{ textAlign: "center", fontSize: "45px", marginTop: 0 }}>Services</h1>
      <div className="text-block slide-in-up">
        <h1 style={{ textAlign: "center", fontSize: "30px", marginTop: 0 }}>What we do?</h1>
        <p style={{ textAlign: "center",fontSize: "18px", margin: "10px 0" }}>We design and develop Solar, LED products & projects:
 <br/><br/>           
Solar Grid Connected System
<br/><br/>
Solar OFF Grid System
<br/><br/>
Solar Hoarding Power System
<br/><br/>
Solar Water Pump
<br/><br/>
Solar Integrated LED Street Light
<br/><br/>
Solar DC System
<br/><br/>
LED Lights: Industrial & Commercial
<br/><br/>
LED Sport/ Area Light</p>

<Link to="/products">
  <button style={{ marginRight: '10px' }}>Go to Products</button>
</Link>

<Link to="/projects">
  <button>Go to Projects</button>
</Link>
       


        
      </div>
    </div>
  );
}

export default Services;