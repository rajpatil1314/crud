import React, { useState } from 'react'
import './Form.css';


const Form = () => {

    const handleSubmit = (e)=>
    {
        e.preventDefault();

        fetch("http://localhost:3000/products" , {

            method : "POST",
            headers : {
              "Content-Type" : "application/json",
            },
            body : JSON.stringify(formdata),

        })   .then((res)=>res.json())
             .then((data)=>setformdata(data))
             .catch(err=>console.log(err))
    } 

    const initalState = {
        image : "",
        title : "",
        description : "",
        category : "",
        price : ""

    }

    const [formdata , setformdata] = useState(initalState);

    const handleChange = (e)=>
    {

        setformdata({...formdata, [e.target.name] : e.target.value})
    }
    
  return (
    <div>
    <form onSubmit={(e) => handleSubmit(e)}>
    <input   style={{margin : '10px'}}
        type="text"
        name="image"
        placeholder="product image"
        onChange={(e) => handleChange(e)}
    />
       <input   style={{margin : '10px'}}
        type="text"
        name="title"
        placeholder="product title"
        onChange={(e) => handleChange(e)}
    />
       <input   style={{margin : '10px'}}
        type="text"
        name="category"
        placeholder="product category"
        onChange={(e) => handleChange(e)}
    />
       <input   style={{margin : '10px'}}
        type="text"
        name="price"
        placeholder="product price"
        onChange={(e) => handleChange(e)}
    />
   

  <input  type="submit"/>
    
        
    </form>



      
    </div>
  )
}

export default Form
