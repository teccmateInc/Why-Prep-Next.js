import React from "react"
import { useRouter } from 'next/router'

const Alert = ({ text }) => {
    let body
    const router = useRouter()
    const isAlert = Object.keys(router.query).includes("alert")
    if (!isAlert) return ""
    body = text
    return (
        <p className="alert alert-success text-center">{body}</p>
    )
}

export default Alert