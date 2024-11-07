import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Menu from "./Components copy/Restaurent/Menu";
import Name from "./Components copy/Restaurent/name";
import Image from "./Components copy/Restaurent/image";
import Desc from "./Components copy/Restaurent/description";
import Disc from "./Components copy/Restaurent/disclaimer";
import Images from "./Components copy/Restaurent/image";

function App() {

  // let isUserLogin=false

  return (
    <>
      <BrowserRouter>
        <Name />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <h1>Hi User :)</h1>
              </>
            }
          />



            {/* <Route path="/Menu" element={
              <>
              {isUserLogin? <Menu/>: <Navigate to={"/"}/>}
              </>
            } /> */}

            <Route path="/Menu" element={<Menu/>}/>
          
          <Route path="/image" element={<Images />} />


          <Route path="Description" element={<Desc />} >
          <Route path="/Description/Disclaimer" element={<Disc />} />

          </Route>
          
          
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
