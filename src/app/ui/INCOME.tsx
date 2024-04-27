import { Bar } from "react-chartjs-2"
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    BarElement,
    Tooltip,
    Legend,
    Title,
} from 'chart.js'
import { useState } from "react";
import clsx from "clsx";

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    BarElement,
    Tooltip,
    Legend,
    Title,
);



const INCOME = ({ incomeData }) => {

    const [activeTab, setActiveTab] = useState('annually');

    const handleTabClick = (tab: string) => {
        setActiveTab(tab);
    };

    return (
        <div className={`w-full`}>
            <Bar data={activeTab === 'annually' ? incomeData.annually : incomeData.quaterly} />

            <ul className={`flex justify-evenly items-center p-2 overflow-auto`}>
                <li className={clsx(
                    `p-1 rounded`,
                    {
                        'bg-slate-700': activeTab === 'annually'
                    },
                )}>
                    <button onClick={() => handleTabClick('annually')}>Annually</button>
                </li>
                <li className={clsx(
                    `ml-2 p-1 rounded`,
                    {
                        'bg-slate-700': activeTab === 'quaterly'
                    },
                )}>
                    <button onClick={() => handleTabClick('quaterly')}>Quaterly</button>
                </li>
            </ul>
        </div>
    )
}

export default INCOME;