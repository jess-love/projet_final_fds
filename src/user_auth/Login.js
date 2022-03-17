import React from 'react';
import {Link} from 'react-router-dom'
import { Button, Divider, FormControlLabel, TextField } from '@mui/material';
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import Checkbox from '@mui/material/Checkbox';
import  CheckBoxIcon  from '@mui/icons-material/CheckBox';
import PersonIcon from '@mui/icons-material/Person';




export const Login=()=>{
    return(
        <div > 
            <div className='icon'>
                <div className='icon_class'> 
                    <PersonIcon fontsize='large' />
                </div>
                <div className='text'>Log in</div>

            </div>

          

            <div className='row-m-2'>
                <TextField id='email' className='p-2' type='text' variant='outlined' label= 'Enter Email' fullWidth />
                <TextField id='password' className='p-2' type='text' variant='outlined' label= 'Enter Password' fullWidth />
                <FormControlLabel 
                    control={
                        <Checkbox
                            icon={<CheckBoxOutlineBlankIcon fontsize='small'/>}
                            checkedIcon={<CheckBoxIcon fontsize='small'/>}
                            name="checkedI"
                        />
                    }
                    label='Remember me'
                />
                <Button className='btn' variant='contained' color='success'>Log in</Button>

                
                <p className='text-center'>
                    <Divider variant='middle'/>
                    <Link to='\signup' className='create-account'>
                        <h5>Create Account</h5>
                    </Link>
                </p>
            </div>
   

        </div>
    )
}
