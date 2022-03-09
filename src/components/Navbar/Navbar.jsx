import { AppBar, Box, Toolbar, Typography, Badge } from "@mui/material"
import { IconButton } from "@mui/material"
import MenuIcon from "@mui/icons-material/Menu"
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart"
import React from "react"
import { useSelector } from "react-redux"
import { useHistory } from "react-router-dom/cjs/react-router-dom.min"

const Navbar = () => {
    const cartReducer = useSelector((state) => state.cartReducer)
    const history = useHistory()
    
    const goToRoute = (route) => {
        history.push(route)
    }

    return (
        <>
            <Box>
                <AppBar position="static">
                    <Toolbar>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{ mr: 2 }}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography
                            variant="h6"
                            component="div"
                            sx={{ flexGrow: 1 }}
                        >
                            Tienda Capital
                        </Typography>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{ mr: 2 }}
                            onClick={() => goToRoute('/cart')}
                        >
                            <Badge badgeContent={cartReducer.products.length} color="secondary">
                                <ShoppingCartIcon />
                            </Badge>
                        </IconButton>
                    </Toolbar>
                </AppBar>
            </Box>
        </>
    )
}

export default Navbar
