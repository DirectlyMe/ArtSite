import React from 'react'
import { Link } from 'react-router-dom'
import Slider from 'react-animated-slider'
import 'react-animated-slider/build/horizontal.css'
import 'normalize.css/normalize.css'
import './slider-animations.css'
import './styles.css'

const SlideShow = ({ content }) => (
	<Slider className="slider-wrapper">
		{content.map((item, index) => (
				<div
					key={index}
					className="slider-content"
					style={{
						background: `url('${item.imagePath}') no-repeat center center`
					}}>
					<div className="inner">
						<h1>{item.title}</h1>
						<p>{item.description}</p>
						<Link to={`Gallery/:${item.id}`}><button>{item.title}</button></Link>
					</div>
				</div>
		))}
	</Slider>
)

export default SlideShow
