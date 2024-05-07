import OneProduct from './OneProduct';
import {Product} from '../models/product';

// const myProduct = new Product("Product name 1", "Product description 01");

interface ProductsProps {
  products: Product[];
  onAdd: (id: number) => void;
  onRemove: (id: number) => void;
}

const Products: React.FC<ProductsProps> = ({ products, onAdd, onRemove }) => {
  return (
    <div className="all-products">
        {products.map((product) => (
        <OneProduct
        key={product.id} 
        product={product}
        onAdd={() => onAdd(product.id)}
        onRemove={() => onRemove(product.id)} />
      ))}
    </div>
  )
}

export default Products
