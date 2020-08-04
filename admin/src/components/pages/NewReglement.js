import React, {Component, Fragment} from 'react'
import {connect} from 'react-redux';
import {addText} from '../../actions/textAction';
import {withRouter, Link} from 'react-router-dom';
import PropTypes from 'prop-types';

export class NewReglement extends Component {

    state = {
        theme: '',
        filePdf: '',
        redirectState: false
    }

    static propTypes = {
        addText: PropTypes.func.isRequired
    }
    onChange = e => this.setState({[e.target.name]: e.target.value});

    onSubmit = e => {
        e.preventDefault();
        const {theme, filePdf} = this.state;
        const newText = {
            theme,
            filePdf
        };
        this.props.addText(newText);
        this.props.history.push('/');
    }

    static propTypes = {
        updateText: PropTypes.func.isRequired
    }

    render() {
        const {theme, filePdf} = this.state;
        return (
            <Fragment>
                <h5 className="mt-4 mb-4">Ajouter Texte reglementaire
                    <Link className="btn btn-">Cancel</Link>
                </h5>
                <div className="container">
                    <form onSubmit={
                            this.onSubmit
                        }
                        className="form">
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
                        <input type="submit" value="Ajouter" className="btn btn-outline-primary"/>
                    </form>
                </div>
            </Fragment>
        )
    }
}


export default connect(null, {addText})(withRouter(NewReglement))
