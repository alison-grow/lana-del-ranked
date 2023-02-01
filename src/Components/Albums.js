import React from "react";
import './Albums.css';
import { Card } from "@mui/material";
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

export default function Albums() {
    const data = [
        {
            "name": "Ultraviolence",
            "rank": "Number One:",
            "img": "https://www.udiscovermusic.com/wp-content/uploads/2019/06/Lana-Del-Rey-Ultraviolence-album-cover-820.jpg",
        },
        {
            "name": "Honeymoon",
            "rank": "Number Two:",
            "img": "https://upload.wikimedia.org/wikipedia/en/7/75/Lana_Del_Rey_-_Honeymoon_%28Official_Album_Cover%29.png",
            "song1": "",
        },
        {
            "name": "Born To Die - Paradise Edition",
            "rank": "Number Three:",
            "img": "https://m.media-amazon.com/images/I/51X+ldZAZ5L._SY1000_.jpg",
            "song1": "",
        },
        {
            "name": "Lust For Life",
            "rank": "Number Four:",
            "img": "https://upload.wikimedia.org/wikipedia/en/1/1a/Lana_Del_Rey_-_Lust_for_Life.png",
            "song1": "",
        },
        {
            "name": "Chemtrails Over The Country Club",
            "rank": "Number Five:",
            "img": "https://images-prod.dazeddigital.com/960/azure/dazed-prod/1300/1/1301209.jpg",
            "song1": "",
        },
        {
            "name": "Norman Fucking Rockwell",
            "rank": "Number Six:",
            "img": "https://www.interviewmagazine.com/wp-content/uploads/2019/07/nfr.png",
            "song1": "",
        },
        {
            "name": "Blue Banisters",
            "rank": "Number Seven:",
            "img": "https://upload.wikimedia.org/wikipedia/en/1/10/Lana_Del_Rey_-_Blue_Banisters_cover.png",
            "song1": "",
        },
    ];
    const lists = [
        {
            song1: "Sad Girl", song2: "Pretty When You Cry", song3: "Ultraviolence", song4: "Florida Kilos", song5: "Shades Of Cool", song6: "Fucked My Way Up To The Top", song7: "West Coast", song8: "Brooklyn Baby",song9: "Cruel World", song10: "Black Beauty", song11: "Guns And Roses", song12: "The Other Woman", song13: "Money Power Glory", song14: "Old Money",
        },
        {
            song1: "The Blackest Day",
            song2: "God Knows I Tried",
            song3: "Religion",
            song4: "Music To Watch Boys To",
            song5: "",
            song6: "",
            song7: "",
            song8: "",
            song9: "",
            song10: "",
            song11: "",
            song12: "",
            song13: "",
            song14: "",
        },
        {
            song1: "",
            song2: "",
            song3: "",
            song4: "",
            song5: "",
            song6: "",
            song7: "",
            song8: "",
            song9: "",
            song10: "",
            song11: "",
            song12: "",
            song13: "",
            song14: "",
        },
        {
            song1: "",
            song2: "",
            song3: "",
            song4: "",
            song5: "",
            song6: "",
            song7: "",
            song8: "",
            song9: "",
            song10: "",
            song11: "",
            song12: "",
            song13: "",
            song14: "",
        },
        {
            song1: "",
            song2: "",
            song3: "",
            song4: "",
            song5: "",
            song6: "",
            song7: "",
            song8: "",
            song9: "",
            song10: "",
            song11: "",
            song12: "",
            song13: "",
            song14: "",
        },
        {
            song1: "",
            song2: "",
            song3: "",
            song4: "",
            song5: "",
            song6: "",
            song7: "",
            song8: "",
            song9: "",
            song10: "",
            song11: "",
            song12: "",
            song13: "",
            song14: "",
        },
        {
            song1: "",
            song2: "",
            song3: "",
            song4: "",
            song5: "",
            song6: "",
            song7: "",
            song8: "",
            song9: "",
            song10: "",
            song11: "",
            song12: "",
            song13: "",
            song14: "",
        },
        {
            song1: "",
            song2: "",
            song3: "",
            song4: "",
            song5: "",
            song6: "",
            song7: "",
            song8: "",
            song9: "",
            song10: "",
            song11: "",
            song12: "",
            song13: "",
            song14: "",
        },
        {
            song1: "",
            song2: "",
            song3: "",
            song4: "",
            song5: "",
            song6: "",
            song7: "",
            song8: "",
            song9: "",
            song10: "",
            song11: "",
            song12: "",
            song13: "",
            song14: "",
        },
    ]
    return (
        <div className="albums-content">
            <div className="section-header">
                ALBUM RANKINGS
            </div>
            <div className="card-content">
                {data.map((data) => (
                <Card className="cards" sx={{
                        backgroundColor: 'darkred'
                    }}>
                    <CardMedia 
                        sx={{}}
                        className="card-img"
                        image={data.img}
                        title={data.name}
                    />
                    <CardContent>
                        <Typography className="typography-name" component="div" sx={{
                            color: 'white',
                            fontFamily: "'rainbow', cursive",
                            fontSize: '40px',
                            lineHeight: 1.1,
                        }}>
                            {data.rank}<br />
                            {data.name}
                        </Typography>
                        <Typography className="comments">
                            {lists.map((lists) => (
                                <ol>
                                    <li>{lists.song1}</li>
                                    <li>{lists.song2}</li>
                                    <li>{lists.song3}</li>
                                    <li>{lists.song4}</li>
                                    <li>{lists.song5}</li>
                                    <li>{lists.song6}</li>
                                    <li>{lists.song7}</li>
                                    <li>{lists.song8}</li>
                                    <li>{lists.song9}</li>
                                    <li>{lists.song10}</li>
                                    <li>{lists.song11}</li>
                                    <li>{lists.song12}</li>
                                    <li>{lists.song13}</li>
                                    <li>{lists.song14}</li>
                                </ol>
                            ))}
                        </Typography>
                    </CardContent>
                </Card>))}
            </div>
        </div>
    )
}