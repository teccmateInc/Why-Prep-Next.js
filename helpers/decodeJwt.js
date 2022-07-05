import jwt_decode from "jwt-decode"

export function decodeJwt(token) {
    const decoded = jwt_decode(token)
    return decoded
}