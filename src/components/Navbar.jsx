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
      setshowmenu('')
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
              <Link className='item' to='/allproducts/all/all' onMouseEnter={() => setshowmenu('menu-active')}>SHOP</Link>
              <Link className='item' to='/allproducts/newcollection/all'>NEW ARRIVALS</Link>
              <Link className='item' to='/allproducts/sale/all'>ON SALE</Link>
          </div>
          <Link to='/' className='title'><h1 className='d-flex justify-content-center m-0'>MERAKI</h1></Link>
          <div className='d-flex justify-content-end nav-side'>
              <Link className='item' to='/Aboutus'>ABOUT US</Link>
              <a class="item" data-bs-toggle="offcanvas" href="#offcanvasExample" role="button" aria-controls="offcanvasExample">CART</a>
          </div>
      </div>
      <div className={`extension d-flex px-4 ${showmenu} ${visibleNav}`} onMouseLeave={() =>setshowmenu('')}>
          <Link className='menu-card tees' to='/allproducts/all/tees'><div className='menu-fg'></div><span className='card-title'>TEES</span></Link>
          <Link className='menu-card hoods' to='/allproducts/all/hoodies'><div className='menu-fg'></div><span className='card-title'>HOODIES</span></Link>
          <Link className='menu-card pants' to='/allproducts/all/pants'><div className='menu-fg'></div><span className='card-title'>PANTS</span></Link>
          <Link className='menu-card accessories' to='/allproducts/all'><div className='menu-fg'></div><span className='card-title'>ACCESSORIES</span></Link>
      </div>
      <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
            <div class="offcanvas-header">
                <h5 class="offcanvas-title fs-5" id="offcanvasExampleLabel">Cart</h5>
                <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div class="offcanvas-body align-items-center d-flex justify-content-center">
                <div>
                  <b className='fs-4'>YOUR CART IS EMPTY</b><br/>
                  {'(the cart is not implemented in this fictional store)'}
                </div>
            </div>
        </div>
    </div>
  );
}

export default Navbar;