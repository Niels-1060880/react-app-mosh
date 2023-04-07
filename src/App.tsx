import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button/Button";
import ListGroup from "./components/ListGroup";
import { BsCalendarFill } from 'react-icons/bs';
import Like from "./components/Like/Like";

function App() {
  const [alertVisable, setAlertVisability] = useState(false)

  const items = ["New York", "London", "Paris", "Rome"]

  return (
    <div>
      <Like onClick={() => console.log('clicked')} />

      {/* <ListGroup items={items} heading="Cities" onSelectItem={() => console.log('yes')}></ListGroup> */}
      
      {/* { alertVisable && <Alert color="info" onClose={() => setAlertVisability(false)}>
        <strong>Holy guacamole!</strong> You should check in on some of those
        fields below.
      </Alert>} */}

      {/* <Button onClick={() => setAlertVisability(true)}>
        This is a button
      </Button> */}
    </div>
  );
}

export default App;
