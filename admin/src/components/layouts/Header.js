import React, {Component} from 'react'
import {Link} from 'react-router-dom';


export class Header extends Component {
    render() {
        return (<div>
            <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
                <Link class="navbar-brand" to="/">DGDA ADMIN</Link>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarColor01">
                    <ul class="navbar-nav mr-auto">
                        <li class="nav-item active">
                            <Link class="nav-link" to="/">Reglement
                                <span class="sr-only">(current)</span>
                            </Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" to="/forum">Forum</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" to="user">User</Link>
                        </li>
                    </ul>

                </div>
            </nav>
        </div>)
    }
}

export default Header
