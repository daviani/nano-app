function Card({url, img, title, subTitle}) {
  const itemPicture = (itemImg) => {
    const imgSrc = itemImg || 'https://via.placeholder.com/50';
    return <img className="rounded-2xl" src={ imgSrc } alt="logo"/>;
  };
  return (
      <a href={ url } target={ title }
         className="flex flex-col m-4 p-8 bg-white rounded-2xl shadow hover:shadow-md bg-gray-50">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            { itemPicture(img) }
            <div className="flex flex-col ml-4">
              <div className="font-medium leading-none">
                { title }
              </div>
              <p className="text-sm text-gray-600 leading-none mt-1">
                { subTitle }
              </p>
            </div>
          </div>
        </div>
      </a>
  )
      ;
}

export default Card;
