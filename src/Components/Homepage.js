import React from "react";
import Button from '@mui/material/Button';
import { Link } from "@mui/material";

export default function Homepage() {
    return (
        <div className="homepage-content">
            <div className="image-div">
                <img src="https://i.pinimg.com/736x/b8/f6/b9/b8f6b968a92f58473a7dbb4577576d11.jpg" alt="lana del rey" class="img" />
            </div>
            <div className="buttons-div">
                <button class="button">
                    All Songs
                </button>
                <Button className="button" component={Link} to="/Albums">
                    Albums
                </Button>
                <button className="button">
                    Features
                </button>
                <button className="button">
                    Unreleased
                </button>
            </div>
        </div>
    )
}