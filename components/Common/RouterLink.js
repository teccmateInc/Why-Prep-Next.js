import React, { Component } from 'react'
import Link from '../../utils/ActiveLink'

class RouterLink extends Component {
    render() {
        const { t } = this.props
        return (
            <ul className="navbar-nav">
                <li className="nav-item">
                    <Link href="/#">
                        <a className="nav-link" onClick={e => e.preventDefault()}>
                            {t('header.product.main')} <i className="fas fa-chevron-down"></i>
                        </a>
                    </Link>

                    <ul className="dropdown-menu">
                        <li className="nav-item">
                            <Link href="/" activeClassName="active">
                                <a className="nav-link"></a>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link href="/1">
                                <a className="nav-link" onClick={e => e.preventDefault()}>
                                    {t('header.product.channel.main')} <i className="fas fa-chevron-down"></i>
                                </a>
                            </Link>

                            <ul className="dropdown-menu">
                                <li className="nav-item">
                                    <Link href="/online-store">
                                        <a className="nav-link">
                                            {t('header.product.channel.store')}
                                        </a>
                                    </Link>
                                    <Link href="/checkout">
                                        <a className="nav-link">
                                            {t('header.product.channel.checkout')}
                                        </a>
                                    </Link>
                                    <Link href="/social-media">
                                        <a className="nav-link">
                                            {t('header.product.channel.social_media')}
                                        </a>
                                    </Link>
                                    <Link href="/all-online-solution">
                                        <a className="nav-link">
                                            {t('header.product.channel.solution')}
                                        </a>
                                    </Link>
                                    
                                </li>
                            </ul>
                        </li>

                        {/* <li className="nav-item">
                            <Link href="/" activeClassName="active">
                                <a className="nav-link"></a>
                            </Link>
                        </li> */}

                        <li className="nav-item">
                            <Link href="">
                                <a className="nav-link" >
                                    {t('header.product.marketing.main')} <i className="fas fa-chevron-down"></i>
                                </a>
                            </Link>

                            <ul className="dropdown-menu">
                                <li className="nav-item">
                                    <Link href="/marketing">
                                        <a className="nav-link">
                                            {t('header.product.marketing.marketing')}
                                        </a>
                                    </Link>
                                    <Link href="/loyalty-program">
                                        <a className="nav-link" >
                                            {t('header.product.marketing.loyalty')}
                                        </a>
                                    </Link>
                                    <Link href="/messages">
                                        <a className="nav-link" >
                                            {t('header.product.marketing.message')}
                                        </a>
                                    </Link>
                                    <Link href="/1">
                                        <a className="nav-link" onClick={e => e.preventDefault()}>
                                            {t('header.product.marketing.photo')}
                                        </a>
                                    </Link>
                                </li>
                            </ul>
                        </li>
                        {/* 
                        <li className="nav-item">
                            <Link href="/" activeClassName="active">
                                <a className="nav-link"></a>
                            </Link>
                        </li> */}

                        <li className="nav-item">
                            <Link href="/1">
                                <a className="nav-link" onClick={e => e.preventDefault()}>
                                    {t('header.product.infoproduct.main')} <i className="fas fa-chevron-down"></i>
                                </a>
                            </Link>

                            <ul className="dropdown-menu">
                                <li className="nav-item">
                                    <Link href="/domain">
                                        <a className="nav-link">
                                            {t('header.product.infoproduct.domain')}
                                        </a>
                                    </Link>
                                    <Link href="/store-template">
                                        <a className="nav-link" >
                                            {t('header.product.infoproduct.theme')}
                                        </a>
                                    </Link>
                                </li>
                            </ul>
                        </li>

                    </ul>
                </li>

                <li className="nav-item">
                    <Link href="/why-prep" activeClassName="active">
                        <a className="nav-link">{t('header.why')}</a>
                    </Link>
                </li>

                <li className="nav-item">
                    <Link href="/pricing" activeClassName="active">
                        <a className="nav-link">{t('header.pricing')}</a>
                    </Link>
                </li>

                <li className="nav-item">
                    <Link href="/pricing" activeClassName="active">
                        <a className="nav-link">{t('header.blog')}</a>
                    </Link>
                </li>

                <li className="nav-item">
                    <Link href="/contact" activeClassName="active">
                        <a className="nav-link">{t('header.contact')}</a>
                    </Link>
                </li>
            </ul>
        )
    }

}

export default RouterLink