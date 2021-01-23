import './App.css';
import { createContext, useContext, useEffect, useState } from "react"


const moods = {
  happy: ':)',
  sad: ':('
}

const MoodContext = createContext(moods)


function App() {
  const [count, setCount] = useState(0);
  const [otherCount, setOtherCount] = useState(0);

  useEffect(() => {
    /* Runs when the value in the array is updated
    empty array means no dependencies */
    alert('hello side effect')

    /* Runs on tear down of the state/component */
    return () => alert('goodbye')
  }, [count])

  return (
    <div className="App">
      <header className="App-header">
        <button onClick={() => setCount(count + 1)}>
          {count} 
        </button>
        <button onClick={() => setOtherCount(otherCount + 1)}>
          {otherCount}
        </button>
        <h2>Context Demo</h2>
        <MoodContext.Provider value={moods.happy}>
          <MoodEmoji />
        </MoodContext.Provider>
      </header>
    </div>
  );
}

function MoodEmoji() {
  const mood = useContext(MoodContext);
  return <p>{mood}</p>
}

export default App;
