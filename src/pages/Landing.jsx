import '../styles/Landing.css'
import  {Link}  from "react-router-dom";
import Navbar from '../components/Navbar.jsx'
import Card from '../components/Card.jsx'
function Landing() {
  return (
    <div id='landing' className="landing">
        <Navbar />
        <div className='heroimage'><img src='../media/herobg-hd.jpg' alt=''/><Link className='herobutton d-flex align-items-center justify-content-center'>Shop now</Link></div>
        <div className='bestsellers'>
            <h3 className='mx-auto mt-4'>Best sellers</h3>
            <div className='carousel'>
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
        </div>
    </div>
  );
}

export default Landing;