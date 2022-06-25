import React, { Component } from 'react';

class HeaderComponent extends Component {

    constructor(props){
        super(props)

        this.state = {
            
        }
    }


    render() {
        return (
            <div className='p-5'>
                <header>
                    <nav className='navbar navbar-expand-md navbar-dark bg-dark fixed-top'>
                        <div><a href='https://javaguides.net' className='navbar-brand'>Système de Gestion des Résultats des Etudiants</a></div>
                        <button className="btn btn-link btn-lg text-white" id='btnLogout'>Logout</button>
                    </nav>
                </header>
                
            </div>
        );
    }
}

export default HeaderComponent;