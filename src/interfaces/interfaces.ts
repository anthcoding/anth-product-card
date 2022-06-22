export interface Product {
	id: string;
	img?: string;
	title: string;
}

export interface CounterContextProps {
	counter: number;
	increaseBy: (value: number) => void;
	maxC?: number
	product: Product;
}

export interface onChangeArgs {
	count: number
	product: Product,
}

export interface ProductInCart extends Product {
	count: number
}

export interface InitialValues {
	count?: number;
	maxCount?: number;
}

export interface ProductCartHandlers {
	count: number;
	isMaxCountReached: boolean;
	isMaxCount?: number;
	product: Product;
	increaseBy: (value: number) => void;
	reset: () => void;
}