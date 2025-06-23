// components/MediaManager.tsx
"use client";

import React, { useState } from "react";
import { AiOutlineDelete } from "react-icons/ai";
import Image from "next/image";

export interface MediaItem {
  type: "image" | "video";
  url: string;
  thumbnail?: string;
  publicId?: string;
}

interface Props {
  onChange: (media: MediaItem[]) => void;
  defaultMedia?: MediaItem[];
}

const CLOUDINARY_UPLOAD_PRESET = "your_upload_preset";
const CLOUDINARY_CLOUD_NAME = "your_cloud_name";

const MediaManager: React.FC<Props> = ({ onChange, defaultMedia = [] }) => {
  const [mediaList, setMediaList] = useState<MediaItem[]>(defaultMedia);

  const handleAddMedia = () => {
    setMediaList([...mediaList, { type: "image", url: "" }]);
  };

  const handleTypeChange = (index: number, type: "image" | "video") => {
    const newList = [...mediaList];
    newList[index].type = type;
    newList[index].url = "";
    delete newList[index].thumbnail;
    delete newList[index].publicId;
    setMediaList(newList);
    onChange(newList);
  };

  const handleImageUpload = async (index: number, file: File) => {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", CLOUDINARY_UPLOAD_PRESET);

    const res = await fetch(`https://api.cloudinary.com/v1_1/${CLOUDINARY_CLOUD_NAME}/upload`, {
      method: "POST",
      body: formData,
    });

    const data = await res.json();

    const newList = [...mediaList];
    newList[index].url = data.secure_url;
    newList[index].publicId = data.public_id;
    setMediaList(newList);
    onChange(newList);
  };

  const handleVideoUrl = (index: number, url: string) => {
    const videoId = extractYouTubeId(url);
    const thumbnail = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;

    const newList = [...mediaList];
    newList[index].url = url;
    newList[index].thumbnail = thumbnail;
    setMediaList(newList);
    onChange(newList);
  };

  const extractYouTubeId = (url: string) => {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=)([^#&?]*).*/;
    const match = url.match(regExp);
    return match && match[2].length === 11 ? match[2] : "";
  };

  const handleRemove = async (index: number) => {
    const media = mediaList[index];
    if (media.type === "image" && media.publicId) {
      await fetch("/api/delete-image", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ publicId: media.publicId }),
      });
    }
    const newList = mediaList.filter((_, i) => i !== index);
    setMediaList(newList);
    onChange(newList);
  };

  return (
    <div className="space-y-4">
      {mediaList.map((media, index) => (
        <div
          key={index}
          className="border p-4 rounded-md flex flex-col gap-2 relative bg-white dark:bg-gray-900"
        >
          <div className="flex gap-4 items-center">
            <select
              value={media.type}
              onChange={(e) => handleTypeChange(index, e.target.value as "image" | "video")}
              className="select select-bordered w-fit"
            >
              <option value="image">Image</option>
              <option value="video">Video</option>
            </select>

            <button
              onClick={() => handleRemove(index)}
              className="ml-auto text-red-500 hover:text-red-700"
            >
              <AiOutlineDelete size={20} />
            </button>
          </div>

          {media.type === "image" ? (
            <input
              type="file"
              accept="image/*"
              onChange={(e) => {
                if (e.target.files?.[0]) handleImageUpload(index, e.target.files[0]);
              }}
              className="file-input file-input-bordered w-full"
            />
          ) : (
            <input
              type="text"
              placeholder="Enter YouTube URL"
              value={media.url || ""}
              onChange={(e) => handleVideoUrl(index, e.target.value)}
              className="input input-bordered w-full"
            />
          )}

          {(media.type === "image" && media.url) && (
            <Image
              src={media.url}
              alt="Uploaded preview"
              width={300}
              height={200}
              className="rounded-lg object-cover"
            />
          )}

          {/* {(media.type === "video" && media.thumbnail) && (
            <Image
              src={media.thumbnail}
              alt="Video thumbnail"
              width={300}
              height={200}
              className="rounded-lg object-cover"
              unauthorized  
            />
          )} */}
        </div>
      ))}

      <button
        type="button"
        onClick={handleAddMedia}
        className="btn btn-outline btn-primary"
      >
        + Add Media
      </button>
    </div>
  );
};

export default MediaManager;