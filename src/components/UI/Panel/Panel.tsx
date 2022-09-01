import React from 'react';
import cl from './Panel.module.css';

interface PanelProps {
  children: React.ReactNode;
  title?: string;
  titlePosition?: 'center' | 'rigth' | 'justify' | '';
}

const Panel: React.FC<PanelProps> = ({ title, children, titlePosition }) => (
  <div className={cl.container}>
    {title && <h2 className={titlePosition ? [cl.title, cl[titlePosition]].join(' ') : cl.title}>{title}</h2>}
    {children}
  </div>
);

Panel.defaultProps = {
  title: '',
  titlePosition: '',
};

export default Panel;
