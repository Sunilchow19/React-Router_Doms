
import Desc from "./description";

import { Link } from "react-router-dom";
import "./appStyle.css"

function Name(){
    return (
        <>
        <h1><center><u>BS Restaurant</u></center></h1>


      <div className="cls">
      
       <span><Link to={"Menu"}>Menu</Link></span>
        <span><Link to={"image"}>Images</Link></span>
        <span><Link to={"description"}>Description</Link></span>
        <span><Link to={"description/disclaimer"}>Disclaimer</Link></span>
      
      </div>

        </>
        
    )
}

export default Name;

