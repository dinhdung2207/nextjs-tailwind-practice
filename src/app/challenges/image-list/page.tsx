const tags: string[] = ["Profile", "New york", "Relaxing", "Person", "Fashion"];
export default function ImageList() {
  return (
    <div className="flex lg:h-screen w-full items-center justify-center bg-[#E5E7F0]">
      <div className="rounded-[26px] bg-[#EFF0F1] p-[26px]">
        <div className="mb-14">
          <h1 className="mb-6 text-[32px] font-bold">Popular Collections</h1>

          <div className="flex gap-x-2 text-base font-medium text-[#0E0E38]">
            {tags.map((item) => (
              <a
                className="cursor-pointer rounded-lg bg-white p-[10px] hover:bg-[#0E0E38] hover:text-white"
                key={item}
              >
                {item}
              </a>
            ))}
          </div>
        </div>

        <div className="grid w-full gap-4 gap-x-16 font-medium sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-[32px] bg-white p-6">
            <div className="mb-6 flex flex-col items-center">
              <img
                className="mb-4 h-[268px] w-full rounded-3xl object-cover"
                src="https://w0.peakpx.com/wallpaper/856/668/HD-wallpaper-pain-pain-thumbnail.jpg"
                alt="example image"
              />

              <div className="flex gap-x-4">
                <img
                  className="h-[97px] w-[119px] rounded-3xl object-cover"
                  src="https://w0.peakpx.com/wallpaper/856/668/HD-wallpaper-pain-pain-thumbnail.jpg"
                  alt="example image"
                />
                <img
                  className="h-[97px] w-[119px] rounded-3xl object-cover"
                  src="https://w0.peakpx.com/wallpaper/856/668/HD-wallpaper-pain-pain-thumbnail.jpg"
                  alt="example image"
                />
                <img
                  className="h-[97px] w-[119px] rounded-3xl object-cover"
                  src="https://w0.peakpx.com/wallpaper/856/668/HD-wallpaper-pain-pain-thumbnail.jpg"
                  alt="example image"
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <p className="text-2xl">People</p>
              <p className="flex items-center text-base">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="h-6 w-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                  />
                </svg>
                144
              </p>
            </div>
          </div>

          <div className="rounded-[32px] bg-white p-6">
            <div className="mb-6 flex flex-col items-center">
              <img
                className="mb-4 h-[268px] w-full rounded-3xl object-cover"
                src="https://w0.peakpx.com/wallpaper/856/668/HD-wallpaper-pain-pain-thumbnail.jpg"
                alt="example image"
              />

              <div className="flex gap-x-4">
                <img
                  className="h-[97px] w-[119px] rounded-3xl object-cover"
                  src="https://w0.peakpx.com/wallpaper/856/668/HD-wallpaper-pain-pain-thumbnail.jpg"
                  alt="example image"
                />
                <img
                  className="h-[97px] w-[119px] rounded-3xl object-cover"
                  src="https://w0.peakpx.com/wallpaper/856/668/HD-wallpaper-pain-pain-thumbnail.jpg"
                  alt="example image"
                />
                <img
                  className="h-[97px] w-[119px] rounded-3xl object-cover"
                  src="https://w0.peakpx.com/wallpaper/856/668/HD-wallpaper-pain-pain-thumbnail.jpg"
                  alt="example image"
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <p className="text-2xl">People</p>
              <p className="flex items-center text-base">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="h-6 w-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                  />
                </svg>
                144
              </p>
            </div>
          </div>

          <div className="rounded-[32px] bg-white p-6">
            <div className="mb-6 flex flex-col items-center">
              <img
                className="mb-4 h-[268px] w-full rounded-3xl object-cover"
                src="https://w0.peakpx.com/wallpaper/856/668/HD-wallpaper-pain-pain-thumbnail.jpg"
                alt="example image"
              />

              <div className="flex gap-x-4">
                <img
                  className="h-[97px] w-[119px] rounded-3xl object-cover"
                  src="https://w0.peakpx.com/wallpaper/856/668/HD-wallpaper-pain-pain-thumbnail.jpg"
                  alt="example image"
                />
                <img
                  className="h-[97px] w-[119px] rounded-3xl object-cover"
                  src="https://w0.peakpx.com/wallpaper/856/668/HD-wallpaper-pain-pain-thumbnail.jpg"
                  alt="example image"
                />
                <img
                  className="h-[97px] w-[119px] rounded-3xl object-cover"
                  src="https://w0.peakpx.com/wallpaper/856/668/HD-wallpaper-pain-pain-thumbnail.jpg"
                  alt="example image"
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <p className="text-2xl">People</p>
              <p className="flex items-center text-base">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="h-6 w-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                  />
                </svg>
                144
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
