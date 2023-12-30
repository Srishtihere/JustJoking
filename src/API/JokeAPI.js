import { type } from "@testing-library/user-event/dist/type";
import axios from "axios";
const JokeAPI = "https://v2.jokeapi.dev/joke/";
const getJoke = (jokeType, jokeCategory, lang, amt, search) => {
  const URL = `${JokeAPI}${
    jokeCategory[0] === "Any" ? "Any" : jokeCategory.join(",")
  }${lang && `?lang=${lang}`}${search && `&contains=${search}`}${
    jokeType && `&type=${jokeType}`
  }${amt && `&amount=${amt}`}`;

  return axios.get(URL);
};

export { getJoke };
