// components/MediaManager.tsx
"use client";

import React, { useState } from "react";
import { AiOutlineDelete } from "react-icons/ai";
import { FaCheckCircle,  } from "react-icons/fa";
import { CiWarning } from "react-icons/ci";
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
  const [loadingIndexes, setLoadingIndexes] = useState<number[]>([]);
  const [uploadStatus, setUploadStatus] = useState<Record<number, "success" | "error" | null>>({});

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
    setLoadingIndexes((prev) => [...prev, index]);
    setUploadStatus((prev) => ({ ...prev, [index]: null }));

    const localUrl = URL.createObjectURL(file);
    const newList = [...mediaList];
    newList[index].url = localUrl;
    setMediaList(newList);

    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", CLOUDINARY_UPLOAD_PRESET);

    try {
      const res = await fetch(`https://api.cloudinary.com/v1_1/${CLOUDINARY_CLOUD_NAME}/upload`, {
        method: "POST",
        body: formData,
      });

      const data = await res.json();

      if (data.secure_url) {
        newList[index].url = data.secure_url;
        newList[index].publicId = data.public_id;
        setUploadStatus((prev) => ({ ...prev, [index]: "success" }));
      } else {
        setUploadStatus((prev) => ({ ...prev, [index]: "error" }));
      }

      setMediaList(newList);
      onChange(newList);
    } catch (err) {
      console.error("Image upload error", err);
      setUploadStatus((prev) => ({ ...prev, [index]: "error" }));
    } finally {
      setLoadingIndexes((prev) => prev.filter((i) => i !== index));
    }
  };

  const handleVideoUrl = (index: number, url: string) => {
    const videoId = extractYouTubeId(url);
    if (!videoId) return;

    const thumbnail = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
    const newList = [...mediaList];
    newList[index].url = url;
    newList[index].thumbnail = thumbnail;
    setMediaList(newList);
    onChange(newList);
  };

  const extractYouTubeId = (url: string) => {
    const regExp = /^.*(?:youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=)([^#&?]*).*/;
    const match = url.match(regExp);
    return match && match[1].length === 11 ? match[1] : "";
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

          {media.type === "image" && media.url && (
            <div className="relative w-fit">
              <Image
                src={media.url}
                alt="Preview"
                width={200}
                height={100}
                className="rounded-lg object-cover"
              />
              {loadingIndexes.includes(index) && (
                <div className="absolute inset-0 bg-black/50 flex items-center justify-center text-white text-sm">
                  Uploading...
                </div>
              )}
              {uploadStatus[index] === "success" && !loadingIndexes.includes(index) && (
                <FaCheckCircle className="absolute top-2 right-2 text-green-500 bg-white rounded-full" size={20} />
              )}
              {uploadStatus[index] === "error" && !loadingIndexes.includes(index) && (
                <span className="absolute inset-0 bg-gray-300/80 font-bold text-red-500 flex gap-2 justify-center items-center  " > <CiWarning className=""/> Failed...</span>
              )}
            </div>
          )}

          {media.type === "video" && media.thumbnail && (
            <Image
              src={media.thumbnail}
              alt="Video thumbnail"
              width={300}
              height={200}
              className="rounded-lg object-cover"
            />
          )}
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
