import React from "react";
import { Card, CardBody, CardText, Button } from "reactstrap";
import { copyToClipboard } from "../../assets/CopyToClipboard";

export default function JokeCard({ SingleJoke }) {
  return (
    <Card className=" w-100 card-body-bg  my-2" outline color="warning">
      <CardBody className="text-center">
        <CardText>{SingleJoke}</CardText>
        <Button
          color="danger"
          onClick={() => {
            copyToClipboard(SingleJoke);
          }}
        >
          Copy
        </Button>
      </CardBody>
    </Card>
  );
}
