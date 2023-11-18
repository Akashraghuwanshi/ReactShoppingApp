import React from 'react'
import ListItem from './ListItem'

const Product = () => {

    const items=[{
        id:1,
        discountedPrice:350,
    price:450,
    title:"Item-1",
    thumnail:"tshirt.jpg"
    },
    {
        id:2,
        discountedPrice:550,
        price:650,
        title:"Item-2",
        thumnail:"being.jpg"
      },
      {
          id:3,
          discountedPrice:409,
          price:550,
          title:"Item-3",
          thumnail:"jacket.webp"
        }
    ]


  return (
    <div className='product-list'>
    <div className='product-list-wrapper'>
         <ListItem data={items[0]}/>
         <ListItem data={items[1]}/>
         <ListItem data={items[2]}/>

    
    </div>
    </div>
    
  )
}

export default Product