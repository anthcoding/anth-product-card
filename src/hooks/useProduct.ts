import { useEffect, useState, useRef } from 'react';
import { onChangeArgs, Product, InitialValues } from '../interfaces/interfaces';

interface useProductArgs {
	product: Product;
	onChange?: (args: onChangeArgs) => void;
	value?: number;
	initialValues?: InitialValues
}

export const useProduct = ({onChange, product, value = 0, initialValues}: useProductArgs) => {

	const [counter, setCounter] = useState<number>(initialValues?.count || value)
	const isMounted = useRef(false);
	const maxC = initialValues?.maxCount;

	console.log(initialValues)
	
	const increaseBy = (value: number) => {

		let newValue = Math.max(counter + value, 0);
		
		if(maxC) {
			newValue = Math.min(newValue, maxC)
		}
		
		setCounter(newValue);

		onChange && onChange({ count: newValue, product });
	}

	const reset = () => {
		setCounter(initialValues?.count || value)
	}

	useEffect(() => {
		if( !isMounted.current ) return;

		setCounter(value)
	},[value])

	useEffect(() => {
		isMounted.current = true;
	}, [])

	return  {
		counter,
		increaseBy,
		isMaxCountReached: !!initialValues?.count && initialValues.maxCount === counter,
		maxC,
		reset
	}
}
