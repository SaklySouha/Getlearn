import React, { Component, Fragment } from "react";
import { MDBContainer,MDBCard,MDBIcon, MDBRow, MDBCol, MDBInput, MDBBtn,MDBAlert  } from 'mdbreact';
import {connect} from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from '../Routes';

import {
  Button,
  FormGroup,
  Label,
  Input,
  FormFeedback,
  Alert
} from 'reactstrap';import {Formik} from 'formik';
import * as Yup from 'yup';

import { signIn } from '../actions/auth_actions';
import { Link } from 'react-router-dom';


import "./Pageconnex.css";


class LoginPage extends Component {

  componentDidUpdate() {
    const { error, isAuth } = this.props;
    if (error && this.bag) {
      this.bag.setSubmitting(false);
    }

    if (isAuth) {
      this.props.history.push('/');
    }
  }

  _handleFormSubmit(values, bag) {
    this.props.signIn(values);
    this.bag = bag;
  }

  _renderErrorIfAny() {
    const { error } = this.props;
    if (error) {
      return (<Alert color='danger'>{error}</Alert>);
    }
  }
  render(){
return (
<MDBContainer>
  <MDBRow>
  <MDBCol md="12" className="mb-4" className="connex-card">
                        <MDBCard className="card-image" style={{
                            backgroundImage:
                                "url(https://mdbootstrap.com/img/Photos/Others/img%20%2832%29.jpg)"
                        }}>
                            <div className="text-white text-center d-flex align-items-center rgba-black-strong py-5 px-4 rounded">
                                <div>
                                    <h6 className="purple-text">
                                        <MDBIcon icon="user" />             </h6>
                                    <h3 className="py-3 font-weight-bold">
                                        <strong>Connexion</strong>

                                           
                                    </h3>
                                    <p className="pb-3">
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                        Repellat fugiat, laboriosam, voluptatem, optio vero odio
                                        nam sit officia accusamus minus error nisi architecto
                                        nulla ipsum dignissimos. Odit sed qui, dolorum!
              </p>
                                </div>
                            </div>
                        </MDBCard>
                    </MDBCol>
    <MDBCol md="12">

    <div style={{ padding: 20 }}>
        <h3>Sign in to your account</h3>
        <hr />

        {this._renderErrorIfAny()}

        <Formik
          initialValues={{ email: '', password: '' }}
          onSubmit={this._handleFormSubmit.bind(this)}
          validationSchema={Yup.object().shape({
            email: Yup.string()
              .email()
              .required(),
            password: Yup.string()
              .min(4)
              .required()
          })}
          render={({
            handleChange,
            handleSubmit,
            isValid,
            isSubmitting,
            handleBlur,
            errors,
            touched
          }) => (
            <div>
              <FormGroup>
                <Label>Email</Label>
                <Input
                  invalid={errors.email && touched.email}
                  name='email'
                  type='email'
                  placeholder='someone@gmail.com'
                  onChange={handleChange}
                  onBlur={handleBlur}
                />

                {errors.email && touched.email ? (
                  <FormFeedback>{errors.email}</FormFeedback>
                ) : null}
              </FormGroup>
              <FormGroup>
                <Label>Password</Label>
                <Input
                  invalid={errors.password && touched.password}
                  name='password'
                  type='password'
                  placeholder='Your Password'
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.password && touched.password ? (
                  <FormFeedback>{errors.password}</FormFeedback>
                ) : null}
              </FormGroup>
              <Button
                color='primary'
                block
                onClick={handleSubmit}
                disabled={!isValid || isSubmitting}
              >
                Sign In
              </Button>
            </div>
          )}
        />
        <Link to='/PageInscri'>Do not have an account? Sign Up Now</Link>
      </div>
                                 
    </MDBCol>
  </MDBRow>
</MDBContainer>
);
}
}

const mapStateToProps =({auth}) => {
  return{
   error: auth.error,
   isAuth: auth.isAuth

  };
};
const PageConnex = connect(mapStateToProps,{signIn})(LoginPage);


export default PageConnex;