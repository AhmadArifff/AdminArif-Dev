import React from "react";
import Image from "next/image";

export const MessageList = () => {
  return (
    <div className="relative mx-auto items-center max-w-[720px]">
      <div className="custom-scrollbar relative z-20 max-h-[50vh] flex-1 mx-auto space-y-7 w-full overflow-y-auto pb-16">
        {/* User Message 1 */}
        <div className="flex justify-end">
          <div className="max-w-[480px] w-full">
            <div className="ml-auto w-full max-w-[480px]">
              <div className="shadow-theme-xs bg-gray-100 dark:bg-gray-800 rounded-xl rounded-tr-xs px-4 py-3">
                <p className="text-left text-base leading-6 font-normal text-gray-800 dark:text-white/90">
                  Can you generate some random, creative, and engaging placeholder text for me? It doesn't need to follow any specific structure—just something fun or interesting to fill space temporarily.
                </p>
              </div>
              <div className="mt-2 flex justify-end">
                <span className="inline-flex">
                  <button className="group flex size-8 items-center justify-center rounded-lg p-2 text-sm font-medium text-gray-800 hover:bg-gray-100 hover:text-gray-900 dark:border-white/5 dark:bg-gray-900 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-white/90">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="1em"
                      height="1em"
                      viewBox="0 0 16 16"
                      fill="none"
                      className="size-4"
                    >
                      <path
                        d="M9.90891 4.06479L11.9346 6.09047M12.5149 2.87346L13.1264 3.48492C13.5169 3.87545 13.5169 4.50861 13.1264 4.89914L6.26837 11.7572C6.15231 11.8732 6.00946 11.9589 5.85243 12.0067L3.17969 12.8202L3.99313 10.1474C4.04092 9.99041 4.12663 9.84756 4.2427 9.7315L11.1007 2.87346C11.4913 2.48294 12.1244 2.48294 12.5149 2.87346Z"
                        stroke="currentColor"
                        strokeWidth="1.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                  </button>
                </span>
                <span className="inline-flex">
                  <button className="group flex size-8 items-center justify-center rounded-lg p-2 text-sm font-medium text-gray-800 hover:bg-gray-100 hover:text-gray-900 dark:border-white/5 dark:bg-gray-900 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-white/90">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="1em"
                      height="1em"
                      viewBox="0 0 16 16"
                      fill="none"
                      className="size-4"
                    >
                      <path
                        d="M11.3253 11.3301H5.67033C5.11804 11.3301 4.67033 10.8824 4.67033 10.3301V4.67513M11.3253 11.3301L11.3253 12.3327C11.3253 12.885 10.8776 13.3327 10.3253 13.3327H3.66772C3.11544 13.3327 2.66772 12.885 2.66772 12.3327V5.67513C2.66772 5.12285 3.11544 4.67513 3.66772 4.67513H4.67033M11.3253 11.3301H12.3321C12.8844 11.3301 13.3321 10.8824 13.3321 10.3301L13.3321 3.66699C13.3321 3.11471 12.8844 2.66699 12.3321 2.66699H5.67033C5.11804 2.66699 4.67033 3.11471 4.67033 3.66699V4.67513"
                        stroke="currentColor"
                        strokeWidth="1.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                  </button>
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* AI Message 1 */}
        <div className="flex justify-start">
          <div>
            <div className="max-w-[480px]">
              <p className="mb-2 flex items-center gap-1.5 text-sm text-gray-500 dark:text-gray-400">
                <span className="relative h-[18px] w-[18px] inline-block">
                  <Image
                    fill
                    alt="model"
                    src="/images/brand/claude.svg"
                  />
                </span>
                Claude Sonnet 4.6
              </p>
              <p className="mb-2 text-base leading-6 text-gray-800 dark:text-white/90">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus et varius tortor. Aenean dui magna, vehicula in lacinia non, euismod sed odio. Aliquam erat volutpat.
              </p>
            </div>
            <div className="relative inline-flex mt-3">
              <span className="inline-flex">
                <button className="group flex size-8 items-center justify-center rounded-lg p-2 text-sm font-medium text-gray-800 hover:bg-gray-100 hover:text-gray-900 dark:border-white/5 dark:bg-gray-900 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-white/90">
                  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16" fill="none" className="size-4">
                    <path d="M11.3253 11.3301H5.67033C5.11804 11.3301 4.67033 10.8824 4.67033 10.3301V4.67513M11.3253 11.3301L11.3253 12.3327C11.3253 12.885 10.8776 13.3327 10.3253 13.3327H3.66772C3.11544 13.3327 2.66772 12.885 2.66772 12.3327V5.67513C2.66772 5.12285 3.11544 4.67513 3.66772 4.67513H4.67033M11.3253 11.3301H12.3321C12.8844 11.3301 13.3321 10.8824 13.3321 10.3301L13.3321 3.66699C13.3321 3.11471 12.8844 2.66699 12.3321 2.66699H5.67033C5.11804 2.66699 4.67033 3.11471 4.67033 3.66699V4.67513" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"></path>
                  </svg>
                </button>
              </span>
              <span className="inline-flex">
                <button className="group flex size-8 items-center justify-center rounded-lg p-2 text-sm font-medium hover:bg-gray-100 dark:border-white/5 dark:bg-gray-900 dark:hover:bg-gray-800">
                  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16" fill="none" className="size-4 transition-colors duration-200 dark:group-hover:text-white/90 text-gray-800 dark:text-gray-400">
                    <path d="M5.06917 13.2178H11.1355C11.607 13.2178 12.0145 12.8884 12.1133 12.4274L13.2409 7.1678C13.3743 6.54526 12.8997 5.95819 12.2631 5.95819H9.98765C9.65666 5.95819 9.37578 5.71533 9.32798 5.38781L9.03612 3.38828C8.9644 2.89699 8.5431 2.53271 8.0466 2.53271H7.22911C7.04501 2.53271 6.89577 2.68195 6.89577 2.86605V4.55322C6.89577 5.2941 6.48621 5.97428 5.83141 6.32087L5.06917 6.72433M5.06917 6.2513H3.06917C2.88508 6.2513 2.73584 6.40054 2.73584 6.58464V13.1341C2.73584 13.3182 2.88508 13.4674 3.06917 13.4674H5.06917V6.2513Z" stroke="currentColor" strokeOpacity="0.9" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"></path>
                  </svg>
                </button>
              </span>
              <span className="inline-flex">
                <button className="group flex size-8 items-center justify-center rounded-lg p-2 text-sm font-medium hover:bg-gray-100 dark:border-white/5 dark:bg-gray-900 dark:hover:bg-gray-800">
                  <svg className="size-4 transition-colors duration-200 dark:group-hover:text-white/90 text-gray-800 dark:text-gray-400" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16" fill="none">
                    <path d="M5.06923 2.78237H11.1356C11.6071 2.78237 12.0145 3.11173 12.1134 3.57276L13.2409 8.83236C13.3744 9.4549 12.8998 10.042 12.2631 10.042H9.98771C9.65672 10.042 9.37585 10.2848 9.32804 10.6124L9.03618 12.6119C8.96447 13.1032 8.54316 13.4674 8.04666 13.4674H7.22917C7.04507 13.4674 6.89583 13.3182 6.89583 13.1341V11.4469C6.89583 10.7061 6.48628 10.0259 5.83147 9.67929L5.06923 9.27583M5.06923 9.74886H3.06923C2.88514 9.74886 2.7359 9.59962 2.7359 9.41553V2.86605C2.7359 2.68195 2.88514 2.53271 3.06923 2.53271H5.06923V9.74886Z" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"></path>
                  </svg>
                </button>
              </span>
              <span className="inline-flex">
                <button className="group flex size-8 items-center justify-center rounded-lg p-2 text-sm font-medium text-gray-800 hover:bg-gray-100 hover:text-gray-900 dark:border-white/5 dark:bg-gray-900 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-white/90">
                  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16" fill="none" className="size-4">
                    <path d="M13.635 6.49025C13.3027 5.24998 12.5704 4.15402 11.5517 3.37235C10.533 2.59069 9.28486 2.16699 8.00086 2.16699C6.7168 2.16699 5.46866 2.59069 4.44997 3.37235C3.43128 4.15402 2.69898 5.24998 2.36665 6.49025C2.29889 6.74317 2.25568 6.92051 2.22982 7.04264M1.13606 5.0999L2.22982 7.04264L2.29248 7.15391L4.34628 5.99745M2.36484 9.50911C2.69718 10.7494 3.42947 11.8453 4.44816 12.627C5.46685 13.4086 6.715 13.8324 7.999 13.8324C9.28306 13.8324 10.5312 13.4086 11.5499 12.627C12.5686 11.8453 13.3009 10.7494 13.6332 9.50911C13.7023 9.25111 13.7462 9.07177 13.7723 8.94944M14.8703 10.8997L13.7723 8.94944L13.7139 8.84571L11.6601 10.0022" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"></path>
                  </svg>
                </button>
              </span>
            </div>
          </div>
        </div>

        {/* User Message 2 */}
        <div className="flex justify-end">
          <div className="max-w-[480px] w-full">
            <div className="ml-auto w-full max-w-[480px]">
              <div className="shadow-theme-xs bg-gray-100 dark:bg-gray-800 rounded-xl rounded-tr-xs px-4 py-3">
                <p className="text-left text-base leading-6 font-normal text-gray-800 dark:text-white/90">
                  I'm looking for a block of random, imaginative text—something quirky or unexpected to use as placeholder content.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* AI Message 2 */}
        <div className="flex justify-start">
          <div>
            <div className="max-w-[480px]">
              <p className="mb-2 flex items-center gap-1.5 text-sm text-gray-500 dark:text-gray-400">
                <span className="relative h-[18px] w-[18px] inline-block">
                  <Image
                    fill
                    alt="model"
                    src="/images/brand/claude.svg"
                  />
                </span>
                Claude Sonnet 4.6
              </p>
              <p className="mb-2 text-base leading-6 text-gray-800 dark:text-white/90">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus et varius tortor. Aenean dui magna, vehicula in lacinia non, euismod sed odio. Aliquam erat volutpat.
              </p>
              <p className="mb-2 text-base leading-6 text-gray-800 dark:text-white/90">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus et varius tortor. Aenean dui magna, vehicula in lacinia non, euismod sed odio. Aliquam erat volutpat.
              </p>
            </div>
            <div className="relative inline-flex mt-3">
              <span className="inline-flex">
                <button className="group flex size-8 items-center justify-center rounded-lg p-2 text-sm font-medium text-gray-800 hover:bg-gray-100 hover:text-gray-900 dark:border-white/5 dark:bg-gray-900 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-white/90">
                  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16" fill="none" className="size-4">
                    <path d="M11.3253 11.3301H5.67033C5.11804 11.3301 4.67033 10.8824 4.67033 10.3301V4.67513M11.3253 11.3301L11.3253 12.3327C11.3253 12.885 10.8776 13.3327 10.3253 13.3327H3.66772C3.11544 13.3327 2.66772 12.885 2.66772 12.3327V5.67513C2.66772 5.12285 3.11544 4.67513 3.66772 4.67513H4.67033M11.3253 11.3301H12.3321C12.8844 11.3301 13.3321 10.8824 13.3321 10.3301L13.3321 3.66699C13.3321 3.11471 12.8844 2.66699 12.3321 2.66699H5.67033C5.11804 2.66699 4.67033 3.11471 4.67033 3.66699V4.67513" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"></path>
                  </svg>
                </button>
              </span>
              <span className="inline-flex">
                <button className="group flex size-8 items-center justify-center rounded-lg p-2 text-sm font-medium hover:bg-gray-100 dark:border-white/5 dark:bg-gray-900 dark:hover:bg-gray-800">
                  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16" fill="none" className="size-4 transition-colors duration-200 dark:group-hover:text-white/90 text-gray-800 dark:text-gray-400">
                    <path d="M5.06917 13.2178H11.1355C11.607 13.2178 12.0145 12.8884 12.1133 12.4274L13.2409 7.1678C13.3743 6.54526 12.8997 5.95819 12.2631 5.95819H9.98765C9.65666 5.95819 9.37578 5.71533 9.32798 5.38781L9.03612 3.38828C8.9644 2.89699 8.5431 2.53271 8.0466 2.53271H7.22911C7.04501 2.53271 6.89577 2.68195 6.89577 2.86605V4.55322C6.89577 5.2941 6.48621 5.97428 5.83141 6.32087L5.06917 6.72433M5.06917 6.2513H3.06917C2.88508 6.2513 2.73584 6.40054 2.73584 6.58464V13.1341C2.73584 13.3182 2.88508 13.4674 3.06917 13.4674H5.06917V6.2513Z" stroke="currentColor" strokeOpacity="0.9" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"></path>
                  </svg>
                </button>
              </span>
              <span className="inline-flex">
                <button className="group flex size-8 items-center justify-center rounded-lg p-2 text-sm font-medium hover:bg-gray-100 dark:border-white/5 dark:bg-gray-900 dark:hover:bg-gray-800">
                  <svg className="size-4 transition-colors duration-200 dark:group-hover:text-white/90 text-gray-800 dark:text-gray-400" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16" fill="none">
                    <path d="M5.06923 2.78237H11.1356C11.6071 2.78237 12.0145 3.11173 12.1134 3.57276L13.2409 8.83236C13.3744 9.4549 12.8998 10.042 12.2631 10.042H9.98771C9.65672 10.042 9.37585 10.2848 9.32804 10.6124L9.03618 12.6119C8.96447 13.1032 8.54316 13.4674 8.04666 13.4674H7.22917C7.04507 13.4674 6.89583 13.3182 6.89583 13.1341V11.4469C6.89583 10.7061 6.48628 10.0259 5.83147 9.67929L5.06923 9.27583M5.06923 9.74886H3.06923C2.88514 9.74886 2.7359 9.59962 2.7359 9.41553V2.86605C2.7359 2.68195 2.88514 2.53271 3.06923 2.53271H5.06923V9.74886Z" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"></path>
                  </svg>
                </button>
              </span>
              <span className="inline-flex">
                <button className="group flex size-8 items-center justify-center rounded-lg p-2 text-sm font-medium text-gray-800 hover:bg-gray-100 hover:text-gray-900 dark:border-white/5 dark:bg-gray-900 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-white/90">
                  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16" fill="none" className="size-4">
                    <path d="M13.635 6.49025C13.3027 5.24998 12.5704 4.15402 11.5517 3.37235C10.533 2.59069 9.28486 2.16699 8.00086 2.16699C6.7168 2.16699 5.46866 2.59069 4.44997 3.37235C3.43128 4.15402 2.69898 5.24998 2.36665 6.49025C2.29889 6.74317 2.25568 6.92051 2.22982 7.04264M1.13606 5.0999L2.22982 7.04264L2.29248 7.15391L4.34628 5.99745M2.36484 9.50911C2.69718 10.7494 3.42947 11.8453 4.44816 12.627C5.46685 13.4086 6.715 13.8324 7.999 13.8324C9.28306 13.8324 10.5312 13.4086 11.5499 12.627C12.5686 11.8453 13.3009 10.7494 13.6332 9.50911C13.7023 9.25111 13.7462 9.07177 13.7723 8.94944M14.8703 10.8997L13.7723 8.94944L13.7139 8.84571L11.6601 10.0022" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"></path>
                  </svg>
                </button>
              </span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
