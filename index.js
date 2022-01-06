convert(); // will eventually be on a button or we can make it on a keyup event so it just automatically updates

function convert() {
    const isLargeImage = true // for all variables here they will eventually grab data from html elements
    const siteName = 'Site Name'
    const siteTitle = 'Site Title'
    const siteDescription = 'Site Description'
    const image = 'https://i.imgur.com/PllK6g6.png'
    const color = '#ffffff'

    var output = `<meta property="og:title" content="${siteTitle}" />\n<meta property="og:site_name" content="${siteName}" />\n<meta property="og:image" content="${image}" />\n<meta property="og:description" content="${siteDescription}" />\n<meta name="theme-color" content="${color}">`

    if (isLargeImage) output = output + '\n<meta property="twitter:card" content="summary_large_image" />'

    console.log(output) // will eventually update an textarea or something
}