import React from 'react'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import "../CSS/Dash.css"
import WaterDropIcon from '@mui/icons-material/WaterDrop';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import WavesIcon from '@mui/icons-material/Waves';
import HeightIcon from '@mui/icons-material/Height';
import FloodIcon from '@mui/icons-material/Flood';
import CountUp from 'react-countup';
import { useCountUp }  from 'react-countup'; 



// Component
import Navbar from '../Navbar';
import Sidenav from '../Sidenav'




export default function Home() {
  return (
    <>
    <Navbar />
    <Box height={50} />
    <Box sx={{ display: 'flex' }}>
    <Sidenav />
      <Box component ="main" sx={{ flexGrow: 1, p: 3 }} marginLeft={2}>
        <h1>Dashboard Kolam Polder Cipalasari 1</h1>
          <Grid container spacing={2}>
            {/* Grid 1 */}
            <Grid item size={8}>
              <Stack spacing={2} direction={'row'}>
                <Card sx={{ minWidth: 49 + "%", height: 232 }}>
                  <CardContent>
                    <div>
                      <FloodIcon />
                    </div>
                    <Typography gutterBottom variant="h3" component="div">
                      <CountUp delay={0.4} end={700} duration={0.6} />
                      m
                    </Typography>
                    <Typography gutterBottom variant="h6" component="div" sx={{color: "ccd1d1"}}>
                        Tinggi Sungai Citarum
                    </Typography>
                  </CardContent>
                </Card>

                <Card sx={{ minWidth: 49 + "%", height: 232 }}>
                  <CardContent>
                    <div>
                      <FloodIcon />
                    </div>
                    <Typography gutterBottom variant="h3" component="div">
                      <CountUp delay={0.4} end={700} duration={0.6} />
                      m
                    </Typography>
                    <Typography gutterBottom variant="h6" component="div" sx={{color: "ccd1d1"}}>
                      Tinggi Air Kolam Polder
                    </Typography>
                  </CardContent>
                </Card>
              </Stack>
            </Grid>
            
            <Grid item size={4}>
              <Stack spacing={2}>
              <Card sx={{ maxWidth: 345 }}>
                  <CardContent>
                    <Stack spacing={2} direction={'row'}>
                      <div className="iconStyle">
                        <WavesIcon />
                      </div>
                      <div className="paddingAll">
                        <span className='waterValue'>
                        <CountUp delay={0.4} end={300} duration={0.6} />
                         m3
                        </span>
                        <br/>
                        <span className='watersubValue'>Debit Sungai Citarum</span>
                      </div>
                    </Stack>
                  </CardContent>
                </Card>
                <Card sx={{ maxWidth: 345 }}>
                  <CardContent>
                    <Stack spacing={2} direction={'row'}>
                      <div className="iconStyle">
                        <WavesIcon />
                      </div>
                      <div className="paddingAll">
                        <span className='waterValue'>
                          <CountUp delay={0.4} end={300} duration={0.6} />
                          m3
                        </span>
                        <br/>
                        <span className='watersubValue'>Debit Sungai Polder</span>
                      </div>
                    </Stack>
                  </CardContent>
                </Card>
              </Stack>
            </Grid>
          </Grid>

        {/* Grid 2 */}
        <Box height={20} />
          <Grid container spacing={2}>
            <Grid item size={8}>
              <Card sx={{ height: 60 + "vh", maxWidth: 1100}}>
                <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    Tinggi Air Kolam Polder
                  </Typography>
                </CardContent>
              </Card>
              <Box height={20} />
              <Card sx={{ height: 60 + "vh", maxWidth: 1100 }}>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Tinggi Sungai Citarum
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            <Grid item size={4}>
              <Card sx={{ maxWidth: 345 }}>
                <CardContent>
                  <Stack spacing={2} direction={'row'}>
                    <div className="iconStyle">
                      <ThunderstormIcon />
                    </div>
                    <div className="paddingAll">
                      <span className='waterValue'>
                      <CountUp delay={0.4} end={300} duration={0.6} />
                       mm
                      </span>
                      <br/>
                      <span className='watersubValue'> Curah Hujan</span>
                    </div>
                  </Stack>
                </CardContent>
              </Card>

              <Box height={20} />
              <Card sx={{ maxWidth: 345 }}>
                <CardContent>
                  <Stack spacing={2} direction={'row'}>
                    <div className="iconStyle">
                      <ThunderstormIcon />
                    </div>
                    <div className="paddingAll">
                      <span className='waterValue'>
                      <CountUp delay={0.4} end={3} duration={0.6} />
                      </span>
                      <br/>
                      <span className='watersubValue'> Pompa Aktif</span>
                    </div>
                  </Stack>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
      </Box>  
    </Box>
    </>
  )
}


