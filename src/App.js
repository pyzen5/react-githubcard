import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

const testData = [
  {name: 'Person 1', avatar_url: 'https://via.placeholder.com/100', company: 'Facebook'},
  {name: 'Person 2', avatar_url: 'https://via.placeholder.com/100', company: 'Google', kcompany: 'Test'},
  {name: 'Person 3', avatar_url: 'https://via.placeholder.com/100', company: 'Twitter'},
]

const CardList = (props) => {
  return (
    <div>
        {/* <Card name={testData[0].name} avatar_url={testData[0].avatar_url} company={testData[0].company} /> */}
        {/* <Card {...testData[1]} /> */}
        {props.profiles.map((profile, index) => (<Card key={index} {...profile}/>))}
      </div>
  )
}
// class CardList extends Component {
//   render() {
//     return (
//       <div>
//         {/* <Card name={testData[0].name} avatar_url={testData[0].avatar_url} company={testData[0].company} /> */}
//         {/* <Card {...testData[1]} /> */}
//         {this.props.profiles.map((profile, index) => (<Card key={index} {...profile}/>))}
//       </div>
//     )
//   }
// }

class Card extends Component {
  render() {
    const stylle1 = {
      padding: '10px',
      margin: '10px'
    }
    const profile = this.props;

    return (
      <div style={{display: 'flex', margin: '10px', padding: '10px'}}>
        <img src={profile.avatar_url} width="150px" height="150px"></img>
        <div style={stylle1}>
          <h3>Name: {profile.name} </h3>
          <p>Profile: {profile.company} </p>
          <p>Profile: {profile?.kcompany} </p>
        </div>
      </div>
    )
  }
}

class Form extends Component {
  // userNameInput = React.createRef();
  state = { userName: ''}
  handleSubmit = async (event) => {
    event.preventDefault();
    const resp = await axios.get(`https://api.github.com/users/${this.state.userName}`)
    console.log(resp.data)
    // console.log(this.userNameInput.current.value)
    console.log(this.state.userName)
    this.props.addUser(resp.data)
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        {/* <input type="text" placeholder="Github Username" ref={this.userNameInput} required /> */}
        <input type="text" placeholder="Github Username" value={this.state.userName} onChange={event => this.setState({userName: event.target.value})} required />
        <button>Add Card</button>
      </form>

    )
  }
}
class App extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     profiles: testData
  //   }
  // }

  state = {
    profiles: []
  }

  addNewUser = (profileData) => {
    console.log('App', profileData);
    this.setState(prevState => ({
      profiles: [...prevState.profiles, profileData]
    }))
  }

  render() {
    return (
      <div>
        <h1>Github Profiles</h1>
        <Form addUser={this.addNewUser} />
        <CardList profiles={this.state.profiles}/>
      </div>
    )
  }
}

export default App;
