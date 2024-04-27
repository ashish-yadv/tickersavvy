import {
    Table,
    TableBody,
    TableCell,
    TableRow,
} from "@/components/ui/table"
import { usCurrencyFormat } from "../uils/currencyFormat"


const PROFITABILITY = ({ profitabilityData }) => {

    return (
        <>
            <Table>
                <TableBody>
                    {
                        profitabilityData.map((data, key: number) => (
                            <TableRow key={key}>
                                <TableCell>{data.text}</TableCell>
                                <TableCell
                                    className={`flex justify-end`}
                                >
                                    {data.isPercentage ? `${data.value}%` : usCurrencyFormat(data.value)}
                                </TableCell>
                            </TableRow>
                        ))
                    }
                </TableBody>
            </Table>
        </>
    )
}

export default PROFITABILITY