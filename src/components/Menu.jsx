import React, { useContext } from 'react'
import { Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { ApiData } from './pages/ContextApi'


function Menu() {
  let data = useContext(ApiData)
  
  return (
    <Container>
        <div className="menuWrapper">
        <ul className='d-flex justify-content-between' style={{listStyle: "none", padding: "0"}}>
            <li><Link to={data.category}>Laptop</Link></li>
            <li><a href="#" style={{textDecoration: "none"}}>Desktop</a></li>
            <li><a href="#" style={{textDecoration: "none"}}>Monitor</a></li>
            <li><a href="#" style={{textDecoration: "none"}}>UPS</a></li>
            <li><a href="#" style={{textDecoration: "none"}}>Comoponents</a></li>
            <li><a href="#" style={{textDecoration: "none"}}>Camera</a></li>
            <li><a href="#" style={{textDecoration: "none"}}>Accessories</a></li>
            <li><a href="#" style={{textDecoration: "none"}}>Security</a></li>
            <li><a href="#" style={{textDecoration: "none"}}>Gadgets</a></li>
            <li><a href="#" style={{textDecoration: "none"}}>Storage</a></li>
            <li><a href="#" style={{textDecoration: "none"}}>Networking</a></li>
            <li><a href="#" style={{textDecoration: "none"}}>Softwere</a></li>
        </ul>
    </div>
    </Container>
  )
}

export default Menu