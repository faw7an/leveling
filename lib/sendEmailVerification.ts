import { Resend } from "resend";

const resend = new Resend (process.env.RESEND_APIKEY)
export const sendEmailVerification = async (email: string, name:string ,token: string ,tokenExpiration:Date)=>{
    const url = `http://localhost:3000/api/auth/verify-email?token=${token}`;

    await resend.emails.send({
        from:'onboarding@resend.dev',
        to: 'fauzdasoodais@gmail.com',
        subject:'Verify your email',
        html:`
        <p> Hello ${name},</p>
        <p>Please verify your email by clicking the link below</p>
        <p>Token expires at ${tokenExpiration}.</p>
        <a href="${url}">${url}</a>
        `,
    })
}