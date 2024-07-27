import React, { useMemo } from "react";
import { useTable, usePagination, useFilter, useGlobalFilter } from "react-table";
import MOCK_DATA from "./MOCK_DATA.json";
import { COLUMNS, Grouped_Columns } from "./colums";
import "./table.css";

function PaginationTable() {
  const columns = useMemo(() => COLUMNS, []);
  const data = useMemo(() => MOCK_DATA, []);

  /* create am  instance of the table */
  const tableInstance = useTable(
    {
      columns,
          data,
          initialState: {
              pageSize: 20
          }
    },
     
      useGlobalFilter,
      usePagination
  );

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups, 
        page,
        prepareRow,
        canPreviousPage,
        state,
        setGlobalFilter,
        nextPage,
         setPagSize,
      previousPage,
      canNextPage,
        pageOptions,
        gotoPage,
      pageCount
      
    
  } = tableInstance;

  const { globalFilter, pageIndex } = state;

console.log(pageCount)
  return (
    <>
      <input
        type="text"
        value={globalFilter || ""}
        onChange={(e) => setGlobalFilter(e.target.value)}
      />
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps()}>{column.render("Header")}</th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {page.length == 0 ? (
            <div
              tyle={{
                backgroundColor: "red",
                width: "100%",
              }}
            >
              <p
                style={{
                  backgroundColor: "red",
                  width: "100%",
                }}
              >
                No item found
              </p>
            </div>
          ) : (
            page.map((row) => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()}>
                  {row.cells.map((cell) => {
                    return (
                      <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                    );
                  })}
                </tr>
              );
            })
          )}
        </tbody>
        
          </table>
          <div>
              
              <span>
                  Page{" "} 
                  <strong>{pageIndex + 1}</strong> of { pageOptions.length}
                  { " "}
              </span>

              <button onClick={() => {
                  gotoPage(0)
              }}
                  disabled={ !canPreviousPage}
              >
                  { "<<"}
              </button>
              <button
                  disabled={ !canPreviousPage }
                  onClick={() => previousPage()
             }> Previous </button>
              <button  disabled={ !canNextPage} onClick={() => nextPage()
               
              }>Next</button>
              <button onClick={() => {
                  gotoPage(pageCount - 1)
              }}
                  disabled={ !canNextPage}
              >
                  { ">>"}
              </button>
              <div style={{
                  display: "inline-flex",
                  flexDirection: "row",
                  gap: 2,
                  marginLeft: 10,
                  
              }}>
              { 
                  Array(pageCount).fill().map((_,i)=> { 
                      return <span onClick={() => { 
                          gotoPage(i)
                      }}>
                          { i + 1}
                      </span>
                  })
              }
             </div>

        
          </div>
    </>
  );
}

export default PaginationTable;
