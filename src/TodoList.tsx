import React, { useState } from "react";
import { useForm } from "react-hook-form";

// function TodoList() {
//   const [toDo, setTodo] = useState("");
//   const onChange = (event:React.FormEvent<HTMLInputElement>) => {
//     const { currentTarget: {value} } = event;
//     setTodo(value);
//   }
//   const onSubmit = (event:React.FormEvent<HTMLFormElement>) => {
//     event.preventDefault();
//     console.log(toDo);
//   }
//   return (
//     <div>
//       <form onSubmit={onSubmit}>
//         <input onChange={onChange} value={toDo} placeholder='Write a to do'></input>
//         <button> Add </button>
//       </form>
//     </div>
//   )
// }

function TodoList() {
  const { register, handleSubmit, formState } = useForm();
  // submit 제출 후 모든 데이터가 유효할 경우 실행되는 함수
  const onValid = (data: any) => {
    console.log(data);
  };
  console.log(formState.errors);
  return (
    <div>
      <form onSubmit={handleSubmit(onValid)}>
        <input {...register("Email", { required: true })} placeholder="Email" />
        <input
          {...register("id", {
            required: true,
            minLength: { value: 5, message: "Your id is too short." },
          })}
          placeholder="id"
        />
        <input
          {...register("pw", { required: "password is required" })}
          placeholder="pw"
        />
        <button>Add</button>
      </form>
    </div>
  );
}

export default TodoList;
