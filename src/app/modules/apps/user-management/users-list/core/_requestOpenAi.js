import axios, {AxiosResponse} from 'axios'
import {ID, Response} from '../../../../../../_metronic/helpers'

const API_URL = process.env.OPEN_AI_API_TEXT_GENERATOR
const OPEN_AI_KEY = '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'


export const generateText = async (prompt) => {
    try {
      const result = await axios.post(
        'https://api.openai.com/v1/completions',
        {
          model: "gpt-3.5-turbo-instruct",
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
  