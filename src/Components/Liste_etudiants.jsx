import React, { Component } from 'react';
import { generatePath } from 'react-router-dom';
import EtudiantService from '../services/EtudiantService';

class Liste_etudiants extends Component {

    constructor(props){
        super(props)
        
        this.state={
            etudiants: []
        }
        this.AjouterEtudiant = this.AjouterEtudiant.bind(this);
        this.modifierEtudiant = this.modifierEtudiant.bind(this);
        this.supprimerEtudiant = this.supprimerEtudiant.bind(this);
    }

    supprimerEtudiant(id){
        EtudiantService.supprimerEtudiant(id).then(res =>{
            this.setState({etudiants: this.state.etudiants.filter(etudiant =>etudiant.id !== id)});
        });
    }
    modifierEtudiant(id){
        this.props.history.push(`/modifierEtudiant/${id}`);
    }
    
    componentDidMount(){
        EtudiantService.getEtudiants().then((res) =>{
            this.setState({ etudiants: res.data});
        });
    }

    AjouterEtudiant(){
        this.props.history.push('/ajouterEtudiant');
    }

    render() {
        return (
            <div>
                <h2 className='text-center p-2' >Liste des étudiants</h2>
                <div className='row'>
                    <button className='btn btn-primary' onClick={this.AjouterEtudiant}>Ajouter étudiant</button>
                </div>
                <div className='row'>
                    <table className='table table-striped table-bordered'>
                        <thead>
                            <tr>
                                <th>CNE étudiant</th>
                                <th>Nom étudiant</th>
                                <th>Prenom étudiant</th>
                                <th>Adresse étudiant</th>
                                <th>Email étudiant</th>
                                <th>Classe étudiant</th>
                                <th>Groupe étudiant</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.etudiants.map(
                                    etudiant =>
                                    <tr key={etudiant.id} >
                                        <td>{etudiant.cne}</td>
                                        <td>{etudiant.nom}</td>
                                        <td>{etudiant.prenom}</td>
                                        <td>{etudiant.adresse}</td>
                                        <td>{etudiant.email}</td>
                                        <td>{etudiant.classe}</td>
                                        <td>{etudiant.groupe}</td>
                                        <td>
                                            <button onClick = { () => this.modifierEtudiant(etudiant.id)} className="btn btn-info btn-sm">Modifier</button>
                                            <button onClick = { () => this.supprimerEtudiant(etudiant.id)} className="btn btn-danger btn-sm">Supprimer</button>
                                        </td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                    <button onClick={()=>{this.props.history.push('/accueil')}} className='btn btn-danger'>Annuler</button>
                </div>
            </div>
        );
    }
}

export default Liste_etudiants;