export default function Thrower({ message }) {
  throw new Error(message ? message : "Intentionally throwing an error!");
}
