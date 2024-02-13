import * as  React from 'react'
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import html from './Image/html.png'
import c from './Image/c.png'
import express from './Image/express.png'
import github from './Image/github.png'
import css from './Image/CSS.png'
import java from './Image/java.png'
import jest from './Image/jest.png'
import js from './Image/js.png'
import mongo from './Image/mongo.png'
import mui from './Image/mui.png'
import nodejs from './Image/nodejs.png'
import npm from './Image/npm.png'
import python from './Image/python.png'
import react from './Image/react.png'
import sql from './Image/sql.png'
import cSharp from './Image/cSharp.png'
import Angular from './Image/Angular.png'
import Elastic from './Image/Elastic.png'
import Logstash from './Image/Logstash.png'
import Kibana from './Image/Kibana.png'
import typescript from './Image/typescript.png'
import { margin } from '@mui/system';


const commonStyles = {
    bgcolor: 'transparent',
    color: 'white',
    width: "140px",
    paddingLeft: "30px",
    paddingTop:"5px",
    border: 1,
    height: '5rem',
    borderColor: 'error.main' ,
    marginBottom:"10px"
  };

  const commonStyles1 = {
    bgcolor: 'transparent',
    color: 'white',
    width: "140px",
    paddingLeft: "5px",
    paddingTop:"5px",
    border: 1,
    height: '5rem',
    borderColor: 'error.main' ,
    marginBottom:"10px"
  };

function Skills() {
    return (
        <>
            <Paper style={{
                margin: "0px 20px",
                padding: "5px",
                backgroundColor: "transparent"
            }}>

                <Grid container spacing={2}>
                    <Grid item xl={3} lg={3} md={3} sm={6} xs={6}>
                        <Paper style={{
                            backgroundColor: "transparent",
                            color: "white",

                        }}>
                            <img src={html} alt='html' />
                            <br />
                            <Box 
                            sx={{ ...commonStyles }}
                            >
                                &nbsp;&nbsp;&nbsp;HTML
                            </Box>
                        </Paper>
                    </Grid>
                    <Grid item xl={3} lg={3} md={3} sm={6} xs={6}>
                        <Paper style={{
                            backgroundColor: "transparent"
                        }}>
                            <img src={css} alt='html' />
                            <br />
                            <Box sx={{ ...commonStyles }}>
                            &nbsp;&nbsp;&nbsp;&nbsp;CSS
                            </Box>
                        </Paper>
                    </Grid>
                    <Grid item xl={3} lg={3} md={3} sm={6} xs={6}>
                        <Paper style={{
                            backgroundColor: "transparent"
                        }}>
                            <img src={js} alt='CSS' />
                            <br />
                            <Box sx={{ ...commonStyles }}>
                                JavaScript
                            </Box>
                        </Paper>
                    </Grid>
                    <Grid item xl={3} lg={3} md={3} sm={6} xs={6}>
                        <Paper style={{
                            backgroundColor: "transparent"
                        }}>
                            <img src={react} alt='React' />
                            <br />
                            <Box sx={{ ...commonStyles }}>
                                React JS
                            </Box>
                        </Paper>
                    </Grid>
                    <Grid item xl={3} lg={3} md={3} sm={6} xs={6}>
                        <Paper style={{
                            backgroundColor: "transparent"
                        }}>
                            <img src={typescript} alt='TypeScript' />
                            <br />
                            <Box sx={{ ...commonStyles }}>
                                TypeScript
                            </Box>
                        </Paper>
                        cv update and print for job fair
                    </Grid>
                    <Grid item xl={3} lg={3} md={3} sm={6} xs={6}>
                        <Paper style={{
                            backgroundColor: "transparent"
                        }}>
                            <img src={Angular} alt='Angular' />
                            <br />
                            <Box sx={{ ...commonStyles }}>
                            &nbsp;&nbsp;&nbsp;&nbsp;Angular
                            </Box>
                        </Paper>
                    </Grid>
                    <Grid item xl={3} lg={3} md={3} sm={6} xs={6}>
                        <Paper style={{
                            backgroundColor: "transparent"
                        }}>
                            <img src={nodejs} alt='NodeJs' />
                            <br />
                            <Box sx={{ ...commonStyles }}>
                                Node JS
                            </Box>
                        </Paper>
                    </Grid>
                    <Grid item xl={3} lg={3} md={3} sm={6} xs={6}>
                        <Paper style={{
                            backgroundColor: "transparent",
                        }}>
                            <img src={express} alt='ExpressJS' />
                            <br />
                            <Box sx={{ ...commonStyles }}>
                            &nbsp; Express
                            </Box>
                        </Paper>
                    </Grid>
                    <Grid item xl={3} lg={3} md={3} sm={6} xs={6}>
                        <Paper style={{
                            backgroundColor: "transparent",
                        }}>
                            <img src={Elastic} alt='Elastic Search' />
                            <br />
                            <Box sx={{ ...commonStyles1 }}>
                            &nbsp; Elastic Search
                            </Box>
                        </Paper>
                    </Grid>
                    <Grid item xl={3} lg={3} md={3} sm={6} xs={6}>
                        <Paper style={{
                            backgroundColor: "transparent",
                        }}>
                            <img src={Logstash} alt='Logstash' />
                            <br />
                            <Box sx={{ ...commonStyles }}>
                            &nbsp; Logstash
                            </Box>
                        </Paper>
                    </Grid>
                    <Grid item xl={3} lg={3} md={3} sm={6} xs={6}>
                        <Paper style={{
                            backgroundColor: "transparent",
                        }}>
                            <img src={Kibana} alt='Kibana' />
                            <br />
                            <Box sx={{ ...commonStyles }}>
                            &nbsp; Kibana
                            </Box>
                        </Paper>
                    </Grid>
                    <Grid item xl={3} lg={3} md={3} sm={6} xs={6}>
                        <Paper style={{
                            backgroundColor: "transparent"
                        }}>
                            <img src={jest} alt='JEST' />
                            <br />
                            <Box sx={{ ...commonStyles }}>
                            &nbsp;&nbsp;&nbsp;JEST
                            </Box>
                        </Paper>
                    </Grid>
                    <Grid item xl={3} lg={3} md={3} sm={6} xs={6}>
                        <Paper style={{
                            backgroundColor: "transparent"
                        }}>
                            <img src={mongo} alt='Mongo' />
                            <br />
                            <Box sx={{ ...commonStyles }}>
                            &nbsp;&nbsp;Mongo
                            </Box>
                        </Paper>
                    </Grid>
                    <Grid item xl={3} lg={3} md={3} sm={6} xs={6}>
                        <Paper style={{
                            backgroundColor: "transparent"
                        }}>
                            <img src={sql} alt='SQL' />
                            <br />
                            <Box sx={{ ...commonStyles }}>
                            &nbsp;&nbsp;&nbsp;&nbsp; SQL
                            </Box>
                        </Paper>
                    </Grid>
                    <Grid item xl={3} lg={3} md={3} sm={6} xs={6}>
                        <Paper style={{
                            backgroundColor: "transparent"
                        }}>
                            <img src={java} alt='Java' />
                            <br />
                            <Box sx={{ ...commonStyles }}>
                            &nbsp;&nbsp;&nbsp;&nbsp;Java
                            </Box>
                        </Paper>
                    </Grid>
                    <Grid item xl={3} lg={3} md={3} sm={6} xs={6}>
                        <Paper style={{
                            backgroundColor: "transparent"
                        }}>
                            <img src={python} alt='Python' />
                            <br />
                            <Box sx={{ ...commonStyles }}>
                            &nbsp;&nbsp; Python
                            </Box>
                        </Paper>
                    </Grid>
                    <Grid item xl={3} lg={3} md={3} sm={6} xs={6}>
                        <Paper style={{
                            backgroundColor: "transparent"
                        }}>
                            <img src={c} alt='C' />
                            <br />
                            <Box sx={{ ...commonStyles }}>
                            &nbsp; C&C++
                            </Box>
                        </Paper>
                    </Grid>
                    <Grid item xl={3} lg={3} md={3} sm={6} xs={6}>
                        <Paper style={{
                            backgroundColor: "transparent"
                        }}>
                            <img src={cSharp} alt='CSharp' />
                            <br />
                            <Box sx={{ ...commonStyles }}>
                            &nbsp; C#
                            </Box>
                        </Paper>
                    </Grid>
                    <Grid item xl={3} lg={3} md={3} sm={6} xs={6}>
                        <Paper style={{
                            backgroundColor: "transparent"
                        }}>
                            <img src={github} alt='Github' />
                            <br />
                            <Box sx={{ ...commonStyles }}>
                            &nbsp;&nbsp;Github
                            </Box>
                        </Paper>
                    </Grid>
                </Grid>
            </Paper>

        </>
    )
}

export default Skills