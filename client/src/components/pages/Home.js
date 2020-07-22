import React, { Component, Fragment } from 'react'
import { Link } from 'react-router-dom';
export class Home extends Component {
    render() {
        return (
    <Fragment>
    <main role="main">
      <div id="myCarousel" className="carousel slide" data-ride="carousel">
        <ol className="carousel-indicators">
          <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
          <li data-target="#myCarousel" data-slide-to="1"></li>
          <li data-target="#myCarousel" data-slide-to="2"></li>
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img className="first-slide" src="https://scontent.fnbo1-1.fna.fbcdn.net/v/t31.0-8/s960x960/22048099_1672271232797144_329028456225538401_o.jpg?_nc_cat=105&_nc_sid=05277f&_nc_eui2=AeGt5oPPtNjZapCWef2WmHHme6Epoz0MiTh7oSmjPQyJOAaPT6MNwVI2utuJv1dYC5e3JUVYQzCWTQ_mUUQ_BX7D&_nc_ohc=HDswCwJNTeIAX80HdCo&_nc_ht=scontent.fnbo1-1.fna&_nc_tp=7&oh=e50881a5e927988597fb4e81ad96521e&oe=5F3EE66D" alt="First slide"/>
            <div className="container">
              <div className="carousel-caption text-left">
                <h1>CE QU'EST LA DGDA</h1>
                <p>

                </p>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <img className="second-slide" src="https://journaldesnations.net/wp-content/uploads/2020/01/DGDA-1.jpg" alt="Second slide"/>
            <div className="container">
              <div className="carousel-caption">
                <h1>La Mission de la DGDA</h1>
                <p>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <img className="third-slide" src="https://photos.radiookapi.net/picture/20200421183003628416-3.jpg?imgmax=500" alt="Third slide"/>
            <div className="container">
              <div className="carousel-caption text-right">
                <h1>La vision de la DGDA</h1>
                <p>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>
              </div>
            </div>
          </div>
        </div>
        <Link className="carousel-control-prev" to="#myCarousel" role="button" data-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="sr-only">Previous</span>
        </Link>
        <Link className="carousel-control-next" to="#myCarousel" role="button" data-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="sr-only">Next</span>
        </Link>
      </div>


      
      <div className="container marketing">
        <div className="row">
        <div className="col-lg-4">
            </div>
          <div className="col-lg-4">
            <img className="rounded-circle" src="https://www.eventsrdc.com/wp-content/uploads/2020/05/DGDA_index-1.jpg" alt="Generic placeholder image" width="140" height="140"/>
            <h2>DGDA</h2>
            <p>Donec sed odio dui. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Vestibulum id ligula porta felis euismod semper. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</p>
            <p><a className="btn btn-secondary" to="#" role="button">View details &raquo;</a></p>
          </div>
          <div className="col-lg-4">
            </div>
        </div>

        <hr className="featurette-divider"/>

        <div className="row featurette">
          <div className="col-md-7">
            <h2 className="featurette-heading">Qu'est le ce site? <span className="text-muted">En quoi ca Vous est utile?.</span></h2>
            <p className="lead">Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo.</p>
          </div>
          <div className="col-md-5">
            <img className="featurette-image img-fluid mx-auto" data-src="holder.js/500x500/auto" alt="Generic placeholder image"/>
          </div>
        </div>

        <hr className="featurette-divider"/>

        <div className="row featurette">
          <div className="col-md-7 order-md-2">
            <h2 className="featurette-heading">Partage et poster vous opinion <span className="text-muted">Sur le Forum.</span></h2>
            <p className="lead">Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo.</p>
          </div>
          <div className="col-md-5 order-md-1">
            <img className="featurette-image img-fluid mx-auto" data-src="holder.js/500x500/auto" alt="Generic placeholder image"/>
          </div>
        </div>
      </div>
    </main>
    </Fragment>
        );
    }
}

export default Home;
