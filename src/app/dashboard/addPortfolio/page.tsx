"use client";

import MediaManager from "@/components/MediaManager";
import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";

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
  techStack: string[];
  tags?: string[];
  liveLink?: string;
  repoLink?: string;
  featured?: boolean;
  order?: number;
  createdAt: string;
  updatedAt: string;
}

type ProjectFormInput = Omit<Project, "_id" | "createdAt" | "updatedAt">;



const AddPortfolio: React.FC = () => {
  const { register, handleSubmit, setValue,  } =
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
      <MediaManager  onChange={(media: MediaItem[]) => setValue("media", media)} ></MediaManager>
    
      {/* <div>
        <h3 className="font-semibold mb-2">🎞 Media Gallery</h3>
        {fields.map((field, index) => (
          <div
            key={field.id}
            className="flex flex-col md:flex-row gap-2 mb-3 items-center"
          >
            <select
              {...register(`media.${index}.type` as const)}
              className="input w-32"
              defaultValue={field.type}
            >
              <option value="image">Image</option>
              <option value="video">Video</option>
            </select>

            {mediaWatch[index]?.type === "image" ? (
              <>
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => handleImageUpload(e, index)}
                  className="input w-full flex-1"
                />
                {uploadingIndex === index && (
                  <span className="ml-2 text-sm text-blue-400">
                    Uploading...
                  </span>
                )}
                {mediaWatch[index]?.url && (
                  <Image
                    width={80}
                    height={80}
                    unoptimized
                    src={mediaWatch[index].url}
                    alt={`media-${index}`}
                    className="w-20 h-20 object-cover rounded-md ml-2"
                  />
                )}
              </>
            ) : (
              <input
                {...register(`media.${index}.url` as const, {
                  required: mediaWatch[index]?.type === "video",
                })}
                placeholder="Video URL"
                className="input w-full flex-1"
              />
            )}

            <button
              type="button"
              onClick={() => handleRemoveMedia(index)}
              className="text-red-400 px-2"
            >
              ✖
            </button>
          </div>
        ))}

        <button
          type="button"
          onClick={() => append({ type: "image", url: "" })}
          className="primary-hover"
        >
          ➕ Add Media
        </button>
      </div> */}

      {/* Tech Stack + Tags */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input
          {...register("techStack.0")}
          placeholder="Tech Stack #1"
          className="input w-full"
        />
        <input
          {...register("techStack.1")}
          placeholder="Tech Stack #2"
          className="input w-full"
        />
        <input
          {...register("tags.0")}
          placeholder="Tag #1"
          className="input w-full"
        />
        <input
          {...register("tags.1")}
          placeholder="Tag #2"
          className="input w-full"
        />
      </div>

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
