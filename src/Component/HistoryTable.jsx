import { Link } from "react-router-dom"
import { buttonVariants } from "../UI/Button"
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "../UI/table"
  
  
  export function HistoryTable ({history}) {
    return (
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Topic</TableHead>
            <TableHead>Type</TableHead>
            <TableHead className="text-right">Earned Marks</TableHead>
            <TableHead className="text-right">Total Marks</TableHead>
            <TableHead className="text-right">Report</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {history.map((exam) => (
            <TableRow key={exam.id} className="my-3">
              <TableCell className="font-medium">{exam.topic}</TableCell>
              <TableCell>{exam.type}</TableCell>
              <TableCell className="text-right">{exam.marksEarned}</TableCell>
              <TableCell className="text-right">{exam.totalMarks}</TableCell>
              <TableCell className="text-right"><Link to={`/stats/${exam.id}`} className={buttonVariants('outline')}>Open</Link></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    )
  }
  