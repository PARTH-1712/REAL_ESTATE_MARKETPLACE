import {auth} from 'express-oauth2-jwt-bearer'

const jwtCheck = auth({
    audience: "http://localhost:8000",
    issuerBaseURL: "https://dev-vy4lu33flnh1rzgx.us.auth0.com",
    tokenSigningAlg: "RS256"
})

export default jwtCheck