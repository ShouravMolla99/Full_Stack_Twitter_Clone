import React, { useState } from 'react'
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import { useNavigate } from 'react-router-dom';
import { Avatar, Box, Button, Tab, Tabs } from '@mui/material';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import { TabContext, TabList, TabPanel } from '@mui/lab';
import TweetCard from '../HomeSection/TweetCard';
import ProfileModel from './ProfileModel';

const Profile = () => {
    const [tabValue, setTabValue] = useState("1")
    const navigate = useNavigate();
    const [openProfileModel, setOpenProfileModel] = useState(false);
    const handleOpenProfileModel = () => setOpenProfileModel(true);
    const handleClose = () => setOpenProfileModel(false);

    const handleBack = () => navigate(-1);

    const handleFollowUser = () => {
        console.log("follow user")
    };
    const handleTabChange = (event, newValue) => {
        setTabValue(newValue)

        if (newValue === 4) {
            console.log("likes tweet")
        }
        else if (newValue === 1) {
            console.log("users tweets")
        }
    }
    return (
        <div>
            <section className={`bg-white z-50 flex items-center sticky top-0 bg-opacity-95`}>
                <KeyboardBackspaceIcon className='cursor-pointer' onClick={handleBack}></KeyboardBackspaceIcon>

                <h1 className='py-5 text-xl font-bold opacity-90 ml-5'>Code With Shourav</h1>
            </section>
            <section>
                <img className='w-[100%] h-[15rem] object-cover' src="https://cdn.pixabay.com/photo/2023/08/30/13/13/el-chalten-8223303_640.jpg" alt="" />
            </section>
            <section className='pl-6'>
                <div className='flex justify-between items-start mt-5 h-[5rem]'>
                    <Avatar className='transform -translate-y-24' alt='code with shourav' src='https://cdn.pixabay.com/photo/2023/04/26/13/18/shell-7952399_640.jpg' sx={{ width: "10rem", height: "10rem", border: "4px solid white" }}></Avatar>

                    {true ? <Button onClick={handleOpenProfileModel} variant='contained' sx={{ borderRadius: "20px" }}>Edit Profile</Button> : <Button onClick={handleFollowUser} variant='contained' sx={{ borderRadius: "20px" }}>{true ? "Follow" : "Unfollow"}</Button>}
                </div>
                <div>
                    <div className='flex items-center'>
                        <h1 className='font-bold-text-lg'>Code With Shourav</h1>
                        {true && <img className='ml-2 w-5 h-5' src='https://abs.twimg.com/responsive-web/client-web/verification-card-v2@3x.8ebee01a.png' alt=''></img>}
                    </div>
                    <h1 className='text-gray-500'>@codewithshourav</h1>
                </div>

                <div className='mt-2 space-y-3'>
                    <p>Hello, i'm code with shourav, you will find full stack project tutorial on our website</p>
                    <div className='py-1 flex space-x-5'>
                        <div className='flex items-center text-gray-500'>
                            <BusinessCenterIcon></BusinessCenterIcon>
                            <p className='ml-2'>Education</p>
                        </div>
                        <div className='flex items-center text-gray-500'>
                            <LocationOnIcon></LocationOnIcon>
                            <p className='ml-2'>Bangladeshi</p>
                        </div>
                        <div className='flex items-center text-gray-500'>
                            <CalendarMonthIcon></CalendarMonthIcon>
                            <p className='ml-2'>Joined jun 2023</p>
                        </div>
                    </div>
                    <div className='flex items-center space-x-5'>
                        <div className='flex items-center space-x-1 font-semibold'>
                            <span>290</span>
                            <span className='text-gray-500'>Following</span>
                        </div>
                        <div className='flex items-center space-x-1 font-semibold'>
                            <span>790</span>
                            <span className='text-gray-500'>Followers</span>
                        </div>

                    </div>
                </div>
            </section>
            <section className='py-5'>
                <TabContext value={tabValue}>
                    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                        <TabList onChange={handleTabChange} aria-label="lab API tabs example">
                            <Tab label="Tweets" value="1" />
                            <Tab label="Replies" value="2" />
                            <Tab label="Media" value="3" />
                            <Tab label="Likes" value="4" />
                        </TabList>
                    </Box>
                    <TabPanel value="1">{[1, 1, 1, 1].map((item) => <TweetCard></TweetCard>)}</TabPanel>
                    <TabPanel value="2">users replies</TabPanel>
                    <TabPanel value="3">Media</TabPanel>
                    <TabPanel value="4">Likes</TabPanel>
                </TabContext>
            </section>
            <section>
                <ProfileModel handleClose={handleClose} open={openProfileModel}></ProfileModel>
            </section>
        </div>
    );
};

export default Profile;