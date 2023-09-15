import React from 'react';

const PostImageContainer = ({ imageSrc, title }) => {
  return (
    <div  className="relative font-custom  max-h-44  group overflow-hidden hover:shadow-md">
      <img
        src={imageSrc}
        alt={title}
        className="transition-transform transform scale-100 group-hover:scale-110 duration-200 object-cover w-full h-full"
      />
      <div className="absolute inset-0 bg-purple-200 opacity-0 group-hover:opacity-30 transition-opacity" />
      <h3 className="absolute top-2 left-2 text-white text-lg font-semibold pointer-events-none">
        {title}
      </h3>
    </div>
  );
};

export default PostImageContainer;
