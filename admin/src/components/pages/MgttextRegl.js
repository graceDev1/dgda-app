import React, {Component, Fragment} from 'react'
import Header from '../layouts/Header';
import {connect} from 'react-redux';
import {getText, deleteText} from '../../actions/textAction';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

export class MgttextRegl extends Component {


    static propTypes = {
        deleteText: PropTypes.func.isRequired,
        getText: PropTypes.func.isRequired,
        text: PropTypes.array.isRequired
    }

    componentWillMount() {
        this.props.getText();
    }


    render() {

        return (
            <Fragment>
                <Header/>
                <div className="container">
                    <h3 className="mt-4 mb-4">TEXT REGLEMENTAIRE
                        <Link to="/text" className="btn btn-primary sm float-right">Ajouter Text</Link>
                    </h3>
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th>Theme</th>
                                <th>Url file</th>
                                <th></th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody> {
                            this.props.text.map((test) => (
                                <tr key={
                                    test._id
                                }>
                                    <td>{
                                        test.theme
                                    }</td>
                                    <td>{
                                        test.filePdf
                                    }</td>
                                    <td></td>
                                    <td>
                                        <i onClick={
                                                this.props.deleteText.bind(this, test._id)
                                            }
                                            className="fas fa-trash-alt"></i>
                                    </td>
                                </tr>
                            ))
                        } </tbody>
                    </table>
                </div>
            </Fragment>
        )
    }
}

const mapStateToProps = state => ({text: state.text.text})

export default connect(mapStateToProps, {getText, deleteText})(MgttextRegl)
