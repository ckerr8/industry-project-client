import './QPGenreLiveTv.scss';
import { useLocation } from "react-router-dom";
import data from "../../../data/genres.json" 
import { useState } from 'react';
import { Button } from '../../../components/Button/Button';

function QPGenreLiveTv() {
  const location = useLocation();
  const [selectedGenres, setSelectedGenres] = useState([]);
  const { results } = location.state || { results: [] };

  const handleSelection = (streamingService) => {
    if (selectedGenres.includes(streamingService)) {
        setSelectedGenres(selectedGenres.filter(service => service !== streamingService));
      } else {
        setSelectedGenres([...selectedGenres, streamingService]);
    }
}

  const handleSubmit = () => {
    results.push(selectedGenres);
    console.log(results);
    navigate('/subGenre',  { state: { results } , genres: {selectedGenres}});
  }

  return (
    <>
        <section className='genre'>
        <h1 className='genre__question-title'>Which of the following genres do you prefer?</h1>
        <p className='genre__question-description'>Please select your preferred genres. Click once on a show to indicate you like it, and double-click to mark it as a must-watch for you! </p>
        <ul className='genre__answer-list'>
            {data.map((item, index) => (
            <li key={index} className={`genre__answer-item ${selectedGenres.includes(item.genre) 
              ? 'genre__answer-item--selected' : ''} 
            `}  onClick={() =>handleSelection(item.genre)}
                >
                {item.genre} 
            </li>
            ))}
        </ul>
        <Button className='genre__button' type='submit' text='Next' onClick={handleSubmit}/>
    </section>
    </>
  )
}

export default QPGenreLiveTv