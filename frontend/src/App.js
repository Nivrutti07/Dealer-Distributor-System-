import { useEffect, useState } from "react";
import API from "./services/api";
import Home from "./pages/Home";

function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    API.get("/api/test")
      .then(res => setMessage(res.data.message))
      .catch(err => console.log(err));
  }, []);

  return (
    <div>
      <Home message={message} />
    </div>
  );
}

export default App;