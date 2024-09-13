import { useCarousel } from "../../hooks/useCarousel";
import "./Hero.scss";

export function Hero() {
    const { currentIndex, images } = useCarousel();
    const { src, alt } = images[currentIndex];

    return (
        <section className="hero">
            <div className="hero__container">
                <div className="hero__overlay"></div>
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