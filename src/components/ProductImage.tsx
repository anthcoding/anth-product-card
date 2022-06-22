import React from 'react';
import { useContext } from "react";
import noImage from '../assets/no-image.jpg'
import styles from '../styles/styles.module.css'
import { ProductContext } from "./ProductCard";

interface ImageProps {
	className?: string;
	img?: string;
	style?: React.CSSProperties
}

export const ProductImage = ({ img = '', className, style }: ImageProps) => {

	const { product } = useContext(ProductContext)

	let imgToShow: string;

	if (img) {
		imgToShow = img;
	} else if (product.img) {
		imgToShow = product.img;
	} else {
		imgToShow = noImage;
	}

	return (
		<img
			className={`${styles.productImg} ${className}`}
			src={imgToShow}
			alt="Product img"
			style={style}
		/>
	)
}