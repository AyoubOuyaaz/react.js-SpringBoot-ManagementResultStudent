import React, { Component } from 'react';
import jsPDF from 'jspdf';
import ResultatService from '../services/ResultatService';

class AfficherResultat extends Component {

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
              resultats: [],
              id:this.props.match.params.id,
              NomClasse:"",
              cne:"",
              NomEtudiant:"",
              PrenomEtudiant:"",
              note1:"",
              note2:"",
              note3:"",
              note4:"",
              note5:"",
              note6:""
        }

        this.ChangeCneHandler = this.ChangeCneHandler.bind(this);
        this.ChangeClasseHandler = this.ChangeClasseHandler.bind(this);
        this.PDFResultat = this.PDFResultat.bind(this);
    }

    ChangeCneHandler = (event) => {
        this.setState({cne: event.target.value});
    }
    ChangeClasseHandler = (event) => {
        this.setState({classe: event.target.value});
    }

    PDFResultat = () =>{

        var doc = new jsPDF('p','pt');

        doc.text(40, 40, 'NOM: Ouyaaz  PRENOM: Ayoub');
        doc.text(70, 90, 'CNE : C-000112');
        doc.text(70, 110, 'CLASSE : 5 ème Année IIR');
        
        doc.setFont('courier');
        doc.text(150, 200, 'LANGUES : 12,50                      Coef:2');
        doc.text(150, 240, 'DEVELOPPEMENT : 14                   Coef:5');
        doc.text(150, 280, 'OUTILS DE PROGRAMMATION : 16         Coef:4');
        doc.text(150, 320, 'BASE DE DONNEES : 15,50              Coef:4');
        doc.text(150, 360, "SYSTEMES D'INFORMATION : 11          Coef:3");
        doc.text(150, 400, 'SYSTEMES ET RESEAUX : 10             Coef:5');

        doc.setFont('');
        doc.text(150, 600, 'Note Finale : 13,81');


        doc.save("Résultat.pdf");



    }

    componentDidMount(){
        ResultatService.AfficherResultatById(this.state.id).then((res) =>{
            let resultat = res.data;
            this.setState({cne: resultat.cne,
                NomClasse: resultat.NomClasse,
                cne: resultat.cne,
                NomEtudiant: resultat.NomEtudiant,
                PrenomEtudiant: resultat.PrenomEtudiant,
                note1: resultat.note1,
                note2: resultat.note2,
                note3: resultat.note3,
                note4: resultat.note4,
                note5: resultat.note5,
                note6: resultat.note6
            });
        });
    }


    render() {
        return (
            <div>
                <h2 className='text-center p-2' >Afficher votre résultat</h2>
                <form>
                    <div className='form-group'>
                        <label>CNE</label>
                        <input placeholder='entrer votre cne' name='cne' className='form-control'
                                value={this.state.cne} onChange={this.ChangeCneHandler} />
                    </div> <br />
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
                    </div> <br/> <br/> <br/> <br/> <br/> <br/> <br/>
                </form>
                <div className='row'>
                    <div className='col-12 col-sm-6 col-md-8'>
                        <button className='btn btn-primary btn-lg' onClick={this.PDFResultat}>Consulter votre résultat</button>
                    </div>
                    <div className='col-6 col-md-4'>
                        <button className='btn btn-danger btn-lg' onClick={()=>{this.props.history.push('/accueil')}}>Annuler</button>
                    </div>
                    
                </div>
                {console.log("ttttttt"+this.state.NomEtudiant)}
            </div>
        );
    }
}

export default AfficherResultat;