import LogoAndButton from "./LogoAndButton";
import DrawerPageList from "./DrawerPageList";
import DrawerItem from "./DrawerItem";

interface DrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

const Drawer: React.FC<DrawerProps> = ({ isOpen, onClose }) => {
  return (
    <>
      <div
        className={`${
          isOpen ? "" : "hidden"
        } z-10 fixed bottom-0 top-0 w-3/4 bg-white shadow-xl animate-slide-to-right`}
      >
        <div>
          <header className="p-4 border-b">
            <LogoAndButton onClick={onClose} />
          </header>
          <section className="p-4 border-b">
            <div>
              <span className="text-slate-500">myuser_name2</span>
            </div>
          </section>
          <section className="border-b">
            <DrawerPageList />
          </section>
          <section>
            <DrawerItem
              active={false}
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-danger"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                  />
                </svg>
              }
              title="Log Out"
              titleClass="text-danger"
            />
          </section>
        </div>
      </div>
      <div
        onClick={onClose}
        className={`${
          isOpen ? "" : "hidden"
        } absolute bottom-0 left-0 right-0 top-0 bg-black opacity-20`}
      ></div>
    </>
  );
};

export default Drawer;
