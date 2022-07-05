import React, { useState } from 'react'
import Link from 'next/link'
import InputCommon from '../components/Common/InputCustom'
import ButtonFacebook from '../components/Common/ButtonFacebook'
import ButtonGoogle from '../components/Common/ButtonGoogle'
import ButtonOrange from '../components/Common/ButtonOrange'
import Spinner from '../components/Common/Spinner'
import { login, signup } from '../actions/authentication'
import { rediect_to_store } from '../helpers/RediectToStore'
import CheckBox from '../components/Common/CheckBox'
import { useTranslation } from 'react-i18next'
export default function SignUp() {
    //Value
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [repassword, setRepassword] = useState('')
    const [store_name, setStoreName] = useState('')
    const [phone, setPhone] = useState('')
    //Error
    const [error_email, setEmailError] = useState('')
    const [error_password, setPasswordError] = useState('')
    const [error_repassword, setRepasswordError] = useState('')
    const [error_store_name, setStoreNameError] = useState('')
    const [error_phone, setPhoneError] = useState('')

    //Loading
    const [loading, setLoading] = useState(false)
    //i18n
    const { t } = useTranslation('signup')
    const onSubmitSignup = async (e) => {
        e.preventDefault()
        setLoading(true)
        const body = {
            email,
            name: store_name,
            password,
            repassword,
            phone
        }

        try {
            await signup(body)
            localStorage.removeItem("reference")
            const { data } = await login({ email: body.email, password: body.password })
            const { domain, token } = data;
            rediect_to_store(domain, token)
        } catch (error) {
            if (!error.response) return console.log(error)
            const response = error.response
            setLoading(false)
            const data = response.data
            setEmailError(data.email)
            setPasswordError(data.password)
            setRepasswordError(data.repassword)
            setStoreNameError(data.name)
            setPhoneError(data.phone)
        }

    }

    return (
        <React.Fragment>
            <div className="signup-area">
                <div className="row m-0">
                    <div className="col-lg-6 col-md-12 p-0">
                        <div className="signup-image">
                            <img src="/images/signup-bg.jpg" alt="image" />
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12 p-0">
                        <div className="signup-content">
                            <div className="d-table">
                                <div className="d-table-cell">
                                    <div className="signup-form">
                                        <div className="logo">
                                            <Link href="/">
                                                <a>
                                                    <img style={{ width: "200px" }} src="/images/prep/logo.png" alt="image" />
                                                </a>
                                            </Link>
                                        </div>
                                        <h3>{t('main')}</h3>
                                        <p>{t('already')}? <Link href="/login"><a>{t('login')}</a></Link></p>

                                        <form onSubmit={onSubmitSignup}>


                                            <h5 className="text-danger">{error_email}</h5>

                                            <InputCommon
                                                type='text'
                                                value={email}
                                                placeholder={t('email')}
                                                onChange={setEmail}
                                            />
                                            <h5 className="text-danger">{error_store_name}</h5>

                                            < InputCommon
                                                type='text'
                                                value={store_name}
                                                placeholder={t('store')}
                                                onChange={setStoreName}
                                            />
                                            <h5 className="text-danger">{error_phone}</h5>

                                            <InputCommon
                                                type='text'
                                                value={phone}
                                                placeholder={t('phone')}
                                                onChange={setPhone}
                                            />

                                            <h5 className="text-danger">{error_password}</h5>

                                            <InputCommon
                                                type='password'
                                                value={password}
                                                placeholder={t('password')}
                                                onChange={setPassword}
                                            />
                                            <h5 className="text-danger">{error_repassword}</h5>

                                            <InputCommon
                                                type='password'
                                                value={repassword}
                                                placeholder={t('confirm')}
                                                onChange={setRepassword}
                                            />


                                            <CheckBox
                                                value={t('marketing')}
                                            />

                                            <ButtonOrange
                                                type="submit"
                                                value={t('button')}
                                                loading={loading}
                                            />

                                            <Spinner loading={loading} />

                                            <div className="connect-with-social">
                                                <span>{t('or')}</span>

                                                {/* <ButtonFacebook value={t('facebook')} /> */}

                                                <ButtonGoogle value={t('google')} />

                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}


