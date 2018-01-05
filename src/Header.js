import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import  '@fortawesome/fontawesome-free-brands';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
export default class Header extends Component {
  render(){
    return <header className="header">
			<nav className="header__nav">
				<div className="header__container">
					<div className="header__brand">
            <a href="" className='header__toggler'>
							<FontAwesomeIcon icon={['fab','buromobelexperte']}/>
						</a>
            <a href="" className='header__brand__name text-uppercase'>
							7chip
						</a>
					</div>
					<div className="header__status">

					</div>
					<div className="header__info">
						<div className="header__search">

						</div>
						<div className="header__social">
							<ul className='clearfix'>
								<li>
									<Link to=''>
                    <FontAwesomeIcon icon={['fab', 'facebook-f']}/>
									</Link>
								</li>
                <li>
									<Link to=''>
                    <FontAwesomeIcon icon={['fab', 'twitter']}/>
									</Link>
								</li>
								<li>
									<Link to=''>
                    <FontAwesomeIcon icon={['fab', 'linkedin-in']}/>
									</Link>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</nav>
    </header>
  }
}