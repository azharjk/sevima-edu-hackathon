interface DrawerItemProps {
  active: boolean;
  icon: React.ReactNode;
  title: string;
  titleClass?: string;
}

const DrawerItem: React.FC<DrawerItemProps> = ({ icon, title, active, titleClass }) => {
  return (
    <div
      className={`${
        active ? "bg-blue-100" : ""
      } px-4 flex items-center gap-3 py-3`}
    >
      <div>{icon}</div>
      <span className={titleClass}>{title}</span>
    </div>
  );
};

export default DrawerItem;
