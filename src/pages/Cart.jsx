import React from "react"
import { Avatar, Container, List, ListItem, ListItemAvatar, ListItemButton, ListItemText, Typography } from "@mui/material"
import { useSelector } from "react-redux"
const Cart = () => {
    const cartReducer = useSelector((state) => state.cartReducer)

    const getTotal = () => {
        let total = 0
        cartReducer.products.forEach(product => {
            total += product.price
        });
        console.log(total)
        return total
    }
    return (
        <>
            <Container sx={{ marginTop: 3 }}>
                <Typography gutterBottom variant="h3" component="div">
                    Cart
                </Typography>
                <List
                    dense
                    sx={{
                        width: "100%",
                        bgcolor: "background.paper",
                    }}
                >
                    {cartReducer.products.map((product, index) => {
                        return (
                            <ListItem
                                disablePadding
                            >
                                <ListItemButton>
                                    <ListItemAvatar>
                                        <Avatar
                                            alt={`Product pic n°${index + 1}`}
                                            src={product.image}
                                        />
                                    </ListItemAvatar>
                                    <ListItemText
                                        id={index}
                                        primary={product.title}
                                    />
                                    <ListItemText
                                        id={index}
                                        primary={`$ ${product.price}`}
                                    />
                                </ListItemButton>
                            </ListItem>
                        )
                    })}
                </List>
                <Typography gutterBottom variant="h4" component="div">
                    Total: $ {getTotal()}
                </Typography>
            </Container>
        </>
    )
}

export default Cart
