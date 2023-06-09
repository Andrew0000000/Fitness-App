import React from 'react'
import { Box } from '@mui/material'
import BodyPart from './BodyPart'
import { ScrollMenu } from 'react-horizontal-scrolling-menu'
import arms from '../assets/icons/ArmsIcon.png'
import back from '../assets/icons/BackIcon.png'
import chest from '../assets/icons/ChestIcon.png'
import legs from '../assets/icons/LegIcon.png'
import shoulder from '../assets/icons/ShoulderIcon.png'
import waist from '../assets/icons/WaistIcon.png'
import neck from '../assets/icons/NeckIcon.png'
import cardio from '../assets/icons/CardioIcon.png'

const HorizontalScrollbar = ({ data, bodyPart, setBodyPart }) => {
    return (
        <ScrollMenu>
            {data.map((item) => (
                <Box
                    key={item.id || item}
                    itemId={item.id || item}
                    title={item.id || item}
                    m='0 40px'
                >
                    <BodyPart item={item} bodyPart={bodyPart} setBodyPart={setBodyPart} Icon={
                        bodyPart === 'lower arms' || bodyPart === 'upper arms' ? ArmsIcon :
                        bodyPart === 'back' ? BackIcon :
                        bodyPart === 'chest' ? ChestIcon :
                        bodyPart === 'upper legs' || bodyPart === 'lower legs' ? LegIcon :
                        bodyPart === 'shoulders' ? ShoulderIcon :
                        bodyPart === 'waist' ? WaistIcon :
                        bodyPart === 'neck' ? NeckIcon :
                        bodyPart === 'cardio' ? CardioIcon :
                        null
                    } /> 
                </Box>
            ))}
        </ScrollMenu>
    )
}

export default HorizontalScrollbar