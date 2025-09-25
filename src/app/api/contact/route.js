import { NextResponse } from "next/server";
import pool from "@/helper/db";
import nodemailer from "nodemailer";

export async function POST(request) {
    try {
        const formData = await request.formData();
        const fullname = formData.get("fullname");
        const phone = formData.get("phone");
        const email = formData.get("email");
        const location = formData.get("location");
        const message = formData.get("message");

        // ✅ Insert into Database
        await pool.execute(
            "INSERT INTO contact (date, name, phone, email, location, message) VALUES (NOW(), ?, ?, ?, ?, ?)",
            [fullname, phone, email, location, message]
        );

        // ✅ Nodemailer Transporter
        const transporter = nodemailer.createTransport({
            service: "gmail",
            host: "smtp.gmail.com",
            port: 465,
            secure: true,
            auth: {
                user: process.env.MY_EMAIL,
                pass: process.env.GMAIL_PASS
            },
            tls: {
                rejectUnauthorized: false // self-signed SSL allow
            }
        });

        // ✅ Admin Email
        const mailOptionsAdmin = {
            from: process.env.MY_EMAIL,
            to: process.env.MY_EMAIL,
            subject: "Desire Stays Contact Form", // 🔥 Updated
            html: `
            <html>
              <body>
                <h3>You've got a new mail from ${fullname}, their email is: ✉️${email}, phone number is ${phone}, and location is ${location}</h3>
                <p>Message:</p>
                <p>${message}</p>
              </body>
            </html>`
        };

        await transporter.sendMail(mailOptionsAdmin);

        // ✅ User Confirmation Email
        const mailOptionsUser = {
            from: process.env.MY_EMAIL,
            to: email,
            subject: "Thank You for contacting Desire Stays", // 🔥 Updated
            html: `
            <html>
              <body>
                <h3>Thank you for contacting Desire Stays, ${fullname}!</h3>
                <p>We have received your message and will get back to you shortly.</p>
              </body>
            </html>`
        };

        await transporter.sendMail(mailOptionsUser);

        return NextResponse.json({
            message: "Query sent successfully",
            success: true
        });

    } catch (error) {
        console.log(error);
        return NextResponse.json({
            message: "Failed to send query",
            success: false
        });
    }
}
