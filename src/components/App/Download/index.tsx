import React, { useEffect, useRef, useState } from 'react';
import DownloadIcon from '@mui/icons-material/Download';
import Button from '@mui/material/Button';
import { Wrap } from './styles';

export const Download = () => {
  const deferredPrompt = useRef<any>();
  const [isStandAlone, setIsStandAlone] = useState(false);

  useEffect(() => {
    setIsStandAlone(window.matchMedia('(display-mode: standalone)').matches);
  }, []);

  useEffect(() => {
    const handler = () => {
      setIsStandAlone(true);
    };

    window.addEventListener('appinstalled', handler);
    return () => {
      window.removeEventListener('appinstalled', handler);
    };
  }, []);

  useEffect(() => {
    const handler = (e: any) => {
      deferredPrompt.current = e;
    };

    window.addEventListener('beforeinstallprompt', handler);
    return () => {
      window.removeEventListener('beforeinstallprompt', handler);
    };
  }, []);

  const handleClick = async () => {
    if (deferredPrompt.current) {
      deferredPrompt.current.prompt();
      const { outcome } = await deferredPrompt.current.userChoice;
      if (outcome === 'accepted') {
        deferredPrompt.current = null;
      }
    }
  };

  if (isStandAlone) return null;

  return (
    <Wrap>
      <Button onClick={handleClick}>
        <DownloadIcon />
      </Button>
    </Wrap>
  );
};
