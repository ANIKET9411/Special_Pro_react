import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getlistbasedonSpecifiedcategory } from "../../api";
import { useNavigate } from "react-router-dom";

function SpecifiedCategory() {
  const { category } = useParams();
  const navigate = useNavigate();
  const [newlist, setNewlist] = useState([]);
  useEffect(() => {
    getlistbasedonSpecifiedcategory(category).then(setNewlist);
  }, [category]);
  function gotoreceipepage(id) {
    navigate(`/${id}`);
  }
  return (
    <>
      <h2
        style={{
          margin: "0 10%",
          borderBottom: "10px solid #E16120",
          display: "inline-block",
          color: "black",
        }}
      >
        {category}
      </h2>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          width: "80%",
          padding: "5% 10%",
        }}
      >
        {newlist.map((item) => {
          return (
            <>
              <div
                onClick={() => {
                  gotoreceipepage(item.idMeal);
                }}
                style={{
                  width: "16%",
                  textAlign: "center",
                  margin: "1%",
                  color: "black",
                  backgroundColor: "white",
                  padding: "10px",
                }}
                key={item.idMeal}
              >
                <div style={{ width: "100%" }}>
                  <img src={item.strMealThumb} alt="" width="100%" />
                  <p>{item.strArea}</p>
                  <h4>{item.strMeal}</h4>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
}
export default SpecifiedCategory;
