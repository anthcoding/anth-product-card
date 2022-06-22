import React from 'react';
import { useContext } from "react"
import styles from '../styles/styles.module.css'
import { ProductContext } from "./ProductCard";

interface TitleProps {
	className?: string;
	title?: string;
	style?: React.CSSProperties
}

export const ProductTitle = ({ title, style }: TitleProps) => {
	const { product } = useContext(ProductContext)

	return (
		<span className={`${styles.productDescription}`} style={style} >{title ? title : product.title}</span>
	)
}
