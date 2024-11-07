import { Outlet } from "react-router-dom";
import Image from "./image";

function Desc() {
  return (
    <>
    <h3>About:</h3>
      <p>
        Welcome to BS Restaurant, your ultimate dining destination for a blend
        of global flavors! Our menu is crafted with fresh, locally-sourced
        ingredients, offering everything from sizzling steaks to vegan delights.
        Whether you're craving comfort food or an exotic dish, we’ve got
        something for everyone. Enjoy a cozy ambiance with warm lighting and
        friendly service that makes every meal memorable. Don't forget to pair
        your meal with our curated selection of fine wines and handcrafted
        cocktails. Join us for breakfast, lunch, or dinner, and experience
        culinary excellence in every bite!
      </p>

<Outlet/>
    </>
  );
}


export default Desc;