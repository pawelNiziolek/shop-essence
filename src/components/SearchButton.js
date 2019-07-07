import React from "react";

const SearchButon = () => {
  return (
    <div>
      <form action="#" method="post">
        <input
          type="search"
          name="search"
          id="headerSearch"
          placeholder="Type for search"
        />
        <button type="submit">
          <i className="fa fa-search" aria-hidden="true" />
        </button>
      </form>
    </div>
  );
};

export default SearchButon;
