## pagereplica:prerender

**Improve your website's performance and SEO with Page Replica!**

This Meteor package seamlessly integrates with Page Replica ([page-replica.com](https://page-replica.com)), a service that creates static copies of your website. These static versions are ideal for search engines and social media bots that struggle with JavaScript-heavy websites. By leveraging Page Replica, you can ensure proper crawling and indexing, ultimately boosting your SEO.

**Benefits:**

* **Enhanced Performance:** Reduce server load by serving cached responses from Page Replica for identified bots.
* **Improved SEO:** Ensure search engines can access and understand your content, potentially leading to higher search rankings.
* **Reduced JavaScript Overhead:** Eliminate unnecessary JavaScript execution for bots, further optimizing performance.

**Features:**

* **Bot Identification:** Configurable user agent list to identify bot traffic.
* **Cached Response Fetching:** Retrieves cached responses from Page Replica for bot requests.
* **Media File Skipping:** Avoids unnecessary caching overhead by skipping media files (images, videos, etc.).
* **Fallback Mechanism:** Delivers original content if cached responses are unavailable.

***
### Prerequisites

1. **Page Replica Account:** Create a free account at [page-replica.com](https://page-replica.com) and obtain your unique site ID.
2. **Website Registration:** Register your website's domain with Page Replica.
3. **Request Pre-rendering:** In your Page Replica dashboard, request pre-rendering of your website's pages. Pre-rendering creates the static copies that bots can access from Page Replica's servers.
***
### Installation

```bash
meteor add pagereplica:prerender
```
***
### Configuration

**Required Settings:**

* **site_id (string):** Your unique Page Replica site ID (obtained from your account dashboard).
* **domain (string):** Your website's domain URL (without protocol), matching the one registered with Page Replica.

Add these settings to your Meteor project's `settings.json` file:

```json
{
  "page_replica": {
    "site_id": "YOUR_SITE_ID",
    "domain": "yourdomain.com"
  }
}
```

**Optional Setting:**

* **bots (array):** An array of bot user agent patterns to define which bots receive cached responses. Leaving it empty disables bot handling. This list can be customized to include specific bots relevant to your website.

**Example `settings.json` with Bot Definition :**

```json
{
  "page_replica": {
    "site_id": "YOUR_SITE_ID",
    "domain": "yourdomain.com",
    "bots": [
      "google",
      "bing",
      "yahoo",
      "baidu",
      "yandex",
      "duckduck",
      "sogou",
      "exabot",
      "facebot",
      "twitter",
      "linkedin",
      "pinterest",
      "telegram",
      "whatsapp",
      "archive.org",
      "ia_archiver",
      "semrush",
      "mj12bot",
      "ahrefs",
      "dotbot",
      "rogerbot",
      "linkdexbot",
      "ltx71",
      "uptimerobot",
      "seznambot",
      "qwant",
      "screaming frog",
      "uptime",
      "semalt",
      "barkrowler",
      "sitebulb",
      "zoominfobot",
      "linkfluence",
      "serpstatbot",
      "netcraftsurvey",
      "siteexplorer",
      "trendictionbot",
      "crawler",
      "python-requests",
      "curl",
      "adsbot-google",
      "mediapartners",
      "propellerads",
      "serpmetrics",
      "buysellads",
      "adsbot",
      "duckduckbot",
      "yisouspider",
      "mail.ru",
      "coccocbot",
      "panscient",
      "magpie-crawler",
      "telegrambot",
      "showyoubot",
      "visionutils",
      "applebot",
      "zyborg",
      "baiduspider",
      "pinterest",
      "httrack",
      "wget"
    ]
  }
}
```

**Run it locally:**

if you want to run it locally, you can use the following command:
```bash
meteor run --settings settings.json
```

***
### Usage

This package automatically integrates with your Meteor app. The middleware handles incoming requests, identifies bots, and fetches cached responses when applicable.
***
### Test your implementation

Visit [https://page-replica.com/doc/test-config](https://page-replica.com/doc/test-config) to learn how to test your Page Replica configuration.
***
### Contributing

We welcome contributions! Refer to the contributing guidelines on the project's GitHub repository for details:

[https://github.com/Page-Replica/bot-traffic-handler](https://github.com/Page-Replica/meteorjs-prerender)
