import React, { useState } from "react";
import Layout from "../components/Layout/Layout";

const Register = () => {
  const [name,setName] = useState("")
  const [email,setEmail] = useState("")
  const [password,setPasword] = useState("")
  const [phone,setPhone] = useState("")
  const [address,setAddress] = useState("")
 
  return (
    <Layout title={"register"}>
      <div className="register">
        <div>
        <h1>Register</h1>

        
        <form>
          <div className="form-group">
            <label htmlFor="exampleInputName">Name</label>
            <input
            value={name}
            onChange={(e)=>setName(e.target.value)}
              type="text"
              className="form-control"
              id="exampleInputEmail1"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputName">Email</label>
            <input
              value={email}
              required
              onChange={(e)=>setEmail(e.target.value)}
              type="email"
              className="form-control"
              id="exampleInputEmail1"

            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Password</label>
            <input
              value={password}
              onChange={(e)=>setPasword(e.target.value)}
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputName">phone</label>
            <input
              value={phone}
              onChange={(e)=>setPhone(e.target.value)}
              type="number"
              className="form-control"
              id="exampleInputEmail1"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputName">address</label>
            <input
            value={address}
            onChange={(e)=>setAddress(e.target.value)}
              type="text"
              className="form-control"
              id="exampleInputEmail1"
              required
            />
          </div>

          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
        </div>
      </div>
    </Layout>
  );
};

export default Register;
