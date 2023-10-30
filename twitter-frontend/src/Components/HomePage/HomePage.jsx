import Navigation from '../Navigation/Navigation'
import { Grid } from '@mui/material'
import React from 'react'
import HomeSection from '../HomeSection/HomeSection'
import { RightPart } from '../RightPart/RightPart'
import { Route, Routes } from 'react-router-dom'
import Profile from '../Profile/Profile'
import TweetDetails from '../TweetDetails/TweetDetails'

export default function HomePage() {
    return (
        <Grid container xs={12} className='px-5 lg:px-36 justify-between'>

            <Grid item xs={0} lg={2.5} className='hidden lg:block w-full relative'>
                <Navigation></Navigation>
            </Grid>

            <Grid item xs={12} lg={6} className='px-5 lg:px-9 hidden lg:block w-full relative'>
                <Routes>
                    <Route path='/' element={<HomeSection></HomeSection>}></Route>
                    <Route path='/home' element={<HomeSection></HomeSection>}></Route>
                    <Route path='/profile/:id' element={<Profile></Profile>}></Route>
                    <Route path='/tweet/:id' element={<TweetDetails></TweetDetails>}></Route>
                </Routes>
            </Grid>

            <Grid item xs={0} lg={3} className='hidden lg:block w-full relative'>
                <RightPart></RightPart>
            </Grid>
        </Grid>
    )
}
