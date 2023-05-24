import React, { useState } from 'react'

export default function TextForm(props) {

    // USETATES
    //style
    // const [bgstyle, SetStyle] = useState({
    //     backgroundColor: 'white',
    //     color: 'Black',
    //     borderradius: '30px'

    // });
    //styeButton
    // const [btntext, SetBtntext] = useState("Enable Dark Mode")
    //textarea text
    const [text, SetText] = useState("Enter your text here");


    // HANDLING CHANGE IN TEXTAREA
    const changeHandler = (event) => {
        // console.log("Change handler" + text);
        SetText(event.target.value)

    }

    //CHANGEING TO UPPER CASE
    const toUpperCase = () => {
        // console.log("Uppercase Button CLicked");
        let newtext = text.toUpperCase();
        SetText(newtext);
        props.showalert("Converted to Upper Case....!", "success");

    }


    // CHANGING TO LOWER CASE

    const toLowerCase = () => {
        // console.log("Uppercase Button CLicked");
        let newtext = text.toLowerCase();
        SetText(newtext);
        props.showalert("Converted to Lower Case....!", "success");

    }
    // Find and relplace

    const toFindReplace = () => {
        let textFind = prompt("Enter the word to be replaced:")
        let ReplaceText = prompt("Enter the word with which to be replaced: ")
        let newtext = document.getElementById("exampleFormControlTextarea1");
        newtext = text.replace(textFind, ReplaceText)
        SetText(newtext);
        props.showalert("Replaced....!", "success");

    }
    // COPING TO CLIPBORAD

    const tohandlecopy = () => {
        var text = document.getElementById("exampleFormControlTextarea1");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showalert("Copied to clipboard", "success");

    }

    //THEME CHANGING FUNCTION

    // const changetheme = () => {
    //     // console.log("Theme Change Clicked");
    //     if (bgstyle.color === "Black") {
    //         SetStyle({
    //             backgroundColor: 'Black',
    //             color: 'White',
    //             borderradius: '30px',
    //             transition: '1s all '

    //         });
    //         SetBtntext("Enable Light Mode")

    //     } else {
    //         SetBtntext("Enable Dark Mode")
    //         SetStyle({
    //             backgroundColor: 'White',
    //             color: 'Black',
    //             transition: '1s all '

    //         })
    //     }

    // }


    return (

        <div>

            {/* <div className="mb-3 container my-3" style={bgstyle} > */}
            <div className="mb-3 container my-3"   >
                <h3>Enter Your Text Below</h3>
                {/* <textarea className="form-control " id="exampleFormControlTextarea1" rows="5" value={text} onChange={changeHandler} style={bgstyle}></textarea> */}
                <textarea className="form-control " id="exampleFormControlTextarea1" rows="5" value={text} onChange={changeHandler} style={{ backgroundColor: props.mode === 'dark' ? 'rgb(70 84 80)' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }}></textarea>
                <div className="container my-3">
                    {/* <button type="button" className="btn btn-primary mx-2 mb-3" onClick={changetheme}>{btntext}</button> */}
                    <button type="button" className={`btn btn-${props.mode} mx-2 mb-3`} onClick={toUpperCase}><strong>Convert to UpperCase</strong></button>
                    <button type="button" className={`btn btn-${props.mode} mx-2 mb-3`} onClick={toLowerCase}><strong>Convert to LowerCase</strong></button>
                    <button type="button" className={`btn btn-${props.mode} mx-2 mb-3`} onClick={tohandlecopy}><strong>Copy to clipboard</strong></button>
                    <button type="button" className={`btn btn-${props.mode} mx-2 mb-3`} onClick={toFindReplace}><strong>Find & Replace</strong></button>
                </div>
                <div className="preview container my-3">
                    <h2>Summary Of Text</h2>
                    <p>{text.split(" ").length - 1} words and {text.length} characters</p>
                    <p>it will take {0.008 * (text.split(" ").length - 1)} minutes to read</p>
                    <h2>Preview of Text</h2>
                    <p>{text.length > 0 ? text : "Write something to preview here"}</p>
                </div>
            </div>
        </div>
    )
}
