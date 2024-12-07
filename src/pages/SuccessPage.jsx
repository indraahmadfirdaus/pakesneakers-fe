import React from 'react';
import { CheckCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const SuccessPage = () => {
    const nav = useNavigate()

    return (
        <div className="min-h-screen flex items-center justify-center bg-base-200">
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body items-center text-center">
                    <CheckCircle className="w-16 h-16 text-success" />
                    <h2 className="card-title text-2xl font-bold mt-4">Payment Successful!</h2>
                    <p className="text-base-content/70 mt-2">
                        Thank you for your purchase. Your order has been processed successfully.
                    </p>
                    <div className="card-actions mt-6">
                        <button
                            className="btn btn-primary"
                            onClick={() => {
                                nav('/')
                            }}
                        >
                            Return to Home
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SuccessPage;