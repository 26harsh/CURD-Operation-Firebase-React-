import React,{ useState, useEffect} from 'react';
import {toast} from 'react-toastify';
import './AddEdit.css';
import { db } from "./../firebase";
import { useHistory } from 'react-router-dom';

const initialState = {
  name: "",
  email: '',
  contact: "",
};

const AddEdit = () => {

  const [loading, setLoading] = useState(false);
  const [values, setValues] = useState(initialState);

  const { name, email, contact } = values;
  const history = useHistory();
    
  const handleSubmit = async (e) => {
    e.preventDefault();
    if(!name && !email && !contact){
      toast.error("Please fill all the fields")
    }else{
    const min = 1;
    const max = 100000000000;
    const rand = min + Math.random() * (max - min);
    await db.collection("Contacts").doc(rand.toString()).set({
      id: rand.toString(),
      name: values.name,
      email: values.email,
      contact: values.contact,
    })
      .then((res) => {
        console.log(res);
        window.alert(`"${res.data.name}" is created`);
        window.location.reload();
      })

      .catch((err) => {
        console.log(err);
        toast.success("Contact added successfully")
        // window.location.reload();
      });
      setTimeout(() => history.push("/"), 500);
    }
  };

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return (
    <div style={{marginTop: "100px"}} className="div-form">
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
            value={name}
            onChange={handleChange}
          >
          </input>

          <label htmlFor='email'>Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeHolder="Your Email..."
            value={email}
            onChange={handleChange}
          >
          </input>

          <label htmlFor='contact'>Contact</label>
          <input
            type="number"
            id="contact"
            name="contact"
            placeHolder="Your Contact No. ..."
            value={contact}
            onChange={handleChange}
          >
          </input>

          {/* <input type="submit" value="Save"></input>  */}
          <button style={{ marginTop: '15px', borderRadius: "5px" }} className="btn btn-edit btn-save">
                    Save
                </button>
      </form> 
    </div>
  );
}

export default AddEdit;