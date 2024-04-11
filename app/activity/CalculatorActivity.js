import React, { useState } from "react";


export const Calculator_Activity = () => {
    const [input, setInput] = useState("");

    const calculate = () => {
        let actualString = "";
        for (let a of input) {
            if (a === "x") actualString = actualString + "*";
            else actualString += a;
        }
        const last = actualString.charAt(actualString.length - 1);

        if (
            last === "/" ||
            last === "+" ||
            last === "-" ||
            last == "x" ||
            last == "."
        ) {
            actualString = actualString.slice(0, actualString.length - 1);
        }
        const result = eval(actualString) + "";
        setInput(result);
    };

    const addOperator = (op) => {
        let exp = input;
        const last = exp.charAt(exp.length - 1);
        if (last === "x" || last === "+" || last === "-" || last === "/") {
            exp = exp.slice(0, -1) + op;
            setInput(exp);
        } else {
            exp = exp + op;
            setInput(exp);
        }
    };

    const clear = () => {
        setInput(input.slice(0, input.length - 1));
    };

    const percentage = () => {
        let exp = input;
        let last = input.charAt(input.length - 1);
        if (last === "/" || last === "x" || last === "-" || last === "+") {
            exp = exp.slice(0, exp.length - 1);
        }
        setInput(eval(exp + "/100") + "");
    };

    return {
        input,
        setInput,
        calculate,
        addOperator,
        clear,
        percentage
    };
};




