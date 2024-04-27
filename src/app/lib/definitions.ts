export interface HighlightItem {
    text: string;
    value: number;
    isPercentage?: boolean;
}

export interface CompanyHighlights {
    profitability: HighlightItem[];
    incomeStatement: HighlightItem[];
    management: HighlightItem[];
    valuation: HighlightItem[];
}

export interface IncomeReports {
    labels: string[];
    revenue: number[];
    netIncome: number[];
}

export interface BalanceSheetReports {
    labels: string[];
    totalAssets: number[];
    totalLiabilities: number[];
}

export interface CashflowReports {
    labels: string[];
    operatingCashflow: number[];
    cashflowFromInvestment: number[];
    cashflowFromFinancing: number[];
}