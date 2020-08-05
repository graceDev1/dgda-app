import React, {Component} from 'react'
import {Table, Card, CardBody} from 'reactstrap'
import Header from '../layouts/Header';
import {connect} from 'react-redux';
import {getForum, removeForum} from '../../actions/forumAction';
import PropTypes from 'prop-types';

export class Forum extends Component {

    static propTypes = {
        forum: PropTypes.array.isRequired,
        getForum: PropTypes.func.isRequired,
        removeForum: PropTypes.func.isRequired
    }

    componentWillMount() {
        this.props.getForum();

    }
    render() {
        const donnee = this.props.forum.map((msgs) => (
            <tr key={
                msgs._id
            }>
                <td>{
                    msgs.title
                } </td>
                <td> {
                    msgs.content
                } </td>
                <td>
                    <button onClick={
                            this.props.removeForum.bind(this, msgs._id)
                        }
                        className="btn btn-outline-danger sm">delete</button>
                </td>
            </tr>
        ))
        return (
            <div>
                <Header/>
                <Card className="shadow-sm p-3 mb-5 rounded">
                    <CardBody>
                        <h3 className="text-center">Forum
                        </h3>
                    </CardBody>
                </Card>
                <div className="container mt-4">
                    <Table>
                        <thead>
                            <tr>
                                <th>titre</th>
                                <th>content</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody> {donnee} </tbody>
                    </Table>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({forum: state.forum.forum})

export default connect(mapStateToProps, {getForum, removeForum})(Forum)
