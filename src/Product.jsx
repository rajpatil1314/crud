
import React, { useEffect, useState } from 'react'
import Form from './Form'
import './Product.css';

const Product = () => {

    const [data , setdata] = useState ([])
    const [updatedata , setupdatedata] = useState()
    const [id , setid] = useState();

    const fetchdata = ()=>
    {
        fetch("http://localhost:3000/products")
        .then((res)=>res.json())
        .then((data)=>setdata(data))
        .catch(err=>console.log(err))
    }
    const handledelete = (id)=>
        {

          fetch(`http://localhost:3000/products/${id}`, 
            {
              method : 'DELETE'

            })
          .then((res)=>res.json())
        .then((data)=>console.log(data))
        .catch(err=>console.log(err))
          }


          const HandleEdit =  (id , price)=>
          {

            setid(id)
            setupdatedata(price)
            
          }
          const handleClick = (id)=>
          {
            fetch(`http://localhost:3000/products/${id}` , {
                method : "PATCH",
                headers : {


                  "Content-Type" : "application/json",

                },
                body : JSON.stringify({price : updatedata}),

            })   .then((res)=>res.json())
            .then((data)=>console.log(data))
            .catch(err=>console.log(err))

          }

          useEffect (()=>{

            fetchdata();

          })
  return (
   <>
    <Form/>

    
    

    <h1>Updata data</h1>


    <input  style={{margin : '10px'}}
      type="text"
      placeholder="Updata price"
      value={updatedata}
      onChange={(e) =>setupdatedata(e.target.value)}


    />
    <button onClick={()=>handleClick(id)}>Update</button>

    <hr/>

    <h1>Display Product</h1>


    {data .map((el) => (

      <div>
        <h2>{el.id}</h2>
        <img src={el.image} height={200} width={200} style={{ gridTemplateColumns : "repeat(3,1fr)" ,   gap : "10px", }} />
        <h4 style={{fontSize : '20px'}}>{el.title}</h4>
        <h1 style={{fontSize : '20px'}}>{el.description}</h1>
        <h1 style={{fontSize : '20px'}}>{el.price}</h1>
        <i>{el.category}</i>
        <br></br>
        <br></br>
        <button onClick={() => HandleEdit(el.id , el.price)}>Edit</button>
        <button onClick={() => handledelete(el.id)}>Delete</button>
      </div>

    ))}


   </>
  )
}

export default Product


