import React from 'react'
import PropTypes from 'prop-types'

function Product(props) {
    let { isFreeShipping } = props;

    return (
        <div className="card text-center">

            {isFreeShipping &&
                <span className="badge badge-warning position-absolute m-1">Free shipping</span>}

            <img src={props.imgLink} className="card-img-top" alt={props.name} />
            <div className="card-body">
                <h6 className="card-title">{props.name}</h6>
                <p className="border-top border-success pt-3 mt-3">
                    <strong>$ {props.price}</strong>
                </p>
                <button className="btn btn-primary btn-lg btn-block rounded-0">Add to cart</button>
            </div>
        </div>
    )
}

Product.propTypes = {
    id: PropTypes.number,
    name: PropTypes.string,
    price: PropTypes.number,
    isFreeShipping: PropTypes.bool,
    imgLink: PropTypes.string
}

export default Product


