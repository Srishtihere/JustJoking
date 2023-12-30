import React, { useEffect, useState } from "react";
import "./Sidebar.css";
import {
  CardColumns,
  Card,
  CardHeader,
  ListGroup,
  ListGroupItem,
  Input,
} from "reactstrap";

const customCategory = [
  "Programming",
  "Dark",
  "Pun",
  "Spooky",
  "Miscellaneous",
  "Christmas",
];
export default function Sidebar({ getJokeType, getJokeCategory, getJokeQty }) {
  const [Qty, setQty] = useState(1);

  const [customCategoryArray, setCustomCategoryArray] = useState([]);

  const [Type, setType] = useState({
    single: true,
    twopart: false,
  });

  const [showCustomCategory, setShowCustomCategory] = useState(false);

  const handleSelectChange = (event) => {
    const value = parseInt(event.target.value, 10); // Convert the value to an integer
    setQty(value);
  };

  const handleCheckboxChange = (e) => {
    if (e.target.checked && !customCategoryArray.includes(e.target.value)) {
      setCustomCategoryArray([...customCategoryArray, e.target.value]);
    } else {
      if (customCategoryArray.includes(e.target.value)) {
        const index = customCategoryArray.indexOf(e.target.value);
        let tempArr = customCategoryArray;
        tempArr.splice(index, 1);
        setCustomCategoryArray([...tempArr]);
      }
    }
  };

  useEffect(() => {
    getJokeQty(Qty);
  }, [Qty]);

  useEffect(() => {
    if (showCustomCategory) {
      getJokeCategory([...customCategoryArray]);
    } else {
      getJokeCategory(["Any"]);
    }
  }, [customCategoryArray, showCustomCategory]);

  useEffect(() => {
    getJokeType(Type);
  }, [Type]);

  const handleCategoryChange = (e) => {
    if (e.target.value === "Any") {
      setShowCustomCategory(false);
    } else {
      setShowCustomCategory(true);
    }
  };
  return (
    <>
      <CardColumns className="bg w-25 d-flex flex-column justify-content-center align-items-center">
        <Card
          className="my-auto"
          style={{
            width: "75%",
          }}
        >
          <CardHeader className="header-style">Number of Jokes</CardHeader>
          <Input
            id="exampleSelect"
            name="select"
            type="select"
            value={Qty}
            onChange={handleSelectChange}
          >
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
            <option>6</option>
            <option>7</option>
            <option>8</option>
            <option>9</option>
            <option>10</option>
          </Input>
        </Card>
        <Card
          className="my-auto"
          style={{
            width: "75%",
          }}
        >
          <CardHeader className="header-style">Type of Joke</CardHeader>
          <ListGroup flush>
            <ListGroupItem>
              <Input
                type="checkbox"
                name="joketype"
                id="single"
                value="single"
                checked={Type.single === true ? true : false}
                onChange={(e) => {
                  setType({
                    ...Type,
                    single: e.target.checked,
                  });
                }}
              />{" "}
              Single
            </ListGroupItem>
            <ListGroupItem>
              <Input
                type="checkbox"
                name="joketype"
                id="twopart"
                value="twopart"
                onChange={(e) => {
                  setType({
                    ...Type,
                    twopart: e.target.checked,
                  });
                }}
              />{" "}
              Two-part
            </ListGroupItem>
          </ListGroup>
        </Card>
        <Card
          className="my-auto"
          style={{
            width: "75%",
          }}
        >
          <CardHeader className="header-style">Category of Joke</CardHeader>
          <ListGroup flush>
            <ListGroupItem key={"any"}>
              <Input
                name="category"
                value="Any"
                type="radio"
                onChange={(e) => handleCategoryChange(e)}
                checked={showCustomCategory ? false : true}
              />{" "}
              Any
            </ListGroupItem>
            <ListGroupItem key={"custom"}>
              <Input
                name="category"
                value="Custom"
                type="radio"
                onChange={(e) => handleCategoryChange(e)}
              />{" "}
              Custom
            </ListGroupItem>

            {showCustomCategory && (
              <>
                {customCategory.map((category, index) => (
                  <ListGroupItem key={category}>
                    <Input
                      type="checkbox"
                      name="customCategory"
                      checked={customCategoryArray.includes(category)}
                      value={category}
                      onChange={(e) => handleCheckboxChange(e)}
                    />{" "}
                    {category}
                  </ListGroupItem>
                ))}
              </>
            )}
          </ListGroup>
        </Card>
      </CardColumns>
    </>
  );
}
