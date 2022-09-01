import React from 'react';
import Panel from '../Panel/Panel';
import cl from './Modal.module.css';

interface ModalProps {
  children: React.ReactNode;
  title?: string;
  titlePosition?: 'center' | 'rigth' | 'justify' | '';
}

const Modal: React.FC<ModalProps> = ({ title, children, titlePosition }) => (
  <div className={cl.shadow}>
    <div className={cl.blur} />
    <Panel title={title} titlePosition={titlePosition}>
      {children}
    </Panel>
  </div>
);

Modal.defaultProps = {
  title: '',
  titlePosition: '',
};

export default Modal;
