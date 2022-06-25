import './App.css';
import Liste_etudiants from './Components/Liste_etudiants';
import Liste_Classes from './Components/Liste_Classes';
import HeaderComponent from './Components/HeaderComponent';
import FooterComponent from './Components/FooterComponent';
import Accueil from './Components/Accueil';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import React from 'react';
import AjouterEtudiantComponent from './Components/AjouterEtudiantComponent';
import ModifierEtudiantComponent from './Components/ModifierEtudiantComponent';
import ModifierClasseComponent from './Components/ModifierClasseComponent';
import AjouterClasseComponent from './Components/AjouterClasseComponent';
import AfficherResultat from './Components/AfficherResultat';
import AjouterResultatComponent from './Components/AjouterResultatComponent';
import LogIn from './Components/LogIn';

function App() {
  return (
    <div>
        <Router>
                <HeaderComponent />
                    <div className="container">
                        <Switch>
                            <Route path="/accueil" component={Accueil}></Route>
                            <Route path="/listeEtudiants" component={Liste_etudiants}></Route>
                            <Route path="/listeClasses" component={Liste_Classes}></Route>
                            <Route path="/ajouterEtudiant" component={AjouterEtudiantComponent}></Route>
                            <Route path="/modifierEtudiant/:id" component={ModifierEtudiantComponent}></Route>
                            <Route path="/ajouterClasse" component={AjouterClasseComponent}></Route>
                            <Route path="/modifierClasse/:id" component={ModifierClasseComponent}></Route>
                            <Route path="/ajouterResultat" component={AjouterResultatComponent}></Route>
                            <Route path="/afficherResultat" component={AfficherResultat}></Route>
                            <Route path="/" exact component={LogIn}></Route>
                        </Switch>
                    </div>
                <FooterComponent />
        </Router>
    </div>
  );
}

export default App;
