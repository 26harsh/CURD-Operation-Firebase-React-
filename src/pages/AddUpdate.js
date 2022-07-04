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
  
const AddUpdate = () => {

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

    const handleSubmit = async (e) => {

        e.preventDefault();
        await db.collection("Contacts").doc(id).update({
            name: values.name,
            email: values.email,
            contact: values.contact,      
        }).then((res) => {
                console.log(res);
                window.alert(`"${res.data.name}" is updated`);
                window.location.reload();
            })
            .catch((err) => {
                console.log(err);
                alert("Contact Updated Successfully")
                history.push("/");
            });
    };
  return (
        <div style={{marginTop: "100px"}}>
          <form 
            style={{
              margin: "auto",
              padding: "15px",
              maxWidth: "400px",
              alignContent: "center",  
            }}
            onSubmit={handleSubmit}
          >
              <label htmlFor='name'>Name</label>
               <input
                type="text"
                id="name"
                name="name"
                placeHolder="Your Name..."
                value={values.name}
                setValues={setValues}
                onChange={handleChange}
              >
              </input>
    
              <label htmlFor='email'>email</label>
              <input
                type="email"
                id="email"
                name="email"
                placeHolder="Your Email..."
                value={values.email}
                setValues={setValues}
                onChange={handleChange}
              >
              </input>
    
              <label htmlFor='contact'>Contact</label>
              <input
                type="number"
                id="contact"
                name="contact"
                placeHolder="Your Contact No. ..."
                value={values.contact}
                setValues={setValues}
                onChange={handleChange}
              >
              </input>
    
              {/* <input type="submit" value="Save"></input>  */}
              <button style={{ marginTop: '15px', borderRadius: "5px" }} className=" btn-primary">
                        Save
                    </button>
          </form> 
        </div>
  )
}

export default AddUpdate