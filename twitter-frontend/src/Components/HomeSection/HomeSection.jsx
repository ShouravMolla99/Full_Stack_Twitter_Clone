import { Avatar, Button } from '@mui/material'
import { useFormik } from 'formik'
import React, { useState } from 'react'
import * as Yup from 'yup'
import ImageIcon from '@mui/icons-material/Image'
import FmdGoodIcon from '@mui/icons-material/FmdGood'
import TagFacesIcon from '@mui/icons-material/TagFaces'
import TweetCard from './TweetCard'


const validationSchema = Yup.object().shape({
    content: Yup.string().required("Tweet text is required")
})

const HomeSection = () => {

    const [uploadingImage, setUploadingImage] = useState(false);
    const [selectImage, setSelectImage] = useState("");

    const handleSubmit = (values) => {
        console.log("values ", values)
    }

    const formik = useFormik({
        initialValues: {
            content: "",
            image: ""
        },
        onSubmit: handleSubmit,
        validationSchema,
    });

    const handleSelectImage = (event) => {
        setUploadingImage(true);
        const imgUrl = event.target.files[0]
        formik.setFieldValue("image", imgUrl);
        setSelectImage(imgUrl);
        setUploadingImage(false);
    };

    return (
        <div className='space-y-5'>
            <section>
                <h1 className='py-6 text-xl font-bold opacity-90'>Home</h1>
            </section>
            <section className={`pb-10`}>
                <div className='flex space-x-5'>
                    <Avatar alt='username' src='http://res.cloudinary.com/dnbw04gbs/image/upload/v1690639851/instagram%20post/bywtgh9vj4e80aywstss.png'></Avatar>
                    <div className='w-full'>
                        <form onSubmit={formik.handleSubmit}>
                            <div>
                                <input type='text' name='content' placeholder='What is happening' className={`border-none outline-none text-xl bg-transparent`} {...formik.getFieldProps("content")}></input>
                                {formik.errors.content && formik.touched.content && (
                                    <span className='text-red-500'>{formik.errors.content}</span>
                                )}
                            </div>
                            {/* <div>
                                <img src='' alt=''></img>
                            </div> */}
                            <div className='flex justify-between items-center mt-5'>
                                <div className='flex space-x-5 items-center'>
                                    <label>
                                        <ImageIcon className='text-[#1d9bf0]'></ImageIcon>
                                        <input type='file' name='imageFile' className='hidden' onChange={handleSelectImage}></input>
                                    </label>
                                    <FmdGoodIcon className='text-[#1d9bf0]'></FmdGoodIcon>
                                    <TagFacesIcon className='text-[#1d9bf0]'></TagFacesIcon>
                                </div>
                                <div>
                                    <Button sx={{ width: "100%", borderRadius: "20px", paddingY: "8px", paddingX: "20px", bgcolor: "#1e88e5" }} variant='contained' type='submit'>Tweet</Button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
            <section>
                {[1, 1, 1, 1, 1].map((item) => <TweetCard></TweetCard>)}
            </section>
        </div>
    )
}

export default HomeSection