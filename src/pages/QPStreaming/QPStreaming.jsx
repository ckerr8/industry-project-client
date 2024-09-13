import netflixImg from '../../assets/images/netflix.png';
import amazonPrimeImg from '../../assets/images/amazonPrime.png';
import { useState } from 'react';
import disneyImg from '../../assets/images/disney.png';
import './QPStreaming.scss';
import { Button } from '../../components/Button/Button';

function QPStreaming() {
    const [selectedServices, setSelectedServices] = useState([]);
    const answers = [
        { name: 'Netflix', img: netflixImg },
        { name: 'Amazon Prime', img: amazonPrimeImg },
        { name: 'Disney Plus', img: disneyImg },
      ];

    const handleSelection = (streamingService) => {
        if (selectedServices.includes(streamingService)) {
            setSelectedServices(selectedServices.filter(service => service !== streamingService));
          } else {
            setSelectedServices([...selectedServices, streamingService]);
        }
    }

    const handleSubmit = () => {}
    
  return (
    <section className='streaming'>
        <h1 className='streaming__question-title'>Are you currently subscribed to any streaming services?</h1>
        <p className='streaming__question-description'>Please select which streaming service you're currently subscribed to from the options below. </p>
        <ul className='streaming__answer-list'>
            {answers.map((answer, index) => (
            <li key={index} className={`streaming__answer-item ${selectedServices.includes(answer.name) ? 'streaming__answer-item--selected' : ''
            }`} >
                <img src={answer.img} alt={answer.name} className='streaming__answer-image' onClick={() =>handleSelection(answer.name)}/>
            </li>
            ))}
        </ul>
        <Button className='streaming__button' type='submit' text='Next' onClick={handleSubmit}/>
    </section>
  )
}

export default QPStreaming