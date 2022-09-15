const axios = require("axios")
const express = require("express")
const cheerio = require("cheerio")

const app = express()
const PORT = 1453
const url = ''
app.listen(PORT, () => console.log(`server runs on ${PORT}`))

axios(url)
	.then(response => {
		const html = response.data
		const $ = cheerio.load(html)
		const links = []

		$('.', html).each(function() {
			const title = $(this).text()
			const url = $(this).find('a').attr('href')
			links.push({
				title,
				url
			})
		})

		console.log(links)
	}).catch(err => console.log(err))
