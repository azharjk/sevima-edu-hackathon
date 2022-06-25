interface ForumCardProps {
  title: string;
  author: string;
}

const ForumCard: React.FC<ForumCardProps> = ({ title, author }) => {
  return (
    <div className="border p-3 h-[10rem] hover:shadow-md">
      <div className="flex flex-col gap-2">
        <a href="">
          <span className="font-semibold text-primary underline">{title}</span>
        </a>
        <span className="text-xs text-icon-color">{author}</span>
      </div>
    </div>
  );
};

export default ForumCard;
