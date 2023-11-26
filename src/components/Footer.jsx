import '../styles/Footer.css'

const Footer = props => {
    return (
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
    );
  }
  
  export default Footer;