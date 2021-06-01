import './App.css';

const items = [
  { id : 1 , img : 'https://via.placeholder.com/50' , title : 'fdsdfs' , subTitle : 'dsgf' , url : 'fdsfds' } ,
  { id : 2 , title : 'fdsdfs' , subTitle : 'dsgf' , url : 'fdsfds' } ,
  { id : 3 , img : 'https://via.placeholder.com/50' , subTitle : 'dsgf' , url : 'fdsfds' } ,
  { id : 4 , img : 'https://via.placeholder.com/50' , title : 'fdsdfs' , url : 'fdsfds' } ,
]

function App () {
  const itemPicture = ( itemImg ) => {
    const imgSrc = itemImg || 'https://www.i-cad.fr/uploads/5bec27af5afec.jpeg'
    return <img className="rounded-2xl" src={ imgSrc } alt="vfdsfs"/>
  }
  return (
    <>

      <div className="p-4">
        { items.map ( ( item ) =>
          <div key={ item.id } className="flex flex-col m-4 p-8 bg-white shadow-md hover:shodow-lg rounded-2xl">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                {itemPicture(item.img)}
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
          </div> ) }
      </div>


    </>
  );
}

export default App;
