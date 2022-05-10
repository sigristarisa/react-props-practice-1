import { useState } from "react";
import "./styles.css";

import Title from "./Title";
import NameLength from "./Name-Length";
import NameReversed from "./Name-Reversed";

export default function App() {
  const [name, setName] = useState("Arisa");

  return (
    <div className="app">
      <Title name={name} />
      <NameLength name={name} />
      <NameReversed name={name} />
    </div>
  );
}
