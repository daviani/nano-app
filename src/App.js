import './App.css';
import Card from './component/card';

const contacts = [
  {
    id: 1,
    img: 'https://nano.site/img/icon/callto.png',
    title: 'Portable',
    subTitle: '06 52 21 34 88',
    url: 'tel:06 52 21 34 88',
  },
  {
    id: 2,
    img: 'https://nano.site/img/icon/mail.png',
    title: 'Mail',
    subTitle: 'contact@daviani.dev',
    url: 'mailto:contact@daviani.dev:',
  },
  {
    id: 3,
    img: 'https://nano.site/img/icon/in.png',
    title: 'LinkedIn',
    url: '',
  },
  {
    id: 4,
    img: 'https://nano.site/img/icon/wa.png',
    title: 'WhatApp',
    url: 'https://wa.me/+33652213488',
  },
];
const skills = [
  {
    id: 1,
    img: 'https://i.pinimg.com/originals/26/f6/08/26f6088b4c68068884c0d9282fccd94a.jpg',
    title: 'Mon CV',
    url: '',
  },
  {
    id: 2,
    img: 'https://fillatredav.fr/assets/img/favicon.ico',
    title: 'Mon portfolio',
    url: 'https://daviani.dev',
  },
  {
    id: 3,
    img: 'https://img2.freepng.fr/20180326/eye/kisspng-github-computer-icons-logo-github-5ab8a338143da0.8375508315220498480829.jpg',
    subTitle: 'Github',
    url: 'https://www.github.com/daviani',
  },
  {
    id: 4,
    img: 'https://static-aznet.codingame.com/assets/favicon_32_32.0042ee23.png',
    title: 'CodinGame',
    url: 'https://www.codingame.com/profile/db46c86abd0ae0cb55ae7959272efb640635563',
  },
  {
    id: 5,
    img: 'https://s2.googleusercontent.com/s2/favicons?sz=128&domain_url=https://stackshare.io/daviani/my-stack',
    title: 'StackShare',
    url: 'https://stackshare.io/daviani/my-stack',
  },
  {
    id: 6,
    img: 'https://s2.googleusercontent.com/s2/favicons?sz=128&domain_url=https://daviani-fillatre.welovedevs.com/',
    title: 'WeloveDevs',
    url: 'https://daviani-fillatre.welovedevs.com/',
  },
];

function App() {
  const itemPicture = (itemImg) => {
    const imgSrc = itemImg || 'https://via.placeholder.com/50';
    return <img className="rounded-2xl" src={ imgSrc } alt="vfdsfs"/>;
  };
  return (
      <>
        <section className="bg-gray-300 text-gray-700 mb-10">
          <div
              className="container flex flex-col items-center px-5 py-4 mx-auto">
            <div
                className="flex flex-col w-full mb-12 text-left lg:text-center">
              <div
                  className="inline-flex items-center justify-center flex-shrink-0  mx-auto mb-3 text-black bg-gray-100 rounded-full">
                <img
                    className="rounded-full border-4 border-purple-600 w-40 h-40 img "
                    src="https://nano.site/api/image/4f8a5c5f-d9ab-46fe-b28f-08d8d81aa339"
                    alt="daviani"/>
              </div>
              <h1 className="mx-auto mb-6 text-4xl font-semibold leading-none tracking-tighter text-black lg:w-1/2 lg:text-3xl title-font">
                Daviani.
              </h1>
              <p
                  className="mx-auto text-base font-medium leading-relaxed text-center text-gray-700 lg:w-1/2">
                Passionate web developer ! <br/> Looking for a javascript job in
                Lyon ['ReactJS', 'vueJS']</p>
            </div>
          </div>
        </section>


        <div className="grid md:grid-cols-3  grid-flow-col">
          <div/>
          <div>
            <div className="p-4">
              <p className="text-2xl font-extrabold text-purple-600">Contact</p>
              { contacts.map((item) =>
                  <div key={ item.id }
                       className="flex flex-col m-4 p-8 bg-white rounded-2xl shadow hover:shadow-md">
                    <a href={ item.url } target="_blank">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          { itemPicture(item.img) }
                          <div className="flex flex-col ml-3">
                            <div className="font-medium leading-none">
                              { item.title }
                            </div>
                            <p className="text-sm text-gray-600 leading-none mt-1">
                              { item.subTitle }
                            </p>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>) }
            </div>

            <div className="p-4">
              <p
                  className="text-2xl font-extrabold text-purple-600">Développement</p>
              { skills.map((skill) =>
                  <div key={ skill.id }
                       className="flex flex-col m-4 p-8 bg-white rounded-2xl shadow hover:shadow-md">
                    <a href={ skill.url } target="_blank">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          { itemPicture(skill.img) }
                          <div className="flex flex-col ml-3">
                            <div className="font-medium leading-none">
                              { skill.title }
                            </div>
                            <p className="text-sm text-gray-600 leading-none mt-1">
                              { skill.subTitle }
                            </p>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>,
              ) }
            </div>
          </div>
          <div/>
        </div>


        <footer className="bg-gray-300 w-full py-6 px-4 ">
          <div className="flex items-center justify-between my-4">
            <div className="inline-flex items-center">
              <div
                  className="w-2 h-2 p-2 mr-2 rounded-full bg-gradient-to-tr from-blue-500 to-blue-600">
              </div>
              <h2
                  className="block p-2 text-xl font-medium tracking-tighter text-black transition duration-500 ease-in-out transform cursor-pointer hover:text-gray-500 lg:text-x lg:mr-8">
                Nano
              </h2>
            </div>
            <p className="inline-flex text-blue-500 px-2 pt-6">
              Designed and Developped with
              <svg fill="#e53e3e" viewBox="0 0 24 24"
                   className="w-5 h-5 mx-1 pt-px text-red-600"
                   stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round"
                      stroke-width="2"
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/>
              </svg>by Daviani.
            </p>
            <div className="flex items-center">
              <span
                  className="inline-flex justify-center mt-2 mr-2 sm:ml-auto sm:mt-0 sm:justify-start">
                <a href="https://github.com/daviani/nano-app"
                   className="text-blue-500 hover:text-black">
                  Github
                </a>
              </span>
            </div>
          </div>
        </footer>
      </>
  );

}

export default App;
