import { Outlet, Link, useParams } from "react-router-dom";
import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function Edit() {
    const [data, setData] = useState([]);
    const [title, setTitle] = useState();
    const [description, setDescription] = useState();
    const [price, setPrice] = useState();
    const { id } = useParams();
    useEffect(() => {
        axios.get(`http://localhost:3000/tuors/${id}`)
            .then(response => {
                setData(response.data)
                setTitle(response.data.title)
                setPrice(response.data.price)
                setDescription(response.data.description)
            })
            .catch(error => console.error(error));
    }, []);

    
    console.log(title);
    const handleSave = (e) => {
        e.preventDefault();
    console.log(title);

        const updatedProduct = { id: data.id, title: title, price: price, description: description };
        console.log(updatedProduct);
        axios.put(`http://localhost:3000/tuors/${id}`, updatedProduct)
      .then(response => {
        console.log('Product updated successfully:', response.data);
      })
      .catch(error => {
        console.error('Error updating product:', error);
      });
    };

    return (
        <div>

            <h1 key={data.id}> {data.id} {data.title} {data.price}
            </h1>
            <form onSubmit={handleSave}>
                <div className="form-group">
                    <label>Name</label>
                    <input type="text" className="form-control" defaultValue={data.title} onChange={(e) => setTitle(e.target.value)} />
                </div>
                <div className="form-group">
                    <label>Price</label>
                    <input type="number" className="form-control" defaultValue={data.price} onChange={(e) => setPrice(e.target.value)} />
                </div>
                <div className="form-group">
                    <label>Description</label>
                    <textarea className="form-control" defaultValue={data.description} onChange={(e) => setDescription(e.target.value)} />
                </div>
                <button type="submit" className="btn btn-primary">Save</button>
            </form>



        </div>
    )
}
