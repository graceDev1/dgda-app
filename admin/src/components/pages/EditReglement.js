import React, {Component, Fragment} from 'react'
import {connect} from 'react-redux';
import {updateText} from '../../actions/textAction';
import PropTypes from 'prop-types';

export class EditReglement extends Component {

    state = {
        id: '',
        theme: '',
        filePdf: ''
    }

    onChange = e => this.setState({[e.target.name]: e.target.value});
    onSubmit = e => {
        e.preventDefault();

    }
    static propTypes = {
        updateText: PropTypes.func.isRequired
    }

    render() {
        const {id, theme, filePdf} = this.state;
        return (
            <Fragment>
                <h5>Modifier Theme
                </h5>
                <div className="container">
                    <form onSubmit={
                            this.onSubmit
                        }
                        className="form">
                        <div className="form-group">
                            <input className="" type=""
                                value={id}
                                name="id"
                                onChange={
                                    this.onChange
                                }/>
                        </div>
                        <div className="form-group">
                            <textarea className="form-control"
                                value={theme}
                                onChange={
                                    this.onChange
                                }
                                placeholder="Description"
                                name="theme"></textarea>
                        </div>
                        <input type="file" className="file mb-5"
                            value={filePdf}
                            onChange={
                                this.onChange
                            }
                            name="filePdf"/>
                        <input type="submit" value="Modifier" className="btn btn-outline-primary"/>
                    </form>
                </div>
            </Fragment>
        )
    }
}


export default connect(null, {updateText})(EditReglement)
