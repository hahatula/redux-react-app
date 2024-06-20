import './PageShop.css';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../../redux/selectors';
import { getData } from '../../redux/actions';
import { useEffect } from 'react';

function PageShop() {
  const dispatch = useDispatch();
  const { products, loading, error } = useSelector(getProducts);
  //const { products, loading, error } = useSelector((state) => state.api);

  const onClick = () => {
    console.log('Dispatching GET_DATA action on click');
    dispatch(getData());
  };

  useEffect(() => {
    dispatch(getData());
    console.log(products);
    console.log(error);
    console.log(loading);
  }, []);

  return (
    <div className="shop">
      <button onClick={onClick}>test get data</button>
      {loading && <div>Loading...</div>}
      <h1 className="title">Welcome to the fake shop</h1>
      <div className="search">
        <input type="text" className="search__input" />
      </div>
      <ul className="products">
        {products.map((item, index) => {
          return (
            <li key={index} className="product">
              <div className='poduct__img-container'>
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
        <li className="user">
          <p className="user__info">User name:</p>
          <p className="user__info">Address:</p>
          <p className="user__info">Phone number:</p>
        </li>
        <li className="user">
          <p className="user__info">User name:</p>
          <p className="user__info">Address:</p>
          <p className="user__info">Phone number:</p>
        </li>
      </ul>
    </div>
  );
}
export default PageShop;
