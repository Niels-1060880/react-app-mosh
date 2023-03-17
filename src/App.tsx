import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";

function App() {
  const [alertVisable, setAlertVisability] = useState(false)

  return (
    <div>
      { alertVisable && <Alert color="info" onClose={() => setAlertVisability(false)}>
        <strong>Holy guacamole!</strong> You should check in on some of those
        fields below.
      </Alert>}
      <Button onClick={() => setAlertVisability(true)}>
        This is a button
      </Button>
    </div>
  );
}

export default App;
