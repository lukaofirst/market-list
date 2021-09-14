import React, { useState, useEffect } from 'react';
import ListBoxesSingle from './ListBoxesSingle';
import axios from 'axios';

const ListBoxes = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        onLoad();
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
                <div id='list-boxes-wrapper'>
                    {products.map((product, id) => (
                        <ListBoxesSingle productsName={product.name} key={id} />
                    ))}
                </div>
                <div id='list-quantifiers-wrapper'>ocultado</div>
            </div>
        </section>
    );
};

export default ListBoxes;
