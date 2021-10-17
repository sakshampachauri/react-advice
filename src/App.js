import React, { Component } from 'react'
import axios from 'axios'
import './App.css'
export default class App extends Component {
     constructor(props){
             super(props);
             this.state ={
                  quote : "",
                 
             }
     }
     componentDidMount(){
         console.log("component did mount");
         this.getQuote();
     }
     getQuote =()=>{
           axios.get('https://api.adviceslip.com/advice')
           .then((res)=>{
                 
            //    console.log(res.data.slip.advice)
               this.setState({
                   quote : res.data.slip.advice
                   
               })

          })
          .catch((err)=>{
              console.log(err)
          });
     }
    render() {
        return (
            <div className="app" >
                <div>
                <p> {this.state.quote}</p> 
               
                   <button onClick={this.getQuote}>get new Thought</button>
                </div>
         
            </div>
        )
    }
}
