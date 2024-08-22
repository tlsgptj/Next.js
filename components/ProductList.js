import Link from 'next/link';
import styles from '@/styles/ProductList.module.css';
//빈 배열일시 map 함수를 실행해도 아무것도 렌더링하지 않을 것
export default function ProductList({ products = [] }) {
  return (
    <ul className={styles.productList}>
      {products.map((product) => (
        <li key={product.id}>
          <Link className={styles.product} href={`/products/${product.id}`}>
            <img
              src={product.imgUrl}
              width="300"
              height="300"
              alt={product.name}
            />
            <span className={styles.productName}>{product.name}</span>
            <br />
            {product.price}원
          </Link>
        </li>
      ))}
    </ul>
  );
}
