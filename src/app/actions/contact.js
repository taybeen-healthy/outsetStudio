"use server";

export async function submitContactInquiry(prevState, formData) {
  try {
    const name = formData.get("name")?.toString().trim();
    const email = formData.get("email")?.toString().trim();
    const details = formData.get("details")?.toString().trim();

    // Validation
    if (!name || name.length < 2) {
      return {
        success: false,
        error: "Please provide a valid name (at least 2 characters).",
      };
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
      return {
        success: false,
        error: "Please enter a valid email address.",
      };
    }

    if (!details || details.length < 10) {
      return {
        success: false,
        error: "Please share a brief description of your project (at least 10 characters).",
      };
    }

    // In a production deployment with an email provider (e.g. Resend, SendGrid, Postmark, or Supabase):
    // if (process.env.RESEND_API_KEY) { await resend.emails.send(...) }
    console.log("[Outset Studio] New Project Inquiry received:", {
      name,
      email,
      details,
      timestamp: new Date().toISOString(),
    });

    return {
      success: true,
      message: `Thank you, ${name}. Your inquiry has been received. Our team will review your project and get back to you within 24 hours.`,
    };
  } catch (error) {
    console.error("[Outset Studio] Error handling contact submission:", error);
    return {
      success: false,
      error: "An unexpected error occurred while sending your inquiry. Please try again or email us directly.",
    };
  }
}
