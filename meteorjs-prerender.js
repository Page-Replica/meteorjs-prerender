import { WebApp } from "meteor/webapp";
import { fetch } from "meteor/fetch";

// Configuration: Site, bots, and domain from settings.json
const { site_id: SITE_ID, bots: BOTS = [], domain: DOMAIN } = Meteor.settings?.page_replica || {};

if (!SITE_ID || !DOMAIN) {
  return;
}

// Supported media file extensions
const mediaExtensions = [
  ".jpg", ".jpeg", ".png", ".gif", ".bmp", ".svg", ".webp", ".ico",
  ".tiff", ".tif", ".mp4", ".mp3", ".wav", ".avi", ".mov", ".mkv",
  ".flv", ".wmv", ".css", ".xml", ".json"
];

// Middleware to handle incoming requests
WebApp.connectHandlers.use(async (req, res, next) => {
  try {
    const url = new URL(req.url, `http://${req.headers.host}`);
    const userAgent = req.headers["user-agent"]?.toLowerCase() || "";

    // Check if the request is for a media file
    const isMediaFile = mediaExtensions.some(ext => url.pathname.toLowerCase().endsWith(ext));
    if (isMediaFile) {
      return next(); // Skip processing for media files
    }

    // Check if the request is from a bot
    const isBot = BOTS.some(bot => userAgent.includes(bot.toLowerCase()));
    if (isBot) {
      const domainName = DOMAIN.replace(/^https?:\/\//, "");
      const cacheUrl = `https://cache.page-replica.com/${SITE_ID}/${domainName}${url.pathname}`;

      try {
        const cacheResponse = await fetch(cacheUrl);

        if (!cacheResponse.ok) {
          return next();
        }

        const contentType = cacheResponse.headers.get("Content-Type") || "text/html";
        res.writeHead(cacheResponse.status, { "Content-Type": contentType });

        // Stream the cached response to the client
        cacheResponse.body.pipe(res);
      } catch (cacheError) {
        console.error(`Cache fetch error for ${url.pathname}:`, cacheError.message);
        res.writeHead(500, { "Content-Type": "text/plain" });
        res.end("Error fetching cache, please try again later.");
      }
    } else {
      next(); // Continue for normal user traffic
    }
  } catch (error) {
    console.error("Error processing request:", error);
    res.writeHead(500, { "Content-Type": "text/plain" });
    res.end("Internal Server Error");
  }
});
