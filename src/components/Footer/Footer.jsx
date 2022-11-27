import React from 'react';
import '../Footer/footer.css';
import { Container,Row,Col ,ListGroup,ListGroupItem} from 'reactstrap';
import logo from '../../assets/images/eco-logo.png';
import { Link } from 'react-router-dom'; 

const Footer = () => {
  const year=new Date().getFullYear();
  return (
  <footer className="footer">
    <Container>
     <Row>
      <Col lg='4' className='mb-4' md='6'>
      
                <div className="logo">
                    <img src={logo} alt='logo'/>
                    <div>
                        <h1 classname='text-white'>
                            Ecommerce
                        </h1>
                       
                    </div>
                   
                </div>
                <p className="footer_text mt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum tenetur odit dicta ipsa ipsum optio 
                inventore provident repellendus officiis numquam.</p>
      </Col>
      <Col lg='3' className='mb-4' md='3'>
        <div className="footer_quick-links">
          <h4 className="quick_links-title">Top Categories</h4>
          <ListGroup>
            <ListGroupItem className='ps-0 border-0'>
              <Link to='#'>Mobile Phones</Link>
            </ListGroupItem>
            <ListGroupItem className='ps-0 border-0'>
              <Link to='#'>Modern Sofa</Link>
            </ListGroupItem>
            <ListGroupItem className='ps-0 border-0'>
              <Link to='#'>Arm Chair</Link>
            </ListGroupItem>
            <ListGroupItem className='ps-0 border-0'>
              <Link to='#'>Smart Watches</Link>
            </ListGroupItem>
          </ListGroup>
        </div>
      </Col>
      <Col lg='2' md='3' className='mb-4'>
      <div className="footer_quick-links">
          <h4 className="quick_links-title">Useful Links</h4>
          <ListGroup>
            <ListGroupItem className='ps-0 border-0'>
              <Link to='/shop'>Shop</Link>
            </ListGroupItem>
            <ListGroupItem className='ps-0 border-0'>
              <Link to='/cart'>Cart</Link>
            </ListGroupItem>
            <ListGroupItem className='ps-0 border-0'>
              <Link to='/login'>Login</Link>
            </ListGroupItem>
            <ListGroupItem className='ps-0 border-0'>
              <Link to='#'>Privacy Policy</Link>
            </ListGroupItem>
          </ListGroup>
        </div>
      </Col>
      <Col lg='3' md='3' >
      <div className="footer_quick-links">
          <h4 className="quick_links-title">Contact</h4>
          <ListGroup>
            <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-2'>
              <span><i class="ri-map-pin-fill"></i></span>
              <p>Sec-9,Shop-12</p>
            </ListGroupItem>
            <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-2'>
            <span><i class="ri-phone-line"></i></span>
              <p>+91 7039937118</p>
            </ListGroupItem>
            <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-2'>
            <span><i class="ri-mail-line"></i></span>
              <p>anjalijha@gmail.com</p>
            </ListGroupItem>
        
          </ListGroup>
        </div>
      </Col>
      <Col lg='12'>
      <p className="footer_copyright">@Copright {year} developed by Anjali Jha. All rights reserved.</p></Col>
     </Row>
    </Container>
  </footer>
  );
};

export default Footer