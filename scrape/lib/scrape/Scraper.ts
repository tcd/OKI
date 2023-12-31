import https from "https"
import axios, { AxiosRequestConfig, AxiosResponse } from "axios"

import {
    Processor,
    type CharacterNameClean,
    type ICharacterTableRow,
} from "../util"

const client = axios.create({
    httpsAgent: new https.Agent({
        rejectUnauthorized: false,
    }),
    validateStatus: status => {
        // Only reject responses with status codes outside the 2xx range
        return status >= 200 && status < 300
    },
})

export class Scraper extends Processor {

    constructor(character: CharacterNameClean) {
        super(character)
    }

    public async scrape() {
        const requestConfig: AxiosRequestConfig = {
            url: this.streetFighterDotComUrl(),
            method: "get",
        }

        const response = await client.request(requestConfig)
        console.log(response.status)
        const {
            data,
        } = response
    }

    public async getHtml() {
        const requestConfig: AxiosRequestConfig = {
            url: this.streetFighterDotComUrl(),
            method: "get",
        }

        let response: AxiosResponse<any, any> = null as unknown as AxiosResponse<any, any>

        try {
            response = await axios.request(requestConfig)
            console.log(response.status)
            // const {
            //     data,
            // } = response
        } catch (error) {
            console.log("error")
            console.log(response?.status)
        }
    }



    public streetFighterDotComUrl() { return `https://www.streetfighter.com/6/en-us/character/${this.character}/frame` }
}
