import { useState, useEffect } from "react";

function useCurrencyInfo (currency) {
    let API = `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`

    const [data, setData] = useState({});
    useEffect(() => {
        fetch(API)
        .then((response) => response.json())
        .then((response) => setData(response[currency]))
    }, [currency])

    return data
}

export default useCurrencyInfo;
