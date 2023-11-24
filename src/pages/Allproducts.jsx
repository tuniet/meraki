import { useParams } from 'react-router-dom';
import '../styles/Allproducts.css';

function Allproducts() {
  let params = useParams();
  console.log(params);
  return (
    <div id='allproducts' className="allproducts">
        <h1>All products</h1>
    </div>
  );
}

export default Allproducts;