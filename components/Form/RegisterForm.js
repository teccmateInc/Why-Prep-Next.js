import React, { useState } from 'react'
import Link from 'next/link'
import Spinner from '../Common/Spinner'
import ButtonOrange from "../Common/ButtonOrange";
import InputCustom from "../Common/InputCustom";
import { createStoreDomain } from '../../actions/authentication';
import { rediect_to_store } from "../../helpers/RediectToStore";

const RegisterForm = ({ id, token }) => {
    const [store, setStore] = useState('')
    const [loading, setLoading] = useState(false)
    const onClickRegister = async (e) => {
        setLoading(true)
        e.preventDefault()
        const body = {
            id,
            token,
            domain: store
        }
        const data = await createStoreDomain(body)
        rediect_to_store(store, data.data.token)
    }
    return (
        <React.Fragment>
            <section className="login-area">
                <div className="row m-0">

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

                                        <h3>Last Step to Go!</h3>
                                        <p>Enter Perfect Name For Your Store</p>

                                        <form onSubmit={onClickRegister}>

                                            <InputCustom
                                                type="text"
                                                onChange={setStore}
                                                value={store}
                                                placeholder="Enter Your Store Name"
                                            />

                                            <Spinner loading={loading} />

                                            <ButtonOrange
                                                value='Done !'
                                                type='submit'
                                                loading={loading}
                                            />
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    )
}

export default RegisterForm
