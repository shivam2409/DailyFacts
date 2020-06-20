import React, { Component } from 'react';
import axios from 'axios';

// function FactList() {

//   useEffect =(async()=>{

//     const res = await axios.get('https://uselessfacts.jsph.pl/', {
//    headers: { accept: 'application/json' },
//   })
//   return <h1>Daily Facts</h1>;
// }

// export default FactList;
class Factlist extends Component {
  async componentDidMount() {
    //Faching data
    const res = await axios.get('https://api.football-data.org/v2/matches', {
      // headers: { accept: 'application/json' },
      method: 'GET',
    });
    console.log(res);
  }
  render() {
    return <h1>Daily Facts</h1>;
  }
}

export default Factlist;
