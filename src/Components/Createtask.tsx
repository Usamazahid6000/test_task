import React, { useState, ChangeEvent, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Createtask = () => {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState<string>("");
  const [AddValue, setAddValue] = useState<string[]>([]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    let AddData = [...AddValue];
    AddData.push(inputValue);
    setAddValue((prevValue) => [...prevValue, inputValue]);
    localStorage.setItem("myArray", JSON.stringify(AddData));
    navigate("/Listtaskpage");
  };

  useEffect(() => {
    const storedData = localStorage.getItem("myArray");
    if (storedData) {
      setAddValue(JSON.parse(storedData));
    }
  }, []);

  return (
    <>
      <div className="wrapper">
        <div className="new-task_form">
          <input
            type="text"
            className="new_task_input"
            placeholder="Add Tasks"
            onChange={handleChange}
            spellCheck="true"
            value={inputValue}
          />
          <button onClick={handleButtonClick} className="Add_task_btn">
            Add
          </button>
        </div>
      </div>
    </>
  );
};

export default Createtask;
