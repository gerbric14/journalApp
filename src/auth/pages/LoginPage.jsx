import {Link as RouterLink} from 'react-router-dom'
import { Google } from "@mui/icons-material"
import { Button, Link, Grid, TextField, Typography } from "@mui/material"
import { AuthLayout } from '../layout/AuthLayout'

export const LoginPage = () => {
  return (
    <AuthLayout title='Login'>
        <form>
          <Grid container>
            <Grid item xs={18} sx={{mt: 2}}>
              <TextField label="Email" type="email" placeholder="email@gmail.com"  fullWidth/>
            </Grid>

            <Grid item xs={18} sx={{mt: 2}}>
              <TextField label="Password" type="password" placeholder="********"  fullWidth/>
            </Grid>

            <Grid container spacing={2} sx={{mb: 2, mt:1} }>
              <Grid item xs={18} sm={9}>
                <Button variant="contained" fullWidth>
                  Login
                </Button>
              </Grid>

              <Grid item xs={18} sm={9}>
                <Button variant="contained" fullWidth>
                  <Google />
                  <Typography sx={{ml: 1}}>
                    Google
                  </Typography> 
                </Button>
              </Grid>

            </Grid>

            <Grid container direction='row' justifyContent='end'>
              <Link component={RouterLink} color='inherit' to='/auth/register'>
                Sing up
              </Link>

            </Grid>

          </Grid>
        </form>

    </AuthLayout>

  )
}
