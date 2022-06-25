import axios from 'axios'

const api_classe = "http://localhost:9190/api/classes";
const api_ajouter_classe = "http://localhost:9190/api/add_classe";

class ClasseService{
    
    getClasses(){
        return axios.get(api_classe);
    }

    ajouterClasse(classe){
        return axios.post(api_ajouter_classe, classe);
    }

    AfficherClasseById(id){
        return axios.get(api_classe+"/"+id);
    }

    modifierClasse(id, classe){
        return axios.put(api_classe+"/"+id,classe);
    }

    supprimerClasse(id){
        return axios.delete(api_classe+"/"+id);
    }

}

export default new ClasseService();