import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

const Button = ({
    children,
    backgroundColor = "#0c0c0c",
    width = '25%',
    color= "#bfbaba",
    onPress,
}) => {
    return (
        <TouchableOpacity style={[styles.container, { backgroundColor, width }]} activeOpacity={0.6} onPress={onPress}>
            <Text style={[styles.text, { color }]}>{children}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: "gold",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 40,
    fontWeight: "300",
    color: "#bfbaba"
  },
});
export default Button;