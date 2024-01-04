import { TbX } from 'react-icons/tb'
import { cart_data } from '../../static/newsData'
import Empty from '../empty/Empty'
import './Cart.css'

const Cart = () => {
	return cart_data.length ? (
		<div className='cart__wrapper container'>
			<h2>SAVATCHA</h2>
			<div className='cart__products'>
				<div className='cart__products_top'>
					<ul>
						<li>Tovar</li>
						<li>Narxi</li>
						<li>Miqdori</li>
						<li>Jami</li>
						<li>Ochirish</li>
					</ul>
				</div>
				<div className='cart__products_body'>
					{cart_data?.map((el, inx) => (
						<div key={inx} className='cart__products_product'>
							<div className='cart__products_product_img'>
								<img src={el?.img} alt='product img' />
							</div>
							<div className='cart__products_product_title'>
								<p>{el?.title}</p>
							</div>
							<div className='cart__products_product_price'>
								<p>{el?.price} so'm</p>
							</div>
							<div className='cart__products_product_quantity'>
								<button>-</button>
								<span>1</span>
								<button>+</button>
							</div>
							<div className='cart__products_product_total'>
								<p>{el?.price} so'm</p>
							</div>
							<div className='cart__products_product_delete'>
								<TbX />
							</div>
						</div>
					))}
				</div>
			</div>
			<div className='cart__products_bottom'>
				<div className='cart__products_bottom_order-view'>
					<p>Jami:</p>
					<p>{2000} s'om</p>
				</div>
				<button>Sotib olish</button>
			</div>
		</div>
	) : (
		<Empty />
	)
}
export default Cart
