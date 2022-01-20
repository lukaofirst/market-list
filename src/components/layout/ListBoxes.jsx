import React, { useState, useContext, useEffect } from 'react';
import ListBoxesSingle from './ListBoxesSingle';
import ListBoxesQuantifierSingle from './ListBoxesQuantifierSingle';
import ButtonToTop from './ButtonToTop';
import axios from 'axios';
import { LocalStorageContext } from '../../context/localStorageContext';

const ListBoxes = () => {
    const localStorageCtx = useContext(LocalStorageContext);

    const { hasItems, getItems, quantities } = localStorageCtx;

    const [products, setProducts] = useState([]);
    const [scrollToTop, setScrollToTop] = useState(false);

    useEffect(() => {
        onLoad();
        getItems();
        // eslint-disable-next-line
    }, []);

    const onLoad = async () => {
        const res = await axios.get('utils/products.json');
        const products = res.data;

        setProducts(products);
        setScrollToTop(true);
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

                {scrollToTop ? <ButtonToTop /> : ''}
            </div>
        </section>
    );
};

export default ListBoxes;
