import Link from "next/link";

interface ForumCardProps {
  title: string;
  author: string;
  id: number;
}

const ForumCard: React.FC<ForumCardProps> = ({ title, author, id }) => {
  return (
    <div className="border p-3 h-[10rem] hover:shadow-md">
      <div className="flex flex-col gap-2">
        <Link href={`/forums/${id}`}>
          <a>
            <span className="font-semibold text-primary underline">
              {title}
            </span>
          </a>
        </Link>
        <span className="text-xs text-icon-color">{author}</span>
      </div>
    </div>
  );
};

export default ForumCard;
