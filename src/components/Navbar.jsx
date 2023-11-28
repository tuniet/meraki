import { useState } from 'react';
import '../styles/Navbar.css';
import  {Link}  from "react-router-dom";

function Navbar() {

  const [visibleNav, setvisibleNav] = useState('show');
  const [onTop, setonTop] = useState('top')
  const [showmenu, setshowmenu] = useState('')
  
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
    <div className='navexp' >
      <div className={`d-flex align-items-center nav px-4 ${visibleNav} ${onTop}`}>
              <div className='d-flex justify-content-start nav-side'>
              <Link className='item' to='/Allproducts/all' onMouseEnter={() => setshowmenu('menu-active')}>SHOP</Link>
              <Link className='item' to='/Allproducts/newcollection'>NEW ARRIVALS</Link>
              <Link className='item' to='/Allproducts/sale'>ON SALE</Link>
          </div>
          <Link to='/' className='title'><h1 className='d-flex justify-content-center m-0'>MERAKI</h1></Link>
          <div className='d-flex justify-content-end nav-side'>
              <span className='item'>ENG</span>
              <Link className='item' to='/Aboutus'>ABOUT US</Link>
              <span className='item'>CART</span>
          </div>
      </div>
      <div className={`extension d-flex px-4 ${showmenu}`} onMouseLeave={() =>setshowmenu('')}>
          <Link className='menu-card tees' to='/Allproducts/tees'><div className='menu-fg'></div><span className='card-title'>TEES</span></Link>
          <Link className='menu-card hoods' to='/Allproducts/hoodies'><div className='menu-fg'></div><span className='card-title'>HOODIES</span></Link>
          <Link className='menu-card pants' to='/Allproducts/pants'><div className='menu-fg'></div><span className='card-title'>PANTS</span></Link>
          <Link className='menu-card accessories' to='/Allproducts/all'><div className='menu-fg'></div><span className='card-title'>ACCESSORIES</span></Link>
      </div>
    </div>
  );
}

export default Navbar;