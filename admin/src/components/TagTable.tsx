import React, {useState} from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableFooter from '@mui/material/TableFooter';
import DeleteIcon from '@mui/icons-material/Delete';
import Checkbox from '@mui/material/Checkbox';
import TablePagination from '@mui/material/TablePagination';
import TagLine from 'components/TagLine';
import styled from 'styled-components';
import {useAdminContext} from 'components/AdminContext';

interface Tag {
  id: number
  name: string
  date: Date
}

interface Props {
  tagList: Tag[]
}

const TagTable = () => {

  const ctx = useAdminContext();
  const [page, setPage] = useState<number>(0);
  const [displayErrMsg, setDisplayErrMsg] = useState<string>("");
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - ctx.tagList.length) : 0;

  const handleChangePage = (
    event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number,
  ) => {
    setPage(newPage);
  };

  return (
    <>
      <h2 style={{textAlign: 'center'}}>タグ一覧</h2>
      <TableContainer sx={{display: "flex", justifyContent: "center", paddingBottom: "30px"}}>
        <Table sx={{ width: 750, minHeight: 440, background: "#FFF" }}>
          <TableHead>
            <TableRow>
              <TableCell padding="checkbox">
                <Checkbox/>
              </TableCell>
              <TableCell>id</TableCell>
              <TableCell>name</TableCell>
              <TableCell>createdate</TableCell>
              <TableCell align='center' sx={{display: "flex", justifyContent: "center"}}><DeleteIcon/></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {(rowsPerPage > 0 ? 
                ctx.tagList.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage) : ctx.tagList
             ).map((tag, index) => <TagLine tag={tag} key={index} page={page}/>)}
            {emptyRows > 0 && (
              <TableRow sx={{height: 65 * emptyRows }}>
                <TableCell colSpan={6} />
              </TableRow>
            )}
          </TableBody>
          <TableFooter>
            <TableRow>
              <TablePagination
                rowsPerPageOptions={[5]}
                colSpan={6}
                count={ctx.tagList.length}
                rowsPerPage={5}
                page={page}
                SelectProps={{
                  inputProps: {
                    'aria-label': 'rows per page',
                  },
                  native: true,
                }}
                onPageChange={handleChangePage}
              />
            </TableRow>
          </TableFooter>
        </Table>
      </TableContainer>
      <WrapperTagNameForm>
        <div>
          <span>タグ作成</span>
          <input type="text" />
        </div>
      </WrapperTagNameForm>
    </>
  );
}

const WrapperTagNameForm = styled.div`
  display: flex;
  justify-content: center;
  div{
    color: #000;
    background: #FFF;
    width: 750px;
  }
`

export default TagTable;