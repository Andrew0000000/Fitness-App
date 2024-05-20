import React, { useEffect, useState} from 'react'
import { Box, Stack, TextField, Button } from '@mui/material'
import { options, fetchData } from '../utils/fetchData'
import HorizontalScrollbar from './HorizontalScrollbar'
// import { fetchMockExercises, mockBodyParts } from '../utils/mockData';

const SearchExercises = ({ setExercises, bodyPart, setBodyPart }) => {

    const [search, setSearch] = useState('');
    const [bodyParts, setBodyParts] = useState([]);

    const API = 'https://exercisedb.p.rapidapi.com/exercises?limit=1000&offset=0'
    

    
    useEffect(() => {
        const fetchExercisesData = async () => {
                try {
                    const exercisesData = await fetchData(API, options);
                    if (Array.isArray(exercisesData)) {
                        const bodyPartNames = ['all', ...new Set(exercisesData.map(item => item.bodyPart))];
                        setBodyParts(bodyPartNames);
                    } else {
                        console.error("Expected an array but got:", exercisesData);
                    }
                } catch (error) {
                    console.error("Failed to fetch data:", error);
                }
            }
            fetchExercisesData();
        }, []);
            
// MOCK DATA 
    // useEffect(() => {
    //     const fetchExercisesData = async () => {
    //       const exercisesData = await fetchMockExercises();
    //       const bodyPartNames = ['All', ...new Set(exercisesData.map((item) => item.bodyPart))];
    //       setBodyParts(bodyPartNames);
    //       setExercises(exercisesData);
    //     };
    //     fetchExercisesData();
    // }, []);

// SEARCHING FOR MOCK DATA

    // const handleSearch = () => {
    //     // Perform search logic here using the mock data
    //     const searchedExercises = // Search/filter logic using the mock data
    
    //     setSearch('');
    //     setExercises(searchedExercises);
    //   };

    const handleSearch = async () => {
        if (search) {
            try {
                const exercisesData = await fetchData(API, options);
                if (Array.isArray(exercisesData)) {
                    const searchedExercises = exercisesData.filter((item) => 
                        item.name.toLowerCase().includes(search) 
                        || item.bodyPart.toLowerCase().includes(search)
                        || item.target.toLowerCase().includes(search)
                        || item.equipment.toLowerCase().includes(search)
                    );
    
                    setSearch('');
                    setExercises(searchedExercises);
                } else {
                    console.error("Expected an array but got:", exercisesData);
                }
            } catch (error) {
                console.error("Failed to fetch data:", error);
            }
        }
    };
    


    return (
        <Stack
            alignItems='center'
            mt='10px'
            justifyContent='center'
            p='10px'
        >
            <Box
                position='relative'
                mb='200px'
            >
                <TextField
                    sx={{
                        input: { 
                            fontWeight: '600', 
                            border: 'none', 
                            borderRadius:'10px'
                            
                        },
                        width: { md: '600px', xs: '350px' },
                        backgroundColor: '#FFF',
                        borderRadius: '10px'
                    }}
                    height='76px'
                    value={search}
                    onChange={(e) => setSearch(e.target.value.toLowerCase())}
                    placeholder='Search Exercises'
                    type='text'
                />

                <Button
                    onClick={() => {
                        handleSearch();
                        window.scrollTo({ top: 1100, behavior: 'smooth' });
                    }}

                    sx={{ backgroundColor:'#ae9a60',
                        color: '#212121',
                        borderRadius: '10px',
                        fontWeight: 'bold',
                        ":hover": {
                            backgroundColor: '#616161',
                            color: '#fff',
                        },
                        textTransform: 'none',
                        width: { md: '170px', xs: '80px' },
                        height: '56px',
                        fontSize: { md: '20px', xs: '14px' },
                    }}
                >
                    Search
                </Button>

            </Box>

            <Box
                sx={{
                    position: 'relative',
                    width: '100%',
                    p: '20px'
                }}
            >
                <HorizontalScrollbar data={bodyParts} bodyPart={bodyPart} setBodyPart={setBodyPart} />
            </Box>
        </Stack>
    )
}

export default SearchExercises;