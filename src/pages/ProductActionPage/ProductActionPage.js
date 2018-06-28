import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { actAddProductRequest, actGetProductRequest, actUpdateProductRequest } from './../../actions';

class ProductActionPage extends Component {
    state = {
        id: '',
        txtName: '',
        txtPrice: '',
        chbxStatus: false
    };

    componentDidMount() {
        var { match } = this.props;
        if (match) {
            var id = match.params.id;
            this.props.onEditProduct(id);
        }
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps && nextProps.itemEditing) {
            var { id, name, price, status } = nextProps.itemEditing;
            this.setState({
                id: id,
                txtName: name,
                txtPrice: price,
                chbxStatus: status
            })
        }
    }

    onSave = () => {
        var { id, txtName, txtPrice, chbxStatus } = this.state;
        var { history } = this.props;
        var product = {
            id: id,
            name: txtName,
            price: txtPrice,
            status: chbxStatus
        }
        if (id) {
            this.props.onUpdateProduct(product);
        } else {
            this.props.onAddProduct(product);
        }
        history.goBack();
    }
    render() {
        const bind = (statePath) => ({
            value: this.state[statePath],
            onChange: (e) => {
                let value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
                this.setState({
                    [statePath]: value
                })
            }
        });
        return (
            <div className="col-xs-6">
                <form onSubmit={this.onSave}>
                    <div className="form-group">
                        <label>Tên Sản Phẩm:</label>
                        <input
                            type="text"
                            className="form-control"
                            {...bind("txtName")}
                        />
                    </div>
                    <div className="form-group">
                        <label>Giá:</label>
                        <input
                            type="text"
                            className="form-control"
                            {...bind("txtPrice")}
                        />
                    </div>
                    <div className="form-group">
                        <label>Trạng Thái:</label>
                    </div>
                    <div className="checkbox">
                        <label>
                            <input
                                type="checkbox"
                                checked={this.state.chbxStatus}
                                {...bind("chbxStatus")}
                            />
                            Còn Hàng
                        </label>
                    </div>
                    <Link
                        to="/product-list"
                        className="btn btn-danger mr-10"
                    >
                        Trở Lại
                    </Link>
                    <button type="submit" className="btn btn-primary">Lưu Lại</button>
                </form>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    itemEditing: state.itemEditing
});

const mapDispatchToProps = (dispatch, props) => ({
    onAddProduct: (product) => {
        dispatch(actAddProductRequest(product));
    },
    onEditProduct: (id) => {
        dispatch(actGetProductRequest(id))
    },
    onUpdateProduct: (product) => {
        dispatch(actUpdateProductRequest(product))
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(ProductActionPage);