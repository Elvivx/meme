import React,{useEffect,useState} from "react"

function Window(){

    const [windowWidth,setWindowWidth] = useState(window.innerWidth)


    useEffect(() => {
        function watch(){
            setWindowWidth(window.innerWidth)
        }

        window.addEventListener("resize", watch)
        return function(){
            window.removeEventListener("resize",watch)
        }
    }, [])
    return (
        <h1>Window Width : {windowWidth}</h1>
    )
} 
export default Window;