"use client";
import { use } from "react";
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

  return (
    <main>
      <App/>
      {data.map((showtasks) => (
        <ul key={showtasks.id}>{showtasks.task}</ul>
      ))}
    </main>
  );
}
