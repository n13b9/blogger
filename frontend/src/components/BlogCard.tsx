interface BlogCardProps {
  authorName: string;
  title: string;
  content: string;
  publishedDate: string;
}

export const BlogCard = ({
  authorName,
  title,
  content,
  publishedDate,
}: BlogCardProps) => {
  return (
    <div>
      <div className="flex">
        <div className="flex flex-col justify-center">
          <Avatar name={authorName} />{" "}
        </div>
        <div className="font-extralight">{authorName}</div>
        <div className="pl-2 font-thin">{publishedDate}</div>
      </div>
      <div>{title}</div>
      <div>{content.slice(0, 100)} + "...."</div>
      <div>{`${Math.ceil(content.length / 100)} minutes`}</div>
      <div className="bg-gray-300 w-full h-1"></div>
    </div>
  );
};

function Avatar({ name }: { name: string }) {
  return (
    <div className="relative inline-flex items-center justify-center w-5 h-5 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
      <span className="font-extralight text-sm text-gray-600 dark:text-gray-300">
        {name[0]}
      </span>
    </div>
  );
}
