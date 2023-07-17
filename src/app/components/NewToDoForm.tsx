import axios from "axios";
import React, { useState, useRef } from "react";
import { z } from "zod";

export function NewToDoForm() {
  const [task, setTask] = useState("");

  async function submitTask(e: React.FormEvent<HTMLFormElement>) {
    const one = JSON.stringify({task})
    e.preventDefault();
    const data = await fetch("http://localhost:3000/api/createTask", {
      method: "POST",
      headers:{
        'Content-Type': 'application/json'
      },
      body: one,
    })
  }

  async function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const { data }  = await axios({
      method: "POST",
      url: "http://localhost:3000/api/createTask",
      responseType: 'json',
      headers:{
        'Content-Type': 'application/json'
      },
    })
    const newTodo = data.task || null
    return {
      props: {
        task: JSON.stringify(newTodo)
      },
    }

  }

  async function submitpost(e: React.FormEvent<HTMLFormElement>){
    axios.post("http://localhost:3000/api/createTask", {
      task: task
    })
    .then((response) => {
      console.log(response)
    })
    console.log(task)
    
  }

  type addtaskProps = {
    ptask: string;
    pstate: boolean;
  };

  const addNewTask = async(e: FormData) => {
    const task = e.get("task")?.toString();
    if (!task) return "Its empty";
    const newTask: addtaskProps = {
      ptask: task,
      pstate: false
    }
    await fetch("http://localhost:3000/api/createTask",{
      method:"POST",
      body: JSON.stringify(newTask),
      headers: {
        "Content-Type": "application/json"
      }
    })
  }

  const signleEvent = ({ data }: any) =>{
    const inpTask = useRef()
    const onSubmit = () => {


    }
  }
  

  function handleChange(e: React.ChangeEvent<HTMLInputElement>): void {
    setTask(e.target.value);
  }

  const handleSubmit = async (event: any) => {    
    event.preventDefault()
 
    // Get data from the form.
    const data = {
      task: event.target.first.value,
    }     
    const JSONdata = JSON.stringify(data)     
    const endpoint = '/api/form'
    const options = {      
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },      
      body: JSONdata,
    }
     
    const response = await fetch(endpoint, options)
         
    const result = await response.json()
    alert(`Is this your full name: ${result.data}`)
  }

  return (
    <form onSubmit={submitTask}>
      <div className="form-row">
        <label htmlFor="item">New Item</label>
        <input name="task" value={task} onChange={handleChange} placeholder="new task" type="text" />
        <button type="submit">Add to list</button>
      </div>
    </form>
    
  );
}
