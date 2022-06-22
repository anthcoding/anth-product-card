import React from 'react';
import styles from '../styles/styles.module.css'
import { createContext } from 'react';
import { useProduct } from '../hooks/useProduct';
import { CounterContextProps, Product, onChangeArgs, InitialValues, ProductCartHandlers } from '../interfaces/interfaces';

export const ProductContext = createContext({} as CounterContextProps)
const { Provider } = ProductContext;

export interface Props {
	// children: ReactElement | ReactElement[];
	children: (args: ProductCartHandlers) => JSX.Element;
	product: Product;
	className?: string;
	style?: React.CSSProperties;
	onChange?: (args: onChangeArgs) => void;
	value?: number;
	initialValues?: InitialValues;
}

export const ProductCard = ({ children, product, className, style, onChange, value, initialValues }: Props) => {

	const { counter, increaseBy, maxC, isMaxCountReached, reset } = useProduct({
		initialValues,
		onChange,
		product,
		value,
	})

	return (
		<Provider value={{
			counter,
			increaseBy,
			product,
			maxC,
		}}>
			<div className={`${styles.productCard} ${className}`}
				style={style}
			>
				{children({
					count: counter,
					isMaxCountReached,
					isMaxCount: initialValues?.maxCount,
					product,

					increaseBy,
					reset
				})}
			</div>
		</Provider>
	)
}
