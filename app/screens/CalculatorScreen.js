import React from "react";
import { View, TextInput } from "react-native";
import Button from "./Button";
import styles from "../styles/CalculatorStyle";
import { StatusBar } from 'expo-status-bar';
import { Calculator_Activity } from "../activity/CalculatorActivity";

const Calculator = () => {
    const { input, setInput, calculate, addOperator, clear, percentage } = Calculator_Activity();

    return (
        <View style={styles.container}>
        <StatusBar style="light"/>
            <TextInput maxLength={10} value={input} keyboardType="number-pad" editable={false} showSoftInputOnFocus={false} style={styles.input}/>

            <View style={styles.buttonContainer}>
                <View style={styles.row}>
                    <Button style={styles.ac} onPress={() => setInput("")}  color="#1f69cb">AC</Button>
                    <Button onPress={clear} color="#1f69cb">C</Button>
                    <Button onPress={percentage} color="#1f69cb">%</Button>
                    <Button onPress={() => addOperator("/")} color="#1f69cb">/</Button>
                </View>

                <View style={styles.row}>
                    <Button onPress={() => setInput(input + "7")}>7</Button>
                    <Button onPress={() => setInput(input + "8")}>8</Button>
                    <Button onPress={() => setInput(input + "9")}>9</Button>
                    <Button onPress={() => addOperator("x")} color="#1f69cb">x</Button>
                </View>

                <View style={styles.row}>
                    <Button onPress={() => setInput(input + "4")}>4</Button>
                    <Button onPress={() => setInput(input + "5")}>5</Button>
                    <Button onPress={() => setInput(input + "6")}>6</Button>
                    <Button onPress={() => addOperator("-")} color="#1f69cb">-</Button>
                </View>

                <View style={styles.row}>
                    <Button onPress={() => setInput(input + "1")}>1</Button>
                    <Button onPress={() => setInput(input + "2")}>2</Button>
                    <Button onPress={() => setInput(input + "3")}>3</Button>
                    <Button onPress={() => addOperator("+")} color="#1f69cb">+</Button>
                </View>

                <View style={styles.row}>
                    <Button onPress={() => setInput(input + "0")} width={'50%'}>0</Button>
                    <Button onPress={() => setInput(input + ".")}>.</Button>
                    <Button onPress={calculate} backgroundColor="#1f69cb">=</Button>
                </View>
            </View>
        </View>   
    );
};

export default Calculator;