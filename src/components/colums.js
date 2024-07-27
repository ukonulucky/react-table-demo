export const COLUMNS = [
    {
        Header: "Id",
        Footer: "Id",
        accessor: "id"
    },
    {
        Header: "First Name",
        Footer: "First Name",
           accessor: "first_name"
    },
    {
        Header: "Last Name",
        Footer: "Last Name",
           accesor: "last_name"
    },
    {
    
        Header: "Date of Birth",
        Footer: "Date of Birth",
        accessor: "date_of_birth"
    },
    {
        Header: "Country",
        Footer: "Country",
           accessor: "country"
    },
    {
        Header: "Phone",
        Footer: "Phone",
           accessor: "phone"
    }
]


export const Grouped_Columns = [{
    Header: "Id",
    Footer: "Id",
    accessor: "id"
},
{
    Header: "Info",
    Footer: "Info",
    columns: [
        {
            Header: "First Name",
            Footer: "First Name",
               accessor: "first_name"
        },
        {
            Header: "Last Name",
            Footer: "Last Name",
               accessor: "last_name"
        },
  ]
    },
    {
        Header: "Other",
        Footer: "Others",
        columns: [
           
            {
            
                Header: "Date of Birth",
                Footer: "Date of Birth",
                accessor: "date_of_birth"
            },
            {
                Header: "Country",
                Footer: "Country",
                   accessor: "country"
            }
        ]
    }
]