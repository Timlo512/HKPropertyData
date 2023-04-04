import axios from 'axios';
import cheerio from 'cheerio';

async function main() {
    // const url = 'https://google.com';
    const url = 'https://www.28hse.com/';
    const response = await axios.get(url);
    const $ = cheerio.load(response.data);

    console.log($)

}

main().catch(console.error);