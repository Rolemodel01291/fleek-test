import React, { useState, useRef, useEffect } from "react";
import Pagination from "react-paginating";
import Button from "@material-tailwind/react/Button";


const PaginationItem = (props) => {
  const { info } = props; 
  const [currentPage, setCurrentPage] = useState(1);
  const inputRef = useRef(null);
  const total = info.count;
  const limit = 20;
  const pageCount = width > 1024 ? 9 : 3; 
  let activePage = null;

  const handlePageChange = (page, e) => {
      console.log(e);
    setCurrentPage(page);
  };

  const getCurrentPage = (current) => {
    // console.log("-----------", current);
  }

  useEffect(() => {
    // console.log("-----working----", inputRef.current.value);
  }, [])

 

  return (
    <Pagination
          total={total}
          limit={limit}
          pageCount={pageCount}
          currentPage={currentPage}
          className="flex justify-end mr-4 mb-8"
        >
          
          {({
            pages,
            currentPage,
            hasNextPage,
            hasPreviousPage,
            previousPage,
            nextPage,
            totalPages,
            getPageItemProps
          }) => (

            <div className="flex">
              {/* {console.log("---curerent---", currentPage)} */}
              <Button
                className="mx-2 w-8 h-10"
                {...getPageItemProps({
                  pageValue: 1,
                  onPageChange: handlePageChange()
                })}
              >
                first
              </Button>

              {hasPreviousPage && (
                <Button
                  className="mx-2 w-8 h-10"
                  {...getPageItemProps({
                    pageValue: previousPage,
                    onPageChange:handlePageChange()
                  })}
                >
                  {"<"}
                </Button>
              )}

              {pages.map(page => {
                
                currentPage === page ? 
                    activePage = { backgroundColor: "#fdce09" } : 
                    activePage = null
                return (
                  <Button
                    className="mx-2 w-8 h-10"
                    {...getPageItemProps({
                      pageValue: page,
                      key: page,
                      style: activePage,
                      onPageChange: handlePageChange()
                    })}
                  >
                    {page}
                  </Button>
                );
              })}

              {hasNextPage && (
                <Button
                  className="mx-2 w-8 h-10"
                  {...getPageItemProps({
                    pageValue: nextPage,
                    onPageChange: handlePageChange()
                  })}
                >
                  {">"}
                </Button>
              )}

              <Button
                className="mx-2 w-8 h-10"
                {...getPageItemProps({
                  pageValue: totalPages,
                  onPageChange: handlePageChange()
                })}
              >
                last
              </Button>
              <input type="text" ref={inputRef} value={currentPage} onChange={(e) => { console.log("----12312312----", e.target.value); }}/>
            </div>
          )}
    </Pagination>
  );
};

export default PaginationItem;
