import React from 'react'

const AddBook = () => {
  return (
    <div>
        <div className="container">
    <div className="row">
        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
           <div className="row g-3">
            <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                <label htmlFor="" className="form-label">Book Code/ISBN</label>
                <input type="text" className="form-control" />
            </div>
            <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                 <label htmlFor="" className="form-label">Title</label>
                <input type="text" className="form-control" />
            </div>
            <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <label htmlFor="" className="form-label"> Author</label>
               <select name="" id="" className="form-control">
                <option value="">-----select---</option>
                <option value="">product1</option>
                <option value="">product2</option>
                <option value="">product3</option>
               </select>

                
            </div>
            <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <label htmlFor="" className="form-label"> Brand</label>
                <input type="text" className="form-control" />
            </div>
            <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <label htmlFor="" className="form-label">Price</label>
                <input type="text" className="form-control" />
            </div>
            <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <label htmlFor="" className="form-label">Discount (%)</label>
                <input type="text" className="form-control" />
            </div>
            <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <label htmlFor="" className="form-label">Stock Quantity</label>
                <input type="text" className="form-control" />
            </div>
            <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                 <label htmlFor="" className="form-label">Description</label>
                <input type="text" className="form-control" />
            </div>
            <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <label htmlFor="" className="form-label"> Product Image URL</label>
                <input type="text" className="form-control" />
            </div>
            <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <label htmlFor="" className="form-label">  Rating</label>
                <input type="text" className="form-control" />
            </div>
            <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <button className="btn btn-dark">Submit</button>
            </div>
           </div>
    </div>
    </div>
</div>
    </div>
  )
}

export default AddBook