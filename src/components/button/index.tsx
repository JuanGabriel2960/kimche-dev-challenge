import React from 'react';
import './styles.css';

interface Props {
  text: string;
  active?: boolean;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

export const Button = ({ text, active = false, onClick }: Props) => {
  return (
    <button className={`button ${active ? 'bg-primary-blue text-white' : 'bg-secondary-gray text-gray-400'}`} onClick={onClick}>{text}</button>
  )
}
