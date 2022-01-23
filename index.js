const axios = require('axios')
const express = require('express')
const cheerio = require('cheerio')
const PORT = 8000

const application = express()

//Scraping here

axios('https://www.x-kom.pl')
    .then(response => {
        const html = response.data
        console.log(html)
    })

//End of Scraping

application.listen(PORT, () => console.log(`PORT: ${PORT}`))