export default function Details({ user }) {
  return (
    <div className="text-xm">
      <h3 className="text-lg font-semibold">
        {`${user.name.last} ${user.name.first}`}
      </h3>
      <p className="text-gray-500">{user.location.city}</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </div>
  );
}
