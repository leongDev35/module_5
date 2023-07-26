import { Outlet, Link ,useParams } from "react-router-dom";
import React, { useState, useEffect} from 'react';
import axios from 'axios';

export default function Details() {
    const [data, setData] = useState([]);
    const { id } = useParams();
    useEffect(() => {
        axios.get(`http://localhost:3000/tuors/${id}`)
          .then(response => setData(response.data))
          .catch(error => console.error(error));
      }, []);
  return (
    <div>

          <h1>Tên tour {data.title} </h1>
          <h1>Giá tour {data.price} </h1>
          <h1>Mô tả: {data.description} </h1>

        
      </div>
  )
}
