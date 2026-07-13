import React, { Component } from 'react'
const Product = (props)=>{
  let {product}=props
  if(product == "Mobile"){
    throw new Error("Product not found.....")
  }
    return (
      <>
      <h2>Product-{product}</h2>
      </>
    )
  }
export default Product
