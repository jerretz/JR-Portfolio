import { useState } from "react";

const Home = () => {

    const [text, setText] = useState("setText");

    const handleClick = () => {
        setText('Handle Click');
    }

    const handleClickAgain = (name) => {
        console.log('Name: ' + name);
    }

    return (
        <div className="home">
            <h2>Homepage</h2>
            <p>{text}</p>
            <button onClick={handleClick}>Click me</button>
            <button onClick={() => {
                handleClickAgain('Click Again');
            }}>Click again</button>
        </div>
    );
}

export default Home;