import { StyleSheet, StatusBar } from "react-native";

const styles = StyleSheet.create({
    buttonContainer: {
        flexDirection: "column",
        height: '60%',
        width: '100%',
        justifyContent: 'space-between',
    },

    container: {
        flex: 1,
        paddingTop: StatusBar.currentHeight,
        width: "100%",
        backgroundColor: 'black',
    },

    input: {
        width: "100%",
        height: "40%",
        fontSize: 75,
        textAlign: "right",
        color: "white",
        fontWeight: "300",
        padding: 20,
    },
    row: {
        flexDirection: "row",
        height: '20.1%',
        justifyContent: 'space-between'
    },

    ac:{
        color: 'blue',
    }

});

export default styles;