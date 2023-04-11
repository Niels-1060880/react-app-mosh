import { useState } from "react";

function App() {
  const [tags, setTags] = useState(['happy', 'cheerful']);

  const handleClick = () => {
    //  add
    setTags([...tags, 'exciting'])

    // remove
    setTags(tags.filter(tag => tag !== 'happy'))

    // update
    setTags(tags.map(tag => tag === 'happy' ? 'happyness' : tag))
  };

  return (
    <div>
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
}

export default App;
