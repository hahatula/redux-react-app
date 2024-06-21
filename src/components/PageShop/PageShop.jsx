import './PageShop.css';
import { useDispatch, useSelector } from 'react-redux';
import { getData } from '../../redux/selectors';
import { getProducts, getUsers } from '../../redux/actions';
import { useEffect, useState } from 'react';
import UserItem from '../UserItem/UserItem';
import ProductItem from '../ProductItem/ProductItem';
import FlickeringInput from '../FlickeringInput/FlickeringInput';

function PageShop() {
  const dispatch = useDispatch();
  const { products, users, loading, error } = useSelector(getData);
  const [query, setQuery] = useState('');

  useEffect(() => {
    dispatch(getProducts());
    dispatch(getUsers());
  }, []);

  const onChange = (event) => {
    const text = event.target.value.toLowerCase();
    console.log(text);
    setQuery(text);
  };

  return (
    <div className="shop">
      <h1 className="title">Welcome to the fake shop</h1>
      <div className="search">
        <FlickeringInput
          placeholder="Please enter a search query"
          onChange={onChange}
        />
      </div>
      <ul className="products">
        {loading && <div>Loading...</div>}
        {products
          .filter((item) => item.title.toLowerCase().includes(query))
          .map((item, index) => (
            <ProductItem key={index} item={item} />
          ))}
      </ul>
      <ul className="users">
        <h2 className="users__title">Users</h2>
        {users.map((user, index) => (
          <UserItem key={index} user={user} />
        ))}
      </ul>
    </div>
  );
}
export default PageShop;
