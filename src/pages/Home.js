import React,{ useState, useEffect} from 'react';
import { db } from "./../firebase";
import { Link } from 'react-router-dom';
import './Home.css';
import { toast } from 'react-toastify';

const Home = () => {

  const [contactData, setContactData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [page, setPage] = useState(1);


    useEffect(() => {
        loadContactData();
    }, [page]);


    const loadContactData = async () => {
        setLoading(true);
        await db.collection('Contacts').get()
            .then(querySnapshot => {
                querySnapshot.forEach(element => {
                    var data = element.data();
                    setContactData(arr => [...arr, data]);
                });
                setLoading(false);
            });
    };

    const onDelete = (id) => {
      if(window.confirm("Are tou sure that you wanted to delete that contact ?")) {
        db.collection('Contacts').doc(id).delete()
        .then( () => {
          // toast.success("Deleted")
          window.alert("Deleted");
          window.location.reload();
        }).catch( () => {
          toast.error("Something went wrong")
        })
      }
      // window.location.reload();
    }
  return (
    <div style={{marginTop:"100px"}}>
        <table className='styled-table'>
          <thead>
            <tr>
              <th style={{textAlign: "center"}}>No. </th>
              <th style={{textAlign: "center"}}>Name</th>
              <th style={{textAlign: "center"}}>Email</th>
              <th style={{textAlign: "center"}}>Contact</th>
              <th style={{textAlign: "center"}}>Action</th>
            </tr>
          </thead>
          <tbody>
            {contactData.map((con, index) => {
              console.log(con);
              return (
                <tr key={index}>
                  <th scope='row'>{index + 1}</th>
                  <td>{con.name}</td>
                  <td>{con.email}</td>
                  <td>{con.contact}</td>
                  <td>
                    <Link to={`/addUpdate/${con.id}`}>
                      <button className='btn btn-edit'>Edit</button>
                    </Link>

                    <button 
                      className='btn btn-delete'
                      onClick={() => onDelete(con.id)}
                    >
                      Delete
                    </button>

                    <Link to={`/view/${con.id}`}>
                      <button className='btn btn-view'>View</button>
                    </Link>

                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
    </div>
  )
}

export default Home;