import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { NavBar, Home, PageNotFound, Author } from "../components/index";

function App() {
  const [state, setState] = React.useState({
    data: [],
    isLoading: false,
    indexValue: 0,
  });
  const action = React.useRef(null);

  action.current = async function () {
    setState((prev) => ({ ...prev, isLoading: true }));
    const response = await fetch(
      `https://quote-garden.herokuapp.com/api/v3/quotes?limit=100`
    );
    const data = await response.json();
    console.log(data);
    setState((prev) => ({ ...prev, data: data.data, isLoading: false }));
    console.log(state);
  };

  React.useEffect(() => {
    // if (action.current !== null) {
    //   action.current();
    // }
    action.current()
  }, []);

  if (state.isLoading) {
    return <div>LOADING.......</div>;
  }

  return (
    <div>
      <Router>
        <NavBar setState={setState} />
        <Routes>
          <Route path="/" element={<Home indexToShow={state.indexValue} Quotes={state.data}/>} />
          <Route path="/author" element={<Author />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
