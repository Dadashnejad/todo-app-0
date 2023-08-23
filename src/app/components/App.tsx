import React, { useEffect, useState } from "react";
import { NewToDoForm } from "./NewToDoForm";

export default function App(): JSX.Element {
  const [tabTitle, setTabTitle] = useState<string>(document.title);

  useEffect(() => {
    const handleBlur = () => {
      document.title = "😢 Come Back 😢";
    };

    const handleFocus = () => {
      document.title = tabTitle;
    };

    window.addEventListener("blur", handleBlur);
    window.addEventListener("focus", handleFocus);

    return () => {
      window.removeEventListener("blur", handleBlur);
      window.removeEventListener("focus", handleFocus);
    };
  }, [tabTitle]);

  return (
    <>
      <NewToDoForm />
      <h1 className="header">Todo List</h1>
    </>
  );
}
