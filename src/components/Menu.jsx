import React, { useContext } from 'react'
import { Container } from 'react-bootstrap'
import { ApiData } from './pages/ContextApi'


function Menu() {
  let data = useContext(ApiData)
  const uniqueCategories = [...new Set(data.map(item => item.category))];
  
  return (
    <Container>
        <div className="menuWrapper">
        <ul className='d-flex justify-content-between' style={{listStyle: "none", padding: "0"}}>
          {uniqueCategories.map((category,index)=>(
            
            <li key={index}>
              <a href={`/${category}`} style={{textDecoration: "none", textTransform:"uppercase"}}>{category}</a>
            </li>
            
          ))}
        </ul>
    </div>
    </Container>
  )
}

export default Menu