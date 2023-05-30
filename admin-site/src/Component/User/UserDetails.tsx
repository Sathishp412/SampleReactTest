import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const UserDetails = () => {
  const navigate = useNavigate();
  let { id } = useParams();
  let user = {
    uid: "e001",
    userName: "Sathish",
    companyId: "123",
    companyName: "Trivium",
    userPermission: "User",
    usertype: "Senior",
  };
  return (
    <div>
      <h1>User details for Id {id}</h1>
      <div>
        UID : {user.uid}
        <br></br>
        User Name : {user.userName}
        <br></br>
        CompanyId : {user.companyId}
        <br></br>
        CompanyName : {user.companyName}
        <br></br>
        UserPermission : {user.userPermission}
        <br></br>
        Usertype : {user.usertype}
        <br></br>
      </div>
      <button onClick={() => navigate("/usersList")}> back</button>
    </div>
  );
};

export default UserDetails;
