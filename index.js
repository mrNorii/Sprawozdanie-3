const axios = require('axios')
const express = require('express')
const cheerio = require('cheerio')
const PORT = 8000

const application = express()

//Scraping here

axios('https://www.trojmiasto.pl/wiadomosci/')
    .then(response => {
        const html = response.data
        const a = cheerio.load(html)
        const table = []

        a('.color04', html).each(function() {
            const title = a(this).text()
            const url = a(this).attr('href')
            table.push({
                title, 
                url
            })
        })
        console.log(table)       
    }).catch(err => console.log(err))

//End of Scraping

application.listen(PORT, () => console.log(`PORT: ${PORT}`))