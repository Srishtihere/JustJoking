import { useEffect, useState } from "react";
import "./App.css";
import JokeBody from "./components/JokeDisplay/JokeBody";
import Sidebar from "./components/Sidebar/Sidebar";
import Title from "./components/Title/Title";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import Footer from "./components/Footer/Footer";

function App() {
  const [type, setType] = useState("single");
  const [qty, setQty] = useState(1);
  const [category, setCategory] = useState(["Any"]);
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

  useEffect(() => {
    console.log(searchValue);
  }, [searchValue]);
  return (
    <div className="App">
      <Title getSearchValue={getSearchValue} getLangValue={getLangValue} />

      <Sidebar
        getJokeType={getJokeType}
        getJokeCategory={getJokeCategory}
        getJokeQty={getJokeQty}
      />

      <JokeBody
        type={type}
        qty={qty}
        category={category}
        searchValue={searchValue}
        lang={lang}
      />

      <Footer />
      <ToastContainer />
    </div>
  );
}

export default App;
