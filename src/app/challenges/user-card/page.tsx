export default function UserCard() {
  return (
    <div className="bg-[#E6EFFA] w-full h-screen flex items-center justify-center">
      <div className="bg-white w-[562px] p-12 flex gap-4 rounded-lg shadow-xl">
        <img
          alt="user avatar"
          src="https://cdn.popsww.com/blog/sites/2/2022/03/kiem-cua-hatake-kakashi.jpg"
          className="w-28 h-28 rounded-full border-[11px] border-[#E6EFFA]"
        />

        <div className="flex flex-col gap-y-7 justify-start text-[#1C2B62]">
          <div className="">
            <h2 className="font-bold text-2xl">David Grant</h2>
            <h3 className="font-medium text-base">3D Artist</h3>
          </div>
          <div className="flex flex-col gap-y-4">
          <p className="font-medium text-base flex items-center gap-x-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
                />
              </svg>
              4.7 Rating
            </p>

            <p className="font-medium text-base flex items-center gap-x-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 0 1 .865-.501 48.172 48.172 0 0 0 3.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z"
                />
              </svg>
              4,447 Reviews
            </p>

            <p className="font-medium text-base flex items-center gap-x-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                />
              </svg>
              478 Students
            </p>
          </div>

          <p className="font-medium text-lg">
            David Grant has been making video games for a living for more than
            14 years as a Designer, Producer, Creative Director, and Executive
            Producer, creating games for console, mobile, PC and Facebook.
          </p>

          <button className="w-36 text-base font-medium p-2 border-[2px] border-[#E6EFFA] rounded-md">
            Show more
          </button>
        </div>
      </div>
    </div>
  );
}
