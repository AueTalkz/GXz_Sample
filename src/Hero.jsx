import TypingText from "./TypingText";

function Hero() {  
    return (
        <section className="hero">
            <div className="hero-content">

          <h1>Welcome to</h1> <br/><h2>Geatz Xplorz,</h2>
        <h3>We Provide Services in <br /></h3>
        <div className="type-text">
            <TypingText />
        </div>
       <p><b>Discover Your Brand'z Voice with Geatz Xplorz</b></p>
      </div>
      <img src="GXz.png" alt="Home Image" />
            
        </section>
    );
}   

export default Hero;
