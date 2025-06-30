// components/SafeVideo.tsx
import React from "react";

type SafeVideoProps = {
  url: string; // required
  width?: number | string; // optional with default
  height?: number | string; // optional with default
  className?: string; // optional, user will provide from outside
  // Optional rest props if চাইলে দিতে পারেন (for future extension)
};

const SafeVideo: React.FC<SafeVideoProps> = ({
  url,
  width = "100%", // default width
  height = 400,    // default height
  className = "",  // default empty, caller can override
  ...rest
}) => {
  // YouTube URL detection regex
  const isYouTube = /^(https?:\/\/)?(www\.)?(youtube\.com|youtu\.be)\//.test(url);

  if (isYouTube) {
    let videoId = "";
    try {
      const urlObj = new URL(url);
      if (urlObj.hostname === "youtu.be") {
        videoId = urlObj.pathname.slice(1);
      } else if (urlObj.hostname.includes("youtube.com")) {
        videoId = urlObj.searchParams.get("v") || "";
      }
    } catch {
      videoId = "";
    }

    if (!videoId) {
      // fallback: simple external link
      return (
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className={`text-blue-600 underline ${className}`}
          {...rest}
        >
          Watch Video
        </a>
      );
    }

    const embedUrl = `https://www.youtube.com/embed/${videoId}`;

    return (
      <div
        className={`relative ${className}`}
        style={{ paddingBottom: "56.25%", height: 0 }}
        {...rest}
      >
        <iframe
          src={embedUrl}
          title="YouTube video player"
          allowFullScreen
          frameBorder="0"
          className="absolute top-0 left-0 w-full h-full rounded"
          width={width}
          height={height}
        />
      </div>
    );
  }

  // Normal video tag
  return (
    <video
      controls
      src={url}
      width={typeof width === "number" ? width : undefined}
      height={typeof height === "number" ? height : undefined}
      className={className}
      {...rest}
    />
  );
};

export default SafeVideo;
