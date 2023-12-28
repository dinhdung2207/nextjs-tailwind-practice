const BTNS: any = [
  {
    title: "Reputation",
    bgClass: "bg-white",
  },
  {
    title: "New users",
    textColor: "text-white",
    bgClass: "bg-[#849FFF]",
  },
  {
    title: "Voters",
    bgClass: "bg-white",
  },
  {
    title: "Editors",
    bgClass: "bg-white",
  },
  {
    title: "Moderators",
    bgClass: "bg-white",
  },
];

interface IUser {
  avatar: string;
  name: string;
  job: string;
  tags: string[];
}

const USERS: IUser[] = [
  {
    avatar:
      "https://i.seadn.io/gae/U5CPeK3FlFboSOAXx26VRzGTmqr2fTFGfXS4iZMxqVIN2n1qAziWZGWceJG-ilNMdFxMKATGZiY2_ltjIUXD9DzKuG3Q55ol0SjpDg?auto=format&dpr=1&w=1000",
    name: "Uchiha Itachi",
    job: "Anbu",
    tags: ["Katon", "Suiton"],
  },

  {
    avatar:
      "https://i.pinimg.com/originals/17/03/33/170333b426fea2a6f896bffcde4f865a.jpg",
    name: "Uchiha Sasuke",
    job: "Genin",
    tags: ["Katon", "Raiton"],
  },
  {
    avatar:
      "https://i.pinimg.com/736x/c6/f1/d1/c6f1d12c594bfffb99bce16019186745.jpg",
    name: "Uchiha Obito",
    job: "Genin",
    tags: ["Katon", "Raiton"],
  },
  {
    avatar:
      "https://i.pinimg.com/1200x/19/30/13/193013723e129a576e7c189c787ca000.jpg",
    name: "Uchiha Madara",
    job: "Genin",
    tags: ["Katon", "Raiton", "Futton", "Doton"],
  },
  {
    avatar:
      "https://i.pinimg.com/1200x/ac/b0/df/acb0df35d9a08c9bd5217d659224cf2e.jpg",
    name: "Uchiha Shisui",
    job: "Genin",
    tags: ["Katon", "Raiton", "Futton", "Doton"],
  },
];

export default function UserList() {
  return (
    <div className="flex h-screen w-full items-center justify-center bg-[#BFC8E6] text-[#151B32]">
      <div className="rounded-2xl bg-white p-[100px] shadow-lg">
        <div className="mb-[70px]">
          <h2 className="mb-6 text-[32px] font-[900]">Users</h2>

          <div className="flex justify-between">
            <div className="border-gray flex items-center rounded-md border-2 p-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="mr-2 h-8 w-8"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                />
              </svg>

              <input type="text" placeholder="Search users" />
            </div>

            <div className="flex">
              {BTNS.map((item: any) => (
                <p
                  key={item.title}
                  className={`${item.bgClass} ${item?.textColor} flex items-center rounded-lg p-4`}
                >
                  {item.title}
                </p>
              ))}
            </div>
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {USERS.map((item) => (
            <div
              key={item.name}
              className="flex h-[208px] w-[327px] gap-x-4 rounded-2xl p-6 hover:border-2 hover:border-[#BFC8E6]"
            >
              <img
                src={item.avatar}
                alt="user-avatar"
                className="h-[97px] w-[97px] rounded-full"
              />

              <div className="flex flex-col gap-y-4">
                <div className="mt-4">
                  <h2 className="text-lg font-[900]">{item.name}</h2>
                  <p className="text-sm font-medium">{item.job}</p>
                </div>

                <div className="flex flex-wrap gap-1">
                  {item.tags.map((tag) => (
                    <p
                      key={tag}
                      className="rounded-[10px] border-2 border-[#BFC8E6] px-2 text-[#516FD4]"
                    >
                      {tag}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
