import { Link } from 'react-router-dom';

<Link to={`/product/${product.id}`}>
  <img src={product.image} alt={product.title} />
  <h4>{product.title}</h4>
</Link>
