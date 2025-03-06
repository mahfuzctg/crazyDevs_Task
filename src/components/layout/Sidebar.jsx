const Sidebar = () => {
  return (
    <div className="min-h-screen">
      <div className="flex">
        <div className="flex gap-2">
          <img src="/src/assets/Logo-icon.png" alt="Logo-icon" />
          <img src="/src/assets/Logo-label.png" alt="Website Logo" />
        </div>
        <div className="flex gap-2">
          <img src="/src/assets/icon-search.png" alt="Logo-icon" />
          <img src="/src/assets/icon-sidebar-left.png" alt="Website Logo" />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
