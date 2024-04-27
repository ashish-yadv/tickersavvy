'use client'

import clsx from "clsx";
import { useState } from "react";
import INCOME from "../INCOME";
import BALANCE_SHEET from "../BALANCE_SHEET";
import CASH_FLOW from "../CASH_FLOW";

// Types/interfaces import:
import { IncomeReports, CashflowReports, BalanceSheetReports } from '@/app/lib/definitions';


type CompanyFinancialsProps = {
  pastSixYearsAnnualIncomeReports: IncomeReports;
  pastSixQuatersIncomeReports: IncomeReports;
  pastSixYearsAnnualBalanceSheetReports:
  BalanceSheetReports;
  pastSixQuatersBalanceSheetReports:
  BalanceSheetReports;
  pastSixYearsAnnualCashflowReports: CashflowReports;
  pastSixQuatersCashflowReports: CashflowReports;
};

const COMPANY_FINANCIALS = ({
  pastSixYearsAnnualIncomeReports,
  pastSixQuatersIncomeReports, pastSixYearsAnnualBalanceSheetReports,
  pastSixQuatersBalanceSheetReports,
  pastSixYearsAnnualCashflowReports, pastSixQuatersCashflowReports
}: CompanyFinancialsProps) => {

  const [activeTab, setActiveTab] = useState('Income');

  const companyFinancials = {
    "income": {
      "annually": {
        labels: pastSixYearsAnnualIncomeReports?.labels,
        datasets: [
          {
            label: "Revenue",
            data: pastSixYearsAnnualIncomeReports?.revenue,
            backgroundColor: ["rgb(1,122,255)"],
            borderColor: "rgb(75, 192, 192)",
          },
          {
            label: "Net Income",
            data: pastSixYearsAnnualIncomeReports?.netIncome,
            backgroundColor: "rgb(51,163,77)",
            borderColor: "rgb(75, 192, 192)",
          },
        ]
      },
      "quaterly": {
        labels: pastSixQuatersIncomeReports?.labels,
        datasets: [
          {
            label: "Revenue",
            data: pastSixQuatersIncomeReports?.revenue,
            backgroundColor: ["rgb(1,122,255)"],
            borderColor: "rgb(75, 192, 192)",
          },
          {
            label: "Net Income",
            data: pastSixQuatersIncomeReports?.netIncome,
            backgroundColor: "rgb(51,163,77)",
            borderColor: "rgb(75, 192, 192)",
          },
        ]
      },
    },
    "balanceSheet": {
      "annually": {
        labels: pastSixYearsAnnualBalanceSheetReports?.labels,
        datasets: [
          {
            label: "Total Assets",
            data: pastSixYearsAnnualBalanceSheetReports?.totalAssets,
            backgroundColor: ["rgb(1,122,255)"],
            borderColor: "rgb(75, 192, 192)",
          },
          {
            label: "Total Liablities",
            data: pastSixYearsAnnualBalanceSheetReports?.totalLiabilities,
            backgroundColor: "rgb(51,163,77)",
            borderColor: "rgb(75, 192, 192)",
          },
        ]
      },
      "quaterly": {
        labels: pastSixQuatersBalanceSheetReports?.labels,
        datasets: [
          {
            label: "Total Assets",
            data: pastSixQuatersBalanceSheetReports?.totalAssets,
            backgroundColor: ["rgb(1,122,255)"],
            borderColor: "rgb(75, 192, 192)",
          },
          {
            label: "Total Liablities",
            data: pastSixQuatersBalanceSheetReports?.totalLiabilities,
            backgroundColor: "rgb(51,163,77)",
            borderColor: "rgb(75, 192, 192)",
          },
        ]
      }
    },
    "cashflow": {
      "annually": {
        labels: pastSixYearsAnnualCashflowReports?.labels,
        datasets: [
          {
            label: "Operating Cash Flow",
            data: pastSixYearsAnnualCashflowReports?.operatingCashflow,
            backgroundColor: ["rgb(1,122,255)"],
            borderColor: "rgb(75, 192, 192)",
          },
          {
            label: "Investing Cash Flow",
            data: pastSixYearsAnnualCashflowReports?.cashflowFromInvestment,
            backgroundColor: "rgb(51,163,77)",
            borderColor: "rgb(75, 192, 192)",
          },
          {
            label: "Financing Cash Flow",
            data: pastSixYearsAnnualCashflowReports?.cashflowFromFinancing,
            backgroundColor: ["rgb(255,196,13)"],
            borderColor: "rgb(75, 192, 192)",
          },
        ]
      },
      "quaterly": {
        labels: pastSixQuatersCashflowReports?.labels,
        datasets: [
          {
            label: "Operating Cash Flow",
            data: pastSixQuatersCashflowReports?.operatingCashflow,
            backgroundColor: ["rgb(1,122,255)"],
            borderColor: "rgb(75, 192, 192)",
          },
          {
            label: "Investing Cash Flow",
            data: pastSixQuatersCashflowReports?.cashflowFromInvestment,
            backgroundColor: "rgb(51,163,77)",
            borderColor: "rgb(75, 192, 192)",
          },
          {
            label: "Financing Cash Flow",
            data: pastSixQuatersCashflowReports?.cashflowFromFinancing,
            backgroundColor: ["rgb(255,196,13)"],
            borderColor: "rgb(75, 192, 192)",
          },
        ]
      }
    },
  }

  
  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };

  return (
    <section className={`m-3 bg-slate-900 rounded  md:w-2/3 lg:w-1/2`}>
      <h2 className={`text-xl font-semibold p-2`}>Company Financials</h2>
      <ul className={`flex justify-between items-center p-2 overflow-auto`}>
        <li className={clsx(
          `p-1 rounded`,
          {
            'bg-slate-700': activeTab === 'Income'
          },
        )}>
          <button onClick={() => handleTabClick('Income')}>Income</button>
        </li>
        <li className={clsx(
          `ml-2 p-1 rounded`,
          {
            'bg-slate-700': activeTab === 'BalanceSheet'
          },
        )}>
          <button onClick={() => handleTabClick('BalanceSheet')}>Balance Sheet</button>
        </li>
        <li className={clsx(
          `ml-2 p-1 rounded`,
          {
            'bg-slate-700': activeTab === 'CashFlow'
          },
        )}>
          <button onClick={() => handleTabClick('CashFlow')}>Cash Flow</button>
        </li>
      </ul>


      <div className={`data-block mt-2 flex justify-center`}>
        {/* Conditionally render data content based on activeTab */}
        {activeTab === 'Income' && <INCOME incomeData={companyFinancials?.income} />}
        {activeTab === 'BalanceSheet' && <BALANCE_SHEET balanceSheetData={companyFinancials?.balanceSheet} />}
        {activeTab === 'CashFlow' && <CASH_FLOW cashflowData={companyFinancials?.cashflow} />}
      </div>
    </section >
  )
}

export default COMPANY_FINANCIALS;