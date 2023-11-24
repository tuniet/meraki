import '../styles/Card.css';
const Card = props => {
  return (
    <div class="card" data-bs-toggle='modal' data-bs-target="#exampleModal">
      <img src={props.colors[0].imgurlfront} class='card-img-top' alt='' />
      <div class='d-flex flex-column p-2'>
        <span className='card-title'>{props.name}</span>
        <span className='card-price'>{props.price}</span>
        <div className='card-colors'>
        {props.colors.map(color => {
                return(<span>{color.name}</span>)
                })}
          
        </div>
      </div>
      {
      //MODAL
      }
      <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              ...
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="button" class="btn btn-primary">Save changes</button>
            </div>
          </div>
      </div>
</div>
</div>
  );
}

export default Card;
