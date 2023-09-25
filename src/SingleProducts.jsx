import axios from 'axios';
import React, { useEffect, useState } from 'react'
import {useParams} from 'react-router'
import './SingleProduct.css'
import { Link } from 'react-router-dom';
const SingleProducts = () => {
    const {id}=useParams()
    console.log('id: ', id);
    const [singleProduct,setSingleProduct]=useState([])
    const [loading,setLoading]=useState(false)
    console.log('singleProduct: ', singleProduct);

    const getSingleProduct=async()=>{
        setLoading(true)
        const res=await axios.get(`https://api.punkapi.com/v2/beers/${id}`)
        const {data}=await res
        setSingleProduct(data)
        setLoading(false)
    }

    useEffect(()=>{
     getSingleProduct()
    },[])
  return (
    <div className='single-product'>
        <h2>Single Product</h2>
        <Link to='/'><button>Back</button></Link>
        {loading&&<h3>Loading...</h3>}
        {singleProduct?.map((item,i)=>{
    return (
        <div className='product' key={i}>
            <img src={item?.image_url} alt={item?.name}/>
            <div className='info'>
            <p>
                    <b>Name:</b> {item?.name}
                  </p>
                  <p>
                    <b>Tagline:</b> {item?.tagline}
                  </p>
                  <p>
                    <b>Contributed By:</b> {item?.contributed_by}
                  </p>
                  <p>
                    <b>Description:</b> {item?.description}
                  </p>
            </div>
        </div>
    )
        })}
    </div>
  )
}

export default SingleProducts
