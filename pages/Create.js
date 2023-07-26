import { Outlet, Link, useParams } from "react-router-dom";
import React, { useState, useEffect } from 'react';
import axios from 'axios';


export default function Create() {
    const [title, setTitle] = useState();
    const [description, setDescription] = useState();
    const [price, setPrice] = useState();

    const handleSave = (e) => {
        e.preventDefault();
        const updatedProduct = { title: title, price: price, description: description };
        console.log(updatedProduct);
        axios.post(`http://localhost:3000/tuors`, updatedProduct)
            .then(response => {
                console.log('Product updated successfully:', response.data);
                
            })
            .catch(error => {
                console.error('Error updating product:', error);
            });
    };

    return (
        <div>

            
            <form onSubmit={handleSave}>
                <div className="form-group">
                    <label>Name</label>
                    <input type="text" className="form-control"  onChange={(e) => setTitle(e.target.value)} />
                </div>
                <div className="form-group">
                    <label>Price</label>
                    <input type="number" className="form-control"  onChange={(e) => setPrice(e.target.value)} />
                </div>
                <div className="form-group">
                    <label>Description</label>
                    <textarea className="form-control"  onChange={(e) => setDescription(e.target.value)} />
                </div>
                <button type="submit" className="btn btn-primary">Save</button>
            </form>



        </div>
    )
}
