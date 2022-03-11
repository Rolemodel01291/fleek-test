import { useState, useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useLocation  } from "react-router-dom";
import AdminNavbar from './AdminNavbar';
import NavbarInput from '@material-tailwind/react/NavbarInput';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import { setFleekSearch,setFleekGender, setFleekStatus, fetchData } from 'pages/FleekSlice';

export default function Sidebar() {
    const dispatch = useDispatch();
    const location = useLocation();
    const pageNumber = useSelector((state) => state.fleek.pageNumber);
    const [showSidebar, setShowSidebar] = useState('-left-64');
    const [status, setStatus] = useState("");
    const [gender, setGender] = useState("");
    const [search, setSearch] = useState("");
    

    useEffect(() => {
        dispatch(fetchData({pageNumber, search, status, gender}));
    }, [dispatch, search, status, gender, pageNumber])

    const handleSearch = useCallback((e)=> {
        setSearch(e.target.value);
        dispatch(setFleekSearch(e.target.value));
    }, [dispatch])

    const handleStatus = useCallback((e)=> {
        setStatus(e.target.value);
        dispatch(setFleekStatus(e.target.value));
    }, [dispatch])

    const handleGender = useCallback((e)=> {
        setGender(e.target.value);
        dispatch(setFleekGender(e.target.value));
    }, [dispatch])

    return (
        <>
            <AdminNavbar
                showSidebar={showSidebar}
                setShowSidebar={setShowSidebar}
            />
            {!location.pathname.includes('details') ? 
            <div
                className={`h-screen fixed top-0 md:left-0 ${showSidebar} overflow-y-auto flex-row flex-nowrap overflow-hidden shadow-xl bg-white w-64 py-4 px-6 transition-all duration-300`}
            >
                <div className="flex-col items-stretch min-h-full flex-nowrap px-0 relative pt-20">
                    
                    <div className="flex flex-col">
                       
                        <ul className="flex-col min-w-full flex list-none">
                            <div className="flex mb-4 justify-between items-center bg-light-blue-500 rounded-lg">
                                <NavbarInput 
                                    placeholder="Filter By Name" 
                                    onChange={(e)=> {
                                        handleSearch(e);
                                    }}
                                />
                            </div>
                            
                            <li className="rounded-lg mb-4 flex">
                                <FormControl fullWidth>
                                    <InputLabel id="demo-simple-select-label">Status</InputLabel>
                                    <Select
                                        className="w-52 rounded-lg"
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select-helper"
                                        value={status}
                                        label="Status"
                                        onChange={(e)=>handleStatus(e)}
                                    >
                                        <MenuItem value="">
                                            <em>None</em>
                                        </MenuItem>
                                        <MenuItem value="Unknown">Unknown</MenuItem>
                                        <MenuItem value="Alive">Alive</MenuItem>
                                        <MenuItem value="Dead">Dead</MenuItem>
                                    </Select>
                                </FormControl>
                            </li>

                            <li className="rounded-lg mb-4 flex">
                                <FormControl fullWidth>
                                    <InputLabel id="demo-simple-select-label">Gender</InputLabel>
                                    <Select
                                        className="w-52 rounded-lg"
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select-helper"
                                        value={gender}
                                        label="Gender"
                                        onChange={(e)=>handleGender(e)}
                                    >
                                        <MenuItem value="">
                                            <em>None</em>
                                        </MenuItem>
                                        <MenuItem value="Unknown">Unknown</MenuItem>
                                        <MenuItem value="Male">Male</MenuItem>
                                        <MenuItem value="Female">Female</MenuItem>
                                    </Select>
                                </FormControl>
                            </li>
                           
                        </ul>

                    </div>
                </div>
            </div> :
            null
        }
        </>
    );
}
