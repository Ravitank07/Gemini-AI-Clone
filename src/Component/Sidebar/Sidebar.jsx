import React, { useContext, useState } from 'react'
import '../Sidebar/sidebar.css'
import { assets } from '../../Assets/assets'
import { Context } from '../../Context/Context'

const Sidebar = () => {
    const [extend, setExtend] = useState(false);
    const {onSent,prevPrompts,setrecentPrompt,newChat} = useContext(Context);
    const loadPrompt = async (prompt) =>{
        setrecentPrompt(prompt);
        await onSent(prompt)
    }
    return (
        <>
            <div className="sidebar">
                <div className="top">
                    <img onClick={() => setExtend(prev => !prev)} src={assets.menu_icon} alt="menu-icon" className='menu' />
                    <div  onClick={newChat} className="new-chat">
                        <img src={assets.plus_icon} alt='plus-icon' />
                        {extend ? <p>New Chat</p> : null}
                    </div>
                    {extend ?
                        <div className="recent">
                            <p className="recent-title">Recent</p>
                            {prevPrompts.map((item, index) => {
                                return <div onClick={()=>loadPrompt(item)} className="recent-entry">
                                    <img src={assets.mess_icon} alt="message_icon" />
                                    <p>{item.slice(0,18)} ...</p>
                                </div>
                            })}

                        </div>
                        : null}
                </div>
                <div className="bottom">
                    <div className="bottom-item recent-entry">
                        <img src={assets.question_icon} alt="question-icon" />
                        {extend ? <p>Help</p> : null}
                    </div>
                    <div className="bottom-item recent-entry">
                        <img src={assets.history_icon} alt="history-icon" />
                        {extend ? <p>Activity</p> : null}
                    </div>
                    <div className="bottom-item recent-entry">
                        <img src={assets.setting_icon} alt="setting-icon" />
                        {extend ? <p>Setting</p> : null}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Sidebar
