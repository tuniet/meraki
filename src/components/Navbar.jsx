import '../styles/Navbar.css';
import  {Link}  from "react-router-dom";

function Navbar() {
  return (
    <div className="d-flex align-items-center nav px-4">
            <div className='d-flex justify-content-start nav-side'>
            <Link className='item' to='Allproducts'>All products</Link>
            <Link className='item' to='Allproducts'>New arrivals</Link>
            <Link className='item' to='Allproducts'>On Sale</Link>
        </div>
        <h1 className='d-flex justify-content-center m-0 title'>MERAKI</h1>
        <div className='d-flex justify-content-end nav-side'>
            <span className='item'>Lenguage</span>
            <Link className='item' to='Aboutus'>About us</Link>
            <span className='item'>Cart</span>
        </div>
    </div>
  );
}

export default Navbar;