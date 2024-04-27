import {
    Table,
    TableBody,
    TableCell,
    TableRow,
} from "@/components/ui/table";
import { usCurrencyFormat } from "../uils/currencyFormat";

const INCOME_STATEMENT = ({ incomeStatementData }) => {

    return (
        <>
            <Table>
                <TableBody>
                    {
                        incomeStatementData.map((data, key: number) => (
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

export default INCOME_STATEMENT