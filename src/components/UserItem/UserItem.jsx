import React from "react";
import './UserItem.css';

function UserItem({user, index}) {
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
}
export default UserItem;
