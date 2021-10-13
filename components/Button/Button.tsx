import React from 'react';
import styles from './styles.module.css';
// import { Container } from './styles';

interface ButtonProps {
  name : string,
  href : string
}

const Button = ({ name, href }: ButtonProps) => {
  return <a className={styles.a} href={href}><button className={styles.button}>{name}</button></a>;
}

export default Button;