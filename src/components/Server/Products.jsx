import React, { useState } from 'react'
import dataJson from './data.json'

export const Products = () => {
  const data = dataJson.products;

  const firstView = data.filter((elem) => elem.type === 'Desayuno');
  const [products, setProducts] = useState(firstView);

  const productsType = (option) => {
    // eslint-disable-next-line default-case
    switch (option) {
      case 'Desayuno':
        const breakfast = data.filter((elem) => elem.type === option);
        setProducts(breakfast);
        break;
      case 'Hamburguesas':
        const burgers = data.filter((elem) => elem.type === option);
        setProducts(burgers);
        break;
      case 'Acompañamientos':
        const sides = data.filter((elem) => elem.type === option);
        setProducts(sides);
        break;
      case 'Bebidas':
        const drinks = data.filter((elem) => elem.type === option);
        setProducts(drinks);
        break; 
    }
  }
  return (
    <article className="productsList">
      <nav>
        <ul>
          <div>
            <li onClick={() => productsType('Desayuno')}>Desayuno</li>
            <li onClick={() => productsType('Hamburguesas')}>Hamburguesas</li>
            <li onClick={() => productsType('Acompañamientos')}>Acompañamientos</li>
            <li onClick={() => productsType('Bebidas')}>Bebidas</li>
          </div>
        </ul>
      </nav>
      <article>
      <ul className="cards">
        {products.map(p => (
          <div>
            <img src={p.img} alt="" />
            <li key={p.id}>{p.name}</li>
            <p>S/. {p.price}</p>
            <button>Agregar</button>
          </div>  
        ))}
        </ul>
      </article>
    </article>
  )

}
