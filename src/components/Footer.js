import React from 'react'
import './Footer.css'


function Footer() {
    let link = ""
    return (
        <footer className="footer-distributed">

			<div className="footer-right">

				<a href={link}><i className="fa fa-facebook"></i></a>
				<a href={link}><i className="bi bi-facebook"></i></a>
				<a href={link}><i className="fa fa-linkedin"></i></a>
				<a href={link}><i className="fa fa-github"></i></a>

			</div>

			<div className="footer-left">

				<p className="footer-links">
					<a className="" href={link}>Home</a>

					<a className="#" href={link}>Blog</a>

					<a className="#" href={link}>Pricing</a>

					<a className="#" href={link}>About</a>

					<a className="#" href={link}>Faq</a>

					<a className="#" href={link}>Contact</a>
				</p>

				<p>Restaurant &copy; 2021</p>
			</div>

		</footer>
    )
}

export default Footer
