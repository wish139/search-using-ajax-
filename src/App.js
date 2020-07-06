import React, { Component } from 'react';

//import './App.css';

import Axios from 'axios';




// const people = [
//   {
//     id: 1,
//     first: "Green",
//     last: "junggle",
//     age: 53
//   }, {
//     id: 2,
//     first: "manu",
//     last: "johnson",
//     age: 32
//   },{
//     id: 3,
//     first: "bhadra",
//     last: "jkunka",
//     age: 34
//   }, {
//     id: 4,
//     first: "yamini",
//     last: "johnson",
//     age: 35
//   },
// ]

function searchingFor(term){
return (x)=>{
 return !term || x.first.toLowerCase().includes(term.toLowerCase()) 
}
}
class App extends Component { 
  constructor(props) {
    super(props)
    this.state = {
      people: [],
      term: null
    }
    this.searchHandler = this.searchHandler.bind(this);
  }
  searchHandler(event){

    this.setState({term: event.target.value})
  }

  componentDidMount() {
      Axios.get('http://localhost:4000/business')
          .then(response => {
              this.setState({people: response.data});
      })
  }




  render() {
    const{term,people}=this.state;
    return (
      <div className="App">
        <form>
          <input type="text"onChange={this.searchHandler}  value={term}/>
        </form>
        {
          people.filter(searchingFor(term)).map(person =>
            <div key={person.id}>
              <h1>{person.first}</h1>
              <h1>{person.last}</h1>
              <h3>{person.age}</h3>
            </div>
          )
        }
      </div>
    );
  }
}
export default App;
