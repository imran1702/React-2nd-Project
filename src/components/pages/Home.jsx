import { useContext, useState } from 'react'
import Header from '../Header'
import Menu from '../Menu'
import { Col, Container, Row } from 'react-bootstrap'
import banner from "../../assets/tv-offer-web-banner-982x500.webp"
import jonCareer from "../../assets/job-career-2024.webp"
import { Link, useNavigate } from 'react-router-dom'
import { ApiData } from './ContextApi'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from '../slices/countSlice'

function Home({product}) {
  let data = useContext(ApiData)
  let disPatch = useDispatch()
  let [showCartQnty, setShowCartQnty] = useState(false)
  let cartItems = useSelector((state)=> state.cartItemCount.value)
  let navigate = useNavigate()

  const handleProductDetailPage = ()=>{
    navigate (`/product/${product.id}`)
  }

  const handleAddCart = () => {
    disPatch(increment());
    setShowCartQnty(true);
  };
  
  return (
    <>
    <section id='home'>
        <div className="banner">
          <Container>
            <Row>
              <Col lg={9}>
                <div className="banImg">
                  <img src={banner} alt="" className='w-100'/>
                </div>
              </Col>
              <Col lg={3}>
                <div className="subBan">
                  <div className="compSec text-center mb-4" style={{background: "#FFE8A1", padding: "15px 0"}}>
                    <h5>Compare Products</h5>
                    <small>Chose Two Products To Compare</small>
                    <div className="firstProduct my-3">
                      <input type="search" placeholder='Search and Select Product' style={{border: "transparent", padding: "10px", width: "70%"}}/>
                    </div>
                    <div className="secondProduct my-3">
                      <input type="search" placeholder='Search and Select Product' style={{border: "transparent", padding: "10px", width: "70%"}}/>
                    </div>
                    <button style={{width: "70%", border:"#26479E 2px solid", background:"transparent", padding:"10px 0", color:"#26479E", fontWeight:"700", borderRadius:"5px"}}>View Compare</button>
                  </div>
                  <div className="careerLink">
                    <Link>
                      <div className="img">
                        <img src={jonCareer} alt="" className='w-100'/>
                      </div>
                    </Link>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        <div className="featureProducts">
          <Container>
            <Row className='text-center g-3'>
              {data.map((item)=>( 
                <Col lg={4}>
                    <div onClick={handleProductDetailPage} className="proCard" style={{position:"relative", boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)", padding: "10px"}}>
                      <>
                  {/* <Link to="/ProductDetails.jsx" style={{textDecoration: "none"}}> */}
                      <small style={{color: "red", position:"absolute", top:"15px", left:"5px", transform:"rotate(-45deg)"}}>{item.availabilityStatus}</small>
                      <img src={item.thumbnail} alt="" />
                      <h4>{item.title}</h4>
                      <strong style={{display: "block"}}>Price: {item.price} BDT</strong>
                  {/* </Link> */}
                      <button onClick={handleAddCart}>Add Cart</button>
                      <div className="cartQnty" style={{display: showCartQnty ? 'block' : 'none'}}>
                        <button onClick={cartItems > 0 ? ()=>disPatch(decrement()) : "" }>-</button>
                        <h4 className='mx-3' style={{display:"inline-block"}}>{cartItems}</h4>
                        <button onClick={()=>disPatch(increment())}>+</button>
                      </div>
                      </>
                    </div>
                </Col>
              ))}
            </Row>
          </Container>
        </div>
    </section>
    </>
  )
}

export default Home