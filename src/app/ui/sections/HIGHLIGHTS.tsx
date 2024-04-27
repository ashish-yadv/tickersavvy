'use client'

import clsx from "clsx";
import { useState } from "react";
import PROFITABILITY from "../PROFITABILITY";
import INCOME_STATEMENT from "../INCOME_STATEMENT";
import MANAGEMENT from "../MANAGEMENT";
import VALUATION from "../VALUATION";


const HIGHLIGHTS = ({ companyHighlights }) => {

    const [activeTab, setActiveTab] = useState('Profitability');

    const handleTabClick = (tab: string) => {
        setActiveTab(tab);
    };

    return (
        <section className={`w:full m-3 bg-slate-900 rounded md:w-2/3 lg:w-1/2`}>
            <h2 className={`text-xl font-semibold p-2`}>Highlights</h2>
            <ul className={`flex justify-between items-center p-2 overflow-auto`}>
                <li className={clsx(
                    `p-1 rounded`,
                    {
                        'bg-slate-700': activeTab === 'Profitability'
                    },
                )}>
                    <button onClick={() => handleTabClick('Profitability')}>Profitability</button>
                </li>
                <li className={clsx(
                    `ml-2 p-1 rounded`,
                    {
                        'bg-slate-700': activeTab === 'IncomeStatement'
                    },
                )}>
                    <button onClick={() => handleTabClick('IncomeStatement')}>Income Statement</button>
                </li>
                <li className={clsx(
                    `ml-2 p-1 rounded`,
                    {
                        'bg-slate-700': activeTab === 'Management'
                    },
                )}>
                    <button onClick={() => handleTabClick('Management')}>Management</button>
                </li>
                <li className={clsx(
                    `ml-2 p-1 rounded`,
                    {
                        'bg-slate-700': activeTab === 'Valuation'
                    },
                )}>
                    <button onClick={() => handleTabClick('Valuation')}>Valuation</button>
                </li>
            </ul>

            <div className={`data-block mt-2 flex justify-center`}>
                {/* Conditionally render data content based on activeTab */}
                {activeTab === 'Profitability' && <PROFITABILITY profitabilityData={companyHighlights.profitability} />}
                {activeTab === 'IncomeStatement' && <INCOME_STATEMENT incomeStatementData={companyHighlights.incomeStatement} />}
                {activeTab === 'Management' && <MANAGEMENT managementData={companyHighlights.management} />}
                {activeTab === 'Valuation' && <VALUATION valuationData={companyHighlights.valuation} />}
            </div>
        </section >
    )
}

export default HIGHLIGHTS