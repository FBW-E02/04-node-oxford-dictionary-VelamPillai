import axios from 'axios';
import dotenv from 'dotenv';
dotenv.config();
const app_id = process.env.ID;
const app_key = process.env.KEY;
const word = process.argv.slice(2);
const url = `https://od-api.oxforddictionaries.com/api/v2/entries/en/${word}`;
const getData = async () => {
  try {
    const res = await axios.get(url, {
      headers: {
        app_id,
        app_key,
      },
    });
    /* res.data.results[0].lexicalEntries.map(el => {
      console.log(el.lexicalCategory.text);
    }); */
      res.data.results[0].lexicalEntries[0].entries[0].senses.map(el => console.log(el.shortDefinitions[0]));
  } catch (error) {
    console.log(err.message);
  }
};
getData();







