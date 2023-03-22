import "./assets/styles/style.css";
import { BrowserRouter, Route, Routes} from 'react-router-dom';
//import RouteTest from "./components/RouteTest";

import Home from './pages/Home';
import New from "./pages/New";
import Edit from "./pages/Edit";
import Diary from "./pages/Diary";
//import MyButton from "./components/MyButton";
//import MyHeader from "./components/MyHeader";

import { useReducer, useRef } from "react";

const reducer = (state, action) => {

  let newState = [];
  
  switch (action.type) {
    case 'INIT': {
      return action.data;
    }
    case 'CREATE': {
      /*
      const newItem = {
        ...action.data
      };
      newState = [newItem, ...state];
      */
      newState = [action.data, ...state]
      break;
    }
    case 'REMOVE': {
      newState = state.filter((it) => it.id !== action.targetId);
      break;
    }
    case 'EDIT': {
      newState = state.map((it) => it.id === action.data.id ? {...action.data} : it)
    }
    default: 
      return state;
  }
  return newState;
}

// 컨텍스트 만들기
export const DiaryStateContext = React.createContext();
export const DiaryDispatchContext = React.createContext();

const App = () => {

  const [ data, dispatch ] = useReducer(reducer, []);
  const dataId = useRef(0);

  // CREATE
  const onCreate = (date, content, emotion) => {
    dispatch({ type: 'CREATE',
     data: {
      id: dataId.current,
      data: new Date(date).getTime(),
      content,
      emotion,
    }});
    dataId.current += 1;
  }
  // REMOVE
  const onRemove = (targetId) => {
    dispatch({type: 'REMOVE', targetId});
  }
  // EDIT
  const onEdit = (targetId, date, content, emotion) => {
    dispatch({
      type: 'EDIT',
      data: {
        id: targetId,
        date: new Date(date).getTime(),
        content,
        emotion
      }
    })
  }

  return (
    <DiaryStateContext.Provider value={data}>
      <DiaryDispatchContext.Provider value={{
        onCreate,
        onEdit,
        onRemove,
      }}>
    <BrowserRouter>
    <div className="App">
      {/*헤더에 버튼 컴포넌트를 그대로 전달한다.*/}
      {/*<MyHeader 
        headText={"App"}
        leftChild={<MyButton text={"왼쪽 버튼"} onClick={() => {alert("왼쪽클릭")}} />}
        rightChild={<MyButton text={"오른쪽 버튼"} onClick={() => {alert("오른쪽클릭")}} />}
        />
      */}
      {/*
      <MyButton text={'버튼'} onClick={() => {alert('버튼클릭')}} type={"positive"}/>
      <MyButton text={'버튼'} onClick={() => {alert('버튼클릭')}} type={"negative"}/>
      <MyButton text={'버튼'} onClick={() => {alert('버튼클릭')}} />
      */}
      {/*
      동적으로 URL을 받는 img 태그 설정 - process.env.PUBLIC_URL은 webpack에서 설정해줌
      <img src={process.env.PUBLIC_URL + "/assets/images/emotion1.png"}/>
      <img src={process.env.PUBLIC_URL + "/assets/images/emotion2.png"}/>
      <img src={process.env.PUBLIC_URL + "/assets/images/emotion3.png"}/>
      <img src={process.env.PUBLIC_URL + "/assets/images/emotion4.png"}/>
      <img src={process.env.PUBLIC_URL + "/assets/images/emotion5.png"}/>
      */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/new" element={<New />} />
        <Route path="/edit" element={<Edit />} />
        <Route path="/diary/:id" element={<Diary />} />
      </Routes>
      {/*<RouteTest />*/}
    </div>
    </BrowserRouter>
    </DiaryDispatchContext.Provider>
    </DiaryStateContext.Provider>
  )
}

export default App;