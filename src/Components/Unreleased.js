import React from "react";
import Table from '@mui/material/Table';
import { Typography } from "@mui/material";
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


export default function Unreleased(){
    const data = [
        { name: "Flipside (unreleased in USA)", id: 1, album: "Ultraviolence"},
        { name: "Wayamaya", id: 2, album: "A.K.A. album"},
        { name: "Yes To Heaven", id: 3, album: "Honeymoon"},
        { name: "Thunder", id: 4, album: "Ultraviolence version"},
        { name: "I Talk To Jesus", id: 5, album: "Ultraviolence"},
        { name: "Serial Killer", id: 6, album: "Born To Die"},
        { name: "Some Things Last A Long Time", id: 7, album: "cover"},
        { name: "Goodbye Kiss", id: 8, album: "cover"},
        { name: "Unidentified Flying Bill", id: 9, album: "Ultraviolence"},
        { name: "Cult Leader", id: 10, album: "Ultraviolence"},
        { name: "Dragonslayer", id: 11, album: "Lust For Life"},
        { name: "The Good Life", id: 12, album: "Honeymoon"},
        { name: "Never Let Me Go", id: 13, album: "N/A"},
        { name: "Queen of Disaster", id: 14, album: "N/A"},
        { name: "Chealsea Hotel No. 2", id: 15, album: "cover"},
        { name: "Prom Song (Gone Wrong)", id: 16, album: "Born To Die"},
        { name: "Life Is Beautiful", id: 17, album: "Honeymoon"},
        { name: "TV in Black & White", id: 18, album: "N/A"},
        { name: "Wild One", id: 19, album: "Honeymoon"},
        { name: "Crazy For You", id: 20, album: "Honeymoon"},
        { name: "Angels Forever, Forever Angels", id: 21, album: "Ultraviolence"},
        { name: "Hollywood's Dead", id: 22, album: ""},
        { name: "California", id: 23, album: "Honeymoon version"},
        { name: "Serene Queen", id: 24, album: "Lust For Life"},
        { name: "You Can Be The Boss", id: 25, album: ""},
        { name: "Fine China", id: 26, album: "Ultraviolence"},
        { name: "Hollywood", id: 27, album: ""},
        { name: "Summer Wine", id: 28, album: "cover"},
        { name: "French Restaurant", id: 29, album: ""},
        { name: "Roses", id: 30, album: "Born To Die"},
        { name: "Every Man Gets His Wish", id: 31, album: ""},
        { name: "On Our Way", id: 32, album: "Born To Die"},
        { name: "Afraid", id: 33, album: ""},
        { name: "Caught You Boy", id: 34, album: ""},
        { name: "Driving In Cars With Boys", id: 35, album: ""},
        { name: "Last Girl On Earth", id: 36, album: ""},
        // "Pawn Shop Blues", - on ray album, should i add? 
    ];
    return (
        <div className="unreleased-content">
            <div className="section-header">
                UNRELEASED RANKINGS
            </div>
            <TableContainer className="un-container" component={Paper} sx={{ width: 900, backgroundColor: 'darkred'}}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead sx={{ height: 130 }}>
                        <TableRow className="table-head-row">
                            <TableCell className="">
                                <Typography className="tablecell-1">Ranking</Typography>
                            </TableCell>
                            <TableCell align="left">
                                <Typography className="tablecell-1">Song Name</Typography>
                            </TableCell>
                            <TableCell align="">
                                <Typography className="tablecell-1">Intended Album</Typography>
                            </TableCell>
                        </TableRow>
                        </TableHead>
                        <TableBody>
                            {data.map((data) => (
                                <TableRow
                                key={data.name}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                className="table-row"
                                >
                                    <TableCell sx={{color: 'white'}} className="table-cell-2" align="left">{data.id}</TableCell>
                                    <TableCell sx={{color: 'white'}} className="table-cell-2" align="left">{data.name}</TableCell>
                                    <TableCell sx={{color: 'white'}} className="table-cell-2" align="left">{data.album}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                        </Table>
            </TableContainer>
        </div>
    )
}



// { name: "", id: 10, album: ""}