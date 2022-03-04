import React from 'react';
import './../App.css';
import {Link} from 'react-router-dom'
import { Button, Divider, FormControlLabel, TextField } from '@mui/material';
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import Checkbox from '@mui/material/Checkbox';
import  CheckBoxIcon  from '@mui/icons-material/CheckBox';


 export const Signup=()=>{
    return(
        <div> 
            <div className='icon'>
                <div className='icon_class'> </div>
                <div className='text'>Sign up</div>

            </div>

            <div className='row m-2'>
                <div className='col-6 p-2'>
                    <TextField id='first_name' type='text' variant='outlined' label= 'Enter First Name' fullWidth />
                </div>
                <div className='col-6 p-2'>
                    <TextField id='last_name' type='text' variant='outlined' label= 'Enter Last Name' fullWidth />
                </div>
            </div>

            <div className='row m-2'>
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
                    label='I agree to all Terms & Conditions'
                />
                <Button variant='contained' color='primary' >Create Account</Button>
            </div>
            <Divider variant='middle'/>
            <p className='text-center'>
                <Link to='\login' className='text-back-50'>
                  <h5> Already have an Account</h5> 
                </Link>
            </p>

        </div>
    )
}
