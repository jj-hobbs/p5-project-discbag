import { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./component/Home";

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    fetch("/hello")
      .then((r) => r.json())
      .then((data) => setCount(data.count));
  }, []);

  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route path="/testing">
            <h1>Test Route</h1>
          </Route>
          <Route path="/discs">
          <h1>Disc Count: {count}</h1>
          </Route>
          <Route path="/bags">
          <h1>Bag Count: {count}</h1>
          </Route>
          <Route path="/">
            <Home />
          </Route>
          
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
