import React from 'react';
import { useLocation } from 'react-router-dom';
import './Results.scss';
import data from '../../data/genres.json';

function Results() {
    const location = useLocation();
    const { results } = location.state || { results: [] };

    // Flatten the results array and remove duplicates
    const flattenedResults = [...new Set(results.flat().map(item => item.showTitle))];

    // Find all packages that contain at least one of the selected shows
    const recommendedPackages = data.flatMap(genre => 
        genre.packages.filter(pkg => 
            pkg.shows.some(show => flattenedResults.includes(show.title))
        )
    );

    return (
        <section className='results'>
            <h1 className='results__title'>Your Personalized TV Package Recommendations</h1>
            
            {recommendedPackages.map((pkg, index) => (
                <div key={index} className='results__package'>
                    <h2 className='results__package-name'>{pkg.name}</h2>
                    <div className='results__shows--grid'>
                        {pkg.shows.map((show, showIndex) => (
                            <div key={showIndex} className='results__shows--card'>
                                <img 
                                    src={show.image} 
                                    alt={show.title} 
                                    className={`results__shows--image ${flattenedResults.includes(show.title) ? 'results__shows-image--selected' : ''}`} 
                                />
                                <p className='results__shows--title'>{show.title}</p>
                            </div>
                        ))}
                    </div>
                </div>
            ))}

            <div className='results__description'>

                <p>Based on your selections, we recommend the above TV packages. 
                These packages include the shows you've indicated interest in, as well as other shows you might enjoy.</p>
            </div>
        </section>
    );
}

export default Results;