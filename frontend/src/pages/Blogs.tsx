import { AppBar } from "../components/AppBar";
import { BlogCard } from "../components/BlogCard";
import { BlogSkeleton } from "../components/BlogSkeleton";
import { useBlogs } from "../hooks";

export const Blogs = () => {
  const { loading, blogs } = useBlogs();
  {
    console.log("Blogs:", blogs);
  }
  if (loading) {
    return (
      <div>
        <BlogSkeleton />
        <BlogSkeleton />
      </div>
    );
  }
  return (
    <div>
      <AppBar />

      <div className="flex flex-col justify-center p-4">
        {blogs?.map((blog, index) => (
          <BlogCard
            key={index}
            authorName={blog.author?.username || "Unknown Author"}
            title={blog.title}
            content={blog.content}
            publishedDate="8th May 2024"
          />
        ))}
      </div>
    </div>
  );
};
