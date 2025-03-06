import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

const AvatarWithInfo = () => {
  return (
    <div className="flex justify-between items-center">
      <div className="flex items-center">
        <div>
          <Avatar>
            <AvatarImage src="/assets/User-avatar.png" alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </div>
        <div>
          <h1>Jessica Mills</h1>
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
