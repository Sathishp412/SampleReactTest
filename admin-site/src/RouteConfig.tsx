import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Component/Login";
import DashBoard from "./Component/DashBoard";
import UsersList from "./Component/User/UserList";
import UserDetails from "./Component/User/UserDetails";
import ClientList from "./Component/Client/ClientList";
import AddUsers from "./Component/User/AddUser";
const RouteConfig = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<Login />} />
          <Route path="login" element={<Login />} />
          <Route path="dashboard" element={<DashBoard />} />
          <Route path="clientsList" element={<ClientList />} />
          <Route path="usersList" element={<UsersList />} />
          <Route path="userDetails/:userId" element={<UserDetails />} />
          <Route path="addUsers" element={<AddUsers />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default RouteConfig;
