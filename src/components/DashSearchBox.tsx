"use client";
import React, { useState, FormEvent, ChangeEvent } from "react";
import { FaSearch } from "react-icons/fa";

const DashSearchBox: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      console.log("Search Term:", searchTerm);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex items-center gap-2 border border-whit primary-hover p-1 text-white"
    >
      <input
        className="px-2 w-full bg-transparent outline-none"
        type="text"
        name="search"
        placeholder="Search..."
        value={searchTerm}
        onChange={handleChange}
      />
      <button type="submit" className="px-1 text-grayLight hover:text-gray-400">
        <FaSearch />
      </button>
    </form>
  );
};

export default DashSearchBox;
