import React, { Component } from 'react';

class FooterComponent extends Component {
    constructor(props){
        super(props)

        this.state = {

        }
    }

    render() {
        return (
            <div className='p-5'>
                <footer className='footer fixed-bottom'>
                    <span className='text-muted'>Tous les droits réservés 2022 @GestionRésultats</span>
                </footer>
            </div>
        );
    }
}

export default FooterComponent;