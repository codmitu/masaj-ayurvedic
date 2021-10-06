import React, { useState } from 'react'
import styled from 'styled-components'
import Select from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import {EventSeat} from '@styled-icons/material-rounded/EventSeat'
import MobileDateTimePicker from '@mui/lab/MobileDateTimePicker';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import Box from '@mui/material/Box';
import roLocale from 'date-fns/locale/ro';


export const FormContact = () => {
    const [phone, setPhone] = useState("")
    const [message, setMessage] = useState("")
    const [name, setName] = useState("")

    const [dateTime, setDateTime] = useState(new Date());

    const [option, setOption] = useState('');
    const handleChange = (event) => {
        setOption(event.target.value);
    };


    return (
        <FormWrapper action="https://formsubmit.co/mihailadenisa14@yahoo.com" method="POST">
            <input type="hidden" name="_next" value="https://codmitu.github.io/masaj-ayurvedic/success"/>
            <input type="hidden" name="_subject" value="Programare Salon Denisa"/>
            <input type="hidden" name="_captcha" value="false"/>
            {/* <input type="hidden" name="_autoresponse" value="Te-ai programat cu succes la Salon Denisa"/> */}
            {/* <input type="email" name="email" placeholder="Email Address"/> */}
            <input type="hidden" name="_template" value="box"/>
            <LocalizationProvider locale={roLocale} dateAdapter={AdapterDateFns}>
                <MobileDateTimePicker
                    value={dateTime}
                    onChange={(date) => {
                        setDateTime(date);
                    }}
                    ampm={false}
                    ampmInClock={false}
                    fullWidth
                    required
                    // timeIcon={<Time/>}
                    cancelText="Anulează"
                    okText="Ok"
                    variant="dialog"
                    label="Alege data și ora"
                    inputFormat="dd/MM/yyyy HH:mm"
                    mask="__/__/___ __:__"
                    minutesStep={5}
                    minDate={new Date(Date.now() + 56000000)}
                    minTime={new Date(0, 0, 0, 9)}
                    maxTime={new Date(0, 0, 0, 16, 0)}
                    format="M"
                    renderInput={(params) => <TextField {...params} />}
                />
                <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
                    <InputLabel id="demo-simple-select-standard-label">Alege Pachet</InputLabel>
                    <Select
                        labelId="demo-simple-select-standard-label"
                        id="demo-simple-select-standard"
                        value={option}
                        onChange={handleChange}
                        name="Pachet"
                    >
                        <MenuItem value="" disabled>
                            <em>None</em>
                        </MenuItem>
                        <MenuItem value="Masajul-Somatic">♨ Masajul Somatic - 150 RON</MenuItem>
                        <MenuItem value="Masajul-Lomi-Lomi">♨ Masajul Lomi-Lomi - 120 RON</MenuItem>
                        <MenuItem value="Terapia-indiana Ayurveda">♨ Terapia indiană Ayurveda - 300 RON</MenuItem>
                        <MenuItem value="Masaj-cu-roci-vulcanice">♨ Masaj cu roci vulcanice - 180 RON</MenuItem>
                        <MenuItem value="Masaj-cu-bete-de-bambus">♨ Masaj cu bețe de bambus - 120 RON</MenuItem>
                    </Select>
                </FormControl>
                <input type="text" style={{display: "none"}} name="Data-Ora" value={dateTime.toLocaleString("ro")} readOnly/>
                <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 1 }}>
                        <TextField 
                            required 
                            id="standard-required" 
                            label="Nume" 
                            name="Nume"
                            variant="standard"
                            value={name}
                            onChange={e => setName(e.target.value)}
                        />
                        <TextField
                            variant="standard"
                            label="Număr Telefon"
                            type="number"
                            name="Telefon"
                            value={phone}
                            onChange={e => setPhone(e.target.value)}
                            required
                        />
                    </Box>
                <TextField
                    id="standard-multiline-static"
                    label="Informații suplimentare"
                    multiline
                    rows={2}
                    value={message}
                    name="Detalii"
                    onChange={e => setMessage(e.target.value)}
                    margin="dense"
                    variant="standard"
                />
                <Small>
                    *Programările se fac cu cel puțin o zi înainte.
                    <br/>
                    *Exclus persoanelor cu simptome covid19.
                </Small>
                <Button
                    variant="contained"
                    color="primary"
                    type="submit"
                    endIcon={<EventSeat />}
                >
                    Rezervă Locul
                </Button>
                <Small>Sau trimite mesaj prin sms sau Whatsapp la numărul de telefon <span>0726 439 597</span></Small>
            </LocalizationProvider>
        </FormWrapper>
    )
}

const FormWrapper = styled.form`
    display: flex;
    flex-direction: column;
    >button {
        border-radius: 0;
        background-color: var(--col);
        &:hover {
            background-color: var(--cod);
        }
    }
    div, input {
        width: 100%;
        margin: 0;
        >* {
            border: none;
        }
    }
`
const Small = styled.small`
    font-size: var(--xxsf);
    align-self: flex-start;
    text-align: left;
    margin: 20px 0;
    color: gray;
    >span {
        white-space: nowrap;
    }
`