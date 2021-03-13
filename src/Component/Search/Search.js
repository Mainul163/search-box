import React, { useEffect, useState } from 'react';

const Search = () => {
    const[search,setSearch]=useState('')
    const [meal,setMeal]=useState([])
    const searchBox= (event) =>{
        setSearch(event.target.value)
    }
   useEffect(()=>{
       const url=`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`
       fetch(url)
       .then(res => res.json())
       .then(data => setMeal(data.meals))
   },[search])

    return (
        <div>
            <input type="text" onChange={searchBox} placeholder="serach meals"  style={{height:"40px",width:"370px"}}/>
            <p>{search}</p>
            <p>{meal?.length || 0}</p>
            <ul>
                {
                    meal?.map(ml=> <li>{ml.strMeal}</li>)
                }
            </ul>
        </div>
    );
};

export default Search;