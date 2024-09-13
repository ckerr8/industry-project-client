import React from "react";
import data from '../../data/genres.json'

function Results({ quizResults}) {
        const { genre }  =  quizResults;
        const bundle = data.find(g => g.genre === genre );

        
        if (!bundle || bundle.packages.length === 0) {
            return <div>
                <p>There was an error loading your result. Please try again</p>
                </div>
        } 

        const packageReccomendation = bundle.packages[0];

    return (
        <div>

        <div className="results-wrap">
            <h2> Meet your match!</h2>
            <p>{packageReccomendation.name}</p>

            <div className="shows-wrap">
                {packageReccomendation.shows.map(show => (
                    <div key={show.title}
                    className="show-card">
                        <img src={show.image} 
                        alt={show.title}
                        className="show-card__image"></img>
                        <p>{show.title}</p>
                    </div>
                ))}
            </div>
        </div>
        </div>

    )
}

export default Results