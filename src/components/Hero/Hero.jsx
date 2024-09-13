import { useCarousel } from "../../hooks/useCarousel";
import { Button } from "../Button/Button";

import "./Hero.scss";

export function Hero() {
    const { currentIndex, images } = useCarousel();
    const { src, alt } = images[currentIndex];

    return (
        <section className="hero">
            <div className="hero__container">
                <div className="hero__overlay"></div>

                <div className="hero__heading">
                    <h1 className="hero__header">
                        Find Your Perfect Match.
                    </h1>

                    <h2 className="hero__subheader">
                        Unlock Your Personalized Channel Bundle!
                    </h2>

                    <Button className="buttons hero__btn" text="TAKE THE QUIZ NOW" />
                </div>

                <div className="hero__carousel">
                    <img
                    className="hero__carousel-item"
                    src={src}
                    alt={alt} />
                </div>
            </div>
        </section>
    )
};