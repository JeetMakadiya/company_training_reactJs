const incNumber = () => {
    return {
        type: "INCREMENT"
    }
}
const decNumber = () => {
    return {
        type: "DECREMENT"
    }
}
const multNumber = () => {
    return {
        type: "MULTIPLICATION"
    }
}
const divideNumber = () => {
    return {
        type: "DIVISION"
    }
}

export { incNumber, decNumber, multNumber, divideNumber };