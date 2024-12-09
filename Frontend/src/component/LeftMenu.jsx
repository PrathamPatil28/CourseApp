import React from "react";
import { ListGroup, ListGroupItem } from "reactstrap";
import { Link } from "react-router-dom";

const Menus = () => {
    return (
        <div>
            <ListGroup className="mt-2">
                <ListGroupItem action tag={Link} to="/">
                    Home
                </ListGroupItem>

                <ListGroupItem action tag={Link} to="/add-course">
                    Add Course
                </ListGroupItem>

                <ListGroupItem action tag={Link} to="/view-course">
                    View Course
                </ListGroupItem>

                <ListGroupItem action tag={Link} to="/update-course">
                    Update Course
                </ListGroupItem>

                <ListGroupItem action tag={Link} to="/about-us">
                    About Us
                </ListGroupItem>

                <ListGroupItem action tag={Link} to="/contact">
                    Contact Us
                </ListGroupItem>
            </ListGroup>
        </div>
    );
};

export default Menus;
