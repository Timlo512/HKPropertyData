import axios from 'axios';
import cheerio from 'cheerio';

const DEFAULT_PAGE = 7;
const BASE_URL = 'https://28hse.com/'

async function main() {

    // parse argument
    const typeOfData = process.argv[2];
    const page = process.argv[3];
    // Backlog Validation of the argument

    let url = BASE_URL + typeOfData;
    console.log(url);
    const response = await axios.get(url);
    const $ = cheerio.load(response.data);
    console.log($.html());
    

}

main().catch(console.error);