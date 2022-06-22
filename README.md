# ANTH-Product-Card

Este es en un paquete de pruebas de despliegue en NPM

### Anthony Lorenzo Garcia

### Ejemplo

```
import {ProductImage, ProductTitle, ProductButtons, ProductCard} from 'anth-product-card';

```

```
<ProductCard
			product={product}
			initialValues={{
				count: 5,
				maxCount: 10,
			}}
			>
			{
				({ increaseBy, isMaxCountReached, count }) => (
					<>
						<ProductImage />
						<ProductTitle />
						<ProductButtons />
					</>
				)
			}
</ProductCard>

```