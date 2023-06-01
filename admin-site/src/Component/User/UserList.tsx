import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
//import { users } from "./User";
interface Users {
  id: number;
  name: string;
  username: string;
  emilId: string;
}

const UsersList = () => {
  const [users, setUsers] = useState<Users[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => setUsers(res.data))
      .catch((err) => setError(err.messaage));
  }, []);

  const navigate = useNavigate();
  const goDetails = () => {
    navigate("/user/e001");
  };

  return (
    <>
      {error && <p>{error}</p>}
      <tbody>
        <tr>
          <th>UID</th>
          <th>Name</th>
          <th>UserName</th>
          <th>Email ID</th>
          {/* <th>UserPermission</th>
          <th>Usertype</th> */}
        </tr>
        {users.map((item, index) => (
          <tr key={index}>
            <td>{item.id}</td>
            <td>{item.name}</td>
            <td>{item.username}</td>
            <td>{item.emilId}</td>
            {/* <td>{item.userPermission}</td>
            <td>{item.usertype}</td> */}
            <td>
              <button onClick={goDetails}>Details</button>
            </td>
          </tr>
        ))}
      </tbody>
      <button onClick={() => navigate("/addUsers")}>Add user</button>
      &nbsp;&nbsp;
      <button onClick={() => navigate("/dashboard")}>Back to dashbaord</button>
    </>
  );
};
export default UsersList;
