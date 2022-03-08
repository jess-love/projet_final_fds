import React from 'react';
import './../App.css';
import {Link} from 'react-router-dom'
import { Button, Divider, FormControlLabel, TextField } from '@mui/material';
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import Checkbox from '@mui/material/Checkbox';
import  CheckBoxIcon  from '@mui/icons-material/CheckBox';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
// import { createMuiTheme } from 'material-ui/styles';

// const theme = createMuiTheme({
//     palette: {
//       primary: {
//         main: "#46AD8D",
//         contrastText: "#fff" //button text white instead of black
//       },
//       background: {
//         default: "#394764"
//       }
//     }
//   });
 export const Signup=()=>{
    return(
        <div > 
            <div className='icon'>
                <div className='icon_class'> 
                     <PersonAddIcon fontsize='large' />
                </div>
                <div className='text'>Sign up</div>

            </div>

            <div className='row-m-2'>
                <div className='col-6 p-2'>
                    <TextField id='first_name' className='p-2' type='text' variant='outlined' label= 'Enter First Name' fullWidth />
                </div>
                <div className='col-6 p-2'>
                    <TextField id='last_name' className='p-2' type='text' variant='outlined' label= 'Enter Last Name' fullWidth />
                </div>
                <div className='col-6 p-2'>
                <TextField id='email' className='p-2' type='text' variant='outlined' label= 'Enter Email' fullWidth />
                </div>
                <div className='col-6 p-2'>
                <TextField id='password' className='p-2' type='text' variant='outlined' label= 'Enter Password' fullWidth />
                </div>

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
                <Button className='btn' variant='contained' color='success'>Create Account</Button>
                
                <p className='text-center'>
                     <Divider variant='middle'/>
                    <Link to='\login' className='create-account'>
                    <h5> Already have an Account</h5> 
                    </Link>
                </p>
            </div>
        

        </div>
    )
}

//Prochaine tache: centrer la page