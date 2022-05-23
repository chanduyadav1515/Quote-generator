import React from 'react'
import {  useNavigate } from 'react-router-dom'

export default function Home({indexToShow,Quotes}) {
    
    const navigate = useNavigate()
    
    const [deatails, setDetails] = React.useState()
    // async function getAuthorData(value){
    //     const response = await fetch(`https://quote-garden.herokuapp.com/api/v3/quotes?author=${value}`)
    //     const {data} = await response.json();
    //     setDetails(data);
    //     return data
    // }
    // React.useEffect(()=>{
    //     getAuthorData()
    // })
  return (
    <div className='quote-box'>
        <p>{Quotes[indexToShow]?.quoteText}</p>
        <button onClick={async ()=>{
            // ()=>navigate("/author",{details:{}})
            // console.log(details.authorDetails)
            // const data = await getAuthorData(Quotes[indexToShow]?.quoteAuthor)
            navigate("/author", {
                state:Quotes[indexToShow]?.quoteAuthor
            })
            }}>
                <div className='text-set'>
                    <div>
                        {Quotes[indexToShow]?.quoteAuthor}
                    </div>
                    <div>
                        {Quotes[indexToShow]?.quoteGenre}
                    </div>
                </div>
        </button>
    </div>
  )
}
