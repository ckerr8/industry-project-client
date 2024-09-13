import "./Hero.scss";

export function Hero() {
    return (
        <section className="hero">
            <div className="hero__container">
                <div className="hero__overlay"></div>
                <div className="hero__carousel">
                    <div className="hero__carousel-items">
                        <div className="hero__carousel-item item1"></div>
                        <div className="hero__carousel-item item2"></div>
                        <div className="hero__carousel-item item3"></div>
                        <div className="hero__carousel-item item4"></div>
                        <div className="hero__carousel-item item5"></div>
                    </div>
                </div>
            </div>
        </section>
    )
};