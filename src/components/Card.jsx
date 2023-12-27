import '../styles/Card.css'

const Card = props => {
  
  const handleClick = () =>{
    props.setapparelprice(props.price)
    props.setapparelname(props.name)
    props.setapparelcolors(props.colors)
    props.setactive('active')
  }
  return (
      <div className='card' onClick={handleClick}>
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
        </div>
  );
}

export default Card;
