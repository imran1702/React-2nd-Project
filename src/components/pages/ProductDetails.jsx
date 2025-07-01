import React from 'react'
import { useParams } from 'react-router-dom'

const ProductDetails = () => {
  const { id } = useParams()
  const product = fakeProductData.find((item) => item.id === id);

  if (!product) return <div>Product not found</div>;
  return (
    <>
    <div className="p-6">
      <img src={product.image} alt={product.name} />
      <h1 className="text-2xl font-bold">{product.name}</h1>
      <p className="text-lg">Price: {product.price} BDT</p>
      <p>{product.description}</p>
    </div>
    </>
  )
}

export default ProductDetails