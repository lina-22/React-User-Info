import React, { useEffect, useState } from "react";
import { getAllUser } from "../services/UserService";

export default function UserComonetUI() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    getUserData();
  }, []);

  const getUserData = async () => {
    const res = await getAllUser();
    setUsers(res.data);
  };

  return (
    <div>
      <h1 className="text-center">Users List</h1>
      <table className="table-table-striped">
        <thead>
          <tr>
            <td>User-Id</td>
            <td>User-Name</td>
            <td>User-Email</td>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user?.id}>
              <td>{user?.name}</td>
              <td>{user?.name}</td>
              <td>{user?.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
