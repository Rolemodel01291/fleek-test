import React, { useEffect, useState } from "react";
import Tab from "@material-tailwind/react/Tab";
import TabList from "@material-tailwind/react/TabList";
import TabItem from "@material-tailwind/react/TabItem";
import TabContent from "@material-tailwind/react/TabContent";
import TabPane from "@material-tailwind/react/TabPane";
import H6 from "@material-tailwind/react/Heading6";
import useWindowSize  from "../@fleek/useWindowSize";

export default function TabCard({ episodes }) {
    const [openTab, setOpenTab] = useState(1);
    const [data, setData] = useState([]);
    const [width, ] = useWindowSize();

    useEffect(() => {
        !!episodes && getEpisodesAPI(episodes);
    }, [episodes])

    /* 
        API calls for Episodes returns response as promise, 
        so need to be parsed again using promise.all  
    */
    const getEpisodesAPI = (episodes) => {
        Promise.all(episodes && episodes.slice(0, episodes.length > 5 ? 5 : episodes.length)
            .map(e => fetch(e)))
            .then(responses => 
                Promise.all(responses.map((res) => res.json()
            ))
        ).then(results => {
            setData(results);
        })
    }

    return (
        <Tab>
            <TabList color="lightBlue">
                {data?.map((item, index) => (
                    <TabItem  
                        onClick={(e) => {
                            e.preventDefault();
                            setOpenTab(index+1);
                        }}
                        ripple="light"
                        active={openTab === index + 1 ? true : false}
                        href="tabItem"
                    >
                        {width > 768 ? `Episode${index+1}` : index + 1 }
                    </TabItem>
                ))}
            </TabList>

            <TabContent>
                {data?.map((item, index) => (
                    <TabPane active={openTab === index + 1 ? true : false}>
                        <H6>Id: {item.id}</H6>
                        <H6>Name: {item.name}</H6>
                        <H6>Air_Date: {item.air_date}</H6>
                        <H6>Episode: {item.episode}</H6>
                    </TabPane>
                ))}
            </TabContent>
        </Tab>
    );
}