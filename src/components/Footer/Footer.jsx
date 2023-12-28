import { FaFacebookSquare, FaInstagram, FaTelegramPlane } from 'react-icons/fa'
import asImg from '../../assets/footer/as-link.svg'
import gpImg from '../../assets/footer/gp-link.svg'
import logoImg from '../../assets/logos/logo.svg'
import './Footer.css'

const Footer = () => {
	return (
		<footer>
			<div className='footer_top'>
				<div className='footer__left'>
					<img src={logoImg} alt='logo img' />
				</div>
				<div className='footer__center'>
					<div className='foooter__center_links'>
						<p>О компании</p>
						<ul>
							<li>О нас</li>
							<li>Карьера</li>
							<li>Кейтеринг</li>
							<li>Локации</li>
						</ul>
					</div>
					<div className='foooter__center_links'>
						<p>Информации</p>
						<ul>
							<li>Меню</li>
							<li>Новости</li>
							<li>Контакты</li>
							<li>Публичная оферта</li>
							<li>Часто задаваемые вопросы</li>
						</ul>
					</div>
				</div>
				<div className='footer__right'>
					<div className='footer__right_phone_info'>
						<p>Контакты</p>
						<h3>78 113 40 40</h3>
					</div>
					<div className='footer__right_social_links'>
						<FaFacebookSquare />
						<FaInstagram />
						<FaTelegramPlane />
					</div>
					<div className='footer__right_download'>
						<img src={gpImg} alt='google play img' />
						<img src={asImg} alt='app store img' />
					</div>
				</div>
			</div>
      <div className="footer__line"></div>
			<div className='footer__bottom'>
				<p>2023 Safia Cafe & Bakery. Все права защищены.</p>
				<p>Разработан в Exord Soft</p>
			</div>
		</footer>
	)
}
export default Footer
