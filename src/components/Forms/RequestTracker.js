"use client";
import { useState } from "react";
export default function RequestTracker() {
  const [pending, setPending] = useState(0);
  const [completed, setCompleted] = useState(0);
  async function handleClick() {
    setPending((pending) => pending + 1);
    await delay(3000);
    setPending((pending) => pending - 1);
    setCompleted((completed) => completed + 1);
  }
  return (
    <>
      <h3>Pending: {pending}</h3>
      <h3>Completed: {completed}</h3>
      <button onClick={handleClick}>Buy</button>
    </>
  );
}
function delay(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}
function getFinalState(baseState, queue) {
  let finalState = baseState;
  for (let update of queue) {
    if (typeof update === "function") {
      finalState = update(finalState);
    } else {
      finalState = update;
    }
  }
}
function increment(n) {
  return n + 1;
}
increment.toString = () => `n=> n+1`;
export function App() {
  return (
    <>
      <TextCase queue={[1, 1, 1]} baseState={0} expected={1} />
      <TextCase
        baseState={0}
        queue={[increment, increment, increment]}
        expected={3}
      />
      <hr />
      <TextCase baseState={0} queue={[5, increment]} expected={6} />
      <hr />
      <TextCase baseState={0} queue={[5, increment, 42]} expected={42} />
    </>
  );
}
function TextCase({ baseState, queue, expected }) {
  const actual = getFinalState(baseState, queue);
  return (
    <>
      <p>
        Base state: <b>{baseState}</b>
      </p>
      <p>
        Queue: <b>[{queue.join(", ")}]</b>
      </p>
      <p>
        Expected result: <b>{expected}</b>
      </p>
      <p style={{ color: actual == expected ? "green" : "red" }}>
        Your result: <b>{actual}</b>
        {actual === expected ? "correct" : "wrong"}
      </p>
    </>
  );
}
