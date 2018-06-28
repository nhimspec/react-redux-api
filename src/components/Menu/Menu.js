import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';

const menus = [
    {
        name: 'Trang Chủ',
        to: '/',
        exact: true
    },
    {
        name: 'Quản Lý Sản Phẩm',
        to: '/product-list',
        exact: false
    }
];

const MenuLink = ({ label, to, activeOnlyWhenExact }) => (
    <Route
        path={to}
        exact={activeOnlyWhenExact}
        children={({ match }) => (
            <li className={match ? 'active' : ''}>
                <Link
                    to={to}
                >
                    {label}
                </Link>
            </li>
        )}
    />
)

class Menu extends Component {
    showMenus = (menus) => {
        var result = null;
        if (menus.length) {
            result = menus.map((menu, index) => (
                <MenuLink
                    key={index}
                    label={menu.name}
                    to={menu.to}
                    activeOnlyWhenExact={menu.exact}
                />
            ))
        }
        return result;
    }
    render() {
        return (
            <div className="navbar navbar-default">
                <a className="navbar-brand">Call Api</a>
                <ul className="nav navbar-nav">
                    {this.showMenus(menus)}
                </ul>
            </div>
        );
    }
}

export default Menu;