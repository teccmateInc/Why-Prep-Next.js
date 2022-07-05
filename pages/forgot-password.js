import React, { Component } from 'react';
import Link from 'next/link';
import { withTranslation } from 'react-i18next'
import { forgetPassword } from '../actions/authentication';
import { isEmpty } from '../validation/is_empty'
import Spinner from '../components/Common/Spinner';
import ButtonOrange from '../components/Common/ButtonOrange';

class ForgotPassword extends Component {
    state = {
        email: "",
        error: {},
        loading: false
    }

    onSubmitForgetPassword = async (e) => {
        e.preventDefault()
        this.setState({ loading: true })
        const body = {
            email: this.state.email
        }
        try {
            const result = await forgetPassword(body)
            if (result) {
                window.location = "/login?alert=1"
            }
        } catch (error) {
            this.setState({ error: error.response.data, loading: false })

        }
    }

    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    render() {
        const { t } = this.props
        const { error } = this.state
        return (
            <React.Fragment>
                <div className="signup-area">
                    <div className="row m-0">
                        <div className="col-lg-12 col-md-12 p-0">
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

                                            <h3>{t("title")}</h3>
                                            <p>{t("sub.a")} <Link href="/login"><a>{t("sub.b")}</a></Link></p>

                                            <form onSubmit={this.onSubmitForgetPassword}>
                                                <div className="form-group">
                                                    <input onChange={this.onChange} value={this.state.email} type="email" name="email" id="email" placeholder={t("placeholder")} className="form-control" />
                                                    {!isEmpty(error) ? <label className="mt-4 text-danger">{error.incorrect}</label> : ''}
                                                </div>

                                                <Spinner loading={this.state.loading} />

                                                <ButtonOrange
                                                    value={t('button')}
                                                    type='submit'
                                                    loading={this.state.loading}
                                                />

                                            </form>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default withTranslation("forget-password")(ForgotPassword);