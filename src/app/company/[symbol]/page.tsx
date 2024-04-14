'use client'

import { getBalanceSheet, getCashFlow, getCompanyOverview, getDaily, getDailyAdjusted, getEarnings, getIncomeStatement, getTickerNewsAndSentiments } from '@/app/api/company/getData';
import PRICE_SUMMARY from '@/app/ui/PRICE_SUMMARY';
import COMPANY_ESSENTIALS from '@/app/ui/COMPANY_ESSENTIALS';
import { useEffect, useState } from 'react';
import { usCurrencyFormat } from '@/app/uils/currencyFormat';

const Page = ({ params }: { params: { symbol: string } }) => {

    // Extract "symbol" from the URL
    const { symbol } = params;

    // Manage state of "Company Overview"
    const [companyOverview, setCompanyOverview] = useState<any>();

    // Manage state of "Company Income Statement"
    const [companyIncomeStatement, setCompanyIncomeStatement] = useState<any>();

    // Manage state of "Company Balance Sheet"
    const [companyBalanceSheet, setCompanyBalanceSheet] = useState<any>();

    // Manage state of "Company Cash Flow"
    const [companyCashFlow, setCompanyCashFlow] = useState<any>();

    // Manage state of "Company Cash Flow"
    const [companyEarnings, setCompanyEarnings] = useState<any>();

    // Manage state of "Company Financial Markets News and Sentiments"
    const [companyNewsAndSentiments, setCompanyNewsAndSentiments] = useState<any>();

    // Manage state of "Daily Adjusted"
    const [companyDailyAdjusted, setCompanyDailyAdjusted] = useState<any>();

    // Manage state of "Daily"
    const [companyDaily, setCompanyDaily] = useState<any>();


    useEffect(() => {
        const fetchData = async () => {
            try {
                // Fetch "Company Overview":
                /* const fetchCompanyOverviewData = await getCompanyOverview(symbol);
                setCompanyOverview(fetchCompanyOverviewData); */


                // Fetch "Company Income Statement":
                /* const fetchCompanyIncomeStatement = await getIncomeStatement(symbol);
                setCompanyIncomeStatement(fetchCompanyIncomeStatement); */


                // Fetch "Company Balance Sheet":
                /* const fetchCompanyBalanceSheet = await getBalanceSheet(symbol);
                setCompanyBalanceSheet(fetchCompanyBalanceSheet); */


                // Fetch "Company Balance Sheet":
                /* const fetchCompanyCashFlow = await getCashFlow(symbol);
                setCompanyCashFlow(fetchCompanyCashFlow); */


                // Fetch "Company Earnings":
                /* const fetchCompanyEarnings = await getEarnings(symbol);
                setCompanyEarnings(fetchCompanyEarnings); */


                // Fetch "Company Financial Markets News and Sentiments":
                /* const fetchCompanyNewsAndSentiments = await getTickerNewsAndSentiments(symbol);
                setCompanyNewsAndSentiments(fetchCompanyNewsAndSentiments); */


                // Fetch "Company Daily Adjusted":
                /*const fetchCompanyDailyAdjusted = await getDailyAdjusted(symbol);
                setCompanyDailyAdjusted(fetchCompanyDailyAdjusted); */


                // Fetch "Company Daily":
                const fetchCompanyDaily = await getDaily(symbol);
                setCompanyDaily(fetchCompanyDaily);


                console.log("Data Inside useEffect: ", companyDaily);

                console.log("Data fetched successfully!");
            } catch (error: any) {
                console.log("Error: ", error.message);
            }
        }

        fetchData();
    }, []);
    console.log("Data Outside useEffect: ", companyDaily);

    // NOTE: For the key-value pairs that are not present in the "companyOverview" are assigned the value "0 or $0(using "usCurrencyFormat")".
    const companyEssentialsData = [
        {
            heading: "MARKET CAP",
            price: usCurrencyFormat(companyOverview?.MarketCapitalization),
            percentage: false,
            ratio: false,
        },
        {
            heading: "Enterprise Value",
            price: usCurrencyFormat(0),
            percentage: false,
            ratio: false,
        },
        {
            heading: "Shares Outstanding",
            price: usCurrencyFormat(companyOverview?.SharesOutstanding),
            percentage: false,
            ratio: false,
        },
        {
            heading: "P/E",
            price: companyOverview?.PERatio,
            percentage: false,
            ratio: true,
        },
        {
            heading: "P/B",
            price: 0,
            percentage: false,
            ratio: true,
        },
        {
            heading: "Face Value",
            price: usCurrencyFormat(0),
            percentage: false,
            ratio: false,
        },
        {
            heading: "Div. Yield",
            price: companyOverview?.DividendYield,
            percentage: true,
            ratio: false,
        },
        {
            heading: "Book Value",
            price: usCurrencyFormat(companyOverview?.BookValue),
            percentage: false,
            ratio: false,
        },
        {
            heading: "CASH",
            price: usCurrencyFormat(0),
            percentage: false,
            ratio: false,
        },
        {
            heading: "DEBT",
            price: usCurrencyFormat(0),
            percentage: false,
            ratio: false,
        },
        {
            heading: "Promoter Holding",
            price: usCurrencyFormat(0),
            percentage: true,
            ratio: false,
        },
        {
            heading: "EPS",
            price: companyOverview?.EPS,
            percentage: false,
            ratio: false,
        },
        {
            heading: " Sales Growth",
            price: 0,
            percentage: true,
            ratio: false,
        },
        {
            heading: "ROE",
            price: 0,
            percentage: true,
            ratio: false,
        },
        {
            heading: "ROCE",
            price: 0,
            percentage: true,
            ratio: false,
        },
        {
            heading: "Profit Growth",
            price: 0,
            percentage: true,
            ratio: false,
        },
    ];

    const priceSummaryData = [
        {
            heading: "TODAY'S HIGH",
            price: usCurrencyFormat(0),
        },
        {
            heading: "TODAY'S LOW",
            price: usCurrencyFormat(0),
        },
        {
            heading: "52 Week High",
            price: usCurrencyFormat(companyOverview && companyOverview['52WeekHigh']),
        },
        {
            heading: "52 Week Low",
            price: usCurrencyFormat(companyOverview && companyOverview['52WeekLow']),
        },
    ];

    return (
        <>

            {/* <h1 className={`text-2xl text-black-600 center`}>company/symbol page</h1> */}

            <PRICE_SUMMARY companyOverview={priceSummaryData} />
            <COMPANY_ESSENTIALS companyOverview={companyEssentialsData} />
        </>
    )
}

export default Page;