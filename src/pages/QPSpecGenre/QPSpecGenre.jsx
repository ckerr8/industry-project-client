import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useLocation } from "react-router-dom";
import './QPSpecGenre.scss';
import data from "../../data/genres.json"; 
import { Button } from '../../components/Button/Button';

function QPSpecGenre() {
    const [selectedBundle, setSelectedBundle] = useState([]); // Array of selected shows
    const [selectedPackages, setSelectedPackages] = useState([]); // Array of selected packages
    const [currentGenreIndex, setCurrentGenreIndex] = useState(0); // Track current genre index
    const navigate = useNavigate();
    const location = useLocation();

    // Getting the selected genres and results from the previous page
    const { results, selectedGenres } = location.state || { results: [], selectedGenres: [] };

    const handleSelection = (pkgName, showTitle) => {
        const serviceExists = selectedBundle.find(item => item.showTitle === showTitle);

        if (serviceExists) {
            setSelectedBundle(selectedBundle.filter(item => item.showTitle !== showTitle));
        } else {
            setSelectedBundle([...selectedBundle, { pkgName, showTitle }]);
        }

        if (!selectedPackages.includes(pkgName)) {
            setSelectedPackages([...selectedPackages, pkgName]);
        }
    };

    const handleSubmit = () => {
        if (currentGenreIndex >= selectedGenres.length - 1) {
            results.push(selectedBundle);
            navigate('/results', { state: { results } });
        } else {
            setCurrentGenreIndex(currentGenreIndex + 1);
        }
    };

    const currentGenre = selectedGenres[currentGenreIndex];
    const d = data.find((g) => g.genre === currentGenre);
    const packages = d ? d.packages : [];

    return (
        <section className='sub-genre'>
            <h1 className='sub-genre__question-title'>{`Select all the ${currentGenre} shows you enjoy watching`}</h1>
            <p className='sub-genre__question-description'>
                Please select all the shows you prefer from the options below. You can choose more than one!
            </p>

            <ul className='sub-genre__answer-list'>
                {packages.map((pkg, pkgIndex) => (
                    <li 
                        key={pkgIndex} 
                        className={`sub-genre__answer-item ${selectedPackages.includes(pkg.name) ? 'sub-genre__answer-item--selected' : ''}`}
                        onClick={() => pkg.shows.forEach(show => handleSelection(pkg.name, show.title))}
                    >
                        <div className='sub-genre__answer-package'>
                            {pkg.shows.map((show, showIndex) => (
                                <img 
                                    key={showIndex} 
                                    src={show.image}  
                                    alt={show.title}
                                    className={`sub-genre__answer-image ${selectedBundle.some(service => service.showTitle === show.title) ? 'sub-genre__answer-image--selected' : ''}`}
                                />
                            ))}
                        </div>
                    </li>
                ))}
            </ul>

            <Button 
                className='sub-genre__button' 
                type='button' 
                text={currentGenreIndex < selectedGenres.length - 1 ? 'Next' : 'Submit'} 
                handleClick={handleSubmit} 
            />
        </section>
    );
}

export default QPSpecGenre;
