import { NextResponse } from "next/server";
import axios, { AxiosResponse } from 'axios';

export async function getTopGainersAndLosers(): Promise<any> {
    try {
        console.log("Fetching Top Gainers and Losers!");
        const response: AxiosResponse = await axios.get(`https://www.alphavantage.co/query?function=TOP_GAINERS_LOSERS&apikey=${process.env.ALPHA_VANTAGE_API_KEY}`);

        console.log("Fetched Top Gainers and Losers successfully🎉");

        console.log(response.data);
        
        return response.data;
    } catch (error: any) {
        return NextResponse.json(
            {
                error: "Failed to fetch data",
                status: 505,
            }
        )
    }
}