import React, { useState, useEffect } from "react"

const Search = () => {
    const [name, setName] = useState("");
    let responseElement = null;
    let SpeechRecognition = null;
    let recognition = null;
    function onChange(e) {
      setName(e.target.value);
    }
    function handleOnClick() {
        recognition.start();
        console.log('Ready to receive a color command.');
      }
      useEffect(() => {
        SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
        recognition = new SpeechRecognition();
        recognition.continous = true
        recognition.interimResults = false;
        recognition.lang = 'en-US';
        
    
        recognition.onresult = function (event) {
       
        
          var last = event.results.length - 1;
          var text = event.results[last][0].transcript;
        
          let element = document.createElement('p');
          element.class = 'font-weight-normal';
          element.innerHTML = text;
          responseElement.appendChild(element);
          console.log('Confidence: ' + event.results[0][0].confidence)
          window.location= '/search-results?query=' + text;
        
        }
        
        recognition.onspeechend = function () {
          recognition.stop();
        }
        
      }, [])
    return(
        <div>
            <input type="text" name="title" value={name} onChange={
                onChange
              } />
              <button type="button" className="btn btn-success" onClick={
                handleOnClick
              } >  Speak  </button>
               <div id="response" ref={(el) => {
              responseElement = el;
            }}>
              <p className="font-weight-normal">Let me listen</p>
            </div>
        </div>
    )
}
export default Search