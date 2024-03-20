import React from 'react';
import Form from '../../components/Form/index';

import './index.css'

function Login() {

    return (
        <div className='signin-page'>
            <div className='bg-dark'>
                {/* retour au formulaire du composant返回表单 */}
            <Form />
            </div>
        </div>

    )
}

export default Login;