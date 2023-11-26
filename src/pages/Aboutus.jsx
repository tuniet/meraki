import '../styles/Aboutus.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import bgvideo from '../media/bgvideo.mp4'
import aboutimgone from '../media/images/aboutimgone.jpg'
import aboutimgtwo from '../media/images/aboutimg2.jpg'


function Aboutus() {
    


  return (
    <>
      <Navbar />
      <div id='aboutus' className="aboutus">
        <div className='hero-vid'>
          <video src={bgvideo} width="750" height="500" autoPlay muted loop />
          <div className="herotxt">
            <span className='subtitle'>Our Mission</span>
            <span className='title'>BRING <br /> INSPIRATION</span>
          </div>
        </div>
        <div className="aboutinfo p-5">
          <h1 className='abouttitle'>This is who we are</h1>
            <div className="pt mb-5">
              <p className='abouttxt pe-5 py-2'>Embark on a journey with our clothing brand tailored for the young and the wildly unconventional. We are the symphony of audacious style, where rebellion and fashion converge. Born for the spirited minds and untamed hearts, our garments are the canvas for self-expression. Each thread weaves a story of individuality, pushing the boundaries of conventional aesthetics. We defy the ordinary and redefine the very essence of style. Our designs resonate with the rhythm of chaos, celebrating the beauty of unpredictability. It's more than a brand; it's a movement, a revolution for those who dare to be different.</p>
              <div className="imgcontainer"><img src={aboutimgone} alt='' className='aboutimg'/></div>
            </div>
            <div className="pt my">
            <div className="imgcontainer"><img src={aboutimgtwo} alt='' className='aboutimg'/></div>
            <p className='abouttxt ps-5 py-2'>Immerse yourself in a kaleidoscope of colors, patterns, and designs that mirror the vibrancy of youthful exuberance. From the streets to the runway, our clothes echo the pulse of the fearless. Join us in rewriting the rules, breaking free from the mundane, and embracing the sheer madness of being authentically you. This isn't just fashion; it's a lifestyle crafted for the spirited souls who find beauty in the unconventional. Step into our world, where every garment is a passport to the extraordinary, and where conformity is left at the door. Welcome to the realm of the young and the crazy, where fashion is a celebration of self.</p>
            </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Aboutus;