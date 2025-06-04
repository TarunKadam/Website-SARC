function Products() {
  return (
    <div >
      <h1 style={{ textAlign: "center", fontSize: "40px", marginTop: 0 }}>Products</h1>
      <div className="text-block slide-in-up">
        <p style={{ textAlign: "left", fontSize: "30px", margin: "10px 0" }}>Solar Integrated LED Street Light</p>
        
          <img
    src={require('../assets/Product_1.jpg')} // adjust path as needed
    alt="Solar LED Street Light"
    style={{ display: 'block',marginLeft: '0',marginRight: 'auto', marginTop: '20px',maxWidth: '100%', height: '200px', borderRadius: '10px' }}
  />
        
        <p style={{ textAlign: "right",fontSize: "18px",marginTop: "-190px",  marginBottom: "10px",  }}>
          
360 degree adjustable Light
<br/><br/>
3– 50 watt Light
<br/><br/>
 Auto ON-OFF ( dusk to dawn)
<br/><br/>
High Quality Lithium Battery & LED
<br/><br/>
Easy Installation</p>
      </div>

      <div className="text-block slide-in-up">
        <p style={{ textAlign: "left", fontSize: "30px", margin: "10px 0" }}>LED Lights: Industrial & Commercial
(High/Low bay)</p>
        
          <img
    src={require('../assets/Product_2.jpg')} // adjust path as needed
    alt="LED Lights: Industrial & Commercial
(High/Low bay)"
    style={{ display: 'block',marginLeft: '0',marginRight: 'auto', marginTop: '20px',maxWidth: '100%', height: '200px', borderRadius: '10px' }}
  />
        
        <p style={{ textAlign: "right",fontSize: "18px",marginTop: "-190px",  marginBottom: "10px",  }}>
          
30 – 150 watt
<br/><br/>
LED: 150 Lum / watt
<br/><br/>
Aluminum fixture
<br/><br/>
Constant Current LED Driver (IP-67)
</p>
      </div>


      <div className="text-block slide-in-up">
        <p style={{ textAlign: "left", fontSize: "30px", margin: "10px 0" }}>LED Sport/ Area Light</p>
        
          <img
    src={require('../assets/Product_3.jpg')} // adjust path as needed
    alt="LED Sport/ Area Light"
    style={{ display: 'block',marginLeft: '0',marginRight: 'auto', marginTop: '20px',maxWidth: '100%', height: '200px', borderRadius: '10px' }}
  />
        
        <p style={{ textAlign: "right",fontSize: "18px",marginTop: "-190px",  marginBottom: "10px",  }}>
          
100 – 550 watt
<br/><br/>
LED: 150 Lum / watt
<br/><br/>
Aluminum fixture
<br/><br/>
Constant Current LED Driver (IP-67)
</p>
      </div>
    </div>
  );
}

export default Products;