import React, { useEffect } from 'react';
import json from '../data.json'
export default (props) => {
  let responseElement = null;
  let queryarray=[];
  let querystring=getQueryParam('query');
  queryarray= querystring.split("%20");
  useEffect(() => {
    console.log(props.location)
    let result = getQueryParam('query');
  
    let element = document.createElement('p');
    element.innerHTML = result;
    // responseElement.appendChild(element);

  }, [])

  function getQueryParam(search) {
    var q = props.location.search.match(new RegExp('[?&]' + search + '=([^&#]*)'));
    return q && q[1];
  }

  getQueryParam('a');

  function checkcondition(arr) {
    // let arr1 = ["back pain","osteoarthritis"];
  console.log(queryarray);
    let count = 0;
    queryarray.forEach(function (element) {

      if (arr.description.includes(element)) {
        count++;
      } 
     
    })

    if (count > 0) {
      console.log("Value exists!")

      return true;
    }
    else {
      return false;
    }


  }
  var res = json.products.filter(checkcondition);


  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="jumbotron">
              {/* <div id="response" ref={(el) => {
                responseElement = el;
              }}>
                <p className="font-weight-normal">Let me listen</p>
              </div> */}
              <div>
{
  res.map((item)=><div className="bg-dark" key={item.id}><h3>{item.name}</h3><p>{item.description}</p></div>)
}
              </div>

            </div>
          </div>
        </div>



      </div>


    </>




  )
}