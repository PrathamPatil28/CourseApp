import React from 'react';
import { Col, Container, Row } from 'reactstrap';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Headerr from './component/Headerr';
import Home from './component/Home';
import Cousrse from './component/Course';
import AllCourses from './component/AllCourses';
import AddCourses from './component/AddCourses';
import UpdateCourses from './component/UpdateCourse';
import LeftMenu from './component/LeftMenu';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AboutUs from './component/AboutUs';
import ContactUs from './component/Contactus';

function App() {
  return (
    <div>
      <Router>
        <ToastContainer />
        <Container>
          <Headerr />
          <Row>
            <Col md={4}>
              <LeftMenu />
            </Col>
            <Col md={8}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/add-course" element={<AddCourses />} />
                <Route path="/view-course" element={<AllCourses />} />
                <Route path="/update-course/:id" element={<UpdateCourses />} />
                <Route path="/about-us" element={<AboutUs />} />
                <Route path="/contact" element={<ContactUs />} />
              </Routes>
            </Col>
          </Row>
        </Container>
      </Router>
    </div>
  );
}

export default App;
