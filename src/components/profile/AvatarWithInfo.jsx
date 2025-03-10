import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

const AvatarWithInfo = () => {
  return (
    <div className="flex   w-full justify-between items-center">
      <div className="flex items-center gap-2">
        <div>
          <Avatar>
            <AvatarImage src="/assets/User-avatar.png" alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </div>
        <div>
          <h6>Jessica Mills</h6>
        </div>
      </div>
      <div>
        {" "}
        <img src="/assets/setting-2.png" alt="Search-icon" />
      </div>
    </div>
  );
};

export default AvatarWithInfo;
