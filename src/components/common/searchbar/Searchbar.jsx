import "./Searchbar.css";

export default function Searchbar() {
  return (
    <div className="searchbar-box">
      <img className="search-icon" src="./search-icon.png" />
      <input
        className="searchbar-input"
        type="text"
        placeholder="Search..."
      ></input>
    </div>
  );
}
