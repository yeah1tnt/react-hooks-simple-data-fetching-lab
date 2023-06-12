import React, {useState, useEffect} from "react";

function App(){
    const [dog,setDog] = useState(null);

    useEffect(function (){
        fetch("https://dog.ceo/api/breeds/image/random")
        .then(function (response){
            return response.json();
        })
        .then(function (data){
            return setDog(data.message);
        });
    },[])
    if (!dog) return <p>Loading...</p>

    return (
        <img src={dog} alt="A Random Dog"/>
    )
}


export default App