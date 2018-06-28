import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import ProductList from '../../components/ProductList/ProductList';
import ProductItem from '../../components/ProductItem/ProductItem';
import { actGetProductsRequest, actDeleteProductRequest } from './../../actions';

class ProductListPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products: []
        };
    }

    componentDidMount() {
        this.props.getProducts();
    }

    onDelete = (id) => {
        this.props.onDeleteProduct(id);
    }

    showProduct = (products) => {
        var result = null;
        if (products.length) {
            result = products.map((product, index) => (
                <ProductItem
                    key={index}
                    index={index}
                    product={product}
                    onDelete={this.onDelete}
                />
            ))
        }
        return result;
    }
    render() {
        let { products } = this.props;
        return (
            <div className="col-xs-12">
                <Link
                    to="product/add"
                    className="btn btn-info mb-10"
                >
                    Thêm sản phẩm
                </Link>
                <ProductList>
                    {this.showProduct(products)}
                </ProductList>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    products: state.products
});

const mapDispatchToProps = (dispatch, props) => ({
    getProducts: () => {
        dispatch(actGetProductsRequest());
    },
    onDeleteProduct: (id) => {
        dispatch(actDeleteProductRequest(id))
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(ProductListPage);