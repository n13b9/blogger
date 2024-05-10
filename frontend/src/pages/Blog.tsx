import { AppBar } from "../components/AppBar";
import { BlogContent } from "../components/BlogContent";
import { useBlog } from "../hooks";
import { useParams } from "react-router-dom";

const Blog = () => {
  const { id } = useParams();
  const { blog, loading } = useBlog({
    id: id || "",
  });

  if (loading) {
    return <div>loading ....</div>;
  }
  return (
    <div>
      <div>
        <AppBar />
      </div>
      <BlogContent
        blog={
          blog || {
            content: "Content",
            title: "Title",
            id: -1,
            author: { username: "Anonymous" },
          }
        }
      />
    </div>
  );
};

export default Blog;
