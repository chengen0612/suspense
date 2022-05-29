export default function Avatar({ user }) {
  return (
    <figure className="aspect-square w-1/5 overflow-hidden rounded-full">
      <img
        src={user.picture.large}
        alt={`${user.name.last} ${user.name.first}`}
        className="h-full w-full object-cover"
      />
    </figure>
  );
}
