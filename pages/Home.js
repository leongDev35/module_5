import { Outlet, Link } from "react-router-dom";
import React, { useState, useEffect } from 'react';
import axios from 'axios';
export default function Home() {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3000/tuors')
            .then(response => setData(response.data))
            .catch(error => console.error(error));
    }, [data]);
    const handleDelete = (id) => {
        console.log("delete", id);
        axios.delete(`http://localhost:3000/tuors/${id}`)
            .then(response => {
            })
            .catch(error => console.error(error));
    };

    return (
        <div>


            <Link to="/create">
                <button className="btn btn-success">
                    Add
                </button>
            </Link>

            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Tên</th>
                        <th scope="col">Giá</th>
                        <th scope="col">Handle</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map(item => (
                        <tr key={item.id}>
                            <th scope="row" >1</th>
                            <td>{item.title}</td>
                            <td>{item.price}</td>
                            <td><Link to={`/details/${item.id}`}>
                                <button className=" btn btn-success">
                                    Details
                                </button>
                            </Link>
                                <button className="btn btn-danger" onClick={() => {
                                    handleDelete(item.id)
                                }}>
                                    Delete
                                </button>
                                <Link to={`/edit/${item.id}`}>
                                    <button className="btn btn-success">
                                        Update
                                    </button>
                                </Link></td>
                        </tr>
                    ))}

                </tbody>
            </table>
        </div>

    )
}
