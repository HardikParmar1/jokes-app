import axios from 'axios';
import {useState} from "react";
import {Button} from "./components/input";
import spinner from "./Spinner.svg";
const Jokes = ()=>{

const [jokes , setJokes] =useState();
const [loading, setLoading]=  useState();
const getJoke = async ()=>{
  setLoading(true);
  await axios.get('https://v2.jokeapi.dev/joke/Any').then(
  response => {
  setJokes(response.data.setup + "..........." +response.data.delivery);
  });
  setLoading(false);
}
return (
  <>
  <div className="card">
  <p className="joke">{jokes}</p>
  <div className="newJoke">
  <Button onClick={getJoke} className="dark-btn" buttonText="Get new joke" />
  {loading &&<img className="spinner" src={spinner} alt="spinner" />}
  </div>
  </div>
</>
);


}

export default Jokes;
