import "./App.css";
import { useEffect } from "react";
import Header from "./components/Header/Header";
import { useTelegram } from "./hooks/useTelegram";
import { Route, Routes } from "react-router-dom";
import ProductList from "./components/ProductList/ProductList";
import Forms from "./components/Forms/Forms";


function App() {
  const {onToggleButton, tg} = useTelegram()
  
  useEffect(() => {
    tg.ready();
  }, []);

  return (
    <div className="App">
      <Header />
      <Routes>
      <Route index element={<ProductList />}/>
        <Route path={'form'} element={<Forms />}/>
      </Routes>
    </div>
  );
}

export default App;
