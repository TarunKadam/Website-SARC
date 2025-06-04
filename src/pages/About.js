import "./About.css";
function About() {
  return (
    <div>
      <h1 style={{ textAlign: "center", fontSize: "60px", marginTop: 0 }}>About Us</h1>
      <div className="centered-block slide-in-left">
      <p>SolarForce is a manufacturer of Solar & LED products. In today's world, there is a call for renewable sources of energy.
        The non-renewable resources are getting depleted as well as they cause global warming, pollution and are a serious threat to the mankind and the nature.
        Hence, we work on Solar Energy and make innovative solutions that would solve real-world issues and make this world once again a happy and beautiful place to live.
        <br /><br />
        Our highly qualified team has years of experience in product design, Research and development. We research and understand the surrounding problems and design innovative products to solve it, our products meet people’s and industry’s exact need. We touch people’s lives in a number of ways, we work every day to continuously set new statutory for product performance, value appearance & our customer’s experience. Our customers can be rest assured that they have a partner who can not only provide a product that will last for years, but will also provide exceptional service for operation and maintenance.

  We have a highly collaborative and supportive team, working together on every project to ensure our clients get the very best result.  
      </p>
      <div className="rotating-mission"> 
         <p>Our Mission
          <br/><br/>
          Build eco-friendly, smart and affordable Solar solutions for the mankind.
         </p>
      </div>
     </div>
    </div>
  );
}

export default About;



