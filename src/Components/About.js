import React from 'react';
import { MDBCol, MDBContainer, MDBRow, MDBCard, MDBCardText, MDBCardBody, MDBTypography } from 'mdb-react-ui-kit';
import profileImg from './assets/profile.jpg'

export default function About() {
  return (
    <div className="h-100" >
      <MDBContainer className="container" >
        <MDBRow className="justify-content-center align-items-center" >
          <MDBCol md="12" xl="4" >
            <MDBCard style={{ borderRadius: '15px' }} id='about-div'>
              <MDBCardBody className="text-center" >
                <div className="mt-3 mb-4" >
                  <img src={profileImg} alt='Not Found'
                    className="rounded-circle" style={{ width: '100px' }} />
                </div>
                <MDBTypography tag="h4">Sahil Poonia</MDBTypography>
                <MDBCardText className="text-muted mb-4">
                  @Programmer <span className="mx-2">|</span> <a href="https://codenautica.blogspot.com/" className='text-dark'>CodeNautica</a>
                </MDBCardText>
                <div className="mb-4 pb-2">
                
                  <a href="https://github.com/sahilbishnoi156" className='btn' target='_blank' rel='noreferrer'><i className="fa-brands fa-github fs-2"></i></a>
                  <a href="https://www.instagram.com/s.ahilbishnoi_/" className='btn' target='_blank' rel='noreferrer'><i className="fa-brands fa-instagram fs-2"></i></a>
                  <a href="https://www.linkedin.com/in/Sahil-Poonia/" className='btn' target='_blank' rel='noreferrer'><i className="fa-brands fa-linkedin fs-2"></i></a>
                </div>
                <a href="https://www.instagram.com/s.ahilbishnoi_/" target='_blank' rel='noreferrer' className='btn btn-dark'>
                  Message now
                </a>
                <div className="d-flex justify-content-evenly text-center mt-5 mb-2">
                  <div>
                    <MDBCardText className="mb-1 h5">5</MDBCardText>
                    <MDBCardText className="small text-muted mb-0">Projects Made</MDBCardText>
                  </div>
                  <div className="px-3">
                    <MDBCardText className="mb-1 h5">8</MDBCardText>
                    <MDBCardText className="small text-muted mb-0">Languages I Know</MDBCardText>
                  </div>
                </div>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </div>
  );
}