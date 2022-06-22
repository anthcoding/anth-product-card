import React from 'react';
import renderer from 'react-test-renderer'
import { ProductTitle, ProductCard } from '../../src/components';
import { product1 } from '../data/products';


describe('Product Title', () => {
	test("Must show the component correctly with the personalized title", () => {

		const wrapper = renderer.create(
			<ProductTitle title='Custom Product' />
		)
		expect(wrapper.toJSON()).toMatchSnapshot()

	})

	test("Must show the component with the name of the product", () => {

		const wrapper = renderer.create(
			<ProductCard product={product1}>
				{
					() => (
						<ProductTitle />
					)
				}
			</ProductCard>
		)
		expect(wrapper.toJSON()).toMatchSnapshot()

	})
});
