import React from 'react';
import { Fingerprint, Scan } from 'lucide-react';
import { Button } from '../ui/Button';

interface BiometricAuthProps {
  onSuccess: () => void;
  onError: (error: string) => void;
}

export function BiometricAuth({ onSuccess, onError }: BiometricAuthProps) {
  const handleBiometricAuth = async (type: 'face' | 'fingerprint') => {
    try {
      if (!window.PublicKeyCredential) {
        throw new Error('WebAuthn not supported');
      }
      // Simulate biometric auth success for demo
      setTimeout(onSuccess, 1000);
    } catch (error) {
      onError('Biometric authentication failed');
    }
  };

  return (
    <div className="flex gap-4">
      <Button
        variant="secondary"
        onClick={() => handleBiometricAuth('face')}
        className="flex items-center gap-2"
      >
        <Scan size={20} />
        Face ID
      </Button>
      <Button
        variant="secondary"
        onClick={() => handleBiometricAuth('fingerprint')}
        className="flex items-center gap-2"
      >
        <Fingerprint size={20} />
        Fingerprint
      </Button>
    </div>
  );
}