import React from 'react'
import RegisterForm from '../../components/Form/RegisterForm'
import { isEmpty } from '../../validation/is_empty'
// import isexist from '../api/isexist'
import jwt_decode from 'jwt-decode'

const Form = ({ id, token }) => {
    return (
        <React.Fragment>
            <RegisterForm id={id} token={token} />
        </React.Fragment>
    )
}

Form.getInitialProps = async ({ query, res }) => {
    const rediectToMain = async () => {
        if (res) {
            res.writeHead(301, {
                Location: '/'
            });
            res.end();
        }
    }
    const { token } = query
    if (isEmpty(token)) return rediectToMain()
    try {
        const { _id } = await jwt_decode(token)
        if (isEmpty(_id)) return rediectToMain()
        return { id: _id, token }
    } catch (error) {
        return rediectToMain()
    }
}


export default Form