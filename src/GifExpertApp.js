import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(['Coding']);

  // const handleAdd = () => {
  //   setCategories([...categories, 'HaunterXHaunter']);
  //   // setCategories(cats => [...cats, 'HunterXHunter']) //cats = estado anterior y => estado posterior
  // };

  return (
    <div>
      <h2>GifExpertApp</h2>
      <AddCategory setCategories={setCategories} />
      <hr />
      <ol>
        {categories.map((category) => (
          <GifGrid key={category} category={category} />
        ))}
      </ol>
    </div>
  );
};
