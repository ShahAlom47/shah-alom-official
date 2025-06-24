"use client";

import MediaManager from "@/components/MediaManager";
import { customStyles } from "@/style/formSelectStyle";
import React from "react";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import Select from "react-select";

export interface MediaItem {
  type: "image" | "video";
  url: string;
  thumbnail?: string;
  publicId?: string;
}

export interface Project {
  _id: string;
  title: string;
  slug: string;
  description: string;
  content?: string;
  media: MediaItem[];
  techStack: OptionType[];
  tags?: OptionType[];
  liveLink?: string;
  repoLink?: string;
  featured?: boolean;
  order?: number;
  createdAt: string;
  updatedAt: string;
}

type ProjectFormInput = Omit<Project, "_id" | "createdAt" | "updatedAt">;

type OptionType = {
  value: string;
  label: string;
};

// Tech stack options
const techOptions: OptionType[] = [
  { value: "react", label: "React" },
  { value: "nextjs", label: "Next.js" },
  { value: "nodejs", label: "Node.js" },
  { value: "firebase", label: "Firebase" },
  { value: "tailwind", label: "Tailwind CSS" },
];

// Tag options
const tagOptions: OptionType[] = [
  { value: "frontend", label: "Frontend" },
  { value: "fullstack", label: "Full Stack" },
  { value: "portfolio", label: "Portfolio" },
  { value: "ecommerce", label: "E-commerce" },
];

const AddPortfolio: React.FC = () => {
  const { register, handleSubmit, setValue, control } =
    useForm<ProjectFormInput>({
      defaultValues: {
        title: "",
        slug: "",
        description: "",
        content: "",
        media: [{ type: "image", url: "" }],
        techStack: [],
        tags: [],
        liveLink: "",
        repoLink: "",
        featured: false,
        order: 0,
      },
    });

  const onSubmit: SubmitHandler<ProjectFormInput> = (data) => {
    console.log("📦 Form Data:", data);
    // এখানে ডাটা সাবমিট করো তোমার API এ
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="max-w-4xl mx-auto p-6 text-white space-y-6"
    >
      <h2 className="text-2xl font-bold mb-4">➕ Add New Portfolio Project</h2>

      {/* Title, Slug, Description */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ">
        <input
          {...register("title", { required: true })}
          placeholder="Project Title"
          className="input w-full"
        />
        <input
          {...register("slug", { required: true })}
          placeholder="Slug (URL friendly)"
          className="input w-full"
        />
        <textarea
          {...register("description")}
          placeholder="Short Description"
          className="input min-h-16  col-span-2  w-full"
        />
        <textarea
          {...register("content")}
          placeholder="Long Content (optional)"
          className="input min-h-16  col-span-2 w-full"
        />
      </div>

      {/* Media Section */}
      <MediaManager
      folderName="portfolio"
        onChange={(media: MediaItem[]) => setValue("media", media)}
      ></MediaManager>

      {/* Tech Stack + Tags */}

      <Controller
        name="techStack"
        control={control}
        render={({ field }) => (
          <Select
            {...field}
            isMulti
            options={techOptions}
            styles={customStyles}
            className="react-select-container"
            classNamePrefix="react-select"
            placeholder="Select Tech Stack"
          />
        )}
      />

      {/* Tags Multi Select */}
      <Controller
        name="tags"
        control={control}
        render={({ field }) => (
          <Select
            {...field}
            isMulti
            options={tagOptions}
            className="react-select-container "
            styles={customStyles}
            classNamePrefix="react-select"
            placeholder="Select Tags"
          />
        )}
      />

      {/* Live & Repo Link */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input
          {...register("liveLink")}
          placeholder="Live Site Link"
          className="input w-full"
        />
        <input
          {...register("repoLink")}
          placeholder="GitHub Repo Link"
          className="input w-full"
        />
      </div>

      {/* Featured + Order */}
      <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-4 w-full ">
        <div className="w-full flex items-center gap-3 bg-[#1d232a]  h-full rounded-sm px-2">
          <input
            id="featured"
            type="checkbox"
            {...register("featured")}
            className="w-5 h-5 accent-blue-500 cursor-pointer"
          />
          <label htmlFor="featured" className="text-white">
            Featured Project?
          </label>
        </div>
        <div className="w-full input outline-none ">
          <label className="text-white">Sort Order:</label>
          <input
            type="number"
            {...register("order")}
            placeholder="Sort Order (e.g. 1, 2, 3)"
            className="input w-full"
          />
        </div>
      </div>

      <button
        type="submit"
        className="bg-green-600 text-white px-4 py-2 rounded"
      >
        ✅ Submit Project
      </button>
    </form>
  );
};

export default AddPortfolio;
