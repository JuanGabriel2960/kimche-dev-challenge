import React from 'react';
import './styles.css';

interface Props {
  text: string;
  active?: boolean;
}

export const Button = ({ text, active = false }: Props) => {
  return (
    <button className={`button ${active ? 'bg-primary-blue text-white' : 'bg-secondary-gray'}`}>{text}</button>
  )
}
