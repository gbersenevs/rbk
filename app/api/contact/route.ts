import { NextRequest, NextResponse } from "next/server";

interface ContactFormData {
  name: string;
  company?: string;
  email: string;
  serviceType: string;
  message: string;
}

// Send message to Telegram
async function sendToTelegram(data: ContactFormData) {
  const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
  const TELEGRAM_CHAT_ID = process.env.TELEGRAM_CHAT_ID;

  if (!TELEGRAM_BOT_TOKEN || !TELEGRAM_CHAT_ID) {
    console.error("❌ Telegram credentials not configured");
    return { success: false, reason: "not_configured" };
  }

  const TELEGRAM_API = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`;

  const message = `
🔔 <b>New Contact Form Submission</b>

👤 <b>Name:</b> ${data.name}
📧 <b>Email:</b> ${data.email}
🏢 <b>Company:</b> ${data.company || "Not provided"}
🛠 <b>Service:</b> ${data.serviceType}

💬 <b>Message:</b>
${data.message}

---
<i>Sent from RBK website</i>
  `.trim();

  try {
    const response = await fetch(TELEGRAM_API, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        chat_id: TELEGRAM_CHAT_ID,
        text: message,
        parse_mode: "HTML",
      }),
    });

    const result = await response.json();

    if (!result.ok) {
      console.error("❌ Telegram error:", result);
      return { success: false, error: result };
    }

    console.log("✅ Message sent to Telegram successfully");
    return { success: true };
  } catch (error) {
    console.error("❌ Failed to send to Telegram:", error);
    return { success: false, error };
  }
}

export async function POST(request: NextRequest) {
  try {
    const data: ContactFormData = await request.json();

    // Validate required fields
    if (!data.name || !data.email || !data.serviceType || !data.message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Send to Telegram
    const result = await sendToTelegram(data);

    if (!result.success) {
      return NextResponse.json(
        { error: "Failed to send message" },
        { status: 500 }
      );
    }

    return NextResponse.json({ 
      success: true, 
      message: "Message sent successfully" 
    });

  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Failed to process submission" },
      { status: 500 }
    );
  }
}
