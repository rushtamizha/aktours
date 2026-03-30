export default function sitemap() {
  const baseUrl = "https://aktoursandtravels.in"; // Update with your actual domain

  // 1. Static Pages
  const staticPages = [
    "",
    "/about",
    "/testimonials",
    "/package/local-duty-hour-basis",
    "/package/one-way-dropping-fixed",
    "/package/out-station-duty-day-basis",
    "/package/out-station-duty-km-basis",
    "/temple/navagraha",
    "/temple/pilgrimage",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: route === "" ? 1 : 0.8,
  }));

  // 2. Dynamic Tour Pages (One to Nine)
  const numberWords = ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
  const tourPages = numberWords.map((word) => ({
    url: `${baseUrl}/packages/${word}-day-tour-package`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [...staticPages, ...tourPages];
}