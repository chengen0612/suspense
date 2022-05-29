import Avatar from "./Avatar";
import Details from "./Details";

export default function Profile({ user }) {
  return (
    <li className="flex items-center gap-x-9 rounded-lg border p-3 shadow-md">
      <Avatar {...{ user }} />
      <Details {...{ user }} />
    </li>
  );
}
