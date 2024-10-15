import React, { useContext } from 'react'
import '../Main/main.css'
import { assets } from '../../Assets/assets'
import { Context } from '../../Context/Context'
import { useAuth0 } from "@auth0/auth0-react";
const Main = () => {
    const { onSent, recentPrompt, showResult, loading, resultData, setInput, input } = useContext(Context);
    const { loginWithRedirect } = useAuth0();
    return (
        <>
            <div className="main">
                <div className="nav">
                    <p>Gemini</p>
                    <button  className="loginBtn" onClick={() => loginWithRedirect()}>Log In</button>
                    {/* <img src={assets.user_icon} alt="" /> */}
                </div>
                <div className="main-container">
                    {!showResult
                    ?<>
                    <div className="greet">
                        <p><span>Hello Developer</span></p>
                        <p>How can I help you today ?</p>
                    </div>
                    <div className="cards">
                        <div className="card">
                            <p>Suggest beautiful places to see on an upcoming road trip</p>
                            <img src={assets.compass_icon} alt="compass_icon" />
                        </div>
                        <div className="card">
                            <p>What is best Language in this senario for backend</p>
                            <img src={assets.bulb_icon} alt="compass_icon" />
                        </div>
                        <div className="card">
                            <p>Brainstrom team bonding activities for our work retreat</p>
                            <img src={assets.mess_icon} alt="compass_icon" />
                        </div>
                        <div className="card bottom-card">
                            <p>Improve the readability of the follwing code</p>
                            <img src={assets.code_icon} alt="compass_icon" />
                        </div>
                    </div>
                    </>
                    :<div className='result'>
                            <div className="result-title">
                                <img src="https://cdn-icons-png.flaticon.com/512/149/149071.png" className="result-img" width={"60px"}/>
                                <p>{recentPrompt}</p>
                            </div>
                            <div className="result-data">
                                <img src={assets.gemini_icon} width={"20px"} />
                                {loading
                                ?<div className='loader'>
                                    <hr/>
                                    <hr/>
                                    <hr/>
                                    </div>:
                                    <p dangerouslySetInnerHTML={{__html:resultData}}></p>}                          
                            </div>
                    </div>}
                    <div className="main-bottom">
                        <div className="search-box">
                            <input onChange={(e) => setInput(e.target.value)} value={input} type='text' placeholder='Enter a Prompt Here'></input>
                            <div>
                                <img src={assets.gallery_icon} alt='gallery_icon' />
                                <img src={assets.mic_icon} alt='mic_icon' />
                                {input?<img src={assets.send_icon} alt='send_icon' onClick={()=>onSent()}/>:null}
                            </div>
                        </div>
                        <p className='bottom-info'>
                            Gemini may display inaccurate info , including about people , so double-check its response. Your Privacy and Gemini Apps
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Main
