import React, { Component } from 'react'
import {connect} from 'react-redux';
import { forumAdd } from '../../actions/forumAction';
import PropTypes from 'prop-types';
export class NewForum extends Component {

    static propTypes = {
        forumAdd: PropTypes.func.isRequired,
        forum: PropTypes.array.isRequired
    }

    state = {
        title:'',
        content:''
    }

    onChange = e => this.setState({[e.target.name]: e.target.value});

    onSubmit= (e) =>{
        e.preventDefault();
        const post = {
            title: this.state.title,
            content: this.state.content
        }
        this.props.forumAdd(post);
    }

    render() {
        const { title, content} = this.state;
        return (
            <main>
            <div class="card mb-5">
            <div class="card-body container">
              <p class="card-text">
                <h5>Ajouter vos suggestion sur le texte reglementaire</h5>
              </p>
            </div>
          </div>

            <div className="container">
                <form className="form" onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <input type="text" name="title" id="title" value={title} onChange={this.onChange} className="form-control rounded" placeholder="Entrer le titre"/>
                    </div>
                    <button type="submit" className="btn btn-primary mb-4 rounded float-right">Poster</button>
                    <div className="form-group">
                        <textarea type="text" className="form-control rounded" value={content} name="content" id="content" onChange={this.onChange} rows="4" cols="100" placeholder="Enter votre content">
                        </textarea>
                    </div>
                </form>
            </div>
            </main>
        )
    }
}
const mapStateToProps = (state) =>{
    return{
        forum :state.forum.forum
    }
}

export default connect(mapStateToProps, {forumAdd}) (NewForum);
