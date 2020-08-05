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


    render() {
        const {theme, filePdf} = this.state;
        return (
            <Fragment>
                <h5 className="mt-4 mb-4">Ajouter Texte reglementaire
                    <Link to="/" className="btn btn-outline-secondary sm float-right">Cancel</Link>
                </h5>
                <div className="card container rounded">
                    <div className="card-body">
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
                            <div>
                                <input type="file" className="file mb-5"
                                    value={filePdf}
                                    onChange={
                                        this.onChange
                                    }
                                    name="filePdf"/>
                            </div>
                            <input type="submit" value="Ajouter" className="btn btn-outline-primary"/>
                        </form>
                    </div>
                </div>
            </Fragment>
        )
    }
}


export default connect(null, {addText})(withRouter(NewReglement))
