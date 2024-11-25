import user_img from "../../assets/user_img/profile.png";
const Header = () => {
  return (
    <>
      <div className="max-w-screen-2xl mx-auto py-4">
        <div className="flex items-center justify-between">
          <h1 className="font-bold text-4xl py-4">Knowledge Cafe</h1>
          <div className="avatar">
            <div className="w-12 rounded-full">
              <img src={user_img} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
