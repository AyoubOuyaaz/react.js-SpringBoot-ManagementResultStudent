import React, { Component } from 'react';

class LogIn extends Component {
    
    constructor(props){

        super(props);
        this.state={

        }
        this.linkpage = this.linkpage.bind(this);
    }

    linkpage(){
        this.props.history.push('/accueil');
    }
    render() {
        return (
            <div>
                <div className='container'>
                    <div className='row p-2'>
                        <div className='card col-md-6 offset-md-3 offset-md-3'>
                            <h3 className='text-center'>Connexion</h3>
                            <div className='card-body'>
                                <form>
                                    <div className='form-group'>
                                        <label>LogIn</label>
                                        <input placeholder='login' name='login' className='form-control'
                                            onChange={this.ChangeNomHandler} />
                                    </div>
                                    <div className='form-group'>
                                        <label>Password</label>
                                        <input placeholder='password' type={'password'} name='password' className='form-control'
                                            onChange={this.ChangeNomHandler} />
                                    </div>
                                    <div className='form-group p-1'>
                                        <button className='btn btn-success' onClick={this.linkpage}>Connéctez-vous</button>
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

export default LogIn;