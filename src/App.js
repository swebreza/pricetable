import React from 'react'
import { Button, Card } from '@mui/material'
import './App.css'
import { Box } from '@mui/system'
import DoneIcon from '@mui/icons-material/Done'
import CloseIcon from '@mui/icons-material/Close'
import { CardActionArea } from '@mui/material'
function App() {
  return (
    <div className='App'>
      <center>
        <table>
          <tr>
            <td>
              <CardActionArea>
                <Card
                  variant='outlined'
                  sx={{ maxWidth: 345, borderRadius: 2, padding: '2em' }}
                >
                  <Box
                    sx={{
                      bgcolor: '#ffa',
                      boxShadow: 1,
                      borderRadius: 2,
                      p: 2,
                      minWidth: 300,
                    }}
                  >
                    <center>
                      <Button disabled>Free</Button>
                      <br />

                      <spam style={{ fontSize: '50px', fontWeight: 'bold' }}>
                        $0
                      </spam>
                      <spam>/month</spam>
                    </center>
                  </Box>
                  <hr />
                  <Box sx={{ textAlign: 'left' }}>
                    <Box sx={{ paddingBlock: '1em' }}>
                      <DoneIcon />
                      Single User
                    </Box>
                    <Box sx={{ paddingBlockEnd: '1em' }}>
                      <DoneIcon />
                      5GB Storage
                    </Box>
                    <Box sx={{ paddingBlockEnd: '1em' }}>
                      <DoneIcon />
                      Unlimited Public Projects
                    </Box>
                    <Box sx={{ paddingBlockEnd: '1em' }}>
                      <DoneIcon />
                      Community Access
                    </Box>
                    <Button disabled sx={{ paddingBlockEnd: '1em' }}>
                      <CloseIcon />
                      Dedicated Phone Support
                    </Button>
                    <Button disabled sx={{ paddingBlockEnd: '1em' }}>
                      <CloseIcon />
                      Free Subdomain
                    </Button>
                    <Button disabled sx={{ paddingBlockEnd: '1em' }}>
                      <CloseIcon />
                      Monthly Status Reports
                    </Button>
                  </Box>
                  <Button
                    sx={{
                      width: '100%',
                      height: '50px',
                      WebkitBorderTopLeftRadius: '20px',
                      borderTopRightRadius: '20px',
                      borderBottomLeftRadius: '20px',
                      borderBottomRightRadius: '20px',
                    }}
                    variant='contained'
                    color='primary'
                  >
                    BUTTON
                  </Button>
                </Card>
              </CardActionArea>
            </td>
            <td>
              <CardActionArea>
                <Card
                  variant='outlined'
                  sx={{ maxWidth: 345, borderRadius: 2, padding: '2em' }}
                >
                  <Box
                    sx={{
                      bgcolor: '#ffa',
                      boxShadow: 1,
                      borderRadius: 2,
                      p: 2,
                      minWidth: 300,
                    }}
                  >
                    <center>
                      <Button disabled>Free</Button>
                      <br />
                      <spam style={{ fontSize: '50px', fontWeight: 'bold' }}>
                        $9
                      </spam>
                      <spam>/month</spam>
                    </center>
                  </Box>
                  <hr />
                  <Box sx={{ textAlign: 'left' }}>
                    <Box sx={{ paddingBlock: '1em' }}>
                      <DoneIcon />
                      Single User
                    </Box>
                    <Box sx={{ paddingBlockEnd: '1em' }}>
                      <DoneIcon />
                      5GB Storage
                    </Box>
                    <Box sx={{ paddingBlockEnd: '1em' }}>
                      <DoneIcon />
                      Unlimited Public Projects
                    </Box>
                    <Box sx={{ paddingBlockEnd: '1em' }}>
                      <DoneIcon />
                      Community Access
                    </Box>
                    <Box sx={{ paddingBlockEnd: '1em' }}>
                      <DoneIcon />
                      Dedicated Phone Support
                    </Box>
                    <Box sx={{ paddingBlockEnd: '1em' }}>
                      <DoneIcon />
                      Free Subdomain
                    </Box>
                    <Button disabled sx={{ paddingBlockEnd: '1em' }}>
                      <CloseIcon />
                      Monthly Status Reports
                    </Button>
                  </Box>
                  <Button
                    sx={{
                      width: '100%',
                      height: '50px',
                      WebkitBorderTopLeftRadius: '20px',
                      borderTopRightRadius: '20px',
                      borderBottomLeftRadius: '20px',
                      borderBottomRightRadius: '20px',
                    }}
                    variant='contained'
                    color='primary'
                  >
                    BUTTON
                  </Button>
                </Card>
              </CardActionArea>
            </td>
            <td>
              <CardActionArea>
                <Card
                  variant='outlined'
                  sx={{ maxWidth: 345, borderRadius: 2, padding: '2em' }}
                >
                  <Box
                    sx={{
                      bgcolor: '#ffa',
                      boxShadow: 1,
                      borderRadius: 2,
                      p: 2,
                      minWidth: 300,
                    }}
                  >
                    <center>
                      <Button disabled>Free</Button>
                      <br />
                      <spam style={{ fontSize: '50px', fontWeight: 'bold' }}>
                        $29
                      </spam>
                      <spam>/month</spam>
                    </center>
                  </Box>
                  <hr />
                  <Box sx={{ textAlign: 'left' }}>
                    <Box sx={{ paddingBlock: '1em' }}>
                      <DoneIcon />
                      Unlimited User
                    </Box>
                    <Box sx={{ paddingBlockEnd: '1em' }}>
                      <DoneIcon />
                      Unlimited Storage
                    </Box>
                    <Box sx={{ paddingBlockEnd: '1em' }}>
                      <DoneIcon />
                      Unlimited Public Projects
                    </Box>
                    <Box sx={{ paddingBlockEnd: '1em' }}>
                      <DoneIcon />
                      Community Access
                    </Box>
                    <Box sx={{ paddingBlockEnd: '1em' }}>
                      <DoneIcon />
                      Dedicated Phone Support
                    </Box>
                    <Box sx={{ paddingBlockEnd: '1em' }}>
                      <DoneIcon />
                      <strong>UNLIMITED</strong> Free Subdomain
                    </Box>
                    <Box sx={{ paddingBlockEnd: '1em' }}>
                      <DoneIcon />
                      Monthly Status Reports
                    </Box>
                  </Box>
                  <Button
                    sx={{
                      width: '100%',
                      height: '50px',
                      WebkitBorderTopLeftRadius: '20px',
                      borderTopRightRadius: '20px',
                      borderBottomLeftRadius: '20px',
                      borderBottomRightRadius: '20px',
                    }}
                    variant='contained'
                    color='primary'
                  >
                    BUTTON
                  </Button>
                </Card>
              </CardActionArea>
            </td>
          </tr>
        </table>
      </center>
    </div>
  )
}

export default App
