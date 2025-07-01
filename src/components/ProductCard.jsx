import React, { useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';



const ProductCard = ({product }) => {
   
let cartItems = useSelector((state)=> state.cartItemCount.value)
let disPatch = useDispatch()
let [showCartQnty, setShowCartQnty] = useState(false)


const handleAddCart = () => {
    disPatch(increment());
    setShowCartQnty(true);
  };
    
  return (
    <>
    <Container>
        <Row>
            <Col lg={4}>
                <div style={{position:"relative", textAlign:"center"}}>
                    <small style={{color: "red", position:"absolute", top:"15px", left:"5px", transform:"rotate(-45deg)"}}>{product.availabilityStatus}</small>
                    <img src={product.thumbnail} alt={product.title}/>
                    <h3>{product.title}</h3>
                    <p>{product.price}</p>
                    <button onClick={handleAddCart}>Add Cart</button>
                    <div className="cartQnty" style={{display: showCartQnty ? 'block' : 'none'}}>
                                            <button onClick={cartItems > 0 ? ()=>disPatch(decrement()) : "" }>-</button>
                                            <h4 className='mx-3' style={{display:"inline-block"}}>{cartItems}</h4>
                                            <button onClick={()=>disPatch(increment())}>+</button>
                                          </div>
                </div>
            </Col>
        </Row>
    </Container>
    </>
  )
}

export default ProductCard