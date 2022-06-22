import React from "react";
import { useContext } from "react";
import styles from '../styles/styles.module.css'
import { ProductContext } from "./ProductCard";

interface ButtonsProps {
	className?: string;
	style?: React.CSSProperties;
}

export const ProductButtons = ({ className, style }: ButtonsProps) => {
	const { increaseBy, counter, maxC } = useContext(ProductContext);

	console.log('Hoola')

	return (
		<div className={`${styles.buttonsContainer} ${className}`}
			style={style}
		>
			<button className={styles.buttonMinus} onClick={() => increaseBy(-1)}>-</button>
			<div className={styles.countLabel}> {counter} </div>
			<button className={`${styles.buttonAdd} ${maxC && counter >= maxC ? 'disabled' : ''}`} onClick={() => increaseBy(1)}>+</button>
		</div>
	);
}
