import React, { useState } from "react";
import SchoolCard from "../schoolCard/SchoolCard";
import "./Search.css";
// import SearchIcon from "../image/SearchIcon.svg";
import { type } from "@testing-library/user-event/dist/type";

const Search = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);

  const schools = [
    {
      id: 1,
      name: "91 საჯარო სკოლლა",
      type: "School",
      location: "თბილისი",
    },
    {
      id: 2,
      name: "ბაგა-ბაღი",
      type: "Kindergarten",
      location: "ბათუმი",
    },
    {
      id: 3,
      name: "ცოდნა",
      type: "school",
      location: "თბილისი",
    },
  ];

  const filteredSchools = schools.filter((school) =>
    school.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
    setShowDropdown(event.target.value.trim() !== "");
  };

  const handleDropdownSelect = (school) => {
    setSearchQuery(school.name);
    setShowDropdown(false);
  };

  return (
    <div>
      <input
        type="text"
        className="search-input"
        placeholder="ძიება"
        value={searchQuery}
        onChange={handleSearchChange}
      />

      {showDropdown && filteredSchools.length > 0 ? (
        <ul className="dropdown-list">
          {filteredSchools.map((school) => (
            <li
              key={school.id}
              className="dropdown-list-item"
              onClick={() => handleDropdownSelect(school)}
            >
              {school.name}
            </li>
          ))}
        </ul>
      ) : null}

      {filteredSchools.length > 0 ? (
        <div>
          {filteredSchools.map((school) => (
            <SchoolCard key={school.id} school={school} />
          ))}
        </div>
      ) : (
        <p>სამწუხაროდ არაფერი მოიძებნა.</p>
      )}
    </div>
  );
};

export default Search;