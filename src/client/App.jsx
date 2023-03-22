import "./assets/styles/style.css";
import { BrowserRouter, Route, Routes} from 'react-router-dom';
//import RouteTest from "./components/RouteTest";

import Home from './pages/Home';
import New from "./pages/New";
import Edit from "./pages/Edit";
import Diary from "./pages/Diary";
import MyButton from "./components/MyButton";
import MyHeader from "./components/MyHeader";

const App = () => {
  return (
    <BrowserRouter>
    <div className="App">
      {/*헤더에 버튼 컴포넌트를 그대로 전달한다.*/}
      <MyHeader 
        headText={"App"}
        leftChild={<MyButton text={"왼쪽 버튼"} onClick={() => {alert("왼쪽클릭")}} />}
        rightChild={<MyButton text={"오른쪽 버튼"} onClick={() => {alert("오른쪽클릭")}} />}
        />
      <h1>App.js</h1>

      <MyButton text={'버튼'} onClick={() => {alert('버튼클릭')}} type={"positive"}/>
      <MyButton text={'버튼'} onClick={() => {alert('버튼클릭')}} type={"negative"}/>
      <MyButton text={'버튼'} onClick={() => {alert('버튼클릭')}} />
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
  )
}

export default App;