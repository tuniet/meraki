import '../styles/Modal.css';
import { useState } from 'react';
import closeIcon from '../media/icons/x-lg.svg';

const Modal = props => {

  const [modalimg, setmodalimg] = useState('onleft')
  const [selectedsize, setselectedsize] = useState('one')
  const [selectedcolor, setselectedcolor] = useState(0)

  return (
      <div className={`card-modal ${props.active}`}>
        <span className='modal-close-button' onClick={() => props.setactive('')}><img src={closeIcon} alt=''/></span>
        <span className='cars-button left' onClick={() => setmodalimg('')}>{'<'}</span>
        <div className='modal-img-sec'>
            <img src={props.colors[selectedcolor].imgurlback} className={`modal-img back ${modalimg}`} alt='' />
            <img src={props.colors[selectedcolor].imgurlfront} className={`modal-img front ${modalimg}`} alt='' />  
        </div>
        <span className='cars-button right' onClick={() => setmodalimg('onright')}>{'>'}</span>
        <div className='modal-info-sec'>
          <h1>{props.name}</h1>
          <h2>{props.price}</h2>
          <div className='modal-colors'>
          {
          props.colors.map((color, i) => {
            let code = color.code
            return(<span key={code} className='colors' style={{backgroundColor: code}} onClick={() => setselectedcolor(i)}></span>)
          })}
          </div>
          <div className='modal-sizes'>
            <span className={`size-select xs ${selectedsize} underline-animation`} onClick={() => setselectedsize('one')}>XS</span>
            <span className={`size-select s ${selectedsize}`} onClick={() => setselectedsize('two')}>S</span>
            <span className={`size-select m ${selectedsize}`} onClick={() => setselectedsize('three')}>M</span>
            <span className={`size-select l ${selectedsize}`} onClick={() => setselectedsize('four')}>L</span>
            <span className={`size-select xl ${selectedsize}`} onClick={() => setselectedsize('five')}>XL</span>
            <span className={`size-select xxl ${selectedsize}`} onClick={() => setselectedsize('six')}>XXL</span>
          </div>
          <span className='selector'></span>
          <span className='cart-button px-5 py-3 mt-4' onClick={() => props.setactive('')}>ADD TO CARD</span>
        </div>
      </div>
  );
}

export default Modal;
