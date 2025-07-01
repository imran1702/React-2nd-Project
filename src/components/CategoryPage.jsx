import React, { useContext } from 'react'
import { useParams } from 'react-router-dom';
import { ApiData } from './pages/ContextApi';
import ProductCard from "../components/ProductCard"; 
import { Col, Container, Row } from 'react-bootstrap';

const CategoryPage = () => {
    const { category } = useParams();
    const data = useContext(ApiData);

    const filteredProducts = data.filter(
    (item) => item.category.toLowerCase() === category.toLowerCase()
  );

  return (

    <>
    <Container>
      <Row>
     <div style={{ padding: "2rem" }}>
      <h2>You are in category: <strong>{category}</strong></h2>
        <Col lg={4}>
          {filteredProducts.length > 0 ? (
        <div style={{ 
          display: "flex", 
          flexWrap: "wrap", 
          gap: "20px", 
          marginTop: "20px" 
        }}>
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <p>No products found in this category.</p>
      )}
        </Col>
        </div>
      </Row>



    </Container>
    </>
  )
}

export default CategoryPage