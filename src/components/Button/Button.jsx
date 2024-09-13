import { useNavigate } from "react-router-dom";

export function Button({ className, type, text, onClick }) {
    const navigate = useNavigate();
    const handleClick = () => {
        console.log(onClick);
        navigate(`${onClick}`);
    }
    
    return (
        <button
        className={className}
        type={type}
        onClick={handleClick}>
            {text}
        </button>
    )
};