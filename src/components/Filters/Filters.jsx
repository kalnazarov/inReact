import React, { useEffect, useState } from "react";

const Filters = () => {
  let elems = ["All", "Men", "Women", "Kids"];
  const [selectedTag, setSelectedTag] = useState("ALL");
  const [inputVal, setInputVal] = useState("");

  // useEffect(() => {
  //     console.log("Я срабатываю при каждом изменении в документе");
  //   });

  // useEffect(() => {
  //     console.log("Я срабатываю при каждом изменении в документе");
  //   },[]);

  useEffect(() => {
    console.log("Я срабатываю при каждом изменении в документе");
  }, [inputVal]);

  return (
    <div className="container mt-3 mb-3 d-flex justify-content-between">
      <div>
        {elems.map((elem, index) => (
          <span
            onClick={() => setSelectedTag(elem)}
            className={selectedTag === elem ? "btn btn-dark" : "btn btn-light"}
            key={index}
          >
            {elem}
          </span>
        ))}
      </div>
      <input
        onChange={(e) => setInputVal(e.target.value)}
        value={inputVal}
        type="text"
      />
    </div>
  );
};

export default Filters;
