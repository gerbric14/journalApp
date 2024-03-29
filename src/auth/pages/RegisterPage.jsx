import {Link as RouterLink} from 'react-router-dom'
import { Button, Link, Grid, TextField, Typography } from "@mui/material"
import { AuthLayout } from '../layout/AuthLayout'

export const RegisterPage = () => {
  return (
    <AuthLayout title='Register'>
        <form>

          <Grid container>
            <Grid item xs={12} sx={{mt: 2}}>
              <TextField label="Name" type="text" placeholder="jJonh Doe"  fullWidth/>
            </Grid>

            <Grid item xs={12} sx={{mt: 2}}>
              <TextField label="Email" type="email" placeholder="email@gmail.com"  fullWidth/>
            </Grid>

            <Grid item xs={12} sx={{mt: 2}}>
              <TextField label="Password" type="password" placeholder="********"  fullWidth/>
            </Grid>

            <Grid container spacing={2} sx={{mb: 2, mt:1} }>
              <Grid item xs={12}>
                <Button variant="contained" fullWidth>
                  Register
                </Button>
              </Grid>

            </Grid>

            <Grid container direction='row' justifyContent='end'>
              <Typography sx={{mr:1}}>Already have an account?</Typography>
              <Link component={RouterLink} color='inherit' to='/auth/login'>
                Sing in
              </Link>

            </Grid>

          </Grid>
        </form>

    </AuthLayout>

  )
}
