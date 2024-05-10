interface Blog {
  content: string;
  title: string;
  id: number;
  author: {
    username: string;
  };
}

export const BlogContent = ({ blog }: { blog: Blog }) => {
  return (
    <div>
      <div className="grid grid-cols-12 w-full pt-200">
        <div className="col-span-8">
          <div className="text-4xl font-extrabold">{blog.title}</div>
          <div> {blog.content}</div>
        </div>
        <div className="col-span-4">{blog.author.username || "anonymous"} </div>
      </div>
    </div>
  );
};
