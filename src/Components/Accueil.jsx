import React, { Component } from 'react';
import {Carousel} from 'react-bootstrap';

class Accueil extends Component {
  render() {
    return (
      <div>
        <div className='container-fluid' >  
            <div className="row title p-3" style={{ marginBottom: "20px" }} >  
              <div className="col-sm-12">  
                <h1 style={{ textAlign: "center" }}>Système de Gestion des Résultats des Etudiants</h1>
              </div>
            </div>
        </div>
        <div style={{paddingLeft:"110px"}} className='row'>
            <div className="col-sm">
                <button onClick={()=>{this.props.history.push('/listeEtudiants')}} style={{fontSize:"25px", color:"black"}} type="button" class="btn btn-link">gestion des étudiants</button>
            </div>
            <div className="col-sm">
                <button onClick={()=>{this.props.history.push('/AjouterResultat')}} style={{fontSize:"25px", color:"black"}} type="button" class="btn btn-link">gestion des résultats</button>
            </div>
            <div className="col-sm">
                <button onClick={()=>{this.props.history.push('/listeClasses')}} style={{fontSize:"25px", color:"black"}} type="button" class="btn btn-link">gestion des classes</button>
            </div>
        </div>
        <div className='container-fluid' >  
            <Carousel>  
                <Carousel.Item style={{'height':"300px"}} >  
                    <img style={{'height':"500px"}} className="d-block w-100" src={'assets/img/students1.jpg'}  />  
                    <Carousel.Caption>  
                        <h3>Bienvenue </h3>  
                    </Carousel.Caption>
                </Carousel.Item>  
                <Carousel.Item style={{'height':"300px"}}>  
                    <img style={{'height':"300px"}} className="d-block w-100" src={'assets/img/students2.jpg'}    />  
                    <Carousel.Caption>  
                        <h3>Vous pouvez consultez votre bultin</h3>  
                    </Carousel.Caption>  
                </Carousel.Item>  
                <Carousel.Item style={{'height':"300px"}}>  
                    <img style={{'height':"300px"}} className="d-block w-100" src={'assets/img/students3.jpg'}   />  
                    <Carousel.Caption>  
                        <h3>Notre site web est le bon choix !!</h3>  
                    </Carousel.Caption>  
                </Carousel.Item>
            </Carousel>  
        </div>
      </div>
    );
  }
}

export default Accueil;