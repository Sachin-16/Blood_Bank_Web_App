import React from "react";
import Form from "../../component/shared/Form/Form";
import { useSelector } from "react-redux";
import Spinner from "../../component/shared/Spinner";
 const Register = () => {
  const{loading,error}=useSelector(state=>state.auth)
    return(
      <>
      {error && <span>{alert(error)}</span>}
      {loading ?( <Spinner/>):(
        <div className="row g-0">
        <div className="col-md-8 form-banner">
            <img src="./assets/images/banner2.jpg" alt="RegisterImg"/>

        </div>
        <div className="col-md-4 form-container">
            <Form 
              formTitle={'Register Page'} 
              submitBtn={'Register'} 
              formType={"register"}
            />
        </div>
      </div>

      )}
      
      </>
      
     );
  };

 export default Register;
