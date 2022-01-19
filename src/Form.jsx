import React,{useState,useEffect} from "react";
import {Input, Button } from  "./components/input";
import {useNavigate} from "react-router-dom";
import validate from "./validate";

const Form = ()=>{
const [data , setData] = useState({
  email:"",
  password:""
});
const [errors , setErrors]=useState({});
const [isLoggedIn ,setIsLoggedIn]= useState(false);
let navigate = useNavigate();
function handleChange(event){
  const {value , name} = event.target;
  setData({
    ...data,
    [name]:value
  });
  // console.log(data)
}
function handleSubmit(event){
  event.preventDefault();
  setErrors(validate(data));
  setIsLoggedIn(true);
}
useEffect(()=>{
  if((Object.keys(errors).length===0)&& isLoggedIn){
    navigate("/dashboard");
  }
});
  return (
    <>
    <div className="container">
      <div className="box">
        <form onSubmit={handleSubmit}>
        <Input
          key="1"
          type="text"
          name="email"
          placeholder="Enter your email"
          onChange={handleChange}
          value={data.email}
         />
         {errors.email && <p className="errorMessage">{errors.email}</p>}
         <Input
           key="2"
           type="password"
           name="password"
           placeholder="Password"
           onChange={handleChange}
           value={data.password}
          />
          {errors.password && <p className="errorMessage">{errors.password}</p>}
          <Input
            key="3"
            type="checkbox"
            class="checkbox"
           />
          <label>Remember Me</label>
      <Button
           onClick={handleSubmit}
           className="dark-btn"
           type="submit"
           buttonText="Login"
        />
        </form>
      </div>
      </div>
    </>
  );
}


export default Form;
