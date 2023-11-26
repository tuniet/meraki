import '../styles/Nopage.css';
import Navbar from '../components/Navbar.jsx'
import Footer from '../components/Footer.jsx'
import  {Link}  from "react-router-dom";

function Nopage() {
  return (
    <div>
      <Navbar />
      <div id='404' className="nopage d-flex justify-content-center align-items-center">
        <h3>ERROR 404</h3>
        <h5>The page you are looking for cannot be found</h5>
        <Link className='nopage-button py-2 px-4 mt-4' to='/'>BACK TO HOMEPAGE</Link>
      </div>
      <Footer />
    </div>
  );
}

export default Nopage;