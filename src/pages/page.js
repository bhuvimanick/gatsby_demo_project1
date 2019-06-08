import React, {useEffect } from 'react';

export default (props) => {
  let responseElement = null;
  
  useEffect(() => {
    console.log(props.location)
    let result = getQueryParam('query');
    let element = document.createElement('p');
    element.innerHTML = result;
    responseElement.appendChild(element);
   
  }, [])

  function getQueryParam(search) {
    var q = props.location.search.match(new RegExp('[?&]' + search + '=([^&#]*)'));
    return q && q[1];
  }
  
  getQueryParam('a');


  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="jumbotron">
            <div id="response" ref={(el) => {
              responseElement = el;
            }}>
              <p className="font-weight-normal">Let me listen</p>
            </div>
             
            </div>
          </div>
        </div>



      </div>


    </>




  )
}