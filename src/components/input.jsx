import React from "react";

function Input(props){
return(
      <input
      onChange= {props.onChange}
      className={props.className}
      type={props.type}
      name={props.name}
      placeholder={props.placeholder}
      value={props.value}/>
);
}

function Button(props){
  return(
    <button onClick={props.onClick}
          className={props.className}
          type={props.type}>{props.buttonText}</button>
  );
}

export {Input , Button};
