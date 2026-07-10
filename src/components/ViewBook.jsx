import React, { useState } from 'react'
import NavigationBar from './NavigationBar'

const ViewBook = () => {
    const [data,changeData]=useState(
        [
            {"title":"How to steal a heart","avatar":"https://i.pinimg.com/736x/fd/a0/a9/fda0a96c1288877b416f9f7618a87df2.jpg ","author":"YOU","price":"₹499"},
            {"title":"The secret garden","avatar":" https://i.pinimg.com/736x/af/44/80/af4480b2d95058a9c6790b45d0e05d13.jpg","author":"Hogson burnett","price":"₹349"},
            {"title":"The Alchiemist","avatar":"https://i.pinimg.com/1200x/a2/f1/ac/a2f1ac4c7001cb25f2d6fbbc33e79e48.jpg ","author":"Paulo coelo","price":"₹899"},
            {"title":"It end with us","avatar":"https://i.pinimg.com/736x/3a/14/1e/3a141ec359673feb4dad6e64d92b1e0c.jpg ","author":"Collen Hoover","price":"Price: ₹899"},
            {"title":"Verity","avatar":" https://i.pinimg.com/736x/79/c5/c2/79c5c2be1504e12e4a51438faa90b526.jpg","author":"Collen Hoover","price":"Price: ₹899"},
            {"title":"The diary of young girl","avatar":"https://i.pinimg.com/736x/b4/c0/f6/b4c0f6ddb1a5c552d06407edc385aa36.jpg ","author":"Annie Frank","price":"₹499"},

        ]
    )
  return (
    <div>
        <NavigationBar/>
         <div className="container">
             <center><h3>VIEW BOOKS</h3></center> 
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                    <div className="row g-3">
                       
                        {
                            data.map(
                                (value,index)=>{
                                    return (<div className="col col-12 col-sm-4 col-md-4 col-lg-4 col-xl-4 col-xxl-4">

                            <div class="card">
                                
                                <div class="card-body">
                                    <img src={value.avatar} class="card-img-top" alt="..." height="350"/>
                                    <h5 class="card-title">{value.title}</h5>
                                    <p>AUTHOR: {value.author}</p>
                                    <p class="card-text"><strong>{value.price}</strong></p>
                                    <a href="#" class="btn btn-dark">Add to Cart</a>
                                </div>
                        </div>



                        </div>)
                                }
                            )
                        }
                        
                         
                         
                     
                        
                       
                    </div>



                </div>
            </div>
        </div>
    </div>
  )
}

export default ViewBook