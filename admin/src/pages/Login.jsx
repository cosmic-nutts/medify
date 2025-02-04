import React, { useState, useContext } from 'react';
import { AdminContext } from '../context/AdminContext';  // Correct import
import axios from 'axios';
import { toast } from 'react-toastify'

const Login = () => {
    const [state, setState] = useState('Admin');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { setAToken, backendURL } = useContext(AdminContext);

    const onSubmitHandler = async (event) => {
        event.preventDefault();
        try {
            const endpoint = state === 'Admin' ? '/api/admin/login' : '/api/doctor/login';
            const { data } = await axios.post(backendURL + endpoint, { email, password });
            if (data.success) {
                localStorage.setItem('aToken',data.token)
                setAToken(data.token);  // Store the token
                // console.log(data.token);  
            }
            else{
                toast.error(data.message)
            }
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <form onSubmit={onSubmitHandler} className="min-h-[80vh] flex items-center justify-center">
            <div className="flex flex-col gap-3 p-8 min-w-[340px] sm:min-w-96 border rounded-xl text-[#5E5E5E] text-sm shadow-lg">
                <p className="text-lg font-semibold text-green-500">
                    <span>{state}</span> Login
                </p>
                <div className="w-full">
                    <p className="mb-1">Email</p>
                    <input
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                        type="email"
                        required
                        className="border p-2 w-full rounded"
                    />
                </div>
                <div className="w-full">
                    <p className="mb-1">Password</p>
                    <input
                        onChange={(e) => setPassword(e.target.value)}
                        value={password}
                        type="password"
                        required
                        className="border p-2 w-full rounded"
                    />
                </div>
                <button className="bg-blue-500 text-white px-4 py-2 rounded w-full mt-3">
                    Login
                </button>
                {
                    state === 'Admin' ?
                        <p>Doctor Login? <span className='text-green-500 underline cursor-pointer' onClick={() => setState('Doctor')}>Click Here</span></p>
                        :
                        <p>Admin Login? <span className='text-green-500 underline cursor-pointer' onClick={() => setState('Admin')}>Click Here</span></p>
                }
            </div>
        </form>
    );
};

export default Login;
