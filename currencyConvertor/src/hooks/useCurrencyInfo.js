import { useState , useEffect } from "preact/hooks";


function useCurrencyInfo(currencyy){
    const [data,setdata] = useState({})  // update the data everywhere

    //The useEffect Hook allows you to perform side effects in your components.
    //Some examples of side effects are: fetching data, directly updating the DOM, and timers.
    //Sometimes, we want to run some additional code after React has updated the DOM.
    // By using this Hook, you tell React that your component needs to do something after 
    // render. React will remember the function you passed (we’ll refer to it as our “effect”), 
    // and call it later after performing the DOM updates. In this effect, we set the document
    // title, but we could also perform data fetching or call some other imperative API.
    //In the future, the second argument might get added automatically by a build-time transformation.
    useEffect( ()=>{
        let url = `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`
        fetch(url)
        .then( (res)=> res.json() )
        .then( (res)=> setdata(res[currencyy]) )
    },[currencyy] )

    console.table(data)
    return data
}

export default useCurrencyInfo