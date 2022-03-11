import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CardItem from "../components/Card";
import Pagination from "../components/PaginationCommon";
import GoTop from "../components/GoTop";
import { fetchData, setFleekPageNumber } from "./FleekSlice";

export default function Lists() {
    const dispatch = useDispatch();
    const fetchedData = useSelector((state) => state.fleek.fetchedData);
    const search = useSelector((state) => state.fleek.search);
    const status = useSelector((state) => state.fleek.status);
    const gender = useSelector((state) => state.fleek.gender);
    const [currentPage, setCurrentPage] = useState(1);
    const [offset, setOffset] = useState(0);
    let { info, results } = fetchedData;

    useEffect(() => {
        dispatch(fetchData({currentPage, search, status, gender}));
    }, [dispatch, currentPage]);

    const onPageChange = (page) => {
        setCurrentPage(page);
        dispatch(setFleekPageNumber(page));
    }

    return (
        <div className="md:ml-64">
            <div className="px-3 md:px-8 h-40" />
            <div className="px-3 md:px-8 -mt-24">
                <div className="container mx-auto max-w-full">
                    <div className="grid grid-cols-1 xl:grid-cols-3 lg:grid-cols-3">
                        <CardItem page="/details/" results={results} />
                    </div>
                </div>
            </div>
            {!!info && <Pagination
                totalRecords={info.count}
                pageLimit={20}
                pageNeighbours={1}
                setOffset={setOffset}
                currentPage={currentPage}
                setCurrentPage={onPageChange}
            />}
            <GoTop />
            
        </div>   
  );
}

