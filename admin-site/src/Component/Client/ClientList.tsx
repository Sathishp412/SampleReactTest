import { useNavigate } from "react-router-dom";
import { clients } from "./Client";
const ClientList = () => {
  const navigate = useNavigate();
  const goDetails = () => {
    navigate("/details/e001");
  };

  return (
    <>
      <tbody>
        <tr>
          <th>Client ID</th>
          <th>Client Name</th>
          <th>Client Permission</th>
          <th>DOB</th>
        </tr>
        {clients.map((item, index) => (
          <tr key={index}>
            <td>{item.clientId}</td>
            <td>{item.clientName}</td>
            <td>{item.clientPermission}</td>
            <td>{item.dateofBirth}</td>
            <td>
              <button onClick={goDetails}>Details</button>
            </td>
          </tr>
        ))}
      </tbody>
      <button onClick={() => navigate("/dashboard/")}>Back to dashboard</button>
    </>
  );
};

export default ClientList;
