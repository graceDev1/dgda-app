import React, { Component, Fragment } from "react";
import { connect } from 'react-redux';
import { getforum } from '../../actions/forumAction';
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
export class Forum extends Component {

    componentWillMount(){
        this.props.getforum();
        
    }

    static propTypes = {
        getforum: PropTypes.func.isRequired,
        forum : PropTypes.object.isRequired,
        isAuthenticated: PropTypes.bool
    }
  render() {
    return (
      <Fragment>
        <main role="main">
          <div class="card">
            <div class="card-body container">
              <h1 class="card-title">Forum</h1>
              <p class="card-text">
                <h5>Suggestion sur l'amelioration de texte reglementaire</h5>
              </p>
            </div>
          </div>

          <div className="container mt-2 mb-5">
            {this.props.isAuthenticated ? (<Link className="btn btn-primary rounded float-right" to="/newforum">
              + AJOUTER UN POST
            </Link>): ''}
          </div>
          <div className="container mt-5">
               {this.props.forum.map(post=>(
                   <div class="card mb-2 rounded" key={post._id}>
                       <div class="card-body">
                          <strong><h4 class="card-title">{post.title}</h4></strong>
                          <p class="card-text">
                              {post.content}
                        </p>
                      </div>
                        
                   </div>
              ))} 
           
          </div>
        </main>
      </Fragment>
    );
  }
}

const mapStateToProps = (state) =>{
    return{
        forum: state.forum.forum,
        isAuthenticated: state.auth.isAuthenticated
    }
}

export default connect(mapStateToProps, {getforum})(Forum);
