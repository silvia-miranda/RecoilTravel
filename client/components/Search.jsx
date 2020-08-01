import React, { useState } from 'react';
import {
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from 'recoil';
import { searchValue as searchValueAtom, results as resultsAtom, myQuery } from "../atoms.js";

const Search = () => {

const [searchVal, setSearchVal] = useRecoilState(searchValueAtom);  
const [result, setResult] = useRecoilState(resultsAtom); 

  const handleChange = (e) => {
    console.log(e.target.value)
    setSearchVal(e.target.value)
  }


 
  const getSearchResults = (e) => {
    e.preventDefault();
    console.log(searchVal);
    // fetch ('https://ghapi.huchen.dev/repositories')
    let url = `https://www.rijksmuseum.nl/api/en/collection?key=JAzK4fC0&q=${searchVal}&p=1&ps=12&ondisplay=True&st=Objects&ii=0`
    fetch(url)
    .then(response => response.json())
    .then(response => {
      console.log(url)
      setResult(result.push(response.artObjects))
      console.log("result: ", result)
      console.log("response: ", response)
      // result.forEach(element => {

      // })
    })
  }
 
  //0: {links: {…}, id: "nl-SK-A-4691", objectNumber: "SK-A-4691", title: "Zelfportret", hasImage: true, …}

  return (
    <div id="search">
      <h1>Search for some art below... it's not on the page, but it might be in your console!</h1> 
      <form className='searchForm' onSubmit={getSearchResults}>
      <input type='text' className='username' onChange={handleChange} />
      <button type='submit'>Search</button>
      </form>
  </div>
  )
}

export default Search;

