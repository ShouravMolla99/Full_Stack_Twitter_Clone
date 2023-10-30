import React from 'react'
import SearchIcon from '@mui/icons-material/Search'
import Brightness4Icon from '@mui/icons-material/Brightness4'
import { Button } from '@mui/material'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz'
import SubscriptionModal from '../SubscriptionModal/SubscriptionModal'

export const RightPart = () => {

    const [openSubscriptionModel, setOpenSubscriptionModel] = React.useState(false);
    const handleOpenSubscriptionModel = () => setOpenSubscriptionModel(true);
    const handleCloseSubscriptionModel = () => setOpenSubscriptionModel(false);

    const handleChangeTheme = () => {
        console.log("handle Change")
    }
    return (
        <div className='py-5 sticky top'>
            <div className='relative flex items-center'>
                <input type='text' className='py-3 rounded full text-gray-500 w-full pl-12'></input>
                <div className='absolute top-0 left-0 pl-3 pt-3'>
                    <SearchIcon className='text-gray-500'></SearchIcon>
                </div>
                <Brightness4Icon className='ml-3 cursor-pointer' onClick={handleChangeTheme}></Brightness4Icon>
            </div>
            <section className='my-5'>
                <h1 className='text-xl font-bold'>Get Verified</h1>
                <h1 className='font-bold my-2'>Subscribe to unlock new Feature</h1>
                <Button variant='contained' sx={{ padding: "10px", paddingX: "20px", borderRadius: "25px" }} onClick={handleOpenSubscriptionModel}>Get Verified</Button>
            </section>
            <section className='mt-7 space-y-5'>
                <h1 className='font-bold text-xl py-1'>What's happening</h1>
                <div>
                    <p className='text-sm'>FIFA World Cup . LIVE</p>
                    <p className='font-bold'>Brazil vs Croatia</p>
                </div>
                {[1, 1, 1].map((item) => <div className='flex justify-between w-full'>
                    <div>
                        <p>Entertainment . Treading</p>
                        <p className='font-bold'>#TheMarvels</p>
                        <p>34.4k Tweets</p>
                    </div>
                    <MoreHorizIcon></MoreHorizIcon>
                </div>)}
            </section>
            <section>
                <SubscriptionModal open={openSubscriptionModel} handleClose={handleCloseSubscriptionModel}></SubscriptionModal>
            </section>
        </div>
    );
};

export default RightPart;
