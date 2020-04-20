import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const testData = [
  {name: 'Person 1', avatar_url: 'https://via.placeholder.com/100', company: 'Facebook'},
  {name: 'Person 2', avatar_url: 'https://via.placeholder.com/100', company: 'Google', kcompany: 'Test'},
  {name: 'Person 3', avatar_url: 'https://via.placeholder.com/100', company: 'Twitter'},
]

class CardList extends Component {
  render() {
    return (
      <div>
        {/* <Card name={testData[0].name} avatar_url={testData[0].avatar_url} company={testData[0].company} /> */}
        {/* <Card {...testData[1]} /> */}
        {this.props.profiles.map((profile, index) => (<Card key={index} {...profile}/>))}
      </div>
    )
  }
}

class Card extends Component {
  render() {
    const stylle1 = {
      padding: '10px',
      margin: '10px'
    }
    const profile = this.props;

    return (
      <div style={{display: 'flex', margin: '10px', padding: '10px'}}>
        <img src={profile.avatar_url}></img>
        <div style={stylle1}>
          <h3>Name: {profile.name} </h3>
          <p>Profile: {profile.company} </p>
          <p>Profile: {profile?.kcompany} </p>
        </div>
      </div>
    )
  }
}

class App extends Component {
  render() {
    return (
      <div>
        <h1>Github Profiles</h1>
        <CardList profiles={testData}/>
      </div>
    )
  }
}

export default App;
