// import type { NextAuthOptions } from "next-auth";
// import GitHubProvider from 'next-auth/providers'
// import CredentialsProvider from "next-auth/providers/credentials";
// export const options : NextAuthOptions={
//     providers: [
//         GitHubProvider({
//             clientID:process.env.GITHUB_ID as string,
//             clientSecret: process.env.GITHUB_SECRET as string,
//         }),
//         CredentialsProvider({
//             name:"Credentials",
//             credentials:{
//                 username:{
//                     label:"UserName:",
//                     type:"Text",
//                     placeholder:"Your UserName"
//                 },
//                 password:{
//                     label:"Password",
//                     type:"password",
//                     placeholder:"Password"
//                 }
//             },
//             async authorize(credentials){
//                 const user={
//                     id:"42",
//                     name:"Dave", 
//                     password:"nextauth"
//                 }

//                 if(credentials?.username===user.name && credentials?.password===user.password){
//                     return user
//                 }else{
//                     return null;
//                 }
//             }
//         })
//     ]
// }



// next-auth.js

import GitHubProvider from 'next-auth/providers/github';
import CredentialsProvider from 'next-auth/providers/credentials'; 

export const options = {

  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET 
    }),

    CredentialsProvider({
      name: 'Credentials',

      credentials: {
        username: {label: 'Username', type: 'text' , placeholder:'Username'},
        password: {label: 'Password', type: 'password' , placeholder:'Password'}
      },

      authorize: async (credentials) => {
        const user = { 
          id: '1',
          name: 'Sonu',
          password:"nextauth",

        };

        if (credentials.username === user.name && credentials.password === user.password    ) {
          return user;
        }
        return null; 
      }

    })
  ],

  session: {
    // session config
  },
  
  callbacks: {
    // callbacks
  }

  // ...other options
};