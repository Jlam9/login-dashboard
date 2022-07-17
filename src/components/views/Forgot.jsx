import { useState } from "react";
import { Link } from "react-router-dom";
import Form from '../../utilities/Forms'
const Forgot = () => {

    const [email, setEmail] = useState('');
    const [validate, setValidate] = useState({});

    const validateforgotPassword = () => {
        let isValid = true;

        let validator = Form.validator({
            email: {
                value: email,
                isRequired: true,
                isEmail: true
            }
        });

        if (validator !== null) {
            setValidate({
                validate: validator.errors
            })

            isValid = false
        }
        return isValid;
    }

    const forgotPassword = (e) => {
        e.preventDefault();

        const validate = validateforgotPassword();
        if (validate) {
            // alert('Reset password link is sent to '+email);
            document.getElementById('form').hidden = true;
            document.getElementById('mailSent').removeAttribute('hidden');
            setTimeout(function(){
                window.location.href = './sign-in';
            }, 3000);
            setValidate({});
            setEmail('');
        }
    }

    return (
        <div className="auth-wrapper">
            <div className="auth-inner">
                <form className="auth-form" id="form" method="POST" onSubmit={forgotPassword} autoComplete={'off'}>
                    <h3>Recover Password</h3>
                    <div className="email mb-3">
                        <input type="email"
                            className={`form-control ${validate.validate && validate.validate.email ? 'is-invalid ' : ''}`}
                            id="email"
                            name="email"
                            value={email}
                            placeholder="Email"
                            onChange={(e) => setEmail(e.target.value)}
                        />

                        <div className={`invalid-feedback text-start ${(validate.validate && validate.validate.email) ? 'd-block' : 'd-none'}`} >
                            {(validate.validate && validate.validate.email) ? validate.validate.email[0] : ''}
                        </div>
                    </div>
                    
                    <div className="text-center">
                        <button type="submit" className="btn btn-primary w-100 theme-btn mx-auto">Forgot Password</button>
                    </div>
                </form>  
                <div id="mailSent" hidden>
                    <h3>Check your email</h3>
                    <div className="mb-3">
                        <p>We have sent a password recover instructions to your email</p>
                    </div>
                </div> 
            </div>   
        </div>   
    );
}

export default Forgot;