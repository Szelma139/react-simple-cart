import React from 'react'
import PropTypes from 'prop-types'

class DecreaseItem extends React.Component {

    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
    }

    render() {

        return (
            <button
                type="button"
                className="btn btn-secondary btn-sm"
                onClick={this.handleClick}
            > - </button>
        )
    }

    handleClick() {
        this.props.onDecreaseItem();
    }
}

DecreaseItem.propTypes = {
    id: PropTypes.number,
    quantity: PropTypes.number,
    onDecreaseItem: PropTypes.func
}

export default DecreaseItem

