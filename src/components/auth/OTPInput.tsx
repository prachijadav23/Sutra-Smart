import React, { useState } from 'react';
import { Button } from '../ui/Button';

interface OTPInputProps {
  onVerify: (otp: string) => void;
  onResend: () => void;
}

export function OTPInput({ onVerify, onResend }: OTPInputProps) {
  const [otp, setOtp] = useState(['', '', '', '', '', '']);

  const handleChange = (index: number, value: string) => {
    if (value.length <= 1 && /^\d*$/.test(value)) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);
      
      if (value && index < 5) {
        const nextInput = document.getElementById(`otp-${index + 1}`);
        nextInput?.focus();
      }
    }
  };

  const handleSubmit = () => {
    onVerify(otp.join(''));
  };

  return (
    <div className="space-y-4">
      <div className="flex justify-center gap-2">
        {otp.map((digit, index) => (
          <input
            key={index}
            id={`otp-${index}`}
            type="text"
            maxLength={1}
            value={digit}
            onChange={(e) => handleChange(index, e.target.value)}
            className="w-12 h-12 text-center border rounded-md bg-gray-700 border-gray-600 text-gray-100"
          />
        ))}
      </div>
      <div className="flex justify-between">
        <Button onClick={handleSubmit}>Verify OTP</Button>
        <Button variant="ghost" onClick={onResend}>Resend OTP</Button>
      </div>
    </div>
  );
}