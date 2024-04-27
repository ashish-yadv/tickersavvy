import { NextResponse } from "next/server";
import axios, { AxiosResponse } from 'axios';


// Using AlphaVantage demo API requests for development

// Company Overview:
export async function getCompanyOverview(symbol: string): Promise<any> {
    try {
        console.log("Data fetching in PROCESS!");
        const response: AxiosResponse = await axios.get(`https://www.alphavantage.co/query?function=OVERVIEW&symbol=${symbol}&apikey=${process.env.ALPHA_VANTAGE_API_KEY}`);

        // const response: AxiosResponse = await axios.get(`https://www.alphavantage.co/query?function=OVERVIEW&symbol=IBM&apikey=demo`);

        console.log("Data fetching done");
        return response.data;
    } catch (error: any) {
        return NextResponse.json(
            {
                error: "Failed to fetch Company Overview",
                status: 505,
            }
        )
    }
}


// Income Statement:
export async function getIncomeStatement(symbol: string): Promise<any> {
    try {
        console.log("Fetching Income Statement!");
        const response: AxiosResponse = await axios.get(`https://www.alphavantage.co/query?function=INCOME_STATEMENT&symbol=${symbol}&apikey=${process.env.ALPHA_VANTAGE_API_KEY}`);


        // const response: AxiosResponse = await axios.get(`https://www.alphavantage.co/query?function=INCOME_STATEMENT&symbol=IBM&apikey=demo`);

        console.log("Completed fetching Income Statement🎉");

        console.log(response.data);

        return response.data;
    } catch (error: any) {
        return NextResponse.json(
            {
                error: "Failed to fetch Balance Sheet",
                status: 505,
            }
        )
    }
}


// Balance Sheet:
export async function getBalanceSheet(symbol: string): Promise<any> {
    try {
        console.log("Fetching BALANCE SHEET!");
        const response: AxiosResponse = await axios.get(`https://www.alphavantage.co/query?function=BALANCE_SHEET&symbol=${symbol}&apikey=${process.env.ALPHA_VANTAGE_API_KEY}`);

        // const response: AxiosResponse = await axios.get(`https://www.alphavantage.co/query?function=BALANCE_SHEET&symbol=IBM&apikey=demo`);

        console.log("Completed fetching BALANCE SHEET🎉");

        console.log(response.data);

        return response.data;
    } catch (error: any) {
        return NextResponse.json(
            {
                error: "Failed to fetch Balance Sheet",
                status: 505,
            }
        )
    }
}


// Cash Flow:
export async function getCashFlow(symbol: string): Promise<any> {
    try {
        console.log("Fetching CASH FLOW DATA!");
        const response: AxiosResponse = await axios.get(`https://www.alphavantage.co/query?function=CASH_FLOW&symbol=${symbol}&apikey=${process.env.ALPHA_VANTAGE_API_KEY}`);

        // const response: AxiosResponse = await axios.get(`https://www.alphavantage.co/query?function=CASH_FLOW&symbol=IBM&apikey=demo`);

        console.log("Completed fetching CASH FLOW DATA🎉");

        console.log(response.data);

        return response.data;
    } catch (error: any) {
        return NextResponse.json(
            {
                error: "Failed to fetch Cash Flow",
                status: 505,
            }
        )
    }
}


// Earnings:
export async function getEarnings(symbol: string): Promise<any> {
    try {
        console.log("Fetching EARNINGS DATA!");
        const response: AxiosResponse = await axios.get(`https://www.alphavantage.co/query?function=EARNINGS&symbol=${symbol}&apikey=${process.env.ALPHA_VANTAGE_API_KEY}`);

        // const response: AxiosResponse = await axios.get(`https://www.alphavantage.co/query?function=EARNINGS&symbol=IBM&apikey=demo`);

        console.log("Completed fetching EARNINGS DATA🎉");

        console.log(response.data);

        return response.data;
    } catch (error: any) {
        return NextResponse.json(
            {
                error: "Failed to fetch Earnings",
                status: 505,
            }
        )
    }
}


// Daily
export async function getDaily(symbol: string): Promise<any> {
    try {
        console.log("Fetching DAILY DATA!");
        const response: AxiosResponse = await axios.get(`https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${symbol}&apikey=${process.env.ALPHA_VANTAGE_API_KEY}`);

        console.log("Completed fetching DAILY DATA🎉");

        console.log(response.data);

        return response.data;
    } catch (error: any) {
        return NextResponse.json(
            {
                error: "Failed to fetch Daily Data",
                status: 505,
            }
        )
    }
}


// Daily Adjusted: PREMIUM END POINT
export async function getDailyAdjusted(symbol: string): Promise<any> {
    try {
        console.log("Fetching DAILY ADJUSTED DATA!");
        const response: AxiosResponse = await axios.get(`https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=${symbol}&apikey=${process.env.ALPHA_VANTAGE_API_KEY}`);

        console.log("Completed fetching DAILY ADJUSTED DATA🎉");

        console.log(response.data);

        return response.data;
    } catch (error: any) {
        return NextResponse.json(
            {
                error: "Failed to fetch Daily Adjusted Data",
                status: 505,
            }
        )
    }
}


// NOTE: The News&Sentiments API has various features. Must read more about it in the docs and USE as per the requirement.
// Currently, we are fetching news related to a "ticker".
// News & Sentiments:
export async function getTickerNewsAndSentiments(symbol: string): Promise<any> {
    try {
        console.log(`Fetching NEWS & SENTIMENTS about ${symbol}`);
        const response: AxiosResponse = await axios.get(`https://www.alphavantage.co/query?function=NEWS_SENTIMENT&symbol=${symbol}&apikey=${process.env.ALPHA_VANTAGE_API_KEY}`);

        console.log(`Completed fetching NEWS & SENTIMENTS about ${symbol}🎉`);

        console.log(response.data);

        return response.data;
    } catch (error: any) {
        return NextResponse.json(
            {
                error: "Failed to fetch Earnings",
                status: 505,
            }
        )
    }
}