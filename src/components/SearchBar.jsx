import React from "react";

function SearchBar() {
  return (
    <div className="flex items-center bg-gray-100 rounded-md p-2 w-[300px]">
      <input
        type="text"
        className="w-full bg-transparent outline-none px-3"
        placeholder="Rechercher par nom ou par mots clés"
      />
      <div>icon</div>
    </div>
  );
}

export default SearchBar;
