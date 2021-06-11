import React from 'react';
import { Carousel } from 'antd';

function ImageSlider(props) {
	return (
		<div>
			<Carousel autoplay>
				{props.images.map((image, index) => (
					<div key={index}>
						<img style={{ width: 'auto', height: '150px' }}
							src={`http://localhost:5000/${image}`} />
					</div>
				))}
			</Carousel>
		</div>
	)
}

export default ImageSlider
