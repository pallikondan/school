import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { makeStyles, withStyles, useTheme } from '@material-ui/core/styles';
import isEmpty from 'lodash/isEmpty';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import TableFooter from '@material-ui/core/TableFooter';
import Paper from '@material-ui/core/Paper';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import FirstPageIcon from '@material-ui/icons/FirstPage';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import LastPageIcon from '@material-ui/icons/LastPage';
import { IndeterminateCheckBox } from '@material-ui/icons';

function TablePaginationActions(props, compProps) {
  const classes = useStyles();
  const theme = useTheme();
  const { count, page, rowsPerPage, onChangePage } = props;

  const handleFirstPageButtonClick = event => {
    onChangePage(event, 0);
  };

  const handleBackButtonClick = event => {
    onChangePage(event, page - 1);
  };

  const handleNextButtonClick = event => {
    onChangePage(event, page + 1);
  };

  const handleLastPageButtonClick = event => {
    onChangePage(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
  };

  return (
    <div style={{width:'100%'}}>
      <div className={classes.root} style={{
        paddingTop: compProps.selectedRecords && compProps.selectedRecords.length && !isEmpty(compProps.selectedRecords[0]) ?
          '20px' : '0px'
      }}
      >
        <IconButton
          onClick={handleFirstPageButtonClick}
          disabled={page === 0}
          aria-label="first page"
        >
          {theme.direction === 'rtl' ? <LastPageIcon /> : <FirstPageIcon />}
        </IconButton>
        <IconButton onClick={handleBackButtonClick} disabled={page === 0} aria-label="previous page">
          {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
        </IconButton>
        <IconButton
          onClick={handleNextButtonClick}
          disabled={page >= Math.ceil(count / rowsPerPage) - 1}
          aria-label="next page"
        >
          {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
        </IconButton>
        <IconButton
          onClick={handleLastPageButtonClick}
          disabled={page >= Math.ceil(count / rowsPerPage) - 1}
          aria-label="last page"
        >
          {theme.direction === 'rtl' ? <FirstPageIcon /> : <LastPageIcon />}
        </IconButton>
      </div>
      {compProps.selectedRecords && compProps.selectedRecords.length && !isEmpty(compProps.selectedRecords[0]) ? <div style={{ display: 'inline-block' }}> {compProps.selectedRecords.length} Record{compProps.selectedRecords.length === 1 ? '' : 's'} Selected </div> : null}
    </div>
  );
}

TablePaginationActions.propTypes = {
  count: PropTypes.number.isRequired,
  onChangePage: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
  rowsPerPage: PropTypes.number.isRequired,
};

function desc(a, b, orderBy, ascending) {
  if (ascending) {
    return (!a[orderBy]) - (!b[orderBy]) || +(a[orderBy] > b[orderBy]) || -(a[orderBy] < b[orderBy]);
  } else {
    return (!a[orderBy]) - (!b[orderBy]) || -(a[orderBy] > b[orderBy]) || +(a[orderBy] < b[orderBy]);
  }
}

function stableSort(array, cmp) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = cmp(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });
  return stabilizedThis.map(el => el[0]);
}

function getSorting(order, orderBy) {
  return order === 'desc' ? (a, b) => desc(a, b, orderBy, false) : (a, b) => desc(a, b, orderBy, true);
}

function EnhancedTableHead(props) {
  const { classes, order, orderBy, onRequestSort, fields } = props;
  const createSortHandler = property => event => {
    onRequestSort(event, property);
  };

  return (
    <TableHead className={classes.tableHead}>
      <TableRow className={classes.tableRow}>
        {/* {
          props.showSelectAll ? (
            <TableCell padding="checkbox">
              <Checkbox
                color="primary"
                onClick={event => {
                  if (props.selectedRecords.length) {
                    props.onSelectAll(false)
                  } else {
                    props.onSelectAll(true)
                  }
                }}
                checked={props.selectedRecords.length && props.selectedRecords.length === props.data.length}
                indeterminate={props.selectedRecords.length && props.selectedRecords.length < props.data.length}
                indeterminateIcon={<IndeterminateCheckBox color="primary" />}
              />
            </TableCell>
          ) : <TableCell colSpan={1} />
        } */}
        {(fields.filter(x => x.visible)).map(headCell => (
          <TableCell
            key={headCell.key}
            align={headCell.numeric ? 'right' : 'left'}
            padding={headCell.disablePadding ? 'none' : 'default'}
            sortDirection={orderBy === headCell.key ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.key}
              direction={orderBy === headCell.key ? order : 'asc'}
              onClick={createSortHandler(headCell.key)}
              className={classes.headCell}
            >
              {headCell.columnName}
              {orderBy === headCell.key ? (
                <span className={classes.visuallyHidden}>
                  {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                </span>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

EnhancedTableHead.propTypes = {
  classes: PropTypes.object.isRequired,
  numSelected: PropTypes.number.isRequired,
  onRequestSort: PropTypes.func.isRequired,
  order: PropTypes.oneOf(['asc', 'desc']).isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired,
  fields: PropTypes.array.isRequired,
};


const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    display: 'inline'
  },
  paper: {
    position: 'relative',
    width: '100%',
    // marginBottom: theme.spacing(2),
    overflowX: 'auto'
  },
  table: {
    minWidth: 750,
  },
  visuallyHidden: {
    border: 0,
    clip: 'rect(0 0 0 0)',
    height: 1,
    margin: -1,
    overflow: 'hidden',
    padding: 0,
    position: 'absolute',
    top: 20,
    width: 1,
  },
  tableHead: {
    backgroundColor: '#ECF0F1',
  },
  tableRow: {
    backgroundColor: '#e2e2ea'
  },
  headCell: {
    fontWeight: 'bold',
    fontSize: '12px'
  },
  pagination: {
    fontSize: '10px'
  },
  tableRowSelected: {
    "&$selected, &$selected:hover": {
      backgroundColor: "#ECF0F1"
    }
  },
  tableCell: {
    fontSize: '16px',
    fontFamily:'poppins (regular)',
    color:'#676767'
  },
  selected: {}
}));

const StudentLists = ({ fields = [], data = [], initialSort = "", searchQuery = "", onPageChange = () => { }, onChangeSelected = () => { }, rowOnePage = 10, radio = false, size = "medium", sensorTable = false, ...props }) => {
  const classes = useStyles();
  const [order, setOrder] = useState('asc');
  const [orderBy, setOrderBy] = useState(initialSort);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(rowOnePage);
  const [selectedRecord, setSelectedRecord] = useState({})

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  useEffect(() => {
    if (searchQuery) {
      setPage(0);
    }
  }, [data, searchQuery]);


  const handleClick = (event, name) => {
    const selectedIndex = props.selectedRecords.findIndex(val => val.id === name.id);
    console.log('selectedindexxxx', selectedIndex)
    let newSelected = [];

    if (radio) {
      if (selectedIndex) {
        newSelected = [name];
      } else {
        newSelected = [];
      }
    } else {
      if (selectedIndex === -1) {
        newSelected = newSelected.concat(props.selectedRecords, name);
      } else if (selectedIndex === 0) {
        newSelected = newSelected.concat(props.selectedRecords.slice(1));
      } else if (selectedIndex === props.selectedRecords.length - 1) {
        newSelected = newSelected.concat(props.selectedRecords.slice(0, -1));
      } else if (selectedIndex > 0) {
        newSelected = newSelected.concat(
          props.selectedRecords.slice(0, selectedIndex),
          props.selectedRecords.slice(selectedIndex + 1),
        );
      }
    }
    // setSelected(newSelected);
    onChangeSelected(newSelected);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
    onPageChange(newPage);
  };

  const handleChangeRowsPerPage = event => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleSelectAll = selected => {
    if (selected) {
      onChangeSelected(data);
    } else {
      onChangeSelected([]);
    }
  }

  const isSelected = record => {
  return  props.selectedRecords.findIndex(x => x.id === record.id) !== -1;
  }

  const emptyRows = rowsPerPage - Math.min(rowsPerPage, data.length - page * rowsPerPage);
  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Table
          className={classes.table}
          aria-labelledby="tableTitle"
          size={size}
          aria-label="enhanced table"
          style={{ minHeight: 122 }}
        >
          <EnhancedTableHead
            classes={classes}
            numSelected={props.selectedRecords.length}
            order={order}
            orderBy={orderBy}
            onRequestSort={handleRequestSort}
            rowCount={data.length}
            fields={fields}
            data={data}
            showSelectAll={props.showSelectAll}
            selectedRecords={props.selectedRecords}
            onSelectAll={handleSelectAll}
          />
          <TableBody>
            {
              stableSort(data, getSorting(order, orderBy))
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((record, index) => {
                  const isItemSelected = isSelected(record);
                  const labelId = `enhanced-table-checkbox-${index}`;

                  return (
                    <TableRow
                      hover
                      role="checkbox"
                      aria-checked={isItemSelected}
                      tabIndex={-1}
                      key={record.id}
                      className={classes.tableRowSelected}
                      selected={isItemSelected}
                      style={{ height: 53 }}
                    >
                      {/* <TableCell padding="checkbox">
                        <Checkbox
                          color="primary"
                          style={{ visibility: sensorTable && 'hidden' }}
                          onClick={event => handleClick(event, record)}
                          checked={isItemSelected}
                          inputProps={{ 'aria-labelledby': labelId }}
                        />
                      </TableCell> */}
                      {
                        (fields.filter(x => x.visible)).map(field => (
                          <TableCell key={field.key} onClick={typeof field.render === 'function' ? () => {
                            setSelectedRecord(record)
                          }: null} className={classes.tableCell} padding={field.padding? "checkbox": "default"} align="left">
                            {
                              (field.render && typeof field.render === 'function') ? (
                                field.render(record[field.key], selectedRecord, index)
                              ) : record[field.key]
                            }
                          </TableCell>
                        ))
                      }
                    </TableRow>
                  );
                })}
          </TableBody>
          <TableFooter>
            <TableRow>
              <TablePagination
                rowsPerPageOptions={[3, 5, 7, 8, 10]}
                colSpan={fields.length}
                count={data.length}
                rowsPerPage={rowsPerPage}
                page={page}
                SelectProps={{
                  inputProps: { 'aria-label': 'rows per page' },
                }}
                onChangePage={handleChangePage}
                onChangeRowsPerPage={handleChangeRowsPerPage}
                ActionsComponent={(e) => TablePaginationActions(e, props)}
              />
            </TableRow>
          </TableFooter>
        </Table>
      </Paper>
    </div>
  );
}

StudentLists.defaultProps = {
  selectedRecords: [],
  showSelectAll: true
}

export default withStyles({}, { withTheme: true })(StudentLists);
