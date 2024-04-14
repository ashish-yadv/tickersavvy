'use client'
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";


// NOTE: This component is just Routing to the "Ticker's Information" page. So, if the methods are unnecessary then remove them and use only "handleKeyPress".
const SEARCH = () => {

    const router = useRouter();

    let [symbol, setSymbol] = useState<string>("");
    let [error, setError] = useState<string>("");

    // Push to route "/company/[symbol]"
    const handleSearch = () => {
        symbol = symbol.toUpperCase();
        if (symbol) {
            const { pathname, query } = {
                pathname: `/company/[symbol]`,
                query: { symbol },
            };

            const url = pathname.replace('[symbol]', symbol);

            router.push(url);
        }
        else {
            // throw new Error("Search field cannot be empty");
            setError("Search field cannot be empty");
        }
    };

    const handleKeyPress = (event: any) => {
        // Check for "Enter" key press
        if (event.keyCode === 13 || event.key === "Enter") {
            handleSearch();
        }
    }

    /* 
    // Company Overview:
    const fetchCompanyEssentials = () => {
        symbol = symbol.toUpperCase();
        if (symbol) {
            const { pathname, query } = {
                pathname: `/company/[symbol]`,
                query: { symbol },
            };

            const url = pathname.replace('[symbol]', symbol);

            router.push(url);
        }
        else {
            throw new Error("Search field cannot be empty");
        }
    };

    // Company Income Statement:
    const fetchCompanyIncomeStatement = () => {
        symbol = symbol.toUpperCase();
        if (symbol) {
            const { pathname, query } = {
                pathname: `/company/[symbol]`,
                query: { symbol },
            };

            const url = pathname.replace('[symbol]', symbol);

            router.push(url);
        }
        else {
            throw new Error("Search field cannot be empty");
        }
    };

    // Company Balance Sheet:
    const fetchCompanyBalanceSheet = () => {
        symbol = symbol.toUpperCase();
        if (symbol) {
            const { pathname, query } = {
                pathname: `/company/[symbol]`,
                query: { symbol },
            };

            const url = pathname.replace('[symbol]', symbol);

            router.push(url);
        }
        else {
            throw new Error("Search field cannot be empty");
        }
    };

    // Company Cash Flow:
    const fetchCompanyCashFlow = () => {
        symbol = symbol.toUpperCase();
        if (symbol) {
            const { pathname, query } = {
                pathname: `/company/[symbol]`,
                query: { symbol },
            };

            const url = pathname.replace('[symbol]', symbol);

            router.push(url);
        }
        else {
            throw new Error("Search field cannot be empty");
        }
    };

    // Company Earnings:
    const fetchCompanyEarnings = () => {
        symbol = symbol.toUpperCase();
        if (symbol) {
            const { pathname, query } = {
                pathname: `/company/[symbol]`,
                query: { symbol },
            };

            const url = pathname.replace('[symbol]', symbol);

            router.push(url);
        }
        else {
            throw new Error("Search field cannot be empty");
        }
    };

    // Company News & Sentiments:
    const fetchCompanyNewsAndSentiments = () => {
        symbol = symbol.toUpperCase();
        if (symbol) {
            const { pathname, query } = {
                pathname: `/company/[symbol]`,
                query: { symbol },
            };

            const url = pathname.replace('[symbol]', symbol);

            router.push(url);
        }
        else {
            throw new Error("Search field cannot be empty");
        }
    };

    // Daily Adjusted:
    const fetchCompanyDailyAdjusted = () => {
        symbol = symbol.toUpperCase();
        if (symbol) {
            const { pathname, query } = {
                pathname: `/company/[symbol]`,
                query: { symbol },
            };

            const url = pathname.replace('[symbol]', symbol);

            router.push(url);
        }
        else {
            throw new Error("Search field cannot be empty");
        }
    };
*/



    return (
        <div className='rounded-full m-5 flex flex-col justify-between items-center'>
            <Input
                type="text"
                value={symbol}
                onChange={(event) => {
                    setSymbol(event.target.value);
                }}
                onKeyDown={handleKeyPress}
                className={`py-6 max-w-2xl`}
                placeholder={`Enter symbol e.g IBM`}
            />

            <Button
                className="mt-3"
                onClick={handleSearch}
            >
                Fetch
            </Button>

            {
                error && <Alert>
                    <AlertTitle>Heads up!</AlertTitle>
                    <AlertDescription>
                        You can add components and dependencies to your app using the cli.
                    </AlertDescription>
                </Alert>
            }

        </div >
    )
}

export default SEARCH;