const twilio = require("twilio");
require("dotenv").config();

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = twilio(accountSid, authToken);

const sendWhatsAppMessage = async () => {
    const fixedNumber = "whatsapp:+523115931198"; // Número fijo verificado
    const staticMessage = "La factura se ha enviado al correo exitosamente.";
    try {
        const response = await client.messages.create({
            from: "whatsapp:+14155238886", // Número de prueba de Twilio para WhatsApp
            to: fixedNumber, // Número fijo
            body: staticMessage, // Mensaje estático
        });
        console.log(`Mensaje enviado con éxito: SID ${response.sid}`);
    } catch (error) {
        console.error(
            "Error al enviar mensaje por WhatsApp:",
            error.response?.data || error.message
        );
    }
};

module.exports = { sendWhatsAppMessage };
