
import React           from 'react'

import styles          from '../Product/Product.module.scss'

import { productType } from '@/ts/product.type';
const ProductView = ({products}:{products: productType[]}) => {

  return (
    <>
            <div className={styles.product}>
                <h1 className={styles.product__title}>Product Page</h1>
                   <div className={styles.product__content}>
                    <div className={styles.product__content__skeleton}>
                         <div className={styles.product__content__skeleton__image} />
                         <div className={styles.product__content__skeleton__name} />
                         <div className={styles.product__content__skeleton__category} />
                         <div className={styles.product__content__skeleton__price} />
                    </div>
                        {products.map((product: productType) =>(
                                <div key={product.id} className={styles.product__content__item}>
                                  
                                    <div className={styles.product__content__item__image}>
                                        <img src={product.image} alt={product.name} />
                                    </div>

                                    <h4 className={styles.product__content__item__name}>
                                        {product.name}
                                    </h4>

                                    <p className={styles.product__content__item__price}>
                                        {product.category}
                                    </p>
                                    
                                    <p className={styles.product__content__item__category}>
                                        {product.price.toLocaleString('id-ID', {style: "currency", currency: "IDR"})}
                                    </p>
                                </div>
                                
                            ))}
                    </div> 
                   
            </div>
        </>
  )
}
export default ProductView;
