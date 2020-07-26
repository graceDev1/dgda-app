import React, { Component, Fragment } from "react";
import { connect} from 'react-redux';
import { getText } from '../../actions/textAction';
import { Link } from 'react-router-dom';

export class Reglement extends Component {

  state = {
    to: 'http://localhost:5000',
    activeOnLyWhenExact: true
  }
  componentDidMount(){
    this.props.getText();
  }
  
  render() {
    console.log(this.props.text)
   let url = '';
    return (
      <Fragment>
        <main role="main">
          <div class="card">
            <div class="card-body container">
              <h3 class="card-title">Vos text reglementaire</h3>
              <p class="card-text">
                <h5>ces textes reglementaire vont vous servir a .....</h5>
              </p>
            </div>
          </div>
          </main>
          <div className="container mt-2">
          <table className="table tables-triped">
                <thead>
                </thead>
                <tbody>
                    {this.props.text.map(posts =>(
                        <tr key={posts._id}>
                            <td>{posts.theme}</td>
                            <td><Link to={posts.filePdf} target="_blank" className="btn btn-primary btn-sm">
                                Telecharger le PDF</Link></td>
                        </tr>
                    ))}
                </tbody>        
                </table>
          </div>
      </Fragment>
    );
  }
}

const mapStateToProps = state =>({
  text : state.text.text
})

export default connect(mapStateToProps,{getText})(Reglement);
