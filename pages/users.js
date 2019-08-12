import React from "react";
import axios from "axios";

import Link from "next/link";

const Users = ({ users }) => (
  <div>
    <ul>
      {users.map(user => (
        <li key={user.id}>{user.login}</li>
      ))}
    </ul>
    <Link href="/">
      <a>Back</a>
    </Link>
  </div>
);

/* if it is the first page acessed by user,
   the ajax request will be made by server,
*/
Users.getInitialProps = async () => {
  const response = await axios.get("https://api.github.com/orgs/rails/members");

  return { users: response.data };
};

export default Users;
