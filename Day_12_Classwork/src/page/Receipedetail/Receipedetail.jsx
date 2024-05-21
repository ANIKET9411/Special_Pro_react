import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getdetailsthroughid } from "../../api";

function Receipedetail() {
  const { id } = useParams();
  const [detail, setDetail] = useState();
  useEffect(() => {
    getdetailsthroughid(id).then(setDetail).catch(console.log);
  }, [id]);
  return (
    <>
      <div>
        {console.log(detail.meals)}
        {/* <h1>{detail.meal.strMeal}</h1> */}
        {/* {detail.idMeal} */}
      </div>
    </>
  );
}
export default Receipedetail;
