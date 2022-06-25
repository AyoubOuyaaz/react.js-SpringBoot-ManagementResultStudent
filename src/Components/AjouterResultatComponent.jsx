import React, { Component } from 'react';
import ResultatService from '../services/ResultatService';

class AjouterResultatComponent extends Component {

    constructor(props){
        super(props)
        
        this.state={
            options: [
                {
                  label: "5 ème Année IIR",
                  value: "5 ème Année IIR",
                },
                {
                  label: "4 ème Année IIR",
                  value: "4 ème Année IIR",
                },
                {
                  label: "3 ème Année IIR",
                  value: "3 ème Année IIR",
                },
                {
                  label: "2 ème Année IIR",
                  value: "2 ème Année IIR",
                },
                {
                  label: "1 ér Année IIR",
                  value: "1 ér Année IIR",
                },
              ],

            classes: [],
            NomClasse:"",
            cne:"",
            NomEtudiant:"",
            PrenomEtudiant:"",
            note1:"",
            note2:"",
            note3:"",
            note4:"",
            note5:"",
            note6:"",
        }
        this.ChangeNomClasseHandler = this.ChangeNomClasseHandler.bind(this);
        this.ChangeCneHandler = this.ChangeCneHandler.bind(this);
        this.ChangeNomEtudiantHandler = this.ChangeNomEtudiantHandler.bind(this);
        this.ChangePrenomEtudiantHandler = this.ChangePrenomEtudiantHandler.bind(this);
        this.ChangeNote1Handler = this.ChangeNote1Handler.bind(this);
        this.ChangeNote2Handler = this.ChangeNote2Handler.bind(this);
        this.ChangeNote3Handler = this.ChangeNote3Handler.bind(this);
        this.ChangeNote4Handler = this.ChangeNote4Handler.bind(this);
        this.ChangeNote5Handler = this.ChangeNote5Handler.bind(this);
        this.ChangeNote6Handler = this.ChangeNote6Handler.bind(this);

        this.ajouterResultat = this.ajouterResultat.bind(this);
        this.ajouterResult = this.ajouterResult.bind(this);
    }

    ChangeNomClasseHandler = (event) => {
        this.setState({NomClasse: event.target.value});
    }
    ChangeCneHandler = (event) => {
        this.setState({cne: event.target.value});
    }
    ChangeNomEtudiantHandler = (event) => {
        this.setState({NomEtudiant: event.target.value});
    }
    ChangePrenomEtudiantHandler = (event) => {
        this.setState({PrenomEtudiant: event.target.value});
    }
    ChangeNote1Handler = (event) => {
        this.setState({note1: event.target.value});
    }
    ChangeNote2Handler = (event) => {
        this.setState({note2: event.target.value});
    }
    ChangeNote3Handler = (event) => {
        this.setState({note3: event.target.value});
    }
    ChangeNote4Handler = (event) => {
        this.setState({note4: event.target.value});
    }
    ChangeNote5Handler = (event) => {
        this.setState({note5: event.target.value});
    }
    ChangeNote6Handler = (event) => {
        this.setState({note6: event.target.value});
    }

    ajouterResultat = (event) => {
        event.preventDefault();
        let resultat = {NomClasse: this.state.NomClasse, cne: this.state.cne, NomEtudiant: this.state.NomEtudiant, PrenomEtudiant: this.state.PrenomEtudiant, note1: this.state.note1, note2: this.state.note2, note3: this.state.note3, note4: this.state.note4, note5: this.state.note5, note6: this.state.note6};
        console.log('resultat => '+ JSON.stringify(resultat));

        ResultatService.ajouterResultat(resultat).then(res =>{
            this.props.history.push('/afficherResultat');
        });
    }

    ajouterResult(){
        this.props.history.push('/afficherResultat');
    }
    annuler = () => {
        this.props.history.push('/accueil');
    }

    render() {
        return (
            <div>
                <div className='container'>
                    <div className='row p-2'>
                        <div className='card col-md-6 offset-md-3 offset-md-3'>
                            <h3 className='text-center'>Ajouter résultat</h3>
                            <div className='card-body'>
                                <form>
                                    <div className='form-group'>
                                        <label>Classe</label>
                                        <div>
                                            <select className="form-select" aria-label="Default select example" value={this.state.NomClasse} onChange={this.ChangeNomClasseHandler}>
                                                <option selected>séléctionner votre classe</option>
                                                {this.state.options.map((option) => (
                                                    <option value={option.value}>{option.label}</option>
                                                ))}
                                            </select>
                                        </div>
                                    </div>
                                    <div className='form-group'>
                                        <label>Cne étudiant</label>
                                        <input placeholder='cne étudiant' name='cne' className='form-control'
                                              value={this.state.cne} onChange={this.ChangeCneHandler} />
                                    </div>
                                    <div className='form-group'>
                                        <label>Nom étudiant</label>
                                        <input placeholder='nom étudiant' name='NomEtudiant' className='form-control'
                                              value={this.state.NomEtudiant} onChange={this.ChangeNomEtudiantHandler} />
                                    </div>
                                    <div className='form-group'>
                                        <label>Prenom étudiant</label>
                                        <input placeholder='prenom étudiant' name='PrenomEtudiant' className='form-control'
                                              value={this.state.PrenomEtudiant} onChange={this.ChangePrenomEtudiantHandler} />
                                    </div>
                                    <div className='form-group'>
                                        <label>LANGUES</label>
                                        <input placeholder='entrer la note' name='note1' className='form-control'
                                              value={this.state.note1} onChange={this.ChangeNote1Handler} />
                                    </div>
                                    <div className='form-group'>
                                        <label>DEVELOPPEMENT</label>
                                        <input placeholder='entrer la note' name='note2' className='form-control'
                                              value={this.state.note2} onChange={this.ChangeNote2Handler} />
                                    </div>
                                    <div className='form-group'>
                                        <label>OUTILS DE PROGRAMMATION</label>
                                        <input placeholder='entrer la note' name='note3' className='form-control'
                                              value={this.state.note3} onChange={this.ChangeNote3Handler} />
                                    </div>
                                    <div className='form-group'>
                                        <label>BASE DE DONNEES</label>
                                        <input placeholder="entrer la note" name='note4' className='form-control'
                                              value={this.state.note4} onChange={this.ChangeNote4Handler} />
                                    </div>
                                    <div className='form-group'>
                                        <label>SYSTEMES D'INFORMATION</label>
                                        <input placeholder="entrer la note" name='note5' className='form-control'
                                              value={this.state.note5} onChange={this.ChangeNote5Handler} />
                                    </div>
                                    <div className='form-group'>
                                        <label>SYSTEMES ET RESEAUX</label>
                                        <input placeholder="entrer la note" name='note6' className='form-control'
                                              value={this.state.note6} onChange={this.ChangeNote6Handler} />
                                    </div>
                                    <div className='form-group p-1'>
                                        <button className='btn btn-success' onClick={this.ajouterResult}>Ajouter</button>
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

export default AjouterResultatComponent;