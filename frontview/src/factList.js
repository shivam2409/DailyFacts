import React, { Component } from 'react';
import axios from 'axios';

class Factlist extends Component {
  async componentDidMount() {
    //Faching data
    const res = await axios.get(
      'https://webknox-trivia-knowledge-facts-v1.p.rapidapi.com/trivia/random',
      {
        headers: {
          accept: 'application/json',
          'x-rapidapi-host': 'webknox-trivia-knowledge-facts-v1.p.rapidapi.com',
          'x-rapidapi-key':
            '61510d0b0dmsh7308c9ac76da14cp1e5883jsn7eadea2e874b',
          useQueryString: true,
        },
      }
    );
    console.log(res);
  }
  render() {
    return <h1>Daily Facts</h1>;
  }
}

export default Factlist;
