import React, { Component } from "react";
      
import { MDBEdgeHeader,MDBCol,MDBMask,MDBView,MDBCard,MDBIcon,MDBBtn,MDBContainer, MDBTabPane, MDBTabContent, MDBNav, MDBNavItem, MDBNavLink } from "mdbreact";
import Steps from './steps';
import PageVideo from './PageVideo';
import './PageCoursNode.css';

class PageCoursNode extends Component {
  state = {
    items: {
      default: "1",
    }
  };

  togglePills = (type, tab) => e => {
    e.preventDefault();
    if (this.state.items[type] !== tab) {
      let items = { ...this.state.items };
      items[type] = tab;
      this.setState({
        items
      });
    }
  };

render() {
  return (
     <section className="body-PageCoursNode">
      <MDBContainer className="body-PageCoursNode">
        <MDBCol md="12" className="mb-4">
        <MDBCard className="card-image" style={{
                backgroundImage:
                  "url(https://mdbootstrap.com/img/Photos/Others/img%20%2832%29.jpg)"
              }}>
          <div className="text-white text-center d-flex align-items-center rgba-black-strong py-5 px-4 rounded">
            <div>
              <h6 className="purple-text">
              <MDBIcon  fab icon="node-js" />              </h6>
              <h3 className="py-3 font-weight-bold">
                <strong>Node js</strong>
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
      
     

        <MDBNav pills color="secondary">
          <MDBNavItem >
            <MDBNavLink  className="active-link"
              to="#"
              active={this.state.items["default"] === "1"}
              onClick={this.togglePills("default", "1")}
            >
              Session 1
            </MDBNavLink>
          </MDBNavItem>
          <MDBNavItem>
            <MDBNavLink className="active-link"
              to="#"
              active={this.state.items["default"] === "2"}
              onClick={this.togglePills("default", "2")}
            >
              Session 2
            </MDBNavLink>
          </MDBNavItem>
          <MDBNavItem>
            <MDBNavLink className="active-link"
              to="#"
              active={this.state.items["default"] === "3"}
              onClick={this.togglePills("default", "3")}
            >
Session 3            </MDBNavLink>
          </MDBNavItem>
          <MDBNavItem>
            <MDBNavLink active className="active-link"
              to="#"
              active={this.state.items["default"] === "4"}
              onClick={this.togglePills("default", "4")}
            >
              
              Session 4
            </MDBNavLink>
          </MDBNavItem>
        </MDBNav>
        <MDBTabContent activeItem={this.state.items["default"]} className="active-link">
          <MDBTabPane tabId="1">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Nihil odit magnam minima, soluta doloribus reiciendis
              molestiae placeat unde eos molestias. Quisquam aperiam,
              pariatur. Tempora, placeat ratione porro voluptate odit
              minima.
            </p>
          </MDBTabPane>
          <MDBTabPane tabId="2">
          <div>
          <MDBContainer>
            <h1><b>Node js</b></h1>
      <p className="text-justify">Ambitioni dedisse scripsisse iudicaretur. Cras mattis iudicium purus sit amet fermentum.
        Donec sed odio operae,
        eu vulputate felis rhoncus. Praeterea iter est quasdam res quas ex communi. At nos hinc posthac, sitientis
        piros Afros. Petierunt uti sibi concilium totius Galliae in diem certam indicere. Cras mattis iudicium
        purus sit amet fermentum.</p>
    </MDBContainer>
                  <PageVideo/>
                </div>
          </MDBTabPane>
          <MDBTabPane tabId="3">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Nihil odit magnam minima, soluta doloribus reiciendis
              molestiae placeat unde eos molestias. Quisquam aperiam,
              pariatur. Tempora, placeat ratione porro voluptate odit
              minima.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Nihil odit magnam minima, soluta doloribus reiciendis
              molestiae placeat unde eos molestias. Quisquam aperiam,
              pariatur. Tempora, placeat ratione porro voluptate odit
              minima.
            </p>
          </MDBTabPane>
          <MDBTabPane tabId="4">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Nihil odit magnam minima, soluta doloribus reiciendis
              molestiae placeat unde eos molestias. Quisquam aperiam,
              pariatur. Tempora, placeat ratione porro voluptate odit
              minima.
            </p>
          </MDBTabPane>
        </MDBTabContent>
        
      </MDBContainer>
      </section>


      
       
    );
  }
}

export default PageCoursNode;