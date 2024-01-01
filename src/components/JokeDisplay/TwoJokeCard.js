import React from "react";
import { Card, CardBody, CardText, Button } from "reactstrap";
import { copyToClipboard } from "../../assets/CopyToClipboard";

export default function TwoJokeCard({ TwopartJoke }) {
  return (
    <Card className=" w-100 card-body-bg  my-2" outline color="warning">
      <CardBody className="text-center">
        <CardText>
          <b>P1: </b>
          {TwopartJoke.setup}
        </CardText>
        <CardText>
          <b>P2: </b>
          {TwopartJoke.delivery}
        </CardText>
        <Button
          color="danger"
          onClick={() => {
            copyToClipboard(
              `P1: ${TwopartJoke.setup} , P2: ${TwopartJoke.delivery}`
            );
          }}
        >
          Copy
        </Button>
      </CardBody>
    </Card>
  );
}
