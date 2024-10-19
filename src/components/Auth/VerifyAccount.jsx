import React, { useEffect, useState } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { account } from '../../lib/appwrite'; // assuming you have this set up for Appwrite SDK
import { Spin, notification } from 'antd';

const VerifyAccount = () => {
    const [searchParams] = useSearchParams();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const verifyAccount = async (userId, secret) => {
        setLoading(true);
        console.log('userid : ', userId);
        console.log('secret : ', secret);
        try {
            await account.updateVerification(userId, secret);
            notification.success({
                message: 'Account Verified',
                description: 'Your account has been successfully verified!',
            });
            navigate('/login');
        } catch (err) {
            console.error('Verification Error: ', err);
            setError('Verification failed. Please try again or contact support.');
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        const userId = searchParams.get('userId');
        const secret = searchParams.get('secret');

        if (userId && secret) {
            verifyAccount(userId, secret);
        } else {
            setError('Invalid verification link.');
        }
    }, [searchParams]);

    return (
        <div className="flex justify-center items-center h-screen bg-gray-100">
            <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-8">
                <h2 className="text-2xl font-bold text-center mb-6">Account Verification</h2>
                {loading ? (
                    <Spin size="large" />
                ) : error ? (
                    <p className="text-red-500 text-center">{error}</p>
                ) : (
                    <p className="text-green-500 text-center">Verifying your account...</p>
                )}
            </div>
        </div>
    );
};

export default VerifyAccount;