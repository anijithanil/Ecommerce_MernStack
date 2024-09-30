import React, { useState } from "react";
import Layout from "../../components/Layout/Layout";
import toast from 'react-hot-toast';
import axios from 'axios';
import {useNavigate} from 'react-router-dom'
import '../../styles/AuthStyles.css';
import { useAuth } from "../../context/auth";

const Login = () => {

    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")

    const navigate = useNavigate();
    const [auth,setAuth] = useAuth();

    const handleSubmit = async(e)=>{
        e.preventDefault();
        // console.log(name,email,password,phone,address)
        // toast.success("Registered successfully")
        try{
          const res = await axios.post(`${process.env.REACT_APP_API}/api/v1/auth/login`,{email,password});
          // response sending from BE 
          if(res && res.data.success){
            
            toast.success(res.data.message);
            setAuth({
                ...auth,
                user:res.data.user,
                token:res.data.token,
            })
            navigate('/');
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
    <Layout title="Register - Ecommer App">
    <div className="form-container ">
      <form onSubmit={handleSubmit}>
        <h4 className="title">LOGIN FORM</h4>
        {/* <div className="mb-3">
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
        </div> */}
        <div className="mb-4 mt-5">
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
        <div className="mb-4 mt-4">
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
        {/* <div className="mb-3">
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
        </div> */}
        <button type="submit" className="btn btn-primary mb-3 mt-3">
          LOGIN
        </button>
      </form>
    </div>
  </Layout>

  )
}

export default Login
