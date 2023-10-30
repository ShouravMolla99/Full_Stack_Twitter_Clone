import React, { useState } from 'react'
import RepeatIcon from '@mui/icons-material/Repeat'
import { Avatar, Button, Menu, MenuItem } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz'
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline'
//import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import FavoriteOutlined from '@mui/icons-material/FavoriteOutlined'
import FileUploadIcon from '@mui/icons-material/FileUpload'
import BarChartIcon from '@mui/icons-material/BarChart'
import FavoriteIcon from '@mui/icons-material/Favorite'
import ReplyModel from './ReplyModel'


const TweetCard = () => {
    const navigate = useNavigate();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const [openReplyModel, setOpenReplyModel] = useState(false);
    const handleOpenReplyModel = () => setOpenReplyModel(true);
    const handleCloseReplyModal = () => setOpenReplyModel(false);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleDeleteTweet = () => {
        console.log("Delete Tweet")
        handleClose();
    }

    const handleCreateRetweet = () => {
        console.log("Re Tweet")
    }
    const handleLiketweet = () => {
        console.log("Like Tweet")
    }
    return (
        <React.Fragment>
            {/* <div>

            </div> */}
            <div className='flex space-x-5'>
                <Avatar onClick={() => navigate(`/profile/${6}`)} className='cursor-pointer' alt='username' src='http://res.cloudinary.com/dnbw04gbs/image/upload/v1690639851/instagram%20post/bywtgh9vj4e80aywstss.png'></Avatar>

                <div className='w-full'>
                    <div className='flex justify-between items-center'>
                        <div className='flex cursor-pointer items-center space-x-2'>

                            <span className='font-semibold'>Code With Shourav</span>
                            <span className='text-gray-600'>@codewithzosh . 2m</span>
                            <img className='ml-2 w-5 h-5' src='https://abs.twimg.com/responsive-web/client-web/verification-card-v2@3x.8ebee01a.png' alt=''></img>
                        </div>
                        <div>
                            <Button
                                id="basic-button"
                                aria-controls={open ? 'basic-menu' : undefined}
                                aria-haspopup="true"
                                aria-expanded={open ? 'true' : undefined}
                                onClick={handleClick}
                            >
                                <MoreHorizIcon></MoreHorizIcon>
                            </Button>
                            <Menu
                                id="basic-menu"
                                anchorEl={anchorEl}
                                open={open}
                                onClose={handleClose}
                                MenuListProps={{
                                    'aria-labelledby': 'basic-button',
                                }}
                            >

                                <MenuItem onClick={handleDeleteTweet}>Delete</MenuItem>
                                <MenuItem onClick={handleDeleteTweet}>Edit</MenuItem>
                            </Menu>
                        </div>
                    </div>

                    <div className='mt-2'>
                        <div onClick={() => navigate(`/tweet/${3}`)} className='cursor-pointer'>
                            <p className='mb-2 p-0'>twitter clone - full stack project with spring boot and react</p>
                            <img className='w-[28rem] border border-gray-400 p-5 rounded-md' src='http://res.cloudinary.com/dnbw04gbs/image/upload/v1690639851/instagram%20post/bywtgh9vj4e80aywstss.png' alt=''></img>
                        </div>
                        <div className='py-5 flex flex-wrap justify-between items-center'>
                            <div className='space-x-3 flex items-center text-gray-600'>
                                <ChatBubbleOutlineIcon className='cursor-pointer' onClick={handleOpenReplyModel}></ChatBubbleOutlineIcon>
                                <p>43</p>
                            </div>
                            <div className={`${true ? "text-pink-600" : "text-gray-600"} space-x-3 flex items-center`}>
                                <RepeatIcon onClick={handleCreateRetweet} className='cursor-pointer'></RepeatIcon>
                                <p>54</p>
                            </div>
                            <div className={`${true ? "text-pink-600" : "text-gray-600"} space-x-3 flex items-center`}>
                                {true ? <FavoriteIcon onClick={handleLiketweet} className='cursor-pointer'></FavoriteIcon> : <FavoriteOutlined onClick={handleLiketweet} className='cursor-pointer'></FavoriteOutlined>}
                                <p>54</p>
                            </div>
                            <div className='space-x-3 flex items-center text-gray-600'>
                                <BarChartIcon className='cursor-pointer' onClick={handleOpenReplyModel}></BarChartIcon>
                                <p>430</p>
                            </div>
                            <div className='space-x-3 flex items-center text-gray-600'>
                                <FileUploadIcon className='cursor-pointer' onClick={handleOpenReplyModel}></FileUploadIcon>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <section>
                <ReplyModel open={openReplyModel} handleClose={handleCloseReplyModal}></ReplyModel>
            </section>

        </React.Fragment>
    );
};

export default TweetCard;