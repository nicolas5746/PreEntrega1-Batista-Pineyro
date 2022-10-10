import React from 'react';
import { Greeting, ItemList } from 'components/items/ItemListContainer';
import { NavBar } from 'components/navbar/NavBar';
import 'App.sass';

export const App = () => {
  const [products, setProducts] = React.useState([{}]);
  React.useEffect(() => {
    fetch('data/products.json')
      .then((response) => response.json())
      .then((data) => {
        setProducts(data)
      });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <NavBar title="Tienda Americana" logoSrc={'images/logo.png'} logoAlt="Tienda Americana" logoTitle="Tienda Americana" />
      </header>
      <main className="App-main">
        <div className="bg-white">
          <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
            <Greeting greeting={"Bienvenidos a Tienda Americana de Calzados"} />
            <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
              {products.map((product) =>
                <ItemList
                  key={product.id}
                  brand={product.brand}
                  name={product.name}
                  link={product.link}
                  image={product.image}
                  description={product.description}
                  currency="USD"
                  price={product.price_usd}
                  colour={product.colour}
                />)}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}