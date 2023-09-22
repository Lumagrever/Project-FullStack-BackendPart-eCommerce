import nodemailer from "nodemailer"

//Configuracion del transporte de correo electronico
const transporter = nodemailer.createTransport({
    service: "gmail",
    auth:{
        user: "wowshopapi@gmail.com",
        pass: "viqcyxxebasvwtqr"
    },
    from: "wowshopapi@gmail.com"
})

// Funcion para hacer el envio de un correo electronico

export const sendEmail = async (to: string, code: string):Promise<void> => {
    try{
        // configuracion de detalles para el correo electronico
        const mailOptions={
            from: '"WOWShop wowshopapi@gmail.com',
            to,
            subject: "Código de verificación para tu cuenta de usuario",
            text: `
            ¡Hola, gracias por registrarte en nuestra tienda!
            "${code}" es su código de verificacion para poder acceder a la plataforma WOWSHOP API.`
        }

        // hacer envio del correo electronico
        await  transporter.sendMail(mailOptions)
        console.log("Correo electrónico enviado")
        }catch(error){
            console.log(`Error al enviar el email: ${error}`)
    }
}