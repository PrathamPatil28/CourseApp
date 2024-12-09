import React from "react";
import {
  Card,
  CardBody,
  CardSubtitle,
  CardText,
  Container,
  Button,
} from "reactstrap";
import { useNavigate } from "react-router-dom";

const Cousrse = ({ course, onDelete }) => {
  const navigate = useNavigate();

  const handleUpdate = () => {
    navigate(`/update-course/${course.id}`);
  };

  return (
    <Card className="my-3">
      <CardBody className="text-center">
        <CardSubtitle className="fw-bold">{course.title}</CardSubtitle>
        <CardText>{course.description}</CardText>
        <Container>
          <Button
            color="danger"
            onClick={() => onDelete(course.id)} // Call the onDelete function passed as a prop
          >
            Delete
          </Button>
          <Button
            color="warning ms-3"
            onClick={handleUpdate} // Navigate to the update course page
          >
            Update
          </Button>
        </Container>
      </CardBody>
    </Card>
  );
};

export default Cousrse;
