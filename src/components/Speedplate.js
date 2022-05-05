import React, { useState } from 'react';
function Speedplate()
{
    const [speed, setSpeed] = useState(0);
    const [count, setCount] = useState(0);
    const [ans, setAns] = useState(0);
    function handlechange(e) { 
        var startTime = performance.now()
        
        var t=startTime-count;
        var s=speed;
        setSpeed(e.target.value);
        setCount(startTime);
        var temp=(t*s)/360000;
        var tempans=ans+temp;
        var intvalue=Math.floor(tempans-Math.floor(ans));
        var arr=[0,0,0,0,0];
        var brr=['first','second','third','fourth','fifth'];
        var i=0;
        var fill=Math.floor(ans);
        while(fill>0)
        {
            arr[i]=Math.floor(fill%10);
            fill=Math.floor(fill/10);
            i++;
        }


        setAns(ans+temp);
        
        
        i=0;
        console.log("ini");
        while(intvalue>0 )
        {
            arr[i]=arr[i]+(intvalue%10);
            console.log("arr value",arr[i]);
            console.log("intv",intvalue);
            var temp3=Math.floor((arr[i]%10));
            intvalue=Math.floor(intvalue/10);
            intvalue+=Math.floor(arr[i]/10);
            arr[i]=temp3;
            i=i+1;
        }
        while(i>0)
        {
            i=i-1;
            document.getElementById(brr[i]).innerHTML=arr[i];
        }
        document.getElementById('rangeValue').innerHTML = e.target.value;
      }

    return (
        <>
        <h1 className='cen' >Reading</h1>
        <div class="box" >
        <span className="counter" id="fifth">0</span>
        <span className="counter" id="fourth">0</span>
        <span className="counter" id="third">0</span>
        <span className="counter" id="second">0</span>
        <span className="counter" id="first">0</span>
        </div>
        <br />
        <h1 className='cen'>Speed</h1>
       <input id="slider" className='cen mx-auto' type="range" min="0" max="250"  onChange={handlechange} />
       <h3 className='cen' id="rangeValue">0</h3>
  </>
    );
}
export default Speedplate;


