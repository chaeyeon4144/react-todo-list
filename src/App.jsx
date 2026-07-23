import Header from "./components/Header";
import Editor from "./components/Editor";
import List from "./components/List";
import { useState, useRef } from "react";
import "./App.css";
// 일단 목업 데이터
const mockData = [
  {
    id: 0,
    isDone: false,
    content: "React 공부하기",
    date: new Date().getTime(),
    // Date 가 있어야한ㄴ데 날짜 데이터를 타임 스탬프로 저장하면 편리하다 ..?
    // new Date() 로 새로운 객체를 생성해서 getTime 메서드로 현재 시간에 해당하는 타임 스탬플흐를 넣어준다
  },
  {
    id: 1,
    isDone: false,
    content: "빨래하기",
    date: new Date().getTime(),
    // Date 가 있어야한ㄴ데 날짜 데이터를 타임 스탬프로 저장하면 편리하다 ..?
    // new Date() 로 새로운 객체를 생성해서 getTime 메서드로 현재 시간에 해당하는 타임 스탬플흐를 넣어준다
  },
  {
    id: 2,
    isDone: false,
    content: "노래 연습하기",
    date: new Date().getTime(),
    // Date 가 있어야한ㄴ데 날짜 데이터를 타임 스탬프로 저장하면 편리하다 ..?
    // new Date() 로 새로운 객체를 생성해서 getTime 메서드로 현재 시간에 해당하는 타임 스탬플흐를 넣어준다
  },
];

function App() {
  // const [todos, setTodos] = useState([]);
  const [todos, setTodos] = useState(mockData);
  // 고유한 id 를 저장한 레퍼런스 객체
  const idRef = useRef(3);

  // todos 를 변경시키는 핸들러 함수
  const onCreate = (content) => {
    const newTodo = {
      id: idRef.current++,
      isDone: false,
      content: content,
      date: new Date().getTime(),
    };

    // 객체 형태를 만들고 그다음 todos 배열에 추가해줘야한다 ㅇ
    // 간단하게 생각했을떄 todos배열에 push 메서드로 newTodo 배열을 추가하면되지않을까 ?
    // todos.push(newTodo)
    // 이렇게 하면 안됨 상태변화 함수를 호출해서 수정해야만 state 변화를 감자해서 slot 주머니 저장을해서 반영을 함ㅇ
    setTodos([newTodo, ...todos]);
  };
  return (
    <div className="App">
      <Header />
      <Editor onCreate={onCreate} />
      <List />
    </div>
  );
}

export default App;
