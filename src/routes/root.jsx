import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Contador from "../components/Contador";
import FetchNews from "../components/FetchNews";
import ErrorPage from "../components/ErrorPage";
import FetchProducts from "../components/FetchProducts";
import { PageLayout } from "../components/PageLayout";

const Root = () => {
  const route = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<PageLayout />} errorElement={<ErrorPage />}>
        <Route index path="contador" element={<Contador />} />
        <Route path="noticias" element={<FetchNews />} />
        <Route path="produtos" element={<FetchProducts />} />
      </Route>
    )
  );
  return <RouterProvider router={route} />;
};

export default Root;

/*
const Root = () => {
  return (
    <>
      <div id="sidebar">
        <h1>Menu</h1>
        <nav>
          <ul>
            <li>
              <a href={"/"}>Inicial</a>
            </li>
            <li>
              <a href={"sobre/"}>Sobre</a>
            </li>
            <li>
              <a href={"produtos/"}>Produtos</a>
            </li>
            <li>
              <a href={"noticias/"}>Noticias</a>
            </li>
            <li>
              <a href={"contador/"}>Contador</a>
            </li>
          </ul>
        </nav>
      </div>
      <div id="detail">
        <Outlet />
      </div>
    </>
  );
};

export default Root;
*/
