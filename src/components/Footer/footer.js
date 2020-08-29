import React from "react";

const Footer = () => {
  return (
    <footer className="mt-10 py-2 bg-indigo-700 text-gray-200 text-xs font-semibold xl:text-sm">
      <div className="mx-auto sm:max-w-md">
        <div className="flex items-center justify-around">
          <p className="flex items-center">
            Created with{" "}
            <svg
              viewBox="0 0 20 20"
              fill="currentColor"
              className="heart w-5 h-5 inline mx-1 text-red-600"
            >
              <path
                fillRule="evenodd"
                d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                clipRule="evenodd"
              />
            </svg>
            By
            <a
              href="https://agktf.com"
              className="hover:text-black hover:underline"
            >
              &nbsp;Agk
            </a>
          </p>

          <p>
            Hosted on Netlify{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="w-5 h-5 fill-current text-teal-500 inline mx-1"
            >
              <path d="M16.934 8.519a1.044 1.044 0 01.303.23l2.349-1.045-2.192-2.171-.491 2.954zM12.06 6.546a1.305 1.305 0 01.209.574l3.497 1.482a1.044 1.044 0 01.355-.177l.574-3.55-2.13-2.234-2.505 3.852v.053zm11.933 5.491l-3.748-3.748-2.548 1.044 6.264 2.662s.053.042.032.042zm-.627.606l-6.013-2.569a1.044 1.044 0 01-.7.407l-.647 3.957a1.044 1.044 0 01.303.731l3.633.762 3.33-3.31v-.062zM15.4 9.25l-3.268-1.39a1.2 1.2 0 01-1.044.543h-.199L8.185 12.58l7.225-3.132v.01a.887.887 0 010-.167.052.052 0 00-.01-.041zm3.967 7.308l-3.195-.658a1.096 1.096 0 01-.46.344l-.761 4.72 4.437-4.396s-.01.02-.021.02zm-4.469-.324a1.044 1.044 0 01-.616-.71l-5.95-1.222-.084.136 5.398 7.81.323-.324.919-5.67s.031.022.01.011zm-6.441-2.652l5.878 1.211a1.044 1.044 0 01.824-.522l.637-3.894-.135-.115-7.308 3.132a1.817 1.817 0 01.104.188zm-2.464.981l-.125-.125-2.537 1.044 1.232 1.222 1.399-2.172zm1.67.397a1.368 1.368 0 01-.563.125 1.389 1.389 0 01-.45-.073l-1.544 2.245 6.765 6.702 1.19-1.18zm-.95-2.641a1.702 1.702 0 01.314 0 1.378 1.378 0 01.344 0l2.735-4.25a1.19 1.19 0 01-.334-.824 1.242 1.242 0 010-.271l-3.32-1.535-2.672 2.6zm.303-7.402l3.237 1.378a1.242 1.242 0 01.835-.282 1.357 1.357 0 01.397.063l2.526-3.947L11.923.041 7.016 4.854s-.01.052 0 .063zm-1.21 8.164a1.566 1.566 0 01.24-.334L3.278 8.613 0 11.797l5.804 1.284zm-.262.7L.533 12.735l2.203 2.235 2.777-1.18z" />
            </svg>
          </p>
        </div>

        <div className="mt-1 flex items-center justify-around">
          <p>
            Heroicons by{" "}
            <a
              href="https://twitter.com/steveschoger"
              className="hover:text-black hover:underline"
            >
              Steve Schoger
            </a>
          </p>
          <p className="flex items-center">
            Made with TailwindCSS{" "}
            <svg
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 fill-current text-teal-500 inline ml-1"
            >
              <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z" />
            </svg>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
