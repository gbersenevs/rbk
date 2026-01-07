import { NextRequest, NextResponse } from "next/server";

interface ContactFormData {
  name: string;
  company?: string;
  email: string;
  phone?: string;
  serviceType: string;
  message: string;
}

// Function to send message to Telegram
async function sendToTelegram(data: ContactFormData) {
  const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
  const TELEGRAM_CHAT_ID = process.env.TELEGRAM_CHAT_ID;

  if (!TELEGRAM_BOT_TOKEN || !TELEGRAM_CHAT_ID) {
    console.warn("⚠ Telegram credentials not configured. Skipping Telegram notification.");
    return { success: false, reason: "not_configured" };
  }

  const TELEGRAM_API = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`;

  // Format message with HTML
  const message = `
🔔 <b>New Contact Form Submission</b>

👤 <b>Name:</b> ${data.name}
📧 <b>Email:</b> ${data.email}
🏢 <b>Company:</b> ${data.company || "Not provided"}
🛠 <b>Service Type:</b> ${data.serviceType}

💬 <b>Message:</b>
${data.message}

---
<i>Sent from FDA SERVICE website</i>
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

    // Send to Telegram (non-blocking - we'll continue even if this fails)
    const telegramResult = await sendToTelegram(data);

    // Send via Web3Forms
    const accessKey = process.env.WEB3FORMS_ACCESS_KEY;
    
    if (!accessKey) {
      console.error("WEB3FORMS_ACCESS_KEY not configured in environment variables");
      console.log("📧 Form data received:", { name: data.name, email: data.email });
      
      // If Telegram succeeded, we can still return success
      if (telegramResult.success) {
        return NextResponse.json({ 
          success: true, 
          message: "Message sent successfully via Telegram!" 
        });
      }
      
      // Return success anyway so form works in development
      return NextResponse.json({ success: true });
    }

    console.log("Sending to Web3Forms...");
    
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: { 
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({
        access_key: accessKey,
        subject: `FDA SERVICE: New inquiry from ${data.name}`,
        from_name: "FDA SERVICE Website",
        name: data.name,
        email: data.email,
        company: data.company || "Not provided",
        phone: data.phone || "Not provided",
        service_type: data.serviceType,
        message: data.message,
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("Web3Forms HTTP error:", response.status, errorText);
      
      // If Telegram succeeded, still return success
      if (telegramResult.success) {
        return NextResponse.json({ 
          success: true, 
          message: "Message sent successfully via Telegram!" 
        });
      }
      
      return NextResponse.json(
        { error: "Failed to send message" },
        { status: 500 }
      );
    }

    const result = await response.json();

    if (!result.success) {
      console.error("Web3Forms error:", result);
      
      // If Telegram succeeded, still return success
      if (telegramResult.success) {
        return NextResponse.json({ 
          success: true, 
          message: "Message sent successfully via Telegram!" 
        });
      }
      
      return NextResponse.json(
        { error: "Failed to send message" },
        { status: 500 }
      );
    }

    console.log("✅ Form submitted successfully via Web3Forms");
    
    return NextResponse.json({ 
      success: true, 
      message: "Form submitted successfully" 
    });

  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Failed to process submission", details: error instanceof Error ? error.message : "Unknown error" },
      { status: 500 }
    );
  }
}
