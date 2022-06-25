import React, { Component } from 'react';
import ClasseService from '../services/ClasseService';
import EtudiantService from '../services/EtudiantService';

class AjouterClasseComponent extends Component {

    constructor(props){
        super(props)
        
        this.state={
            classeName:""
        }
        this.ChangeNomHandler = this.ChangeNomHandler.bind(this);

        this.ajouterClasse = this.ajouterClasse.bind(this);
    }

    ChangeNomHandler = (event) => {
        this.setState({classeName: event.target.value});
    }
    
    ajouterClasse = (event) => {
        event.preventDefault();
        let classe = {classeName: this.state.classeName};
        console.log('classe => '+ JSON.stringify(classe));

        ClasseService.ajouterClasse(classe).then(res =>{
            this.props.history.push("/listeClasses");
        });
    }

    annuler = () => {
        this.props.history.push('/listeClasses');
    }

    render() {
        return (
            <div>
                <div className='container'>
                    <div className='row p-2'>
                        <div className='card col-md-6 offset-md-3 offset-md-3'>
                            <h3 className='text-center'>Ajouter classe</h3>
                            <div className='card-body'>
                                <form>
                                    <div className='form-group'>
                                        <label>Nom classe</label>
                                        <input placeholder='nom classe' name='classeName' className='form-control'
                                              value={this.state.classeName} onChange={this.ChangeNomHandler} />
                                    </div>
                                    <div className='form-group p-1'>
                                        <button className='btn btn-success' onClick={this.ajouterClasse}>Ajouter</button>
                                        <button className='btn btn-danger' onClick={this.annuler.bind(this)} style={{marginLeft: "10px"}}>Annuler</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default AjouterClasseComponent;