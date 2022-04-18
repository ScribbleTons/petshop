import "./../asserts/styles/shared/loader.css";
export default function Loading() {
  return (
    <div className="loader-container">
      <div className="lds-ellipsis">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}


export function TinyLoader() {
    return (
      <div className="lds-ellipsis">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    );
}