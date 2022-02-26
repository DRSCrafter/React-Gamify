import Button from "@mui/material/Button";
import Menu from '@mui/material/Menu';
import MenuItem from "@mui/material/MenuItem";
import * as React from "react";
import '../App.css';
import {ListItemIcon, ListItemText} from "@mui/material";

export default function ItemsMenu({itemList}) {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div>
            <Button
                id="fade-button"
                aria-controls={open ? 'fade-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
            >
                <span style={{color: 'white'}}>
                Dashboard
                </span>
            </Button>
            <Menu
                sx={{marginTop: 3, opacity: '80%'}}
                id="fade-menu"
                MenuListProps={{
                    'aria-labelledby': 'fade-button',
                }}
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center',
                }}
                transformOrigin={{
                    horizontal: 'center',
                }}
            >
                {itemList.map((item) => (
                    <MenuItem onClick={handleClose}>
                        <div style={{
                            display: 'flex',
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                        }}>
                            <ListItemIcon>
                                <img style={{width: 50, height: 50, marginRight: 15}} src={item.image} alt='icon'/>
                            </ListItemIcon>
                            <ListItemText style={{width: 135}}>
                                {item.name}
                            </ListItemText>
                        </div>
                    </MenuItem>
                ))}
            </Menu>
        </div>
    );
}
