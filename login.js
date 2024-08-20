// const express = require('express')
// const router = express.Router()

// module.exports = () => {
//   const router = new SignUpRouter()
//   router.post('/signup', ExpressRouterApapter.adapt(router))
// }

// class ExpressRouterApapter {
//   static adapt (router) {
//     return async (req, res) => {
//       const httpRequest = {
//         json: req.body
//       }
//       const httpResponse = await router.route(httpRequest)
//       res.status(httpResponse.statusCode).json(httpResponse.body)
//     }
//   }
// }

// // Presentation
// // sign-up router
// class SignUpRouter {
//   async route (httpRequest) {
//     const { email, password, repeatPassword } = httpRequest.json
//     const user = new SignUpUseCase().signUp(email, password, repeatPassword)
//     return {
//       statusCode: 200,
//       body: user
//     }
//   }
// }

// // Domain
// // sign-up usecase
// class SignUpUseCase {
//   async signUp (email, password, repeatPassword) {
//     if (password === repeatPassword) {
//       new AddAccountRespository().signUp(email, password)
//     }
//   }
// }

// // Infrastructure
// // add-account-repo
// const mongoose = require('mongoose')
// const AccountModel = mongoose.model('Account')

// class AddAccountRespository {
//   async signUp (email, password) {
//     const user = await AccountModel.create({ email, password })
//     return user
//   }
// }
