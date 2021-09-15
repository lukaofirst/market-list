import React, { useState, useContext, useEffect } from 'react';
import ListBoxesSingle from './ListBoxesSingle';
import ListBoxesQuantifierSingle from './ListBoxesQuantifierSingle';
import axios from 'axios';
import LocalStorageContext from '../../context/localStorageContext';

const ListBoxes = () => {
    const localStorageContext = useContext(LocalStorageContext);

    const { hasItems, getItems, quantities } = localStorageContext;

    const [products, setProducts] = useState([]);

    useEffect(() => {
        onLoad();
        getItems();
        // eslint-disable-next-line
    }, []);

    const onLoad = async () => {
        const res = await axios.get('utils/products.json');

        let products = res.data;

        setProducts(products);
    };

    return (
        <section className='list-boxes'>
            <div className='container'>
                {hasItems === false
                    ? products.map((product) => (
                          <ListBoxesSingle
                              productsName={product.name}
                              key={product.id}
                          />
                      ))
                    : products.map((product, id) => {
                          return (
                              <ListBoxesQuantifierSingle
                                  productsName={product.name}
                                  quantity={quantities[id]}
                                  key={product.id}
                              />
                          );
                      })}
            </div>
        </section>
    );
};

export default ListBoxes;
