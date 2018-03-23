import * as React from "react";
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from "material-ui/Table";

import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";

class TableSimple extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.MyTableBody = this.MyTableBody.bind(this);
  }
  MyTableBody(numbers: Array<any>): JSX.Element[] {
    if (numbers === undefined) { return; }
    let result: JSX.Element[] = numbers.map((number) => <TableRow>
      <TableRowColumn>{number.shortUri}</TableRowColumn>
      <TableRowColumn>{number.requestCount}</TableRowColumn>
      </TableRow>);
    return result;
 }
  render(): any {
    console.log(this.props.uri);
    return(
      <MuiThemeProvider>
      <Table>
        <TableHeader
        displaySelectAll={false}
        adjustForCheckbox={false}>
          <TableRow>
            <TableHeaderColumn>Short Uri</TableHeaderColumn>
            <TableHeaderColumn>Count</TableHeaderColumn>
          </TableRow>
        </TableHeader>
        <TableBody displayRowCheckbox={false}>
          {this.MyTableBody(this.props.uri)}
        </TableBody>
      </Table>
      </MuiThemeProvider>
    );
  }
}
export default TableSimple;