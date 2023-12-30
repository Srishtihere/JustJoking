import { useState } from "react";
import "./App.css";
import JokeBody from "./components/JokeDisplay/JokeBody";
import Sidebar from "./components/Sidebar/Sidebar";
import Title from "./components/Title/Title";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

function App() {
  const [Type, setType] = useState("single");
  const [Qty, setQty] = useState(1);
  const [Category, setCategory] = useState(["Any"]);
  const [searchValue, setSearchValue] = useState("");
  const [lang, setLang] = useState("en");

  const getJokeType = (type) => {
    if (type.single === type.twopart) {
      setType("");
    } else if (type.single === true) {
      setType("single");
    } else if (type.twopart === true) {
      setType("twopart");
    }
  };
  const getJokeCategory = (ctgy) => {
    setCategory(ctgy);
  };
  const getJokeQty = (qty) => {
    setQty(qty);
  };

  const getSearchValue = (item) => {
    setSearchValue(item);
  };

  const getLangValue = (item) => {
    setLang(item);
  };

  return (
    <div className="App">
      <Title getSearchValue={getSearchValue} getLangValue={getLangValue} />
      <div className="w-100 h-100 d-flex flex-row flex-wrap">
        <Sidebar
          getJokeType={getJokeType}
          getJokeCategory={getJokeCategory}
          getJokeQty={getJokeQty}
        />
        <JokeBody
          Type={Type}
          Qty={Qty}
          Category={Category}
          searchValue={searchValue}
          lang={lang}
        />
        <ToastContainer />
      </div>
    </div>
  );
}

export default App;
