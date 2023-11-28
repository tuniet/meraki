import { useParams } from 'react-router-dom';
import '../styles/Allproducts.css';
import Navbar from '../components/Navbar';
import { useState } from 'react';
import Apparel from '../Apparel.js';
import Card from '../components/Card.jsx';
import FGBrwnPantsFront from '../media/Clothing-imgs/Pants/FGPantsBrownFront.jpg';
import FGBrwnPantsBack from '../media/Clothing-imgs/Pants/FGPantsBrownBack.jpg';
import Modal from '../components/Modal.jsx';

const Allproducts = props => {
  let params = useParams();
  const [filter, setFilter] = useState('')
  const [apparelname, setapparelname] = useState('Tee')
  const [apparelprice, setapparelprice] = useState('49,99$')
  const [apparelcolors, setapparelcolors] = useState([{
    code: '#3e2c1e',
    imgurlfront: FGBrwnPantsFront,
    imgurlback: FGBrwnPantsBack,
}])
  //setFilter(params)

  return (
    <>
      <Modal name = {apparelname} price = {apparelprice} colors = {apparelcolors} setactive = {props.setactive} active = {props.modalactive} />
      <div id='allproducts' className="allproducts">
          <Navbar />
          <div className="filter-bar d-flex px-5">
            <div className='filter'>
              <span>Filter</span>
              <div></div> 
            </div>
            <div className='sort'>
              <span>Sort by</span>
              <div></div>
            </div>
          </div>
          <div className="collection container-fluid">
            <div className='row'>
            {Apparel.map(apparel => {       
              return(
                <div className="col-md-6 col-lg-4 col-xl-3">
                  <Card key={apparel.name} colors = {apparel.colors} name = {apparel.name} price = {apparel.price} setactive = {props.setactive} setapparelprice = {setapparelprice} setapparelname = {setapparelname} setapparelcolors = {setapparelcolors}/>
                </div>
              )})}    
            </div>
          </div>
      </div>
    </>
  );
}

export default Allproducts;