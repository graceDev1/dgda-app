import React, {Component} from 'react'
import {getUser, deleteUser} from '../../actions/userAction';
import {connect} from 'react-redux';
import {Card, CardBody, Table} from 'reactstrap';
import Header from '../layouts/Header';
import PropTypes from 'prop-types';

export class User extends Component {

    static propTypes = {
        getUser: PropTypes.func.isRequired,
        deleteUser: PropTypes.func.isRequired
    }

    componentDidMount() {
        this.props.getUser();
    }
    render() {
        const users = this.props.user.map((use) => (
            
        <tr key={use._id} timeout={500} classNames="fade">
           <td
            > {
            use.name
        } </td>
                <td>{use.email}</td > <td> < button className = "btn btn-outline-danger" onClick = {
            this.props.deleteUser.bind(this, use._id)
        } >
        delete </button></td > </tr>
        
        ));
        return (<div>
            <Header/>
            <Card className="container mt-5 ">
                <CardBody>
                    <Table>
                        <thead>
                            <th>
                                username</th>
                            <th>
                                email address</th>
                            <th>#</th>
                        </thead>
                        <tbody>  {users} </tbody>
                    </Table>
                </CardBody>
            </Card>
        </div>)
    }
}

const mapStateToProps = state => ({user: state.user.user})
export default connect(mapStateToProps, {deleteUser, getUser})(User)
