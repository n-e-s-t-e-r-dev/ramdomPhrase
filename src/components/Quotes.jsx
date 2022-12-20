import React, { useState } from "react";
import users from "../users.json";

const Quotes = () => {
    console.log(users);

    const random = Math.floor(Math.random() * users.length);
    const [index, setIndex] = useState(random);
    // const index = 1;

    const changeUser = () => {
        const newRandom = Math.floor(Math.random() * users.length);
        setIndex(newRandom);
    };

    const colors = [
        "#845EC2",
        "#D65DB1",
        "#FF6F91",
        "#FF9671",
        "#FFC75F",
        "#F9F871"
    ];
    const randomColor = Math.floor(Math.random() * colors.length);
    document.body.style = `background: ${colors[randomColor]}`;

    return (
        <div className="user-box" style={{ color: colors[randomColor] }}>
            <h1>
                {users[index].quote}
            </h1>
            <h2 className="author">
                {users[index].author}
            </h2>
            <img src alt="" />

            <button className="buttom" onClick={changeUser}>
                    <i class="fa-solid fa-angle-right"></i>
                
            </button>
        </div>
    );
};

export default Quotes;