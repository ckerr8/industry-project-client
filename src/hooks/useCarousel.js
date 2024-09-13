import { useState, useEffect } from 'react';

export const useCarousel = () => {
    const images = [
        {
            src: "src/assets/images/alien-romulus.png", 
            alt: "alien romulus movie poster"
        },
        {
            src: "src/assets/images/beetlejuice.png",
            alt: "beetlejuice movie poster"
        },
        {
            src: "src/assets/images/deadpool-wolverine.png",
            alt: "deadpool and wolverine movie poster"
        },
        {
            src: "src/assets/images/the-wild-robot.png",
            alt: "the wild robot movie poster"
        },
        {
            src: "src/assets/images/wicked.png",
            alt: "wicked movie poster"
        }
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
    const interval = setInterval(() => {
        setCurrentIndex(prevIndex =>
        (prevIndex + 1) % images.length);
    }, 3000); 

    return () => clearInterval(interval);

    }, [images.length]);

    return { currentIndex, images };
};
