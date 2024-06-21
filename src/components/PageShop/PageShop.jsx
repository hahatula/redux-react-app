import './PageShop.css';
import { useDispatch, useSelector } from 'react-redux';
import { getData } from '../../redux/selectors';
import { getProducts, getUsers } from '../../redux/actions';
import { useEffect } from 'react';

function PageShop() {
  const dispatch = useDispatch();
  const { products, users, loading, error } = useSelector(getData);

  useEffect(() => {
    dispatch(getProducts());
    dispatch(getUsers());
  }, []);

  return (
    <div className="shop">
      <h1 className="title">Welcome to the fake shop</h1>
      <div className="search">
        <input type="text" className="search__input" />
      </div>
      <ul className="products">
        {loading && <div>Loading...</div>}
        {products.map((item, index) => {
          return (
            <li key={index} className="product">
              <div className="poduct__img-container">
                <img
                  src={item.image}
                  alt="product photo"
                  className="product__img"
                />
              </div>
              <h2>{item.title}</h2>
              <p>{item.description}</p>
            </li>
          );
        })}
      </ul>
      <ul className="users">
        <h2 className="users__title">Users</h2>
        {users.map((user, index) => {
          return (
            <li key={index} className="user">
              <p className="user__info">
                User name: {user.name.firstname} {user.name.lastname}
              </p>
              <p className="user__info">
                Address: {user.address.street} {user.address.number},{' '}
                {user.address.city}
              </p>
              <p className="user__info">Phone number: {user.phone}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
export default PageShop;
