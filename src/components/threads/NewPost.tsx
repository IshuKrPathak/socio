"use client";
import React, { useRef, useState } from "react";
import UserAvatar from "../common/UserAvatar";
import { Image } from "lucide-react";
import { Button } from "../ui/button";
import { url } from "inspector";
import ImagePreviewCrad from "../common/ImagePreviewCard";
import ImagePreviewCard from "../common/ImagePreviewCard";

const NewPost = () => {
  const imageRef = useRef<HTMLInputElement | null>(null);
  const [image, setImage] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | undefined>();
  const [content, setContent] = useState<string>("");

  const handleClick = () => {
    imageRef.current?.click();
  };

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0];
    if (selectedFile) {
      setImage(selectedFile);
      const imageUrl = URL.createObjectURL(selectedFile);
      setPreviewUrl(imageUrl);
    }
  };
  const removePreviewImage = () => {
    setImage(null);
    setPreviewUrl(undefined);
  };

  return (
    <div className="mt-5">
      {previewUrl ? (
        <ImagePreviewCard image={previewUrl} callback={removePreviewImage} />
      ) : (
        <></>
      )}
      <div className=" flex justify-start items-start space-x-4">
        <UserAvatar name="Ishu" image="" />
        <textarea
          className=" w-full h-24 text-md  p-2 bg-muted  outline-none resize-none rounded-lg placenhoder:font-normal  ml-2"
          onChange={(e) => {
            setContent(e.target.value);
          }}
        ></textarea>
      </div>
      <div className=" mt-3 ml-14 flex justify-between items-center ">
        <input
          type="file"
          ref={imageRef}
          onChange={handleImageChange}
          className="hidden"
        />
        <Image
          height={20}
          width={20}
          className="cursor-pointer"
          onClick={handleClick}
        />
        <Button
          size="sm"
          disabled={content?.length < 3 ? true : false}
          className=""
        >
          Post
        </Button>
      </div>
    </div>
  );
};

export default NewPost;
