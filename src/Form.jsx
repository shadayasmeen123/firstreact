import { Button, TextField } from '@mui/material'

function Form() {
    return (
        <>
            
            <h1>Contact us</h1>

            <p>Name</p>

            <TextField
                label="Enter your name" />
            
            <br></br>

            <p>Email</p>

            <TextField
                label="Enter your email" />
            
            <br></br>

            <p>Message</p>


            <TextField
                label="Enter your message" />
            
            <br></br>

            <Button variant="contained">Submit</Button>

        </>
    )
}

export default Form

