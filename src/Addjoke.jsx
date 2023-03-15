import { useState } from "react";
import { useDispatch } from "react-redux";
import { addjoke } from "./redux/features/jokeSlice";



const Addjoke = () => {
  const [jokeValue, setJokeValue] = useState('');
  const dispatch = useDispatch();
  
  const add = () => {
    dispatch(addjoke({
      joke: jokeValue
    }))
    setJokeValue('');
  };

  return (
    <>
      <h2 className="header">Add new joke</h2>
      <div className="center-wrapper">
        <textarea
          id="joke"
          name="addNewJoke"
          className="textarea-wrap"
          value={jokeValue}
          onChange={(e) => setJokeValue(e.target.value)}
          rows={6}
          cols={50}
        />
      </div>
      <div className="center-wrapper">
        <button className="button" onClick={() => add()}>Add Joke</button>
      </div>
    </>
  )
}

export default Addjoke;