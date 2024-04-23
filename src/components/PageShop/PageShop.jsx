import "./PageShop.css";

function PageShop() {
  return (
    <div className="shop">
      <h1 className="title">Welcome to the fake shop</h1>
      <div className="search">
        <input type="text" className="search__input" />
      </div>
      <ul className="products">
        <li className="product">
            <img src="#" alt="product photo" className="product__img"/>
        </li>
        <li className="product">
            <img src="#" alt="product photo" className="product__img"/>
        </li>
        <li className="product">
            <img src="#" alt="product photo" className="product__img"/>
        </li>
        <li className="product">
            <img src="#" alt="product photo" className="product__img"/>
        </li>
        <li className="product">
            <img src="#" alt="product photo" className="product__img"/>
        </li>
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
