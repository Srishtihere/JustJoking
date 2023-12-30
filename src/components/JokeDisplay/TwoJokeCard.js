import React from "react";
import { Card, CardColumns, CardBody, CardText, Button } from "reactstrap";
import { copyToClipboard } from "../../assets/CopyToClipboard";

export default function TwoJokeCard({ TwopartJoke }) {
  return (
    <>
      <CardColumns className="w-100 d-flex flex-column justify-content-center align-items-center">
        <Card className="card-body-bg  my-2" outline color="warning">
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
      </CardColumns>
    </>
  );
}
