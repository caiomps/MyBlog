import React from "react";

const Post = ({ name, content, title }) => {
  return (
    <section className="w-full bg-white dark:bg-zinc-900 rounded-2xl shadow-md p-6 transition-all hover:shadow-lg">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg md:text-xl font-semibold text-zinc-800 dark:text-zinc-100">
          @{name}
        </h2>
        <span className="text-sm md:text-base text-yellow-500 font-medium">
          {title}
        </span>
      </div>

      <div className="text-zinc-700 dark:text-zinc-300 text-base leading-relaxed">
        <p>{content}</p>
      </div>
    </section>
  );
};

export default Post;
