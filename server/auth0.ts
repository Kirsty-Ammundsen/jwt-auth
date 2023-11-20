import { expressjwt as jwt, GetVerificationKey } from 'express-jwt'
import type { Request } from 'express'
import type { ParamsDictionary } from 'express-serve-static-core'
import type { JwtPayload } from 'jsonwebtoken'
import jwks from 'jwks-rsa'

// TODO: set the domain and audience (API Identifier)
const domain = 'https://pohutukawa-2023-kirsty.au.auth0.com'
const audience = 'https://fruits/api'

const checkJwt = jwt({
  secret: jwks.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri: `${domain}/.well-known/jwks.json`,
  }) as GetVerificationKey,
  audience: audience,
  issuer: `${domain}/`,
  algorithms: ['RS256'],
})

export default checkJwt

export interface JwtRequest<TReq, TRes>
  extends Request<ParamsDictionary, TRes, TReq> {
  auth?: JwtPayload
}
