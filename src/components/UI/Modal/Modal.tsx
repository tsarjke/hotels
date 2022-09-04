import React from 'react';
import Panel from '../Panel/Panel';
import cl from './Modal.module.css';

interface ModalProps {
  children: React.ReactNode;
  title?: string;
  titlePosition?: 'center' | 'rigth' | 'justify' | '';
  className?: string;
}

const Modal: React.FC<ModalProps> = ({
  title, children, titlePosition, className,
}) => (
  <div className={[cl.shadow, className].join(' ')}>
    <div className={cl.blur} />
    <Panel title={title} titlePosition={titlePosition}>
      {children}
    </Panel>
  </div>
);

Modal.defaultProps = {
  title: '',
  titlePosition: '',
  className: '',
};

export default Modal;
