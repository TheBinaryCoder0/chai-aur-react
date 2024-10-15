import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
  const [data, setData] = useState({});

  useEffect(() => {
    fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
        // fetch(`https://open.er-api.com/v6/latest/${currency}.json`)
        .then((response) => response.json()) // Correctly parse the JSON response
        .then((response) => setData(response[currency])) // Update state with the currency data
        .catch((error) => console.error("Error fetching currency data:", error)); // Handle errors

    // console.log(data); // Cleaned up this log, as it won't show updated state immediately
  }, [currency]);

  console.log(data); // Log to see the current data state

  // return [data, setData]  // YEH APPROACH ISS SITUATION MEIN THIK NAHI BAITH RAHI HAI 
  return data; // PURA METHOD HI RETURN KAR DIYA
}

export default useCurrencyInfo;
