import React from "react";
import { Card, CardColumns, CardBody, CardText, Button } from "reactstrap";
import { copyToClipboard } from "../../assets/CopyToClipboard";

export default function JokeCard({ SingleJoke }) {
  return (
    <>
      <CardColumns className="w-100 d-flex flex-column justify-content-center align-items-center">
        <Card className="card-body-bg  my-2" outline color="warning">
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
      </CardColumns>
    </>
  );
}
