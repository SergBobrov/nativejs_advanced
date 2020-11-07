import React, { useState } from 'react';
import API from './API';
import './lesson_3';

const Lesson3 = () => {
  const [searchName, setSearchName] = useState('');
  const [serachResult, setSerachResult] = useState<Array<any> | string>([]);
  const [searchNameByType, setSearchNameByType] = useState('');
  const [serachResultByType, setSerachResultByType] = useState('');

  const searchFilm = () => {
    API.searchFilmsByTitle(searchName)
      .then((res) => {
        if (res.data.Response === 'True') {
          returnResult(res.data.Search);
        } else {
          returnResult(res.data.Error);
        }
      });
  };

  const searchByType = (e: React.MouseEvent<HTMLButtonElement>) => {
    const type: string = e.currentTarget.dataset.t ? e.currentTarget.dataset.t : '';
    API.searchFilmsByType(searchNameByType, type);
  };

  const returnResult = (data: string | Array<any>) => {
    if (typeof data === 'string') {
      setSerachResult(data);
    } else {
     let search = data.map((t, i) => {
        return (
          <div key={i}>
            <div> "Title": {t.Title}</div>
            <div> "Year": {t.Year} </div>
            <div>"imdbID": {t.imdbID}</div>
            <div> "Type": {t.Type}</div>
            <div>"Poster": <img src={t.Poster} alt="poster" /></div>
          </div>
        );
      });
      setSerachResult(search)
    }
  };



  return (
    <div>
      <h1>Promises</h1>
      <div>
        <h3><p>Search by name:</p></h3>
        <input type="text" value={searchName} onChange={(e) => setSearchName(e.currentTarget.value)} />
        <button onClick={searchFilm}>Search</button>
        <div>
          {serachResult}
        </div>
      </div>

      <div>
        <h3><p>Search by type:</p></h3>
        <input type="text" value={searchNameByType} onChange={(e) => setSearchNameByType(e.currentTarget.value)} />
        <button onClick={searchByType} data-t='movie'>Movie</button>
        <button onClick={searchByType} data-t='series'>Series</button>
        <div>
          {serachResultByType}
        </div>
      </div>
    </div>
  );
};
export default Lesson3;