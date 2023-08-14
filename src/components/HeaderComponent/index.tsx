import { Header } from "antd/es/layout/layout";
import { useState } from "react";
import { Link } from "react-router-dom";
import './style.css'

const HeaderComponent = () => {
    const poolFloatArray = [
        new Audio(window.location.origin + '/voicelines/poolFloat/pool_float_1.mp3'),
        new Audio(window.location.origin + '/voicelines/poolFloat/pool_float_2.mp3'),
        new Audio(window.location.origin + '/voicelines/poolFloat/pool_float_3.mp3'),
        new Audio(window.location.origin + '/voicelines/poolFloat/pool_float_4.mp3'),
        new Audio(window.location.origin + '/voicelines/poolFloat/pool_float_5.mp3'),
    ]
    const [isPoolFloatDisabled, setIsPoolFloatDisabled] = useState(false)
    const poolFloatThreshold =2000

    const handlePoolFloat = () => {
        setIsPoolFloatDisabled(true)
        const poolFloatSound = poolFloatArray[Math.floor(Math.random()*poolFloatArray.length)];
        poolFloatSound.volume = 0.1
        poolFloatSound.play()

        setTimeout(()=>{
            setIsPoolFloatDisabled(false)
        },poolFloatThreshold)
        
    }

    return(
        <Header style={{display: "flex", justifyContent: "center"}}>
            <Link to="/scores" className="headerLink">Scores</Link>
            <Link to="/">
                <img src={"/esoguessr_text_logo_white.png"} alt="" className='headerLogo'/>
            </Link>
            <Link to="/about" className="headerLink">About</Link>
            <button onClick={handlePoolFloat} disabled={isPoolFloatDisabled} className="poolFloatButton"><img src="/icons/poolFloat.webp" alt="Summer time"/></button>
        </Header>
    )
}

export default HeaderComponent;