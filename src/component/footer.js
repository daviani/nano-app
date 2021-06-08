function Footer() {

  return (
      <footer className="bg-gray-100 w-full py-5 px-4 ">
        <div className="flex items-center justify-between">
          <div className="inline-flex items-center">
            <div
                className="w-3 h-3 p-2 mr-2 rounded-full bg-gradient-to-tr from-purple-400 to-purple-800">
            </div>
            <h2
                className="block p-2 text-xl font-medium tracking-tighter text-black transition duration-500 ease-in-out transform cursor-pointer hover:text-gray-500 lg:text-x lg:mr-8">
              Nano
            </h2>
          </div>
          <p className="inline-flex text-purple-600 px-2">
            Designed and Developped with
            <svg fill="#e53e3e" viewBox="0 0 24 24"
                 className="w-5 h-5 mx-1 pt-px text-red-600"
                 stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round"
                    stroke-width="2"
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/>
            </svg>
            by Daviani.
          </p>
          <div className="flex items-center">
              <span
                  className="inline-flex justify-center mt-2 mr-2 sm:ml-auto sm:mt-0 sm:justify-start">
                <a href="https://github.com/daviani/nano-app"
                   className="hover:text-blue-500">
                  Github
                </a>
              </span>
          </div>
        </div>
      </footer>
  )

}

export default Footer;
