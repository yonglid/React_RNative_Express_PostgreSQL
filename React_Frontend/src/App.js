import React, { Component } from 'react';
// adding in router and link from react router dom, which is just web 
import {BrowserRouter as Router, Link, Switch, Route} from 'react-router-dom'; 

import axios from 'axios';
import Zoom from 'react-reveal/Zoom';
import Flip from 'react-reveal/Flip'
import styled, { css } from 'styled-components'
// import ReactBootstrap, {Navbar,Jumbotron, Button, Col, Grid, Panel, FormGroup} from 'react-bootstrap'
import ReactBootstrap, {Jumbotron} from 'react-bootstrap'
// import Navbar from 'react-bootstrap/Navbar'
const SearchStyledButton = styled.button`
  /* position: absolute; */
  /* height: 150%; */
  width: 100%;
  top: 50%;
  left:50%;
  font-size: 2.6vmin;
  cursor: pointer;
  box-shadow: rgba(255, 255, 255, 0.05) 0px 3px 20px;
  border-width: initial;
  background-color: purple;
  color: white;
  border-style: none;
  border-color: initial;
  border-image: initial;
  outline: none;
  &:hover {
       background-color: #445b65;
       color: white;
  }
`

const StyledButton = styled.button`
/* position: absolute; */
height: 100%;
width: 75%;
top: 100%;
left:100%;
font-size: 2.6vmin;
cursor: pointer;
box-shadow: rgba(255, 255, 255, 0.05) 0px 3px 20px;
border-width: initial;
background-color: grey;
background-image:url('https://lh3.googleusercontent.com/MOf9Kxxkj7GvyZlTZOnUzuYv0JAweEhlxJX6gslQvbvlhLK5_bSTK6duxY2xfbBsj43H=w300');
color: white;
border-style: none;
border-color: initial;
border-image: initial;
outline: none;
&:hover {
     background-color: #445b65;
     color: white;
}
`
// `
//   border-top: 1px solid #4f4f4f;
//   background: #4f4f4f;
//   background: -webkit-gradient(linear, left top, left bottom, from(#404040), to(#4f4f4f));
//   background: -webkit-linear-gradient(top, #404040, #4f4f4f);
//   background: -moz-linear-gradient(top, #404040, #4f4f4f);
//   background: -ms-linear-gradient(top, #404040, #4f4f4f);
//   background: -o-linear-gradient(top, #404040, #4f4f4f);
//   padding: 20px 40px;
//   -webkit-border-radius: 23px;
//   -moz-border-radius: 23px;
//   border-radius: 23px;
//   -webkit-box-shadow: rgba(0,0,0,1) 0 1px 0;
//   -moz-box-shadow: rgba(0,0,0,1) 0 1px 0;
//   box-shadow: rgba(0,0,0,1) 0 1px 0;
//   text-shadow: rgba(0,0,0,.4) 0 1px 0;
//   color: white;
//   font-size: 24px;
//   font-family: Helvetica, Arial, Sans-Serif;
//   text-decoration: none;
//   vertical-align: middle;
// &:hover {
//   border-top-color: #ffffff;
//   background: #ffffff;
//   color: #000000;
//   }
// &:active {
//   border-top-color: #1f4761;
//   background: #1f4761;
//   }
// `

const orig_StyledButton = styled.button`
  /* position: absolute; */
  height: 100%;
  width: 75%;
  top: 100%;
  left:100%;
  font-size: 2.6vmin;
  cursor: pointer;
  box-shadow: rgba(255, 255, 255, 0.05) 0px 3px 20px;
  border-width: initial;
  background-color: grey;
  color: white;
  border-style: none;
  border-color: initial;
  border-image: initial;
  outline: none;
  &:hover {
       background-color: #445b65;
       color: white;
  }
`
const search = <SearchStyledButton>Search</SearchStyledButton>
const saved = <SearchStyledButton>Saved</SearchStyledButton>
const profile = <SearchStyledButton>Profile</SearchStyledButton>
const more = <SearchStyledButton>more</SearchStyledButton>
const male = <StyledButton>Male</StyledButton>
const female = <StyledButton>Female</StyledButton>
const other = <StyledButton>Other</StyledButton>
const save = <SearchStyledButton> Save </SearchStyledButton>

const profile_gender = <StyledButton>Gender</StyledButton>

const Columns = () =>
  <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 2fr)", gridGap: 10 }}>
    <div>{search}</div>
    <div>{saved}</div>
    <div>{profile}</div>
    <div>{more}</div>
  </div>

const Rows = () =>
<div style={{ display: "grid", gridTemplateRows: "repeat(3, 1fr)", gridGap: 15 }}>
  <div>{male}</div>
  <div>{female}</div>
  <div>{other}</div>
  <div>{save}</div>
</div>

const gender = <StyledButton>Gender</StyledButton>
const age = <StyledButton>Age</StyledButton>
const special_conditions = <StyledButton> Special Conditions </StyledButton>

const Prof = () => 
  <div style={{ display: "grid", gridTemplateRows: "repeat(3, 1fr)", gridGap: 15 }}>
    <div>
      <Link to="/gender">{gender}</Link>
    </div>
    <div>{age}</div>
    <div>{special_conditions}</div>
    <Switch>
      <Route path = "/gender">
        <Gender />
      </Route>
    </Switch>
  </div>
    

const Gender = () => 
  <div style={{ display: "grid", gridTemplateRows: "repeat(3, 1fr)", gridGap: 15 }}>
    <Flip><h3>Gender ♥ </h3></Flip>
    <div>{male}</div>
    <div>{female}</div>
    <div>{other}</div>
    <div>{save}</div>
  </div>

const Age = () => 
  <Router>
    <Flip><h3>Age ♥ </h3></Flip>
  </Router>

const Home = () => 
  <div>
    <h2>Coming soon :) </h2>
    <Link to="/">
            <Flip><h3>ShelterHacks ♥ </h3></Flip>
    </Link>
    <Link to="/profile">
      <Flip><h3>Profile ♥ </h3></Flip>
    </Link>
    <Switch>
      <Route path = "/profile">
        <Prof />
      </Route>
      <Route path = "/">
        <Home />
      </Route>
    </Switch>
  </div>
    
  
class App extends Component {
  constructor() {
    super();
    this.state = {
      dataku: [],
    };
}


render() {
  const dataPostgre = this.state.dataku.map((item, index)=>{
    var arrayku = ['Nama: ',item.nama,', Usia: ', item.usia, ' th.'].join(' ');
    return <p key={index}>{arrayku}</p>;
  })

  return (
    <Router>
      <div className="container">
        <Zoom>
          <center style={{margin:'25px'}}>
            <Link to="/">
              <Flip><h3>ShelterHacks ♥ </h3></Flip>
            </Link>
            <Link to="/profile">
              <Flip><h3>Profile ♥ </h3></Flip>
            </Link>

            <Switch>
              <Route path = "/profile">
                <Prof />
              </Route>
              <Route path="/gender">
                <Gender />
              </Route>
              
            </Switch>

            <div>
              { dataPostgre }
            </div>
            </center>
          </Zoom>
        </div>
    </Router>
  );
}

}


export default App;
