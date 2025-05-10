import React from "react";
import Layout from "../../component/shared/Layout/Layout";
import { useSelector } from "react-redux";

const AdminHome = () => {
  const { user } = useSelector((state) => state.auth);
  return (
    <Layout>
      <div className="container">
        <div className="d-felx flex-column mt-4">
          <h1>
            Welcome Admin <i className="text-success">{user?.name}</i>
          </h1>
          <h3>Blood Bank Web App</h3>
          <hr />
          <p>
            Developer: Sachin Singh, Jyoti Singh, Janu Singh
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default AdminHome;
