import React, { useState } from "react";
import "./JokeBody.css";
import JokeCard from "./JokeCard";
import { Button, Spinner } from "reactstrap";
import TwoJokeCard from "./TwoJokeCard";
import { getJoke } from "../../API/JokeAPI";

export default function JokeBody({ Type, Qty, Category, SearchValue, lang }) {
  const [JokeType, setJokeType] = useState("");
  const [SingleJoke, setSingleJoke] = useState("");
  const [TwopartJoke, setTwopartJoke] = useState({
    setup: "",
    delivery: "",
  });
  const [jokesArray, setJokesArray] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const handleGenerate = () => {
    setIsLoading(true);
    getJoke(Type, Category, lang, Qty, SearchValue)
      .then((res) => {
        setIsLoading(false);
        setIsError(false);
        setJokesArray([]);
        if (res.data.jokes) {
          setJokesArray([...res.data.jokes]);
        } else {
          if (res.data.error === false) {
            if (res.data.type === "single") {
              setJokeType("single");
              setSingleJoke(res.data.joke);
            } else {
              setJokeType("twopart");
              setTwopartJoke({
                setup: res.data.setup,
                delivery: res.data.delivery,
              });
            }
          } else {
            setIsError(res.data.message);
            setIsLoading(false);
            console.error("Data not found");
          }
        }
      })
      .catch((err) => {
        setIsError(true);
        setIsLoading(false);
        console.error(err);
      });
  };

  return (
    <div className=" d-flex flex-column align-items-center mb-5">
      <div>
        {" "}
        <b>Click here to generate the joke :</b>{" "}
        <Button
          className="my-3 generate-btn-style"
          color="primary"
          onClick={handleGenerate}
        >
          Generate
        </Button>
      </div>
      {isLoading ? (
        <div className="d-flex justify-content-center">
          <Spinner color="warning">Loading...</Spinner>
        </div>
      ) : isError ? (
        <div className="d-flex justify-content-center">
          <h5>{isError}</h5>
        </div>
      ) : jokesArray.length > 0 ? (
        jokesArray.map((item) => (
          <div
            key={item.id}
            className=" w-75 d-flex flex-row justify-content-center align-items-center"
          >
            {item.type === "single" && <JokeCard SingleJoke={item.joke} />}
            {item.type === "twopart" && (
              <TwoJokeCard
                TwopartJoke={{
                  setup: item.setup,
                  delivery: item.delivery,
                }}
              />
            )}
          </div>
        ))
      ) : (
        <div className="d-flex flex-row justify-content-center align-items-center">
          {JokeType === "single" && <JokeCard SingleJoke={SingleJoke} />}
          {JokeType === "twopart" && <TwoJokeCard TwopartJoke={TwopartJoke} />}
        </div>
      )}
    </div>
  );
}
