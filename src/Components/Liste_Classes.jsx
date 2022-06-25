import React, { Component } from 'react';
import ClasseService from '../services/ClasseService';

class Liste_Classes extends Component {

    constructor(props){
        super(props)
        
        this.state={
            classes: []
        };
        this.modifierClasse = this.modifierClasse.bind(this);
        this.supprimerClasse = this.supprimerClasse.bind(this);
        this.AjouterClasse = this.AjouterClasse.bind(this);
    }

    componentDidMount(){
        ClasseService.getClasses().then((res) =>{
            this.setState({ classes: res.data});
        });
    }

    modifierClasse(id){
        this.props.history.push(`/modifierClasse/${id}`);
    }
    
    supprimerClasse(id){
        ClasseService.supprimerClasse(id).then(res =>{
            this.setState({classes: this.state.classes.filter(classe =>classe.id !== id)});
        });
    }

    AjouterClasse(){
        this.props.history.push('/ajouterClasse');
    }
    render() {
        return (
            <div>
                <h2 className='text-center p-5' >Liste des classes</h2>
                <div className='row'>
                <button className='btn btn-primary' onClick={this.AjouterClasse}>Ajouter classe</button>
                    <table className='table table-striped table-bordered'>
                        <thead>
                            <tr>
                                <th>ID classe</th>
                                <th>Nom classe</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.classes.map(
                                    classe =>
                                    <tr key={classe.id} >
                                        <td>{classe.id}</td>
                                        <td>{classe.classeName}</td>
                                        <td style={{textAlign:"center"}}>
                                            <button onClick = { () => this.modifierClasse(classe.id)} className="btn btn-info btn-sm">Modifier</button>
                                            <button onClick = { () => this.supprimerClasse(classe.id)} className="btn btn-danger btn-sm">Supprimer</button>
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

export default Liste_Classes;