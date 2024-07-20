import React, { useEffect, useState } from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { useNavigate } from 'react-router-dom';
import '@fontsource/roboto/400.css';

export default function Mine() {
    const [checked, setChecked] = React.useState(false);
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const Navigate = useNavigate();
    const [buttonDisabled, setButtonDisabled] = useState(true);

    const handleNameFirst = (event) => {
        let getFirst = event.target.value;
        setFirstName(getFirst);
    }

    const handleLastName = (event) => {
        let getLast = event.target.value;
        setLastName(getLast);
    }

    const handleEmail = (event) => {
        let getEmail = event.target.value;
        setEmail(getEmail);
    }

    const handlePassword = (event) => {
        let getPassword = event.target.value;
        setPassword(getPassword);
    }

    const handleCheck = (event) => {
        setChecked(event.target.checked);
    };

    const handleclick = () => {
        /*if (firstName === 'sara' && lastName === 'kht' && email === 'email' && password === '1234' && checked === true) {
        }  وقتی از frtch و api استفاده میکنیم دیگر این تکه کد استفاده نمیکنیم این تکه کد برای تست دستی خودمان است
        */
        const res = await fetch('/user/login', {
            method: 'POST',
            body: JSON.stringify({ username: email, password })
        });
        if (res.status === 200) {

            Navigate('/saraPage');
        }
    }

    useEffect(() => {
        if (firstName  && lastName && email && password  && checked ) {
            setButtonDisabled(false);
        } else {
            setButtonDisabled (true);
        }
    }, [firstName, lastName, email, password, checked]);

    return (
        <React.Fragment>
            <Container direction={'column'} style={{ maxWidth: '444px', marginLeft: 'auto', marginRight: 'auto', marginTop: '64px', display: 'block', boxSizing: 'border-box', display: 'flex' }} >
                <Stack alignItems={'center'}>
                    <Stack className="icon" justifyContent={"center"} sx={{ borderRadius: '50%', alignContent: 'center', width: '40px', height: '40px', background: '#9c27b0', textAlign: 'center', display: 'inline-block' }}>
                        <LockOutlinedIcon style={{ color: '#fff', fontSize: '1.5rem' }} />
                    </Stack>
                    <Typography variant='h5' style={{ fontFamily: "Roboto", textAlign: 'center', marginBottom: '15px', marginTop: '5px', fontWeight: '400', fontSize: '1.5rem' }}>sign up</Typography>
                    <Stack direction={{ xs: 'column', sm: 'row' }} className="input-first-last-name">
                        <TextField required onChange={handleNameFirst} sx={{ marginBottom: '-5px' }}
                            helperText=" " id="demo-helper-text-aligned-no-helper1" label="First Name*"
                        />
                        <TextField
                            helperText=" " required onChange={handleLastName} sx={{ marginLeft: '8px', marginBottom: '-5px' }} id="demo-helper-text-aligned-no-helper2" label="Last Name*"
                        />
                    </Stack>
                    <Stack className="input-email-password">
                        <TextField required onChange={handleEmail} sx={{ marginBottom: '-5px' }}
                            helperText=" " id="demo-helper-text-aligned-no-helper3" label="Email Address*"
                        />
                        <TextField required onChange={handlePassword} sx={{ marginBottom: '-5px' }}
                            helperText=" " id="demo-helper-text-aligned-no-helper4" label="Password*" type='password'
                        />
                        <Stack direction={'row'}>
                            <Checkbox textAlign='start'
                                checked={checked}
                                onChange={handleCheck}
                                inputProps={{ 'aria-label': 'controlled' }}
                            />
                            <Typography className="check" textalign='start' sx={{ color: 'rgba(0, 0, 0, 0.87)' }} >
                                I want to receive inspiration, marketing promotions and updates via email.
                            </Typography>
                        </Stack>
                        <Button disabled={buttonDisabled} onClick={handleclick} className="but" variant="contained" disableElevation style={{ display: 'flex', height: '10', width: '10', marginTop: '20px', fontFamily: 'Roboto', position: 'relative', boxSizing: 'border-box' }}>
                            sign up
                        </Button>
                        <Box className="link1" sx={{ marginTop: '17px', fontFamily: 'Roboto', textAlign: 'end', fontSize: '14px' }}>
                            <Link href="https://organic-guide-rw56w5wpjq9fxv5r-3000.app.github.dev/login" target={'_self'}>Already have an account? Sign in</Link>
                        </Box>
                    </Stack>
                    <Stack className="footer-link" sx={{ marginTop: '50px', textAlign: 'center' }}>
                        <Typography variant="p" component="p" sx={{ color: 'rgba(0, 0, 0, 0.6)', marginTop: '15px', fontSize: '14px' }}>
                            Copyright ©
                            <Link href="#" sx={{ color: 'rgba(0, 0, 0, 0.6)', fontSize: '14px' }}>
                                Your Website
                            </Link>
                            2024.
                        </Typography>
                    </Stack>
                </Stack>
            </Container>
        </React.Fragment>
    )
}
