import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { Resend } from "resend";

async function startServer() {
  const app = express();
  const PORT = 3000;

  // Middleware to parse JSON bodies
  app.use(express.json());
  
  // ✅ robots.txt - allows Google to crawl your site
app.get("/robots.txt", (req, res) => {
  res.type("text/plain");
  res.send("User-agent: *\nAllow: /\nSitemap: https://navoramedia.in/sitemap.xml");
});

// ✅ sitemap.xml - tells Google your pages
app.get("/sitemap.xml", (req, res) => {
  res.type("application/xml");
  res.send(`<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url><loc>https://navoramedia.in/</loc></url>
</urlset>`);
});

  // API Routes
  app.post("/api/contact", async (req, res) => {
    const { name, business, phone, message } = req.body;

    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      console.warn("RESEND_API_KEY is not set. Simulating successful email send.");
      console.log("Form Data:", { name, business, phone, message });
      return res.status(200).json({ success: true, mock: true });
    }

    try {
      const resend = new Resend(apiKey);
      const data = await resend.emails.send({
        from: "Acme <onboarding@resend.dev>", // Or update this to a verified domain if you have one
        to: ["owner@navoramedia.in"],
        subject: `New Strategy Call Request from ${name} (${business})`,
        text: `Name: ${name}\nBusiness: ${business}\nPhone: ${phone}\n\nMessage:\n${message}`,
        html: `<p><strong>Name:</strong> ${name}</p>
               <p><strong>Business:</strong> ${business}</p>
               <p><strong>Phone:</strong> ${phone}</p>
               <p><strong>Message:</strong><br/>${message.replace(/\n/g, '<br/>')}</p>`,
      });

      if (data.error) {
        throw new Error(data.error.message);
      }

      res.status(200).json({ success: true });
    } catch (error: any) {
      console.error("Error sending email:", error);
      res.status(500).json({ success: false, error: error.message });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on port ${PORT}`);
  });
}

startServer();
