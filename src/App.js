import DefaultLayout from "./components/Layout/DefaultLayout";
import LoginRegisterLayout from "./components/Layout/LoginRegisterLayout";
import {publicLoginRegisterRoutes, publicRoutes} from "./routes/index";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {publicLoginRegisterRoutes.map((route,index) => {
            const Layout = LoginRegisterLayout;
            const Page = route.component;
            return <Route key={index} path={route.path} element={<Layout>
              <Page/>
            </Layout>}/>
          })}
          {publicRoutes.map((route,index) => {
            const Layout = DefaultLayout;
            const Page = route.component;
            return <Route key={index} path={route.path} element={<Layout>
              <Page/>
            </Layout>}/>
          })}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
