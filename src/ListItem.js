
import AddToCardIcon from './AssetsIcons/addtocard.webp'
import React from 'react';

const ListItems = ({data}) => {
  console.log(data);
  
  return (
    <div className='item-card'>
        <img className={'img-fluid'} src={`/Images/${data.thumnail}`} alt={data.title} width="100%" height="100%" />
      <div className={'item-card-information'}>
         <div className={'pricing'}>
              <span>Rs{data.discountedPrice}</span>
             <small>
               <strike>{data.price}</strike>
            </small>
        </div>
             <div className={'title'}>
             <a href="https://www.amazon.in" target="_blank" rel="noreferrer"><h3>{`${data.title}`}</h3> </a>
             </div>
      </div>
      <button className={'card-add'}> Add to Card
      <img src={AddToCardIcon} alt="addtocard" width ="35px" />
      </button>
        
    </div>
    
      
  )
}

export default ListItems