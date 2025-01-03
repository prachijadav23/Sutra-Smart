import React, { useState } from 'react';
import { AlertCircle } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { BiometricAuth } from '../components/auth/BiometricAuth';
import { OTPInput } from '../components/auth/OTPInput';
import { Button } from '../components/ui/Button';
import { useAuthStore } from '../store/authStore';

export function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [showOTP, setShowOTP] = useState(false);
  const login = useAuthStore((state) => state.login);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      setShowOTP(true);
    } catch (err) {
      setError('Invalid credentials');
    }
  };

  const handleOTPVerify = async (otp: string) => {
    try {
      await login(email, password);
      navigate('/dashboard');
    } catch (err) {
      setError('Invalid OTP');
    }
  };

  const handleBiometricSuccess = async () => {
    try {
      await login(email, password);
      navigate('/dashboard');
    } catch (err) {
      setError('Biometric authentication failed');
    }
  };

  return (
    <div className="min-h-screen bg-midnight-900 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="text-center text-3xl font-bold text-gray-100">
          Sign in to your account
        </h2>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-navy-800 py-8 px-4 shadow sm:rounded-lg sm:px-10">
          {!showOTP ? (
            <>
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div>
                  <label className="block text-sm font-medium text-gray-300">
                    Email
                  </label>
                  <input
                    type="email"
                    required
                    className="mt-1 block w-full rounded-md bg-gray-700 border-gray-600 text-gray-100"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300">
                    Password
                  </label>
                  <input
                    type="password"
                    required
                    className="mt-1 block w-full rounded-md bg-gray-700 border-gray-600 text-gray-100"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>

                {error && (
                  <div className="text-red-400 text-sm flex items-center gap-2">
                    <AlertCircle size={16} />
                    {error}
                  </div>
                )}

                <Button type="submit" className="w-full">
                  Continue
                </Button>
              </form>

              <div className="mt-6">
                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-600" />
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="px-2 bg-navy-800 text-gray-400">
                      Or continue with
                    </span>
                  </div>
                </div>

                <div className="mt-6">
                  <BiometricAuth
                    onSuccess={handleBiometricSuccess}
                    onError={setError}
                  />
                </div>
              </div>
            </>
          ) : (
            <div className="space-y-6">
              <div className="text-center">
                <h3 className="text-lg font-medium text-gray-100">
                  Enter verification code
                </h3>
                <p className="mt-2 text-sm text-gray-400">
                  We sent a code to {email}
                </p>
              </div>

              <OTPInput
                onVerify={handleOTPVerify}
                onResend={() => setShowOTP(true)}
              />
            </div>
          )}

          <div className="mt-6 flex items-center justify-between">
            <div className="text-sm">
              <Link
                to="/forgot-password"
                className="text-accent-cyan hover:text-accent-blue"
              >
                Forgot password?
              </Link>
            </div>
            <div className="text-sm">
              <Link
                to="/signup"
                className="text-accent-cyan hover:text-accent-blue"
              >
                Create account
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}