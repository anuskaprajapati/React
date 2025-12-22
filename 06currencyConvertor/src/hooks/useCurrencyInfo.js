
import {useEffect, useState} from "react"

function useCurrencyInfo(currency) {
    const [data, setData] = useState({})

    useEffect(() => {
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
            .then((res) => res.json())
            .then((res) => {
                console.log("API Response:", res) // Check API response
                console.log("Currency Data:", res[currency]) // Check specific currency data
                setData(res[currency] || {})
            })
            .catch((err) => console.error("Error:", err))
    }, [currency])

    return { data }
}

export default useCurrencyInfo