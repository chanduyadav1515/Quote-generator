import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
export default function Author() {
  const location = useLocation();
  const author = location.state;
    const [allData,setData]=React.useState()
  async function getAuthorData(name) {
    const response = await (
      await fetch(`https://quote-garden.herokuapp.com/api/v3/quotes?author=${name}`)
    ).json();
    // console.log(response.data, "data");
      setData(response.data);
  }
  React.useEffect(() => {
    getAuthorData(author);
  }, []);
  return(
    <div>
      <h1 className='quote-box' style={{fontWeight:"bolder"}}>{author}</h1>
        {allData != null && allData.map((single)=>(
          <div className='quote-box'><p>{single.quoteText}</p></div>
        ))}
    </div>
  );
}
