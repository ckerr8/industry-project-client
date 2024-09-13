import { useNavigate } from "react-router-dom";
import "./QPLiveVsStream.scss"
import { Button } from "../../components/Button/Button";

export default function QPLiveVsStream({ results }) {
    const navigate = useNavigate();
    function submitHandler(e){
        e.preventDefault();
        console.log(e.target.percentStream.value);
        navigate("/");
    }
    return (
        <div className="quiz-container">
            <form className="live-stream__form" onSubmit={submitHandler}>
                <h1>What percentage of Live TV vs Streaming do you consume?</h1>
                <div className="range-cont">
                    <h2>Live TV</h2>
                    <input type="range" name="percentStream" id="percent-slider" />
                    <h2>Streaming</h2>
                </div>
                <Button className="next-button" type="submit" text="NEXT" onClick="/streaming" />
            </form>
        </div>
    )
}