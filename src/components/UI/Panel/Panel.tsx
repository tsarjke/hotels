import React from 'react';
import cl from './Panel.module.css';

interface PanelProps {
  children: React.ReactNode;
  title?: string;
  titlePosition?: 'center' | 'rigth' | 'justify' | '';
  className?: string;
}

const Panel: React.FC<PanelProps> = ({
  title, children, titlePosition, className,
}) => (
  <div className={[className, cl.container].join(' ')}>
    {title && (
      <h2 className={titlePosition ? [cl.title, cl[titlePosition]].join(' ') : cl.title}>
        {title}
      </h2>
    )}
    {children}
  </div>
);

Panel.defaultProps = {
  title: '',
  titlePosition: '',
  className: '',
};

export default Panel;
