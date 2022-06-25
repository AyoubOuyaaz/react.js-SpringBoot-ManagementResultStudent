import axios from 'axios'

const api_etudiant = "http://localhost:9190/api/etudiants";
const api_ajouter_etudiant = "http://localhost:9190/api/add_etudiant";

class EtudiantService{
    
    getEtudiants(){
        return axios.get(api_etudiant);
    }

    ajouterEtudiant(etudiant){
        return axios.post(api_ajouter_etudiant, etudiant);
    }

    AfficherEtudiantById(id){
        return axios.get(api_etudiant+"/"+id);
    }

    modifieEtudiant(id, etudiant){
        return axios.put(api_etudiant+"/"+id,etudiant);
    }

    supprimerEtudiant(id){
        return axios.delete(api_etudiant+"/"+id);
    }


}

export default new EtudiantService();