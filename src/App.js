import React from "react";
import "./app.css";
import Form from "./Form";
import {Routes,Route,Navigate} from "react-router-dom";
import Dashboard from "./Dashboard";
function App(){

  return (
    <>
    <Routes>
    <Route exact path="/" element=<Form/> />
    <Route exact path="/dashboard" element=<Dashboard/>/>
    <Route path="*" element={<Navigate to="/"/>} />
    </Routes>
    </>
  );
}


export default App;
