import React from "react";

interface SearchBarProps {
  onSearch: (query: string) => void;
  searchQuery: string; // This prop should exist
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch, searchQuery }) => {
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onSearch(event.target.value);
  };

  return (
    <div className="flex justify-center">
      <input
        type="text"
        value={searchQuery}  // Bind searchQuery here
        onChange={handleInputChange}
        className="border p-2 rounded"
        placeholder="Search products..."
      />
    </div>
  );
};

export default SearchBar;
