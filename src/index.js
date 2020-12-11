import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
let currenttime= new Date().getHours();
let greetings='';

const greeting ={} ;
// const cssStyle={
//     textAlign:'center',
//     margin:'100px 0px',
//     backgroundColor:'pink',
//     padding:'20px 20px',
//     borderRadius:'20px'
//     // textBackground:'pink'
// };

if(currenttime>=1 && currenttime<12){
    greetings='Good Morning';
    greeting.color='green';
}
else if(currenttime>=12 && currenttime<19){
    greetings='Good Afternoon';
    greeting.color='yellow';
}else{
    greetings='Good Night';
    greeting.color='black';
}


ReactDOM.render(<>
    <div className='hey'>
        <h1>Hello sir! <span style={greeting}>{greetings}</span></h1>
    </div>
</>
    ,document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
