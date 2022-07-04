import { Link } from 'react-router-dom';
import './View.css';
import React, { useState, useEffect } from 'react';
import {toast} from 'react-toastify';
import './AddEdit.css';
import { db } from "./../firebase";
import { useHistory } from 'react-router-dom';
import { useParams } from "react-router";


const initialState = {
  name: "",
  email: "",
  contact: "",
  id: ""
};

const View = () => {

  const { id } = useParams();
    const [loading, setLoading] = useState(false);
    const [values, setValues] = useState(initialState);
    let history = useHistory();
    const handleChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value });
    };

    useEffect(() => {
        retrive();
    }, []);

    const retrive = async () => {
        try {
            console.log("r working")
            await db.collection('Contacts')
                .doc(id)
                .get()
                .then(doc => {
                    console.log("doc",doc)
                    if (doc && doc.exists) {
                        setValues(doc.data());
                        console.log("This is doc", doc.data())
                        console.log("Values ",values)
                    }
                })
                .catch((error) => {
                    console.log(error);
                });

        } catch (err) {
            console.error(err);
            alert(err.message);
        }
    };

  return (
    <div style={{marginTop :"150px"}}>
      <div className='card'>
        <div className='card-header'>
          <p>User Contact Details</p>
        </div>
        <div className='container'>
          <strong>ID: </strong>
          <span>{values.id}</span>
          <br/>
          <br/>

          <strong>Name: </strong>
          <span>{values.name}</span>
          <br/>
          <br/>

          <strong>Email: </strong>
          <span>{values.email}</span>
          <br/>
          <br/>

          <strong>Contact: </strong>
          <span>{values.contact}</span>
          <br/>
          <br/>

          <Link to="/">
            <button className='btn btn-edit btn-back'>Go Back</button>
          </Link>


        </div>
      </div>
    </div>
  )
}

export default View;