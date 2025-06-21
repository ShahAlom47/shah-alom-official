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
      // এখানে searchTerm দিয়ে API call, filter বা অন্য কোনো কাজ করতে পারো
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex items-center gap-2 border border-white p-1 text-white"
    >
      <input
        className="px-2 w-full bg-transparent outline-none"
        type="text"
        name="search"
        placeholder="Search..."
        value={searchTerm}
        onChange={handleChange}
      />
      <button type="submit" className="px-2 hover:text-gray-400">
        <FaSearch />
      </button>
    </form>
  );
};

export default DashSearchBox;
