const puppeteer = require('puppeteer');

const launch = async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('https://www.google.com.br');
    await page.screenshot({path: './example.png'});
    console.log('funcionou.')
};

launch();