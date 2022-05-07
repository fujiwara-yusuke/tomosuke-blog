import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import TextField from '@mui/material/TextField';
import { useForm } from 'react-hook-form';
import { useEffect, useState } from 'react';
import { Axios, updateTagNmae } from 'utils/api';
import styled from 'styled-components';
import {useAdminContext} from 'components/AdminContext';

interface Tag {
  id: number
  name: string
  date: Date
}

interface Props {
  tag: Tag
  page: number
}

const TagLine = ({tag, page}: Props) => {
  console.log(tag.name);
  const ctx = useAdminContext();
  const { register, handleSubmit, setValue, setError, formState: { errors } } = useForm<{name: string}>({
    defaultValues: {name: tag.name}
  });
  const [errMsg, setErrMsg] = useState<string>("");
  const [isClick, setIsClick] = useState<boolean>(false);

  useEffect(() => {
    setIsClick(false);
    setErrMsg("");
    setValue('name', tag.name);
  }, [page])

  const editTagName = () => {
    setIsClick(true);
  }
  
  const saveTagName = async (data: {name: string}) => {
    try{
      const res = await Axios.post(updateTagNmae, {
        id: tag.id,
        name: data.name
      })

      if(res.status == 200){

        setIsClick(false);
      }
    }catch(err){
      console.log(err);
      setError('name', {type: 'failed to update tag name.', message: 'failed to update tag name.'})
    }
  }

  console.log('errors', errors);

  return(
    <TableRow sx={{height: "65px"}}>
      <TableCell padding="checkbox">
        <Checkbox/>
      </TableCell>
      <TableCell component="th" scope="row">
        {tag.id}
      </TableCell>
      <TableCell sx={{width: "350px"}}>
        {
          isClick ?
          <WrapperInput>
            <TextField
              sx={{height: "25px"}}
              variant="standard"
              defaultValue={tag.name}
              {...register('name', {required: "required", maxLength: {value: 15, message: "max length 15"}})}
              error={errors.name != undefined}
              helperText={errors.name?.message}
            />
            <Button variant="text" sx={{height: "25px"}} onClick={handleSubmit(saveTagName)}>保存</Button>
          </WrapperInput>
          :
          <WrapperInput>
            <div>{tag.name}</div>
            <Button variant="text" sx={{height: "25px"}} onClick={editTagName}>編集</Button>
          </WrapperInput>
        }
      </TableCell>
      <TableCell>{tag.date}</TableCell>
      <TableCell align='center'><Button variant="text" sx={{height: "25px"}}>削除</Button></TableCell>
    </TableRow>
  )
}

const WrapperInput = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
}
`

export default TagLine;