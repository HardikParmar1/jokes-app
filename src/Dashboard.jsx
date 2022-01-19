import {useState} from "react";
import {Button} from "./components/input";
import {Link} from "react-router-dom";
import Jokes from "./jokes";
function Dashboard(){
  const [displayJoke , setDisplayJoke] =useState(false);

  function showJoke(){
    setDisplayJoke(true);
  }
  return(
    <>
    <nav>
    <ul>
    <li className="nav-link"><Button
          type="button"
          className="light-btn"
          buttonText="Jokes"
          onClick={showJoke}
        />

    </li>
    <li className="nav-link"> <Link  to="/"> <Button
          type="button"
          className="light-btn"
          buttonText="Logout"
            />
        </Link>
      </li>
    </ul>
    </nav>
    {displayJoke?<Jokes/>:<h1>Welcome! Get Ready to read some hilarous Jokes </h1>}

    </>
  );
}
export default Dashboard;
