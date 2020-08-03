import {selector, atom, useRecoilValue, useRecoilState, useSetRecoilState } from 'recoil';
import React from 'react';
import { searchValue, resultLength, resultsList, searchHistory, SearchValQuery } from "../atoms.js";

import ArtItem from './ArtItem.jsx';


function SearchResults() {
  const items = useRecoilValue(SearchValQuery)
  const searchedTerm = useRecoilValue(searchValue)
  const numofresults = useRecoilValue(resultLength)
  console.log('num', numofresults)

  
  
  const { artObjects } = items;
  console.log("artObjects: ", artObjects)
 
  const arr = [];
  artObjects.map(result => 
    arr.push(<ArtItem key={result.id} item={result} src={result.webImage.url} />)
  )
  return (
    <div id='searchResults'>
      <h3>You searched for: {searchedTerm}</h3>
      <h3>There are {numofresults} results.</h3>
      { arr }
    </div>

  );
}


export default SearchResults;