import React, { Component } from 'react';
import Link from 'next/link';
import { withTranslation } from 'react-i18next'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { logOut, setCurrentUser, changePassword } from '../actions/authentication';
import { decodeJwt } from "../helpers/decodeJwt"
import { isEmpty } from '../validation/is_empty';
import Spinner from "../components/Common/Spinner"
import ButtonOrange from "../components/Common/ButtonOrange"

class ChangePassword extends Component {

    state = {
        new_password: "",
        confirm_password: "",
        error: {},
        loading: false
    }

    componentDidMount() {
        this.props.setCurrentUser(this.props.user)
    }

    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    onSubmitChangePassword = async (e) => {
        e.preventDefault()
        this.setState({ loading: true })
        try {
            const body = {
                new_password: this.state.new_password,
                confirm_password: this.state.confirm_password,
                token: this.props.token
            }
            const result = await changePassword(body)
            this.setState({ error: {} })
            window.location = "/login?alert=0"
        } catch (error) {
            this.setState({ error: error.response.data, loading: false })
        }
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

                                            <form onSubmit={this.onSubmitChangePassword}>

                                                <div className="form-group">
                                                    <input type="password" onChange={this.onChange} name="new_password" value={this.state.new_password} id="new_password" placeholder={t("new_password")} className="form-control" />
                                                    {!isEmpty(error) ? <label className="mt-4 text-danger">{error.new}</label> : ''}

                                                </div>

                                                <div className="form-group">
                                                    <input type="password" onChange={this.onChange} name="confirm_password" value={this.state.confirm_password} id="confirm_password" placeholder={t("confirm_password")} className="form-control" />
                                                    {!isEmpty(error) ? <label className="mt-4 text-danger">{error.confirm}</label> : ''}
                                                </div>

                                                {!isEmpty(error) ? <label className="mt-4 text-danger">{error.incorrect}</label> : ''}

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

export async function getServerSideProps({ req, res }) {

    const url = new URL("https://preps.dev" + req.url)

    if (url.searchParams.has("token")) {
        const token = url.searchParams.get("token")
        try {
            const decoded = decodeJwt(token)
            return { props: { token, user: decoded } }
        } catch (error) {
            if (res) {
                res.writeHead(301, {
                    Location: '/'
                });
                res.end();
                return { props: {} }
            }
        }
    } else {
        if (res) {
            res.writeHead(301, {
                Location: '/'
            });
            res.end();
            return { props: {} }

        }
    }
}

const mapStateToProps = ({ auth }) => {
    return {
        auth
    }
}

export default compose(connect(mapStateToProps, { logOut, setCurrentUser }), withTranslation("change-password"))(ChangePassword);