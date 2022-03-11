import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import moment from 'moment';
import H6 from "@material-tailwind/react/Heading6";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import Tab from "../components/Tab";

const CardDetails = () => {
  const history = useHistory();  
  const { id } = useParams();
  const [fetchedData, updateFetchedData] = useState([]);
  const { name, origin, gender, image, status, species, created, type, episode } = fetchedData;

  let api = `https://rickandmortyapi.com/api/character/${id}`;

  useEffect(() => {
    (async function () {
      let data = await fetch(api).then((res) => res.json());
      updateFetchedData(data);
    })();
  }, [api]);

  return (
    <>
    
            <div className="flex mt-24 justify-center items-center min-w-fit">
                <div className="flex">
                    <div className="flex justify-center flex-col flex-wrap">
                        <div className="flex grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 mb-16 md:mb-16">
                            <div className="flex sm:mx-auto">
                                    <div className="flex w-1/6 h-12 mx-3">
                                        
                                            <ArrowBackIosIcon 
                                                className="h-4 w-6 cursor-pointer text-blue-400 pt-2" 
                                                aria-hidden="true" 
                                                onClick={()=>history.goBack()}
                                            />
                                           
                                    
                                    </div>
                                    <div className="flex w-5/6">
                                        <img className="img-fluid item-center" src={image} alt="" />
                                    </div>
                            </div>
                            
                            <div className="flex sm:mx-auto flex-col px-8 py-4">
                                <H6>Id: {id}</H6>
                                <H6>Name: {name}</H6>
                                <H6>Status: {status}</H6>
                                <H6>Specie: {species}</H6>
                                <H6>Type: {type}</H6>
                                <H6>Gender: {gender}</H6>
                                <H6>Origin: {origin?.name}</H6>
                                <H6>Created: {moment(created).format('DD MM YYYY')}</H6>
                            </div>
                        </div>
                        <div className="flex flex-col">
                            <H6>Episodes Info</H6>
                            <Tab episodes={episode}/>
                        </div>
                    </div>
                    
                </div>
            </div>
        
    </>
    
  );
};

export default CardDetails;
