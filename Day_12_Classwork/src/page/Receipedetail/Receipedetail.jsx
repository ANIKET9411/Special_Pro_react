import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getdetailsthroughid } from "../../api";

function Receipedetail() {
  const { id } = useParams();
  const [detail, setDetail] = useState();
  console.log(id + "*");
  useEffect(() => {
    console.log(id + "&");
    getdetailsthroughid(id).then(setDetail).catch(console.log);
  }, [id]);
  return (
    <>
      <div onClick={() => {}}>
        {console.log(detail.idMeal)}
        <h1>{detail.idMeal}</h1>
        {id}
      </div>
    </>
  );
}
export default Receipedetail;
