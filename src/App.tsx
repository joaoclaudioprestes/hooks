import UseEffect from "./components/UseEffect";
import UseReducer from "./components/UseReducer";
import UseRef from "./components/UseRef";
import UseState from "./components/UseState";

function App() {
  return (
    <>
      <UseState />
      <hr />
      <UseEffect />
      <hr />
      <UseRef />
      <hr />
      <UseReducer />
      <hr />
      <h1>✅ UseContext</h1>
      <hr />
      <h1>✅ UseMemo</h1>
      <hr />
      <h1>✅ UseCallback</h1>
      <hr />
      <h1>✅ UseLayoutEffect</h1>
    </>
  );
}

export default App;
