import { useReducer } from "react";

type State = {
  counter: number;
};

type Action = {
  type: "increment" | "decrement";
};

const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case "increment":
      return { counter: state.counter + 1 };
    case "decrement":
      return { counter: state.counter - 1 };
    default:
      return state;
  }
};

const UseReducer = () => {
  const [state, dispatch] = useReducer(reducer, { counter: 0 });

  return (
    <div>
      <h1>UseReducer</h1>
      <p>{state.counter}</p>
      <button onClick={() => dispatch({ type: "increment" })}>
        Incrementar
      </button>
      <button onClick={() => dispatch({ type: "decrement" })}>
        Decrementar
      </button>
    </div>
  );
};

export default UseReducer;
