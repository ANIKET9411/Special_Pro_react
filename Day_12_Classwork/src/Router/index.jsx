import Navbar from "../component/Navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "../page/Homepage/Homepage";
import Quotepage from "../page/Quotepage/Quotepage";
import Restaurantpage from "../page/Reataurantpage/Restaurantpage";
import Food from "../page/Food/Food";
import Receipedetail from "../page/Receipedetail/Receipedetail";
import SpecifiedCategory from "../page/SpecifiedCategory/SpecifiedCategory";
function Approuter() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />}></Route>
          <Route path="/quote" element={<Quotepage />}></Route>
          <Route path="/restaurants" element={<Restaurantpage />}></Route>
          <Route path="/food" element={<Food />}></Route>
          <Route path="/meal/:category" element={<SpecifiedCategory />}></Route>
          <Route path="/:id" element={<Receipedetail />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default Approuter;
