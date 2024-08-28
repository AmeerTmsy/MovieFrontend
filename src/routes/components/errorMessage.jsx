import React from 'react';

function ErrorMessage(props) {

    const { type, field } = props;
    let errorMessage;
    if(type === 'maxLength'){
        errorMessage = `${field} must be less than or equale to 10 letters`;
        // console.log(`${field} must be less than or equale to 10 letters`)
    }else if(type === 'required'){
        errorMessage = `${field} is required`;
        // console.log(`${field} is required`)
    }else if( type === 'pattern' && field === 'Password'){
        errorMessage = "Password must be 6-16 characters and include at least one lowercase letter, one uppercase letter, one number, and one special character";
    }
    return (
        <span>{errorMessage}</span>
    );
}

export default ErrorMessage;