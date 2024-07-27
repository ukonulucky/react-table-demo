import React, { useMemo } from "react";
import { useTable, useGlobalFilter } from "react-table";
import MOCK_DATA from "./MOCK_DATA.json";
import { COLUMNS, Grouped_Columns } from "./colums";
import "./table.css";

function Table() {
  const columns = useMemo(() => COLUMNS, []);
  const data = useMemo(() => MOCK_DATA, []);

  /* create am  instance of the table */
  const tableInstance = useTable(
    {
      columns,
      data,
    },
    useGlobalFilter
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    footerGroups,
    state,
    setGlobalFilter,
  } = tableInstance;

  const { globalFilter } = state;

  console.log("table state", rows.length);
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
          {rows.length == 0 ? (
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
            rows.map((row) => {
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
        <tfoot>
          {footerGroups.map((footerGroup) => {
            return (
              <tr {...footerGroup.getFooterGroupProps}>
                {footerGroup.headers.map((column) => (
                  <td {...column.getFooterGroupProps}>
                    {column.render("Footer")}
                  </td>
                ))}
              </tr>
            );
          })}
        </tfoot>
      </table>
    </>
  );
}

export default Table;
