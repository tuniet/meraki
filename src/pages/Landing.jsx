import '../styles/Landing.css'
import  {Link}  from "react-router-dom";
import Navbar from '../components/Navbar.jsx'
import Footer from '../components/Footer.jsx'
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
      <Link to='/aboutus'><div className='hrimg-aboutus my-4'>
        <img src={aboutimg} alt=''></img>
        <p className='abouttext'>We're the heartbeat of bold style, where rebellion meets fashion. Born for the wild hearts and free minds, our clothes scream individuality. Join the craze, break the norms.</p>
        <span className='aboutcall py-2 px-4'>LEARN MORE</span>
      </div></Link>
      <Carousel title = 'On sale' max = {4} filter = 'sale'/>
      <div className='lastcta d-flex px-4 my-5 pb-5'>
        <Link className='lastcta-card one' to='Allproducts/all'><div className='lastcta-fg'></div><span className='lastcta-button py-2 px-4'>SHOP</span></Link>
        <Link className='lastcta-card two' to='Allproducts/all'><div className='lastcta-fg'></div><span className='lastcta-button py-2 px-4'>SHOP</span></Link>
        <Link className='lastcta-card three' to='Allproducts/all'><div className='lastcta-fg'></div><span className='lastcta-button py-2 px-4'>SHOP</span></Link>
        <Link className='lastcta-card four' to='Allproducts/all'><div className='lastcta-fg'></div><span className='lastcta-button py-2 px-4'>SHOP</span></Link>
        <Link className='lastcta-card five' to='Allproducts/all'><div className='lastcta-fg'></div><span className='lastcta-button py-2 px-4'>SHOP</span></Link>
      </div>
      <Footer />
      <div className='d-flex justify-content-center'>THIS IS A FICTIONAL SHOP MADE BY TONI FDEZ FOR &nbsp;<a  className='footer-link' href='https://www.tonifdez.com'>MY PORTFOLIO</a></div>
    </div>
    </div>
  );
}

export default Landing;