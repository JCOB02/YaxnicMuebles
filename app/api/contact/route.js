import nodemailer from "nodemailer";

export async function POST(req) {
  const { name, email, message } = await req.json();

  if (!name || !email || !message) {
    return new Response(JSON.stringify({ error: "Missing fields" }), { status: 400 });
  }

  try {
    // Create the transporter (Gmail example)
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

function sanitize(str) {
  return str.replace(/[<>]/g, '');
}

await transporter.sendMail({
    from: `"Yaxnic Muebles" <${process.env.EMAIL_USER}>`,
    to: process.env.EMAIL_USER,
    subject: `Nuevo mensaje de ${sanitize(name)}`,
    text: `
    Tienes un nuevo mensaje desde tu sitio web:

    Nombre: ${sanitize(name)}

    Email: ${sanitize(email)}

    Mensaje:
    ${sanitize(message)}
    `,
});

await transporter.sendMail({
    from: `"Yaxnic Muebles" <${process.env.EMAIL_USER}>`,
    to: email, // the user's email
    subject: "Gracias por contactarnos",
    text: `Hola ${name}, gracias por escribirnos. Hemos recibido tu mensaje y te responderemos pronto.`,
});


    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (error) {
    console.error("Error sending email:", error);
    return new Response(JSON.stringify({ error: "Error sending email" }), { status: 500 });
  }
}