const rating: any = [
  {
    isFill: true,
  },
  { isFill: true },
  { isFill: true },
  { isFill: true },
  { isFill: false },
];
export default function ProductReview() {
  return (
    <div className="flex h-screen w-full items-center justify-center bg-[#EEF2FF] text-[#121633]">
      <div className="relative z-0 flex h-[813px] w-[909px] items-center justify-center rounded-[70px] bg-[#FDD4D4]">
        <div className="absolute z-10 flex  w-[658px] flex-col gap-y-8 rounded-[40px] bg-white p-16">
          <div>
            <h2 className="mb-4 text-2xl font-black ">Overall rating</h2>

            <div className="mb-2 flex gap-x-1">
              {rating.map((item: any, index: any) => (
                <button
                  key={index}
                  className="rounded-md border-2 border-[#EEF2FF] p-2"
                >
                  {item.isFill ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="h-6 w-6"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                        clipRule="evenodd"
                      />
                    </svg>
                  ) : (
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
                        d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
                      />
                    </svg>
                  )}
                </button>
              ))}
            </div>

            <a className="text-sm">Click to rate</a>
          </div>

          <div className="">
            <h2 className="mb-1 text-sm font-semibold">Review title</h2>

            <div className="rounded-md border-2 border-[#EEF2FF] p-4">
              <input
                className="w-full text-sm font-semibold"
                type="text"
                placeholder="Example: Easy to use"
              />
            </div>
          </div>

          <div className="">
            <p className="mb-6 text-base font-medium">
              Would you recommend this product to a friend?
            </p>
            <div className="flex gap-x-4">
              <div className="flex items-center gap-x-2 text-base font-semibold">
                <input className="h-7 w-7" type="radio" />
                <label>Yes</label>
              </div>

              <div className="flex items-center gap-x-2 text-base font-semibold">
                <input className="h-7 w-7" type="radio" />
                <label>No</label>
              </div>
            </div>
          </div>

          <div className="">
            <h2 className="mb-1 text-sm font-semibold">Product review</h2>

            <div className="rounded-md border-2 border-[#EEF2FF] p-4">
              <input
                className="w-full text-base font-semibold"
                type="text"
                placeholder="Example: Since I bought this a month ago, it has been used a lot. What I like best/what is worst about this product is ..."
              />
            </div>
          </div>

          <div className="flex justify-between gap-x-2 ">
            <div>
              <h2 className="mb-1 text-sm font-semibold">Nickname</h2>

              <div className="rounded-md border-2 border-[#EEF2FF] p-4">
                <input
                  className="w-full text-sm font-semibold"
                  type="text"
                  placeholder="Example: bob27"
                />
              </div>
            </div>

            <div>
              <h2 className="mb-1 text-sm font-semibold">
                Email address (will not be published)
              </h2>

              <div className="rounded-md border-2 border-[#EEF2FF] p-4">
                <input
                  className="w-full text-sm font-semibold"
                  type="text"
                  placeholder="Example: your@email.com"
                />
              </div>
            </div>
          </div>

          <div className="flex items-center gap-x-2 text-base font-semibold">
            <input className="h-7 w-7" type="radio" />
            <label>
              I accept the <a className="underline">terms and conditions</a>
            </label>
          </div>

          <p className="text-sm font-medium">
            You will be able to receive emails in connection with this review
            (eg if others comment on your review). All emails contain the option
            to unsubscribe. We can use the text and star rating from your review
            in other marketing.
          </p>

          <button className="border-gray hover: self-start rounded-md border-2 bg-[#121633] p-4 text-white hover:bg-white">
            Submit product review
          </button>
        </div>
      </div>
    </div>
  );
}
