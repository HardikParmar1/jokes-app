
export default function validateInfo(values){

  let errors={}

  if(!values.email){
    errors.email= "email required";
  }else if (!(/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(values.email)) ){
    errors.email="Email address is invalid";
  }
  if(!values.password){
    errors.password="password is required";
  }else if(values.password.length>8){
    errors.password="Password need to be 8 character";
  }
  return errors;

}
