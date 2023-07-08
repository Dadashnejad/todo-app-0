"use client";
import App from "./components/App";
import axios from "axios"

async function gettasks() {
  const res = await fetch(`/api/getTasks`);
  if (!res.ok) {
    console.log(res);
  }
  return res.json();
}

async function axiosgettasks() {
  const res = await axios.get("api/getTasks")

  return res.json()
  
}

export default async function Home() {
  const data: { id: string, task: string, state: boolean}[] = await gettasks();
  return (
    <main>
      {data.map(showtasks => (
        <ul key={showtasks.id}>{showtasks.task}</ul>
      ))}
    </main>
  );
}
