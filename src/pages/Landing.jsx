import '../styles/Landing.css'
import  {Link}  from "react-router-dom";
import Navbar from '../components/Navbar.jsx'
import Carousel from '../components/Carousel.jsx';
import heroimg from '../media/images/herobg-hd.jpg';
import aboutimg from '../media/images/aboutimg.webp'
import SalesBanner from '../components/SalesBanner.jsx';

function Landing() {
  return (
    <div>
    <SalesBanner />
    <div id='landing'>
      <Navbar />
      <Link to='Allproducts/all'>
        <div className='heroimage'>
          <img src={heroimg} alt=''/>
          <div className='herotext d-flex align-items-center justify-content-center'>
            <h5 className='upto'>UP TO</h5><h2 className='perc'>70% OFF</h2><br /><br /><h4 className='call'>SHOP NOW</h4>
          </div>
        </div>
      </Link>
      <Carousel title = 'Best sellers' max = {4} filter = 'bestseller'/>
      <div className='collections d-flex px-4 my-5'>
        <Link className='collection-card tees' to='Allproducts/tees'><span className='collection-title'>Tees</span><span className='collection-button py-2 px-4'>VIEW</span></Link>
        <Link className='collection-card hoods' to='Allproducts/hoodies'><span className='collection-title'>Hoodies</span><span className='collection-button py-2 px-4'>VIEW</span></Link>
        <Link className='collection-card pants' to='Allproducts/pants'><span className='collection-title'>Pants</span><span className='collection-button py-2 px-4'>VIEW</span></Link>
      </div>
      <Carousel title = 'New collection' max = {4} filter = 'newcollection'/>
      <div className='hrimg-aboutus my-4'>
        <img src={aboutimg} alt=''></img>
        <p className='abouttext'>We're the heartbeat of bold style, where rebellion meets fashion. Born for the wild hearts and free minds, our clothes scream individuality. Join the craze, break the norms.</p>
        <span className='aboutcall py-2 px-4'>LEARN MORE</span>
      </div>
      <Carousel title = 'On sale' max = {4} filter = 'sale'/>
      <div className='lastcta d-flex px-4 my-5 pb-5'>
        <Link className='lastcta-card one' to='Allproducts/all'><div className='lastcta-fg'></div><span className='lastcta-button py-2 px-4'>SHOP</span></Link>
        <Link className='lastcta-card two' to='Allproducts/all'><div className='lastcta-fg'></div><span className='lastcta-button py-2 px-4'>SHOP</span></Link>
        <Link className='lastcta-card three' to='Allproducts/all'><div className='lastcta-fg'></div><span className='lastcta-button py-2 px-4'>SHOP</span></Link>
        <Link className='lastcta-card four' to='Allproducts/all'><div className='lastcta-fg'></div><span className='lastcta-button py-2 px-4'>SHOP</span></Link>
        <Link className='lastcta-card five' to='Allproducts/all'><div className='lastcta-fg'></div><span className='lastcta-button py-2 px-4'>SHOP</span></Link>
      </div>
      <div className='footer d-flex px-5'>
        <div className='left'>
          <div className='branding d-flex my-4'>
            <h1 className='title me-4'>MERAKI</h1>
            <div className='eslogan'>
              <span>© MERAKI 2023</span>
              <br />
              <span>INSPIRED BY ART</span>
            </div>
          </div>
          <div className='socials d-flex'>
            <span>INSTAGRAM</span>
            <span>TIK TOK</span>
            <span>TWITTER</span>
            <span>YOUTUBE</span>
          </div>
        </div>
        <div className='right'>
          <form className='form my-4'>
            <h4 className='form-title'>JOIN THE CLUB</h4>
            <input className='form-input py-2 px-2' type="text" id='email' required="" name="email" placeholder="Enter your email"/> 
            <button type="submit" className="form-submit py-2 px-2">Subscribe</button>
          </form>
          <div className='footer-info d-flex'>
          <span>CONTACT</span>
          <span>RETURNS & EXCHANGES</span>
          <span>SHIPPING POLICY</span>
          <span>PRIVACY POLICY</span>
          <span>TERMS OF SERVICE</span> 
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Landing;