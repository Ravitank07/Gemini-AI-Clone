import React, { createContext, useState } from "react";
import runChat from "../Confige/Gemini";
export const Context = createContext();

const ContextProvider = (props) => {
    const [input, setInput] = useState("");
    const [recentPrompt, setrecentPrompt] = useState("");
    const [prevPrompts, setprevPrompts] = useState([]);
    const [showResult, setshowResult] = useState(null);
    const [loading, setLoading] = useState(false)
    const [resultData, setresultData] = useState(false)
    const delayPara = (index,nextWord)=>{
        setTimeout(function(){
            setresultData(prev=>prev+nextWord)
        },75*index)
    }
    const newChat = () =>{
        setLoading(false)
        setshowResult(false)
    }
    const onSent = async (prompt) => {
        setresultData("")
        setLoading(true)
        setshowResult(true)
        let response;
        if(prompt !== undefined){
            response = await runChat(prompt);
            setrecentPrompt(prompt)
        }
        else{
            setprevPrompts(prev=>[...prev,input])
            setrecentPrompt(input)
            response = await runChat(input)
        }
        let responseArray = response.split("**");
        let newResponse = "";
        for (let i = 0; i < responseArray.length; i++) {
            if (i === 0 || i % 2 !== 1) {
                newResponse += responseArray[i];
            }
            else {
                newResponse += "<b>" + responseArray[i] + "</b>";
            }
        }
        let newResponse2 = newResponse.split("*").join("</br>")
        let newResponseArray = newResponse2.split(" ");
        for(let i=0 ; i<newResponseArray.length ; i++)
        {   
            const nextWord = newResponseArray[i];
            delayPara(i,nextWord+" ")
        }
        setLoading(false)
        setInput(" ")
    };

    const contextValue = {
        prevPrompts,
        setprevPrompts,
        onSent,
        setrecentPrompt,
        recentPrompt,
        showResult,
        loading,
        resultData,
        input,
        setInput,
        newChat
    };

    return (
        <Context.Provider value={contextValue}>
            {props.children}
        </Context.Provider>
    );
};

export default ContextProvider;
