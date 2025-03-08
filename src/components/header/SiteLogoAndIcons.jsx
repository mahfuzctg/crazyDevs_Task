import { useState } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

const SiteLogoAndIcons = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true); // Sidebar state
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="flex w-full justify-between items-center">
      {/* Logo Section */}
      <div className="flex gap-2 items-center ml-3">
        <img
          src="/assets/Logo-icon.png"
          className="w-[29px] h-[29px]"
          alt="Logo-icon"
        />
        <img
          src="/assets/Logo-label.png"
          className="w-[96px] h-[18px]"
          alt="Website Logo"
        />
      </div>

      {/* Search & Icons Section */}
      <div className="flex gap-2 items-center">
        {isSearchOpen ? (
          <div className="flex items-center gap-2 bg-[#2B2B2B] rounded-md px-2">
            <Input
              type="text"
              placeholder="Search..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-24"
              autoFocus
            />
          </div>
        ) : (
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsSearchOpen(true)}
            className="hover:bg-gray-200 w-[28px] h-[28px]  transition-all "
          >
            <img
              src="/assets/icon-search.png"
              alt="Search-icon"
              className="w-[24px] h-[24px] "
            />
          </Button>
        )}

        {/* Sidebar Toggle Button */}
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className="hover:bg-gray-300 w-[28px] h-[28px]"
        >
          <img
            src={
              isSidebarOpen
                ? "/assets/icon-sidebar-left.png"
                : "/assets/icon-sidebar-left.png"
            }
            alt="Sidebar-icon"
            className="w-[24px] h-[24px"
          />
        </Button>
      </div>

      {/*  sidebar logic) */}
      {isSidebarOpen && (
        <div className="fixed top-0 left-0 w-32 h-full bg-[#242424] text-white p-4 shadow-lg transition-all">
          <p>Sidebar</p>
        </div>
      )}
    </div>
  );
};

export default SiteLogoAndIcons;
