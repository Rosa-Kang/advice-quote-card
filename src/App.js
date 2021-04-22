
import React from 'react';
import './App.css';
import axios from 'axios';

class App extends React.Component{
  state = { advice: '' };
  
  fetchAdvice = () => {
      axios.get('https://api.adviceslip.com/advice')
        .then((res) => {
            console.log(res.data)
            const { advice } = res.data.slip
            this.setState({
                advice
            });
        }).catch((error) => {
            console.log(error);
        })
  }

 componentDidMount() {
     this.fetchAdvice();
 }
    render() {
        const {advice} = this.state;
        return (
            <div className='app'>
                <div className='card'>
                 <h1 className='heading'>" {advice} "</h1> 
                 <button className='button' onClick={this.fetchAdvice}>
                     <span>GIVE ME ADVICE!</span>
                 </button>
                </div>
            </div>
        );
    }
}

export default App;