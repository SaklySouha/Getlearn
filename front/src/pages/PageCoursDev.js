import React from 'react';
import { MDBBtn, MDBCard, MDBCardBody,MDBIcon, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol, MDBContainer } from 'mdbreact';
import "./PageCoursDev.css";


const PageCoursDev = () => {
  return (
     
      <section className="body-pagecours" >
   <MDBContainer>
       <MDBCol md="12" className="mb-4">
        <MDBCard className="card-image" style={{
                backgroundImage:
                  "url(https://mdbootstrap.com/img/Photos/Others/img%20%2832%29.jpg)"
              }}>
          <div className="text-white text-center d-flex align-items-center rgba-black-strong py-5 px-4 rounded">
            <div>
             
              <h3 className="py-3 font-weight-bold">
                <strong>Cours dev</strong>
              </h3>
              <p className="pb-3">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Repellat fugiat, laboriosam, voluptatem, optio vero odio
                nam sit officia accusamus minus error nisi architecto
                nulla ipsum dignissimos. Odit sed qui, dolorum!
              </p>
              <MDBBtn color="secondary" rounded size="md">
                <MDBIcon far icon="clone" className="left" /> MDBView project
              </MDBBtn>
            </div>
          </div>
        </MDBCard>
      </MDBCol>
   
    <MDBCol>
      <MDBCard style={{ width: "22rem" }}>
        <MDBCardImage className="img-fluid" src="https://mdbootstrap.com/img/Photos/Others/images/43.jpg" waves />
        <MDBCardBody>
          <MDBCardTitle>Node js</MDBCardTitle>
          <MDBCardText>
            Some quick example text to build on the card title and make
            up the bulk of the card&apos;s content.
          </MDBCardText>
          <MDBBtn href="./PageCoursNode">Consulter </MDBBtn>
        </MDBCardBody>
      </MDBCard>

      
    </MDBCol>
    </MDBContainer>
    </section>   
  )
}

export default PageCoursDev;