import React from 'react';
import {Link} from 'react-router-dom'
import { Button, Divider, FormControlLabel, TextField } from '@mui/material';
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import Checkbox from '@mui/material/Checkbox';
import  CheckBoxIcon  from '@mui/icons-material/CheckBox';
import PersonIcon from '@mui/icons-material/Person';




const Login=()=>{
    return(
        <div> 
            <div className='icon'>
                <div className='icon_class'> </div>
                <PersonIcon fontsize='large' />
                <div className='text'>Log in</div>

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
                    label='Remember me'
                />
                <Button variant='contained' color='primary' >Log in</Button>
            </div>
            <Divider variant='middle'/>
            <p className='text-center'>
                <Link to='\signup' className='text-back-50'>
                    <h5>Create Account</h5> 
                </Link>
            </p>

        </div>
    )
}
export default Login;

//Prochaine tache: centrer la page