import { useState } from "react";
import { data } from "./constants/data";
import List from "./List";

const App = () => {
  const [people, setPeople] = useState(data);

  const deletePerson = (id) => {
    setPeople((people) => people.filter((c) => c.id !== id));
  };
  return (
    <main>
      <section className="container">
        <h3>{people.length} birthday today</h3>
        {people.map((person) => (
          <List key={person.id} {...person} deletePerson={deletePerson} />
        ))}
        <button onClick={() => setPeople([])}>Clear All</button>
      </section>
    </main>
  );
};

export default App;
