import { useParams } from 'react-router-dom';
import '../styles/Allproducts.css';
import Navbar from '../components/Navbar';
import { useEffect, useState } from 'react';
import Apparel from '../Apparel.js';
import Card from '../components/Card.jsx';
import FGBrwnPantsFront from '../media/Clothing-imgs/Pants/FGPantsBrownFront.jpg';
import FGBrwnPantsBack from '../media/Clothing-imgs/Pants/FGPantsBrownBack.jpg';
import Modal from '../components/Modal.jsx';

const Allproducts = props => {
  let params = useParams();
  const [filter, setFilter] = useState('none')
  const [type, settype] = useState('all')
  const [apparelname, setapparelname] = useState('Tee')
  const [apparelprice, setapparelprice] = useState('49,99$')
  const [apparelcolors, setapparelcolors] = useState([{
    code: '#3e2c1e',
    imgurlfront: FGBrwnPantsFront,
    imgurlback: FGBrwnPantsBack,
}])

useEffect(() => {
  if(params.filter === 'all') setFilter('none')
  else{setFilter(params.filter)}

  settype(params.type)
},[params])

  return (
    <>
      <Modal name = {apparelname} price = {apparelprice} colors = {apparelcolors} setactive = {props.setactive} active = {props.modalactive} />
      <div id='allproducts' className="allproducts">
          <Navbar />
          <div className="filter-bar d-flex px-5">
            <div className="selector d-flex mb-4">
              <span className='px-2'>Filter</span>
              <select value= {filter} onChange={e => setFilter(e.target.value)}>
                <option value="none">All</option>
                <option value="onsale">On sale</option>
                <option value="bestseller">Bestsellers</option>
                <option value="newcollection">New collection</option>
              </select>
            </div>
            <div className="selector d-flex mb-4">
              <span className='px-2'>Type</span>
              <select value= {type} onChange={e => settype(e.target.value)}>
                <option value="all">All</option>
                <option value="tees">Tees</option>
                <option value="hoodies">Hoodies</option>
                <option value="pants">Pants</option>
              </select>
            </div>
          </div>
          <div className="collection container-fluid">
            <div className='row'>
            {Apparel.map((apparel, i) => {      
              if((apparel.filter === filter || filter === 'none') && (apparel.type === type || type === 'all')){
              return(
                <div className="col-md-6 col-lg-4 col-xl-3" key={i}>
                  <Card key={apparel.name} colors = {apparel.colors} name = {apparel.name} price = {apparel.price} setactive = {props.setactive} setapparelprice = {setapparelprice} setapparelname = {setapparelname} setapparelcolors = {setapparelcolors}/>
                </div>
              )}
              else return null
              })}    
            </div>
          </div>
      </div>
    </>
  );
}

export default Allproducts;