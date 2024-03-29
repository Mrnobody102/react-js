import "./App.css";
import "./assets/styles/Base.css";
import Login from "./components/bases/authform/Login";
import { Navigate, Route, Routes } from "react-router-dom";
import AuthProvider from "./providers/AuthProvider";
import PrivateRoute from "./routes/PrivateRoute";
import { childrenItems } from "./services/menuItems";
import { v4 as uuidv4 } from "uuid";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Navigate to="/login" />} />
          <Route path="/login" element={<Login />} />

          {/* {menuItems.map((menuItem) => (
            <Route path={menuItem.href} element={<PrivateRoute />}>
              <Route index={true}></Route>
              {menuItem.children.map((childItem) => (
                <Route
                  index={false}
                  path={childItem.href}
                  element={childItem.component}
                />
              ))}
            </Route>
          ))} */}
          {childrenItems.map((menuItem) => (
            <Route element={<PrivateRoute id={menuItem.id} key={uuidv4()} />}>
              <Route
                key={uuidv4()}
                path={"/" + menuItem.parentHref + "/" + menuItem.href}
                element={menuItem.component}
              ></Route>
            </Route>
          ))}
        </Routes>
      </AuthProvider>
    </div>
  );
}

export default App;
