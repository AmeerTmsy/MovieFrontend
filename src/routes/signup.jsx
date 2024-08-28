import React from 'react';
import SignupForm from './components/signupForm';

function Signup(props) {
    return (
        <main className='container mx-auto py-10'>
            <section className=''>
                <h2 className='text-3xl font-bold'>Signup</h2>
                <SignupForm />
            </section>
        </main>
    );
}

export default Signup;