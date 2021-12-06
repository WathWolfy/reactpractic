import React from 'react';
import {BrowserRouter, Routes, Route, Link} from "react-router-dom";

// import Header from "./components/Header";
// import Body from "./components/Body";
// import Text from "./components/Text";
// import ClassComponent from './components/ClassComponent';

function App() {
  // const [isView, setIsView] = React.useState(true);

  return <div className="block">
      <BrowserRouter>
        <Link to="/">На главную</Link>
        <Link to="/news">На новости</Link>
        <Link to="/about">О сайте</Link>
        <hr/>
        <Routes>
          <Route path="/" element={<div>Главная</div>} />
          <Route path="/news" element={<div>Новости</div>} />
          <Route path="/about" element={<div>О сайте</div>} />
        </Routes>
      </BrowserRouter>
    </div>;
}


export default App;
