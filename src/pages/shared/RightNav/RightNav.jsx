import React from "react";
import "./RightNav.css";
import { Button, ListGroup } from "react-bootstrap";
import {
  FaGoogle,
  FaGithub,
  FaFacebook,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";
import QZone from "../QZone/QZone";
import bg from "../../../assets/bg.png";

const RightNav = () => {
  return (
    <div>
      <h2 className="mt-4 mb-3">Login with</h2>
      <Button variant="outline-primary">
        <FaGoogle />
        Login with Google
      </Button>{" "}
      <br />
      <Button className="my-2" variant="outline-secondary">
        <FaGithub />
        Login with Github
      </Button>{" "}
      <div>
        <h3 className="mt-4 mb-3">Find us on</h3>
        <ListGroup>
          <ListGroup.Item>
            <FaFacebook className="me-1"></FaFacebook>Facebook
          </ListGroup.Item>
          <ListGroup.Item>
            <FaTwitter className="me-1"></FaTwitter>Twitter
          </ListGroup.Item>
          <ListGroup.Item>
            <FaInstagram className="me-1"></FaInstagram>Instagram
          </ListGroup.Item>
        </ListGroup>
      </div>
      <QZone></QZone>
      <div className="img_parent ">
        <img src={bg} alt="" />
        <div className="right_child_div">
          <h2>Create an Amazing Newspaper</h2>
          <p>
            Discover thousands of options, easy to customize layouts, one-click
            to import demo and much more.
          </p>
          <Button variant="danger">Danger</Button>
        </div>
      </div>
    </div>
  );
};

export default RightNav;
