import { useState } from 'react';
import '../styles/Navbar.css';
import  {Link}  from "react-router-dom";

function Navbar() {

  const [visibleNav, setvisibleNav] = useState('show');
  const [onTop, setonTop] = useState('top')
  
  let prevScrollPos = window.scrollY;

  window.addEventListener('scroll', function() {
  // current scroll position
    const currentScrollPos = window.scrollY;

    if (prevScrollPos > currentScrollPos) {
      // user has scrolled up
      setvisibleNav('show');
    } else {
      // user has scrolled down
      setvisibleNav('');
    }
    if (window.scrollY===0){
      setonTop('top')
    }
    else{
      setonTop('')
    }

    // update previous scroll position
    prevScrollPos = currentScrollPos;
  });


  return (
    <div>
      <div className={`d-flex align-items-center nav px-4 ${visibleNav} ${onTop}`}>
              <div className={`d-flex justify-content-start nav-side ${visibleNav}`}>
              <Link className='item' to='Allproducts/all'>All products</Link>
              <Link className='item' to='Allproducts/newcollection'>New arrivals</Link>
              <Link className='item' to='Allproducts/sale'>On Sale</Link>
          </div>
          <h1 className='d-flex justify-content-center m-0 title'>MERAKI</h1>
          <div className='d-flex justify-content-end nav-side'>
              <span className='item'>Lenguage</span>
              <Link className='item' to='Aboutus'>About us</Link>
              <span className='item'>Cart</span>
          </div>
      </div>
      
    </div>
  );
}

export default Navbar;