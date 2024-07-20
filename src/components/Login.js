import React, { useState } from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import '@fontsource/roboto/400.css';
import Link from '@mui/material/Link';
import { useNavigate } from 'react-router-dom';

export default function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const Navigate = useNavigate();

    const handleUsername = (event) => {
        let getUser = event.target.value;
        setUsername(getUser);
    }

    const handlePassword = (event) => {
        let getPass = event.target.value;
        setPassword(getPass);
    }

    const handleButton = () => {
        if (username === 'sara' && password === '1234') {
            Navigate('/saraPage');
        } else {
            alert('username or password wrong');
        }
    }
    return (
        <React.Fragment>
            <Container style={{ maxWidth: '444px', marginLeft: 'auto', marginRight: 'auto', marginTop: '50px', display: 'block', boxSizing: 'border-box' }} >
                <Box className="icon" sx={{ textAlign: 'center' }}>
                    <Stack className="icon" justifyContent={"center"} sx={{ borderRadius: '50%', alignContent: 'center', width: '40px', height: '40px', background: '#9c27b0', textAlign: 'center', display: 'inline-block' }}>
                        <LockOutlinedIcon style={{ color: '#fff' }} />
                    </Stack>
                    <Typography variant="h4" style={{ fontFamily: 'Roboto', marginTop: '10px' }}>login</Typography>
                </Box>
                <Stack className="input-first-last-name" sx={{ marginTop: '15px' }}>
                    <TextField onChange={handleUsername}
                        helperText=" " id="demo-helper-text-aligned-no-helper" label="username*"
                    />
                    <TextField onChange={handlePassword}
                        helperText=" " id="demo-helper-text-aligned-no-helper" label="password*" type='password'
                    />
                    <Button onClick={handleButton} className="but" variant="contained" disableElevation style={{ height: '10', width: '10', fontFamily: 'Roboto' }}>
                        login
                    </Button>
                    <Link href="#" sx={{ marginTop: '10px' }} target={'_self'}>Forget password</Link>
                </Stack>

            </Container>
        </React.Fragment>
    )
}