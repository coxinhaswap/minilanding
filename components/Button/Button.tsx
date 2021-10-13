import React from 'react';
import styles from './styles.module.css';
// import { Container } from './styles';

export interface ButtonProps {
  name : string,
  href : string
}

export const Button = ({ name, href }: ButtonProps) => {
  return <a target="_blank" className={styles.a} href={href}><button className={styles.button}>{name}</button></a>;
}
