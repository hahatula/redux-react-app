import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "../Header/Header";
import Main from "../Main/Main";
import PageClick from "../PageClick/PageClick";
import PageShop from "../PageShop/PageShop";

function App() {
  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/click" element={<PageClick />} />
        <Route path="/shop" element={<PageShop />} />
      </Routes>
    </div>
  );
}

export default App;
