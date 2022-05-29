import Profile from "./profile";

import createResource from "../utils/createResource";

const resource = createResource("https://randomuser.me/api/?results=5&nat=us");

export default function UsersList() {
  const { results: users } = resource.read();

  return (
    <ul className="flex flex-col gap-y-3">
      {users.map((user) => (
        <Profile key={user.id.value} {...{ user }} />
      ))}
    </ul>
  );
}
