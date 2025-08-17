import "./css/Error.css";
export default function Error({ title, msg }) {
  return (
    <div className="error">
      <h2>{title}</h2>
      <p>{msg}</p>
    </div>
  );
}
