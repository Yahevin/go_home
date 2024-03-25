import React, { MouseEvent } from 'react';
import { createPortal } from 'react-dom';

import { Overlay, Wrap } from './styles';

type Props = {
  children: React.ReactNode;
  isOpen: boolean;
  onClose: () => void;
};
export const Modal: React.FC<Props> = ({ children, isOpen, onClose }) => {
  if (!isOpen) return null;

  return createPortal(
    <Overlay onClick={onClose}>
      <Wrap
        onClick={(e: MouseEvent<HTMLDivElement>) => {
          e.stopPropagation();
        }}
      >
        {children}
      </Wrap>
    </Overlay>,
    document.getElementById('overlay')
  );
};
