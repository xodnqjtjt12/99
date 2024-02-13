import React, { useState } from "react";

export default function Write() {
    let [number1, setNumber1] = useState(1);
    let number2 = 1;

    function handlePlus1Btn() {
        setNumber1(number1 + 1);
        number2 = number2 + 1;
        console.log("useState 사용 ", number1);
    }
    function handlePlus2Btn() {
        number2 = number2 + 1;
        console.log("useState 미사용 ", number2);
    }

    return (
        <div>
            <span>useState 사용 : {number1}</span>{" "}
            <button onClick={handlePlus1Btn}>+</button>
            <br />
            <span>useState 미사용 : {number2}</span>
            <button onClick={handlePlus2Btn}>+</button>
        </div>
    );
}
