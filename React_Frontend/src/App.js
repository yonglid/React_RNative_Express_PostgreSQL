import React, { Component } from 'react';
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
  height: 10%;
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
const Columns = () =>
  <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 2fr)", gridGap: 10 }}>
    <div>{search}</div>
    <div>{saved}</div>
    <div>{profile}</div>
    <div>{more}</div>
  </div>

  const Rows = () =>
  <div style={{ display: "grid", gridTemplateRows: "repeat(3, 1fr)", gridGap: 15 }}>
    <div><StyledButton>Male</StyledButton></div>
    <div><StyledButton>Female</StyledButton></div>
    <div><StyledButton>Other</StyledButton></div>
    <div><SearchStyledButton> Save </SearchStyledButton></div>
  </div>


class App extends Component {
  constructor() {
    super();
    this.state = {
      dataku: [],
    };
}

// klikPost(e){
//   e.preventDefault();
//   var url = 'http://localhost:3210/data';
//   axios.post(url, {
//     nama: this.inputnama.value,
//     usia: this.inputusia.value
//   })
//   .then(function (response) {
//     console.log(response);
//   })
//   .catch(function (error) {
//     console.log(error);
//   });
//   this.inputnama.value = '';
//   this.inputusia.value = '';
// };

// klikGet(e){
//   e.preventDefault();
//   var url = 'http://localhost:3210/data';
//   axios.get(url)
//   .then((ambilData) => {
//     console.log(ambilData.data);
//     this.setState({
//       dataku: ambilData.data,
//     })
//   })
// };


render() {
  const dataPostgre = this.state.dataku.map((item, index)=>{
    var arrayku = ['Nama: ',item.nama,', Usia: ', item.usia, ' th.'].join(' ');
    return <p key={index}>{arrayku}</p>;
  })

  return (
   <div className="container">
   <Zoom>
     <center style={{margin:'25px'}}>
        <Flip><h3>Profile ♥ </h3></Flip>

     <form>
  <Columns />
  <Rows />


</form>

     <div>
       { dataPostgre }
     </div>
     </center>
     </Zoom>
   </div>
  );
 }
 }

export default App;
