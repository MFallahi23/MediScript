import dotenv from "dotenv";
import axios from "axios";
dotenv.config();

const contact = async (req, res) => {
  const { name, phone, message } = req.body;

  if (!name || !phone || !message) {
    return res.status(400).json({ error: "All fields are required" });
  }

  try {
    // Send to Telegram using axios
    const TELEGRAM_API = `https://api.telegram.org/bot${process.env.TELEGRAM_BOT_TOKEN}/sendMessage`;

    await axios.post(TELEGRAM_API, {
      chat_id: process.env.TELEGRAM_CHAT_ID,
      text: `📩 New form submission:\n\nName: ${name}\nPhone: ${phone}\nMessage: ${message}`,
    });

    res.status(200).json({ success: true, message: "Form sent successfully" });
  } catch (error) {
    console.error(
      "Error sending to Telegram:",
      error.response?.data || error.message
    );
    res.status(500).json({ error: "Failed to send message" });
  }
};

export { contact };
