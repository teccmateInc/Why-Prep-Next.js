import React, { Component } from 'react';
import Link from 'next/link';
import { isEmpty } from '../validation/is_empty'
import { login } from '../actions/authentication';
import { rediect_to_store } from '../helpers/RediectToStore'
import Spinner from '../components/Common/Spinner';
import ButtonOrange from '../components/Common/ButtonOrange';
import ButtonGoogle from '../components/Common/ButtonGoogle'
import ButtonFacebook from '../components/Common/ButtonFacebook'
import { withTranslation } from "react-i18next";
import Alert from '../components/Common/Alert';
import { withRouter } from 'next/router'
import { compose } from 'redux';

class Login extends Component {

    state = {
        email: '',
        password: '',
        error: {},
        loading: false
    }

    onClickLogin = (e) => {
        e.preventDefault()

        this.setState({ loading: true })

        const userData = {
            email: this.state.email,
            password: this.state.password
        }

        login(userData).then((res) => {
            this.setState({ error: {} })
            const { domain, token } = res.data;
            rediect_to_store(domain, token)

        }).catch((err) => {
            this.setState({ error: err.response.data, loading: false })
            const t = document.getElementById("email")
            const j = document.getElementById("password")
            function shake(t) {
                t.classList.remove('shake')
                void t.offsetWidth
                t.classList.add('shake')
            }
            shake(t)
            shake(j)
        });

    }

    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    render() {
        const { email, password, error } = this.state
        const { t } = this.props
        const isAlert = Object.keys(this.props.router.query).includes("alert")
        let textAlert = ""
        if (isAlert) {
            switch (this.props.router.query.alert) {
                case "0":
                    textAlert = t("change_password")
                    break;
                case "1":
                    textAlert = t("forget_password")
                    break;
                default:
                    break;
            }
        }
        return (
            <React.Fragment>
                <section className="login-area">
                    <Alert text={textAlert} />
                    <div className="row m-0">
                        {/* <div className="col-lg-6 col-md-12 p-0">
                            <div className="login-image">
                                <img src="/images/login-bg.jpg" alt="image" />
                            </div>
                        </div> */}

                        <div className="col-lg-12 col-md-12 p-0">
                            <div className="login-content">
                                <div className="d-table">
                                    <div className="d-table-cell">
                                        <div className="login-form">
                                            <div className="logo">
                                                <Link href="/">
                                                    <a>
                                                        <img style={{ width: "200px" }} src="/images/prep/logo.png" alt="image" />
                                                    </a>
                                                </Link>
                                            </div>

                                            <h3>{t('welcome')}</h3>
                                            <p>{t('new')} <Link href="/sign-up"><a>{t('sign')}</a></Link></p>

                                            <form onSubmit={this.onClickLogin}>
                                                <div className="form-group">
                                                    <input onChange={this.onChange} value={email} type="email" name="email" id="email" placeholder={t('email')} className="form-control" />
                                                    {!isEmpty(error) ? <label className="mt-4 text-danger">{error.email}</label> : ''}
                                                </div>

                                                <div className="form-group">
                                                    <input onChange={this.onChange} value={password} type="password" name="password" id="password" placeholder={t('password')} className="form-control" />
                                                    {!isEmpty(error) ? <label className="mt-4 text-danger">{error.password}</label> : ''}
                                                </div>

                                                <Spinner loading={this.state.loading} />

                                                <ButtonOrange
                                                    value={t('login')}
                                                    type='submit'
                                                    loading={this.state.loading}
                                                />

                                                <div className="forgot-password">
                                                    <Link href="/forgot-password"><a>{t('forgot')}</a></Link>
                                                </div>
                                                <div className="connect-with-social">
                                                    {/* <ButtonFaceook value={t('facebook')} /> */}
                                                    <ButtonFacebook value={t('facebook')} />
                                                </div>

                                                <div className="connect-with-social">
                                                    {/* <ButtonFaceook value={t('facebook')} /> */}
                                                    <ButtonGoogle value={t('google')} />
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </React.Fragment>
        );
    }
}

export default compose(withRouter, withTranslation('login'))(Login);