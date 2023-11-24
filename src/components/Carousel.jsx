import '../styles/Carousel.css'
import  {Link}  from "react-router-dom";
import Card from '../components/Card.jsx'
import Apparel from '../Apparel.js';

const Carousel = props => {
    const maxCount = props.max;
    var count = 0;

    return (
        <div className='my-5'>
            <h3 className='my-4'>{props.title}</h3>
            <div className='carousel px-5'>
                {Apparel.map(apparel => {
                if(props.filter === 'bestseller'){
                    if(apparel.bestseller && count < maxCount){
                        count++;
                        return(
                        <Card key={apparel.name} colors = {apparel.colors} name = {apparel.name} price = {apparel.price} />
                        )
                    }
                    else{
                        return null
                    }
                }
                else if(props.filter === 'newcollection'){
                    if(apparel.newcollection && count < maxCount){
                        count++;
                        return(
                        <Card key={apparel.name} colors = {apparel.colors} name = {apparel.name} price = {apparel.price} />
                        )
                    }
                    else{
                        return null
                    }
                }
                else if(props.filter === 'sale'){
                    if(apparel.sale && count < maxCount){
                        count++;
                        return(
                        <Card key={apparel.name} colors = {apparel.colors} name = {apparel.name} price = {apparel.price} />
                        )
                    }
                    else{
                        return null
                    }
                }
                else{
                    return null
                }
                })}
        </div>
        <Link className='carousel-button d-flex align-items-center justify-content-center' to={`Allproducts/${props.filter}`}>View More</Link>
      </div>
    );
  }
  
  export default Carousel;