import React, { useState, useEffect } from 'react';

// import { Link } from "gatsby"
// import { Breadcrumb, BreadcrumbItem } from 'reactstrap';
// import Layout from "../components/layout"



const IndexPage = (props) =>  {
  const [name, setName] = useState("");
  let responseElement = null;
  let SpeechRecognition = null;
  let recognition = null;
  function onChange(e) {
    setName(e.target.value);
  }
  useEffect(() => {
    SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    recognition = new SpeechRecognition();
    recognition.continous = true
    recognition.interimResults = false;
    recognition.lang = 'en-US';
    

    recognition.onresult = function (event) {
      // The SpeechRecognitionEvent results property returns a SpeechRecognitionResultList object
      // The SpeechRecognitionResultList object contains SpeechRecognitionResult objects.
      // It has a getter so it can be accessed like an array
      // The [last] returns the SpeechRecognitionResult at the last position.
      // Each SpeechRecognitionResult object contains SpeechRecognitionAlternative objects that contain individual results.
      // These also have getters so they can be accessed like arrays.
      // The [0] returns the SpeechRecognitionAlternative at position 0.
      // We then return the transcript property of the SpeechRecognitionAlternative object
    
      var last = event.results.length - 1;
      var text = event.results[last][0].transcript;
    
      console.log(text);
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


  function handleOnClick() {
    recognition.start();
    console.log('Ready to receive a color command.');
  }


  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="jumbotron">

              <input type="text" name="title" value={name} onChange={
                onChange
              } />
              <button type="button" className="btn btn-success" onClick={
                handleOnClick
              } >  Speak  </button>

            </div>

            <div id="response" ref={(el) => {
              responseElement = el;
            }}>
              <p className="font-weight-normal">Let me listen</p>
            </div>
          </div>
        </div>



      </div>


    </>




  )
}
export default IndexPage
