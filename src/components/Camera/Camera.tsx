import React, { useCallback, useEffect, useRef, useState } from 'react'
import styles from './Camera.module.scss'
import { RxCross1 as CancelIcon } from 'react-icons/rx'
import * as url from "node:url";
import ShutterButton from "./ShutterButton/ShutterButton";
import shutterButton from "./ShutterButton/ShutterButton";

interface CameraProps {
    cancelOnClick: (hasPhoto?: boolean) => void,
    image: string,
    setImage: React.Dispatch<React.SetStateAction<string>>,
}

const Camera: React.FC<CameraProps> = ({cancelOnClick, image, setImage}) => {
    const videoRef = useRef<HTMLVideoElement>(null)


    const getVideo = () => {
        navigator.mediaDevices
            .getUserMedia({
                video: {
                    width: 414,
                    height: 736,
                }
            })
            .then(async stream => {
                let video = videoRef.current
                if (video) {
                    video.srcObject = stream
                    await video.play()
                }
            })
            .catch((error) => {
                console.log(error)
            })
    }

    const takePhoto = useCallback(() => {
        let canvas = document.createElement('canvas')
        if (videoRef.current) {
            canvas.width = 1920
            canvas.height = 1000
            let context = canvas.getContext('2d')
            if (context) {
                console.log(canvas)
                console.log(context)
                context.drawImage(videoRef.current, 0, 0, canvas.width, canvas.height)
                setImage(canvas.toDataURL('image/jpeg'))
            } else {
                console.log('Error: Cannot draw image from video source.')
            }
        } else {
            console.log('Error: No video is detected.')
        }
    }, [])

    useEffect(() => {
        getVideo()
        takePhoto()
    }, [videoRef, takePhoto]);

    const shutterOnClick = useCallback(() => {
        takePhoto()
        cancelOnClick(true)
        console.log(image)
    }, [takePhoto, image, cancelOnClick])

    return (
        <div className={styles.cameraWrapper}>
            <CancelIcon onClick={(e) => cancelOnClick()} className={styles.cancelIcon} />
            <video ref={videoRef} />
            <ShutterButton classname={styles.shutterButton} onClick={shutterOnClick} />
        </div>
    )
}

export default Camera
