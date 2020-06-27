import React from 'react';
import { connect } from 'react-redux';

import {
    withReduxText,
    validatePalindrom,
} from './actions/palindromActions';


 class PalindromForm extends React.Component {
    fnReduxTextChange = e => {
        this.props.withReduxText(e.target.value);
        this.props.validatePalindrom(e.target.value);
      };
      
    render() {
        return (
            <div className="card">
            <div className="card-header">
                <h3>Palindrom</h3>
            </div>
            <div className="card-body">
                <div className="row mt-5">
                    <div className="col-4">
                        <input type="text" onChange={this.fnReduxTextChange}  placeholder="Validate Palindrom" className="form-control" />
                    </div>
                    <div className="col-4">
                      <h4>This text is : {this.props.palindrom.data? this.props.palindrom.data==="Pelindrom"?
                      <span className="text-success">a Pelindrom</span>:<span className="text-danger">Not a Pelindrom</span>:<span></span>}</h4>
                    </div>
                </div>
            </div>
        </div>
        )
    }
}

const mapStateToProps = state => ({
    palindrom: state.palindrom.palindrom
  });
  
  export default connect(
    mapStateToProps,
    { withReduxText, validatePalindrom }
  )(PalindromForm);
  
