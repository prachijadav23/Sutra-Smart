import React, { useState, useRef } from 'react';
import { Scan, AlertCircle } from 'lucide-react';
import { Button } from '../ui/Button';
import { verifyFace } from '../../services/authService';

interface Props {
  onSuccess: () => void;
  onError: (error: string) => void;
}

export function FaceRecognition({ onSuccess, onError }: Props) {
  const [isScanning, setIsScanning] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleScan = async () => {
    setIsScanning(true);
    try {
      const result = await verifyFace();
      if (result.success) {
        onSuccess();
      } else {
        onError(result.error || 'Face verification failed');
      }
    } catch (error) {
      onError('Failed to initialize face scanner');
    } finally {
      setIsScanning(false);
    }
  };

  return (
    <div className="space-y-4">
      <div className="relative aspect-video max-w-sm mx-auto rounded-lg overflow-hidden bg-gray-800">
        {isScanning && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-48 h-48 border-2 border-accent-cyan rounded-full animate-pulse" />
          </div>
        )}
        <video
          ref={videoRef}
          className={`w-full ${isScanning ? 'opacity-50' : 'hidden'}`}
          autoPlay
          muted
          playsInline
        />
      </div>
      <Button
        onClick={handleScan}
        disabled={isScanning}
        className="w-full flex items-center justify-center gap-2"
      >
        <Scan size={20} />
        {isScanning ? 'Scanning...' : 'Scan Face'}
      </Button>
    </div>
  );
}