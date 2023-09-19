import React, { useEffect, useState } from "react";

const Listtaskpage = () => {
  const [task, setTask] = useState<string[]>([]);
  const getArrayValueFromLocalStorage = (key: string): string[] => {
    const storedValue = localStorage.getItem(key);
    return storedValue ? JSON.parse(storedValue) : [];
  };

  useEffect(() => {
    const storeArray = getArrayValueFromLocalStorage("myArray");
    setTask(storeArray);
  }, []);

  const handleDelete = (index: number) => {
    let filteredarray: string[] = task;
    filteredarray.splice(index, 1);
    setTask([...filteredarray]);
    localStorage.setItem("myArray", JSON.stringify(filteredarray));
  };

  return (
    <div className="container">
      {task.length > 0 ? (
        task.map((tasks: string, index: number) => {
          return (
            <div className="card">
              <h3>{tasks}</h3>
              <button
                onClick={() => {
                  handleDelete(index);
                }}
              >
                Delete
              </button>
            </div>
          );
        })
      ) : (
        <h1>No Data Found</h1>
      )}
    </div>
  );
};

export default Listtaskpage;
