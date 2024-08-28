import React from 'react';
import LoginForm from './components/LoginForm';

const Login = () => {
    return (
        <main className='py-10 container mx-auto'>
            <section>
                <h2 className="text-3xl font-bold">Login</h2>
                <LoginForm />
            </section>
        </main>
    );
};

export default Login;