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
            "img": "https://www.udiscovermusic.com/wp-content/uploads/2019/06/Lana-Del-Rey-Ultraviolence-album-cover-820.jpg",
            "comments": "Best album. Best overall vibes. Nostalgic. Iconic. THE BEST.",
        },
        {
            "name": "Honeymoon",
            "img": "https://upload.wikimedia.org/wikipedia/en/7/75/Lana_Del_Rey_-_Honeymoon_%28Official_Album_Cover%29.png",
            "comments": "Very close second. Iconic, nostalgic, great vibes.",
        },
        {
            "name": "Born To Die (Paradise Edition)",
            "img": "https://static.wikia.nocookie.net/lanadelrey/images/2/24/Captura_de_pantalla_%2837%29.png/revision/latest/scale-to-width-down/250?cb=20170717223910",
            "comments": "Nostalgic, classic, great first studio album. Iconic. As I age it feels less relatable though. Was my all time favorite in high school.",
        },
        {
            "name": "Lust For Life",
            "img": "https://upload.wikimedia.org/wikipedia/en/1/1a/Lana_Del_Rey_-_Lust_for_Life.png",
            "comments": "A good album mostly, her first with features. Felt like selling out a little. Mostly bops still. ",
        },
        {
            "name": "Chemtrails Over The Country Club",
            "img": "https://images-prod.dazeddigital.com/960/azure/dazed-prod/1300/1/1301209.jpg",
            "comments": "Mostly bops, with some flops. Not bad. Vibes are changing more. Tied with NFR",
        },
        {
            "name": "Norman Fucking Rockwell",
            "img": "https://www.interviewmagazine.com/wp-content/uploads/2019/07/nfr.png",
            "comments": "Not that bad but not that good either. Tied with Chemtrails. This is where her vibes start changing. A few bops but overall not her best.",
        },
        {
            "name": "Blue Banisters",
            "img": "https://upload.wikimedia.org/wikipedia/en/1/10/Lana_Del_Rey_-_Blue_Banisters_cover.png",
            "comments": "Overall worst. Not every song is bad but most are just unrelatable to me now. She is becoming more pop-y and mainstream, also targeting an older crowd imo.",
        },
    ];
    return (
        <div className="albums-content">
            <div className="section-header">
                ALBUM RANKINGS
            </div>
            <div className="card-content">
                {data.map((data) => (
                <Card className="cards" sx={{width: 345, height: 345}}>
                    <CardMedia 
                        sx={{height: 120, width: 120}}
                        className="card-img"
                        image={data.img}
                        title={data.name}
                    />
                    <CardContent>
                        <Typography className="typography-name" component="div">
                            {data.name}
                        </Typography>
                        <Typography className="comments">
                            {data.comments}
                        </Typography>
                    </CardContent>
                </Card>))}
            </div>
        </div>
    )
}