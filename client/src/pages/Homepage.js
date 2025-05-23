import React from 'react'
import Spinner from '../component/shared/Spinner';
import { useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";
import Layout from '../component/shared/Layout/Layout';
import Model from '../component/shared/model/Model';
// import { Cursor } from 'mongoose';
import API from '../services/API';
import{useEffect,useState} from 'react'
import moment from "moment";


const Homepage = () => {
  const { loading, error,user} = useSelector((state) => state.auth);
  const [data, setData] = useState([]);
  const navigate = useNavigate();
    

    const getBloodRecords = async () => {
      try {
        const { data } = await API.get("/inventory/get-inventory");
        if (data?.success) {
          setData(data?.inventory);
           //console.log(data);
        }
      } catch (error) {
        console.log(error);
      }
    };
  
    useEffect(() => {
      getBloodRecords();
    }, []);
  return (
    <Layout>
    {user?.role === "admin" && navigate("/admin")}
      {error && <span>{alert(error)}</span>}
      {loading ? (
        <Spinner />
      ) : (
        <>
          <div className="container">
            <h4
              className="ms-4"
              data-bs-toggle="modal"
              data-bs-target="#staticBackdrop"
              style={{ cursor: "pointer" }}
            >
              <i className="fa-solid fa-plus text-success py-4"></i>
              Add Inventory
            </h4>
            <table className="table ">
              <thead>
                <tr>
                  <th scope="col">Blood Group</th>
                  <th scope="col">Inventory Type</th>
                  <th scope="col">Quantity</th>
                  <th scope="col">Donar Email</th>
                  <th scope="col">TIme & Date</th>
                </tr>
              </thead>
              <tbody>
                {data?.map((record) => (
                  <tr key={record._id}>
                    <td>{record.bloodGroup}</td>
                    <td>{record.inventoryType}</td>
                    <td>{record.quantity} (ML)</td>
                    <td>{record.email}</td>
                    <td>
                      {moment(record.createdAt).format("DD/MM/YYYY hh:mm A")}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

          <Model/>
          </div>
        </>
      )}
    </Layout>
  );
};

export default Homepage
