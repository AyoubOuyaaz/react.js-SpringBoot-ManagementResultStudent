import axios from 'axios'

const api_resultat = "http://localhost:9190/api/resultats";
const api_ajouter_resultat = "http://localhost:9190/api/add_resultat";

class ResultatService{
    
    getResultats(){
        return axios.get(api_resultat);
    }

    ajouterResultat(resultat){
        return axios.post(api_ajouter_resultat, resultat);
    }

    AfficherResultatById(id){
        return axios.get(api_resultat+"/"+id);
    }

    supprimerResultat(id){
        return axios.delete(api_resultat+"/"+id);
    }


}

export default new ResultatService();