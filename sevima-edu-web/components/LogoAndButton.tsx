import Link from "next/link";

interface LogoAndButtonProps {
  onClick: () => void;
}

const LogoAndButton: React.FC<LogoAndButtonProps> = ({ onClick }) => {
  return (
    <div className="flex items-center gap-3">
      <button onClick={onClick}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-icon-color"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>
      <Link href="/">
        <h1 className="cursor-pointer">
          <span className="font-semibold">Sevima</span> edu
        </h1>
      </Link>
    </div>
  );
};

export default LogoAndButton;
