import "./styles.css";

import React,{useState,useEffect} from "react"






//test
function App(){
const [meme,setMeme] = useState({
        topText: "",
        bottomText:"" ,
        randomImage: ""
    })

const [allMeme,setAllMeme] = useState([])
    
    useEffect(() => {
        fetch("https://api.imgflip.com/memes")
        .then(res => res.json())
        .then(data => setAllMeme(data.data.memes))
    },[])


//a function to get a random image from the data received from 'fetch'
function getMemeImage(){
    const randomNumber = Math.floor(Math.random() *allMeme.length)
    const url = allMeme[randomNumber].url
    setMeme(prevState => ({
        ...prevState, randomImage:url}))//the call to the hook which changes the state of the function
    
}


    function handleChange(event){
        const {name, value} = event.target
        setMeme(prevState => ({
            ...prevState,
            [name]: value
        }))}

/*
function getMemeImage(){
    const memesArray = allMeme.data.memes
    const randomNumber = Math.floor(Math.random() * allMeme.length)
    const url = allMeme[randomNumber].url
    setMeme(prevState => ({
        ...prevState,
        randomImage: url
    }))
    
}*/

    return(
        <main> 
        <div className="form">
            <input placeholder="Top text"
            name="topText"
            value={meme.topText}
            type="text" 
            onChange={handleChange}
            className="form--input"/>

            <input placeholder="Bottom text"
            type="text" 
            onChange={handleChange}
            name="bottomText"
            value={meme.bottomText}
            className="form--input"/>

            <button className="form--button" onClick={getMemeImage}> Get a new picture</button>

        </div>
        <div className="meme">
        <img src={meme.randomImage} alt="meme" className="meme--image" /> 
        <h1 className="meme--text top">{meme.topText}</h1>
        <h1 className="meme--text bottom">{meme.bottomText}</h1>
        </div>
    
        </main>
    )
} 
export default App;