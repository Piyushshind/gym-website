import React from 'react'
import style from '../components/home/About.module.css'

const Error = () => {
  return (
    <section className={style.page_404}>
	< div className={style.container}>
		<div className={style.row}>	
		<div className={style.col}>
		
		<div className={style.four_zero_four_bg}>
			<h1 className={style.text }>404</h1>
		
		
		</div>
		
		<div className={style.contant_box_404}>
		<h3 className={style.h2}>
		Look like you're lost
		</h3>
		
		<p>the page you are looking for not avaible!</p>
		
		<a href="/" className={style.link_404}>Go to Home</a>
	</div>
		</div>
		</div>
		</div>
	      
</section>
  )
}

export default Error


