function Header() {

  return (
      <header className="bg-gray-100 text-gray-700 mb-10">
        <div
            className="container flex flex-col items-center px-5 py-4 mx-auto">
          <div
              className="flex flex-col w-full mb-12 text-left lg:text-center">
            <div
                className="inline-flex items-center justify-center flex-shrink-0  mx-auto mb-3 text-black rounded-full">
              <img
                  className="rounded-full border-4 border-purple-600 w-40 h-40 img "
                  src="https://nano.site/api/image/4f8a5c5f-d9ab-46fe-b28f-08d8d81aa339"
                  alt="daviani"/>
            </div>
            <h1 className="mx-auto mb-6 text-4xl font-semibold leading-none tracking-tighter text-black lg:w-1/2 lg:text-3xl title-font">
              Daviani.
            </h1>
            <p
                className="mx-auto text-base font-medium leading-relaxed text-center text-gray-600 lg:w-1/2">
              Passionate web developer ! <br/> Looking for a javascript job in
              Lyon ['ReactJS', 'vueJS']
            </p>
          </div>
        </div>
      </header>
  )

}

export default Header;
