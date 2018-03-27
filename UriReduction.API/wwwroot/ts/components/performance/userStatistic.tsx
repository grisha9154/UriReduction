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
import IAssociatedUri from "../../types/iAssociatedUri";
import ITableSimpleProps from "../../types/iTableSimpleProps";

class TableSimple extends React.Component<ITableSimpleProps, object> {
  constructor(props: ITableSimpleProps) {
    super(props);
    this.MyTableBody = this.MyTableBody.bind(this);
  }
  MyTableBody(uris: IAssociatedUri[]): JSX.Element[] {
    if (uris === undefined) { return; }
    let result: JSX.Element[] = uris.map((uri) => 
    <TableRow>
      <TableRowColumn><a href={uri.shortUri}>{uri.shortUri.slice(uri.shortUri.indexOf("SUGC/") + 5)}</a></TableRowColumn>
      <TableRowColumn><a href={uri.longUri}>{uri.longUri}</a></TableRowColumn>
      <TableRowColumn>{uri.requestCount}</TableRowColumn>
    </TableRow>);
    return result;
 }
  render(): JSX.Element {
    return(
      <MuiThemeProvider>
        <Table>
          <TableHeader
          displaySelectAll={false}
          adjustForCheckbox={false}>
            <TableRow>
              <TableHeaderColumn>Short Uri</TableHeaderColumn>
              <TableRowColumn>Long Uri</TableRowColumn>
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