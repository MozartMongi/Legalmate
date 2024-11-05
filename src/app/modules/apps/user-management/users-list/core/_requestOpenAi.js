import axios, {AxiosResponse} from 'axios'
import {ID, Response} from '../../../../../../_metronic/helpers'

const API_URL = process.env.OPEN_AI_API_TEXT_GENERATOR
const OPEN_AI_KEY = process.env.REACT_APP_OPENAI_API_KEY

export const generateText = async (prompt) => {
    try {
        console.log('OPEN_AI_KEY>>', API_URL)
      const result = await axios.post(
        'https://api.openai.com/v1/completions',
        {
          model: "text-davinci-004", // atau model lainnya
          prompt: prompt,
        },
        {
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${OPEN_AI_KEY}`,
          },
        }
      );
  
      return result.data.choices[0].text
    } catch (error) {
      console.error("Error:", error);
    }
  };
  