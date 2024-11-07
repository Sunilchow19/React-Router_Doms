
import { Link } from "react-router-dom"

function Links(){
    return (
        <>
       <li> <Link to={"/first"}>first</Link></li>
        <li><Link to={"/second"}>second</Link></li>
       <li> <Link to={"/third"}>third</Link></li>
        </>
    )
}

export default Links