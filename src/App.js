import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import MainLayout from "./layout/MainLayout";
import Home from "./pages/Home";
import About from "./pages/About";
import Category from "./pages/Category";
import CategoryDetail from "./pages/CategoryDetail";
import NoPage from "./pages/NoPage";
import ApiContext from "./contexts/ApiContext";
import useFetch from "./hooks/useFetch";

function App() {

  const { categoryList, loading } = useFetch(
    "https://fakestoreapi.com/products"
  );

  return (
    <>
      <ApiContext.Provider value={{categoryList,loading}}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<MainLayout />}>
              <Route index element={<Home />}></Route>
              <Route path="hakkimizda" element={<About />}></Route>
              <Route path="kategori" element={<Category />}></Route>
              <Route
                path="category/:category/:id"
                element={<CategoryDetail />}
              ></Route>
              <Route path="*" element={<NoPage />}></Route>
            </Route>
          </Routes>
        </BrowserRouter>
      </ApiContext.Provider>
    </>
  );
}

export default App;
