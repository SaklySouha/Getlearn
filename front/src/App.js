import React, { Component, Fragment } from "react";
import {connect} from 'react-redux';
import {
  MDBNavbar, MDBInput, MDBRow, MDBCol, MDBModal, MDBContainer,MDBPopover, MDBModalHeader, MDBPopoverHeader,MDBTooltip,MDBPopoverBody,MDBModalFooter, MDBModalBody, MDBHamburgerToggler, MDBFooter, MDBBtn, MDBIcon, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBFormInline,
  MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem
} from "mdbreact";
import { BrowserRouter as Router } from 'react-router-dom';
import{FormFeedback} from 'reactstrap';
import {Formik} from 'formik';
import * as Yup from 'yup';
import Routes from './Routes';
import Footer from "./pages/footer";
import "./App.css";
import HomePage from "./pages/HomePage";
import PageInscri from "./pages/PageInscri";



import{signIn} from './actions';
import PageConnex from "./pages/PageConnex";



class App extends Component {
  state = {
    collapseID: '',
    modal15: false
    
  };

  toggle = nr => () => {
    let modalNumber = 'modal' + nr
    this.setState({
      [modalNumber]: !this.state[modalNumber]
    });
  }
  
 

  toggleCollapse = collapseID => () =>
    this.setState(prevState => ({
      collapseID: prevState.collapseID !== collapseID ? collapseID : ''
    }));

  closeCollapse = collID => () => {
    const { collapseID } = this.state;
    window.scrollTo(0, 0);
    collapseID === collID && this.setState({ collapseID: '' });
  };


  _handleFormSubmit(values){
    console.log(values);
  }
  render() {
    const overlay = (
      <div
        id='sidenav-overlay'
        style={{ backgroundColor: 'transparent' }}
        onClick={this.toggleCollapse('mainNavbarCollapse')}
      />
    );

    const { collapseID } = this.state;


    return (

      <Router>
        <MDBNavbar color="bg-white" fixed="top" className="navbar" dark expand="md" scrolling transparent>
          <MDBNavbarBrand >

            <MDBNavLink onClick={this.closeCollapse('mainNavbarCollapse')}
              to='/' active >

              <strong className="blue-text" >Getlearn</strong>
            </MDBNavLink>

          </MDBNavbarBrand>
          <MDBNavbarToggler >
            <MDBHamburgerToggler color="blue" id="hamburger1" onClick={this.toggleCollapse('mainNavbarCollapse')} />

          </MDBNavbarToggler >

          <MDBCollapse id='mainNavbarCollapse' isOpen={collapseID} navbar >


            <MDBNavbarNav left>
              <MDBNavItem>

                <MDBDropdown>
                  <MDBDropdownToggle size="md" caret color="blue">Cours</MDBDropdownToggle>
                  <MDBDropdownMenu basic>
                    <MDBDropdownItem header> Catégories </MDBDropdownItem>
                    <MDBDropdownItem href="/PageCoursDev"><b>Dev</b></MDBDropdownItem>
                    <MDBDropdownItem>Design</MDBDropdownItem>
                    <MDBDropdownItem>Commerce</MDBDropdownItem>
                  </MDBDropdownMenu>
                </MDBDropdown>
              </MDBNavItem>
              <MDBNavItem>
                <MDBNavLink className="blue-text" id="navlink" to="#!" active onClick={this.closeCollapse('mainNavbarCollapse')}
                  to='/PageFormate'><strong>Nos formateurs</strong></MDBNavLink>
              </MDBNavItem>
              <MDBNavItem>
                <MDBNavLink className="blue-text" id="navlink" to="/PageContact"><strong>Contact</strong></MDBNavLink>
              </MDBNavItem>
            </MDBNavbarNav>
            <MDBNavbarNav right>



              <MDBNavItem>

                <MDBCol md="12">
                  <MDBFormInline >
                    <MDBIcon id="navlink" icon="search" />
                    <input className="form-control form-control-sm ml-3 w-75" type="text" placeholder="Search" aria-label="Search" />
                  </MDBFormInline>
                </MDBCol>
              </MDBNavItem>
            </MDBNavbarNav>

            <Fragment>



            
              

              <MDBNavLink 
              to='/PageConnex' >
  <MDBBtn size="md" outline color="blue"  to="PageConnex">Se connecter               </MDBBtn>

            </MDBNavLink>

            

        
             
            </Fragment>

          </MDBCollapse>
        </MDBNavbar>


          {collapseID && overlay}
          <main style={{ marginTop: '4rem' }}>
            <Routes />
          </main>
          <div>
            <Footer />
          </div>
          
      </Router>




        );
      }
    }
    
export default App;