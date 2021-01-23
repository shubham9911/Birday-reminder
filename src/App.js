import React, { useState} from 'react';
import './App.css';
import data from './data';
import List from './List';


function App() {
  const [ people, setPeople] = useState(data);

  return (
    <div className="App">
      <main>
          <section className='container'>
            <h1>{people.length} Birthdays Today</h1>
            <List props={people}/>
            <button onClick={() => setPeople([])}>Clear all</button>
          </section>
      </main>
    </div>
  );
}

export default App;
