import '../styles/Card.css';
import { useState } from 'react';
import closeIcon from '../media/icons/x-lg.svg';

const Card = props => {

  const [active, setactive] = useState('')
  const [modalimg, setmodalimg] = useState('onleft')
  const [selectedsize, setselectedsize] = useState('one')
  var colorindex = 0;
  return (
    <>
      <div className='card' onClick={() => setactive('active')}>
        <div className='card-img-top'>
          <img src={props.colors[0].imgurlfront} className='card-img front' alt='' />
          <img src={props.colors[0].imgurlback} className='card-img back' alt='' />
        </div>
        <div className='d-flex flex-column p-2'>
          <span className='card-title'>{props.name}</span>
          <span className='card-price'>{props.price}</span>
          <div className='card-colors'>
          {props.colors.map(color => {
            let code = color.code
                  return(<span key={code} className='colors' style={{backgroundColor: code}}></span>)
          })}
            
          </div>
        </div>
        {
        //MODAL
        }
      </div>
      <div className={`page-fg ${active}`} onClick={() => setactive('')}></div>
      <div className={`card-modal ${active}`}>
        <span className='modal-close-button' onClick={() => setactive('')}><img src={closeIcon} alt=''/></span>
        <span className='cars-button left' onClick={() => setmodalimg('')}>{'<'}</span>
        <div className='modal-img-sec'>
          <img src={props.colors[colorindex].imgurlback} className={`modal-img back ${modalimg}`} alt='' />
          <img src={props.colors[colorindex].imgurlfront} className={`modal-img front ${modalimg}`} alt='' />
        </div>
        <span className='cars-button right' onClick={() => setmodalimg('onright')}>{'>'}</span>
        <div className='modal-info-sec'>
          <h1>{props.name}</h1>
          <h2>{props.price}</h2>
          <div className='modal-colors'>
          {props.colors.map(color => {
            let code = color.code
            return(<span key={code} className='colors' style={{backgroundColor: code}}></span>)
          })}
          </div>
          <div className='modal-sizes'>
            <span className={`size-select xs ${selectedsize}`} onClick={() => setselectedsize('one')}>XS</span>
            <span className={`size-select s ${selectedsize}`} onClick={() => setselectedsize('two')}>S</span>
            <span className={`size-select m ${selectedsize}`} onClick={() => setselectedsize('three')}>M</span>
            <span className={`size-select l ${selectedsize}`} onClick={() => setselectedsize('four')}>L</span>
            <span className={`size-select xl ${selectedsize}`} onClick={() => setselectedsize('five')}>XL</span>
            <span className={`size-select xxl ${selectedsize}`} onClick={() => setselectedsize('six')}>XXL</span>
          </div>
          <span className='cart-button px-5 py-3 mt-4' onClick={() => setactive('')}>ADD TO CARD</span>
        </div>
      </div>
    </>
  );
}

export default Card;
