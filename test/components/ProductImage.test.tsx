import React from 'react';
import renderer from 'react-test-renderer'
import { ProductImage, ProductCard } from '../../src/components';
import { product2 } from '../data/products';


describe('Product Image', () => {
	test("Must show the component correctly with the personalized image", () => {

		const wrapper = renderer.create(
			<ProductImage img="https://hola.jpg" />
		)
		expect(wrapper.toJSON()).toMatchSnapshot()

	})

	test("Must show the component with the image of the product", () => {

		const wrapper = renderer.create(
			<ProductCard product={product2}>
				{
					() => (
						<ProductImage />
					)
				}
			</ProductCard>
		)
		expect(wrapper.toJSON()).toMatchSnapshot()

	})
});
