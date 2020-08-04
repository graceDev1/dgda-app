import React, {Component} from 'react'
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {login} from '../../actions/authAction';
import {clearErrors} from '../../actions/errorAction';
import {
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    Form,
    FormGroup,
    Input,
    NavLink,
    Alert
} from 'reactstrap';

export class Login extends Component {

    state = {
        modal: '',
        email: '',
        password: '',
        msg: ''
    }

    static propTypes = {
        login: PropTypes.func.isRequired,
        isAuthenticated: PropTypes.bool,
        clearErrors: PropTypes.func.isRequired
    }

    componentDidUpdate(prevProps) {
        const {error, isAuthenticated} = this.props;
        if (error !== prevProps.error) {
            if (error.id === 'LOGIN_FAIL') {
                this.setState({msg: error.msg.msg})
            } else {
                this.setState({msg: null})
            }
        }

        // if is authenticated , close the modal
        if (this.state.modal) {
            if (isAuthenticated) {
                this.toggle();
            }
        }
    }

    toggle = () => { // clear errors
        this.props.clearErrors();
        this.setState({
            modal: !this.state.modal
        });
    };

    onSubmit = e => {
        e.preventDefault()
        const {email, password} = this.state;
        const user = {
            email,
            password
        }
        this.props.login(user)
    }

    onChange = e => this.setState({[e.target.name]: e.target.value});

    render() {

        return (
            <div>
                <NavLink onClick={
                        this.toggle
                    }
                    href="#">
                    Login
                </NavLink>
                <Modal isOpen={
                        this.state.modal
                    }
                    toggle={
                        this.toggle
                }>
                    <ModalHeader toggle={
                        this.toggle
                    }>Login</ModalHeader>
                    <ModalBody> {
                        this.state.msg ? <Alert color="danger">
                            {
                            this.state.msg
                        }</Alert> : null
                    }
                        <Form onSubmit={
                            this.onSubmit
                        }>
                            <FormGroup>
                                <Input type="email" name="email" id="email" placeholder="Email" className="mb-3"
                                    onChange={
                                        this.onChange
                                    }/>
                                <Input type="password" name="password" id="password" placeholder="Password" className="mb-3"
                                    onChange={
                                        this.onChange
                                    }/>
                                <Button color="dark"
                                    style={
                                        {marginTop: '2rem'}
                                    }
                                    block>Login</Button>
                            </FormGroup>
                        </Form>
                    </ModalBody>
                </Modal>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {isAuthenticated: state.auth.isAuthenticated, error: state.error}
}
export default connect(mapStateToProps, {login, clearErrors})(Login);
