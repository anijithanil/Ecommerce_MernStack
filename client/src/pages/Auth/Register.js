import React, { useState } from "react";
import Layout from "../../components/Layout/Layout";
import toast from 'react-hot-toast';
import axios from 'axios';
import {useNavigate} from 'react-router-dom'
import '../../styles/AuthStyles.css';


const Register = () => {
  const [name,setName] = useState("")
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")
  const [phone,setPhone] = useState("")
  const [address,setAddress] = useState("")
  const navigate = useNavigate();

  // form function
  const handleSubmit = async(e)=>{
    e.preventDefault();
    // console.log(name,email,password,phone,address)
    // toast.success("Registered successfully")
    try{
      const res = await axios.post(`${process.env.REACT_APP_API}/api/v1/auth/register`,{name,email,password,phone,address});
      // response sending from BE 
      if(res && res.data.success){
        
        toast.success(res.data.message);
        navigate('/login');
      }
      else{
        toast.error(res.data.message)
      }

    }catch(error){
      console.log(error)
      toast.error("Something went wrong")
    }
  }
 
  return (
    // <Layout title={"register"}>
    //   <div className="register">
    //     <div>
    //     <h1>Register</h1>

    //     {console.log(process.env.REACT_APP_API)}
    //     <form onSubmit={handleSubmit} >
    //       <div className="form-group">
    //         <label htmlFor="exampleInputName">Name</label>
    //         <input
    //         value={name}
    //         onChange={(e)=>setName(e.target.value)}
    //           type="text"
    //           className="form-control"
    //           id="exampleInputEmail1"
    //           required
    //         />
    //       </div>
    //       <div className="form-group">
    //         <label htmlFor="exampleInputName">Email</label>
    //         <input
    //           value={email}
    //           required
    //           onChange={(e)=>setEmail(e.target.value)}
    //           type="email"
    //           className="form-control"
    //           id="exampleInputEmail1"

    //         />
    //       </div>
    //       <div className="form-group">
    //         <label htmlFor="exampleInputPassword1">Password</label>
    //         <input
    //           value={password}
    //           onChange={(e)=>setPasword(e.target.value)}
    //           type="password"
    //           className="form-control"
    //           id="exampleInputPassword1"
    //           required
    //         />
    //       </div>
    //       <div className="form-group">
    //         <label htmlFor="exampleInputName">phone</label>
    //         <input
    //           value={phone}
    //           onChange={(e)=>setPhone(e.target.value)}
    //           type="number"
    //           className="form-control"
    //           id="exampleInputEmail1"
    //           required
    //         />
    //       </div>
    //       <div className="form-group">
    //         <label htmlFor="exampleInputName">address</label>
    //         <input
    //         value={address}
    //         onChange={(e)=>setAddress(e.target.value)}
    //           type="text"
    //           className="form-control"
    //           id="exampleInputEmail1"
    //           required
    //         />
    //       </div>

    //       <button type="submit" className="btn btn-primary">
    //         Submit
    //       </button>
    //     </form>
    //     </div>
    //   </div>
    // </Layout>
    <Layout title="Register - Ecommer App">
    <div className="form-container ">
      <form onSubmit={handleSubmit}>
        <h4 className="title">REGISTER FORM</h4>
        <div className="mb-3">
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="form-control"
            id="exampleInputEmail1"
            placeholder="Enter Your Name"
            required
            autoFocus
          />
        </div>
        <div className="mb-3">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="form-control"
            id="exampleInputEmail1"
            placeholder="Enter Your Email "
            required
          />
        </div>
        <div className="mb-3">
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Enter Your Password"
            required
          />
        </div>
        <div className="mb-3">
          <input
            type="text"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="form-control"
            id="exampleInputEmail1"
            placeholder="Enter Your Phone"
            required
          />
        </div>
        <div className="mb-3">
          <input
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            className="form-control"
            id="exampleInputEmail1"
            placeholder="Enter Your Address"
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">
          REGISTER
        </button>
      </form>
    </div>
  </Layout>

  );
};

export default Register;
