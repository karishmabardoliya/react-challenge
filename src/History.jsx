import { useSelector } from "react-redux";

const History = () => {
  const { data } = useSelector((state) => state.joke)
  return (
    <>
      <h2 className="header">Joke History</h2>
      <ul>
        {data?.map((jokeData) => (
          jokeData.id ? (<li className="history-text" key={jokeData.id}>{jokeData.joke}</li>) : ''
        ))}
      </ul>
    </>
  )
}

export default History;