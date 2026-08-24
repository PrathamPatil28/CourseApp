import React, { useEffect } from "react";
import { Container, Button } from 'reactstrap';

const Home = () => {
  useEffect(()=>{
    document.title="Home"
},[]);

  return (
    <div>
      <Container className="p-5  rounded text-center"
       style={{ backgroundColor: '#a4c8ed', color: '#333' }} 
      >
        <h1 >Learn Code With Pratham</h1>
        <p className="lead">This is a simple hero unit, a simple Jumbotron-style component for calling extra attention to featured content or information.</p>
    
        <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
    
         <Button color="primary">Start Learning</Button>
        
      </Container>
    </div>
  );
};

export default Home;
