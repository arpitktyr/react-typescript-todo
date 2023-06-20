import { useReducer, useState } from "react";

const ReducerExample = () => {
  const reducerFunction = (state, operation) => {
    let sum = state;
    switch (operation) {
      case "INC":
        return ++sum;
      case "DEC":
        return --sum;
      default:
        return state;
    }
  };

  const [data, dispatch] = useReducer(reducerFunction, 0);

  const arrayForSum = [1, 2, 3, 4, 5, 6, 7];
  const [sumValue, setSumValue] = useState(0);
  return (
    <section>
      <h1>use Reducer Example</h1>
      <h3>{data}</h3>
      <div>
        <button onClick={() => dispatch("INC")}>Increment + </button> &nbsp;
        <button onClick={() => dispatch("DEC")}>Decrement - </button>
      </div>

      <br />
      <h1> Reducer Example </h1>

      <div>Calculate with Reducer Function [1,2,3,4,5,6,7]</div>

      <div> Sum is : {sumValue}</div>

      <button
        onClick={() =>
          setSumValue(
            arrayForSum.reduce((sum, currentItem) => {
              return sum + currentItem;
            }, 0)
          )
        }
      >
        {" "}
        Calculate Sum with reducer function{" "}
      </button>
    </section>
  );
};

export default ReducerExample;
