import './App.css';
import Card from './component/card';
import Footer from './component/footer';
import Header from './component/header';
import {sections} from './data';

function App() {
  return (
      <>
        <Header/>
        <section className="grid md:grid-cols-3  grid-flow-col">
          <div/>
          <div className="p-4">
            { sections.map((section) =>
                <>
                  <p className="text-2xl font-extrabold text-purple-600">{ section.title }</p>
                  { section.items.map((item) =>
                      <div key={ item.id }>
                        <Card url={ item.url } img={ item.img }
                              title={ item.title }
                              subTitle={ item.subTitle }/>
                      </div>,
                  ) }
                </>,
            ) }
          </div>
          <div/>
        </section>

        <Footer/>
      </>
  );

}

export default App;
