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

interface IForm {
  email: string;
  username: string;
  password: string;
  password1: string;
  extraError?: string; //옵션 서버 다운될 경우 사용
}

function TodoList() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    setError
  } = useForm<IForm>({
    // 기본값 설정
    defaultValues: {
      email: "@naver.com",
    },
  });
  // submit 제출 후 모든 데이터가 유효할 경우 실행되는 함수
  const onValid = (data: IForm) => {
    if(data.password !== data.password1){
      setError("password1", {message: "password are not the same"})
    }
    setError("extraError", {message: "server offline."}, {shouldFocus: true});
    reset();
  };
  console.log(errors);
  return (
    <div>
      <form
        style={{ display: "flex", flexDirection: "column" }}
        onSubmit={handleSubmit(onValid)}
      >
        {/* email 정규식 사용하기 */}
        <input
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^[A-Za-z0-9._%+-]+@naver.com$/,
              message: "only naver.com emails allowed",
            },
          })}
          placeholder="Email"
        />
        <span>{errors?.email?.message}</span>
        <input
          {...register("username", {
            required: "write username",
            validate:{ 
              noAbc: (value) => 
              value.includes("abc") ? "no abc allowed" : true,
              noNico: (value) => 
              value.includes("nico") ? "no nico allowed" : true,
            }
          })}
          placeholder="id"
        />
        <input
          {...register("password", { required: "password is required" })}
          placeholder="pw"
        />
        <input
          {...register("password1", { required: "password is required" })}
          placeholder="pw"
        />
        <span>{errors?.password1?.message}</span>
        <button>Add</button>
      </form>

      <span>{errors?.extraError?.message}</span>
    </div>
  );
}

export default TodoList;
