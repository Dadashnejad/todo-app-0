"use client";
import { use, useEffect, useState } from "react";
import App from "./components/App";

const fetchMap = new Map<string, Promise<any>>();
function queryClient<QueryResult>(
  name: string,
  query: () => Promise<QueryResult>
): Promise<QueryResult> {
  if (!fetchMap.has(name)) {
    fetchMap.set(name, query());
  }
  return fetchMap.get(name)!;
}

// virtual dump
// use effect
// tslint
// const data: {id: string, task: string, state: boolean}
export default function Home() {
  const data = use(
    queryClient(
      "getTasks",
      () =>
        fetch("http://localhost:3000/api/getTasks").then((res) =>
          res.json()
        ) as Promise<{ id: string; task: string; state: boolean }[]>
    )
  );
  function toggle(){
    return "checked";
  }

  return (
    <main>
      <App />
      {data.map((showtasks) => (
        <ul key={showtasks.id}>
          <li>
            <label>
              <input type="checkbox" checked={showtasks.state} onChange={toggle}/>
              <span className="text">{showtasks.task}</span>
            </label>
            <button className="btn btn-danger">
              <span className="fas fa-trash">delete</span>
            </button>
          </li>
        </ul>
      ))}
    </main>
  );
}
