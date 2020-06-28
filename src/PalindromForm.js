import React from 'react';
import { connect } from 'react-redux';

import {
    validatePalindrom, setLoading, setText
} from './actions/palindromActions';


class PalindromForm extends React.Component {
    fnReduxTextChange = e => {
        const text = e.target.value;
        this.props.setText(text);
        if (text) {
            this.props.validatePalindrom(text);
            this.props.setLoading();
        } 
    };

    render() {
        return (
            <div className="card">
                <div className="card-header">
                    <h3>Palindrom</h3>
                </div>
                <div className="card-body">
                    <div className="row">
                        <div className="col-4">
                            <input type="text" onChange={this.fnReduxTextChange} placeholder="Validate Palindrom" className="form-control" />
                        </div>
                        <div className="col-4">
                            <h4>This text is : {this.props.loading?"Loading...": (this.props.palindrom.data && this.props.text) ? this.props.palindrom.data === "Pelindrom" ?
                                <span className="text-success">a Pelindrom</span> : <span className="text-danger">Not a Pelindrom</span> : <span></span>}</h4>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    palindrom: state.palindrom.palindrom,
    loading: state.palindrom.loading,
    text: state.palindrom.text,
});

export default connect(
    mapStateToProps,
    { validatePalindrom, setLoading, setText }
)(PalindromForm);

