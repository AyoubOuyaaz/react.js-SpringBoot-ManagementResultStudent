import React, { Component } from 'react';
import EtudiantService from '../services/EtudiantService';
import { withRouter } from "react-router-dom";

class ModifierEtudiantComponent extends Component {

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

            id:this.props.match.params.id,
            cne:"",
            nom:"",
            prenom:"",
            adresse:"",
            email:"",
            classe:"",
            groupe:""
        }
        this.ChangeCneHandler = this.ChangeCneHandler.bind(this);
        this.ChangeNomHandler = this.ChangeNomHandler.bind(this);
        this.ChangePrenomHandler = this.ChangePrenomHandler.bind(this);
        this.ChangeAdresseHandler = this.ChangeAdresseHandler.bind(this);
        this.ChangeEmailHandler = this.ChangeEmailHandler.bind(this);
        this.ChangeClasseHandler = this.ChangeClasseHandler.bind(this);
        this.ChangeGroupeHandler = this.ChangeGroupeHandler.bind(this);

        this.modifierEtudiant = this.modifierEtudiant.bind(this);
    }

    

    ChangeCneHandler = (event) => {
        this.setState({cne: event.target.value});
    }
    ChangeNomHandler = (event) => {
        this.setState({nom: event.target.value});
    }
    ChangePrenomHandler = (event) => {
        this.setState({prenom: event.target.value});
    }
    ChangeAdresseHandler = (event) => {
        this.setState({adresse: event.target.value});
    }
    ChangeEmailHandler = (event) => {
        this.setState({email: event.target.value});
    }
    ChangeClasseHandler = (event) => {
        this.setState({classe: event.target.value});
    }
    ChangeGroupeHandler = (event) => {
        this.setState({groupe: event.target.value});
    }

    modifierEtudiant = (event) => {
        event.preventDefault();
        let etudiant = {cne: this.state.cne, nom:this.state.nom, prenom: this.state.prenom, adresse: this.state.adresse, email: this.state.email, classe: this.state.classe, groupe: this.state.groupe};
        console.log('etudiant => '+ JSON.stringify(etudiant));

        EtudiantService.modifieEtudiant(this.state.id, etudiant).then(res =>{
            this.props.history.push('/listeEtudiants')
        });
    }

    componentDidMount(){
        EtudiantService.AfficherEtudiantById(this.state.id).then((res) =>{
            let etudiant = res.data;
            this.setState({cne: etudiant.cne,
                nom: etudiant.nom,
                prenom: etudiant.prenom,
                adresse: etudiant.adresse,
                email: etudiant.email,
                classe: etudiant.classe,
                groupe: etudiant.groupe
            });
        });
    }

    annuler = () => {
        this.props.history.push('/listeEtudiants');
    }

    render() {
        return (
            <div>
                <div className='container'>
                    <div className='row p-2'>
                        <div className='card col-md-6 offset-md-3 offset-md-3'>
                            <h3 className='text-center'>Modifier étudiant</h3>
                            <div className='card-body'>
                                <form>
                                    <div className='form-group'>
                                        <label>CNE</label>
                                        <input placeholder='entrer le cne' name='cne' className='form-control'
                                              value={this.state.cne} onChange={this.ChangeCneHandler} />
                                    </div>
                                    <div className='form-group'>
                                        <label>Nom</label>
                                        <input placeholder='entrer le nom' name='nom' className='form-control'
                                              value={this.state.nom} onChange={this.ChangeNomHandler} />
                                    </div>
                                    <div className='form-group'>
                                        <label>Prenom</label>
                                        <input placeholder='entrer le prenom' name='prenom' className='form-control'
                                              value={this.state.prenom} onChange={this.ChangePrenomHandler} />
                                    </div>
                                    <div className='form-group'>
                                        <label>Adresse</label>
                                        <input placeholder="entrer l'adresse" name='adresse' className='form-control'
                                              value={this.state.adresse} onChange={this.ChangeAdresseHandler} />
                                    </div>
                                    <div className='form-group'>
                                        <label>Email</label>
                                        <input placeholder="entrer l'email" name='email' className='form-control'
                                              value={this.state.email} onChange={this.ChangeEmailHandler} />
                                    </div>
                                    <div className='form-group'>
                                        <label>Classe</label>
                                        <div>
                                            <select className="form-select" aria-label="Default select example" value={this.state.classe} onChange={this.ChangeClasseHandler}>
                                                <option selected>Open this select menu</option>
                                                {this.state.options.map((option) => (
                                                    <option value={option.value}>{option.label}</option>
                                                ))}
                                            </select>
                                        </div>
                                    </div>
                                    <div className='form-group'>
                                        <label>Groupe</label>
                                        <input name='groupe' className='form-control'
                                              value={this.state.groupe} onChange={this.ChangeGroupeHandler} />
                                    </div>
                                    <div className='form-group p-1'>
                                        <button className='btn btn-success' onClick={this.modifierEtudiant}>Modifier</button>
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

export default ModifierEtudiantComponent;