import nodemailer from "nodemailer"
export default async function sendMail({to,name,subject,body}:{to:string,name:string,subject:string,body:string}){
    const { SMTP_EMAIL,SMTP_PASSWORD } = process.env
    const transport = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: SMTP_EMAIL,
            pass: SMTP_PASSWORD
        }
    })
    try{
        const testResult = await transport.verify();
        console.log(testResult)
        
    }
    catch(error){
        console.error("SMTP test hatası:",error)
        return
    }
    try{
       await transport.sendMail({
            from:SMTP_EMAIL,
            to,
            subject,
            html: `<h1>${name}, ${subject}</h1><p>${body}</p>`
        })
    }
    catch(error){
        console.error("Mail gönderim hatası:",error)
        return
    }
} 