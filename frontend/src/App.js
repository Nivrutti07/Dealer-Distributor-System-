import { useEffect, useState } from "react";
import API from "./services/api";

function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    API.get("/api/test")
      .then(res => setMessage(res.data.message))
      .catch(err => console.log(err));
  }, []);

  return (
    <div>
      <h1>Dealer Distributor Portal</h1>
      <h2>{message}</h2>
    </div>
  );
}

export default App;