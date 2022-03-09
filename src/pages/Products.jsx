import React, { useEffect, useState } from "react"
import {
    Container,
    Grid,
    Card,
    CardMedia,
    CardContent,
    Typography,
    CardActions,
    Button,
    Rating,
} from "@mui/material"
import { useDispatch } from "react-redux"
import { addProductToCart } from '../redux/reducers/cartReducer'
import { addProducts } from '../redux/reducers/productReducer'

const Products = () => {
    const [products, setProducts] = useState([])
    const dispatch = useDispatch()

    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
            .then((res) => res.json())
            .then((data) => {
                setProducts(data)
                dispatch(addProducts(data))
            })
    }, [dispatch])

    const addToCart = (event) => {
        const cartProduct = products.find(product => {
            return product.id === parseInt(event.target.name)
        })
        dispatch(addProductToCart(cartProduct))
    }

    return (
        <>
            <Container sx={{ marginTop: 3 }}>
                <Typography gutterBottom variant="h3" component="div">
                    Productos
                </Typography>
                <Grid container spacing={4}>
                    {products.map((product) => {
                        return (
                            <Grid item xs={6} md={4}>
                                <Card sx={{ maxWidth: 345 }}>
                                    <CardMedia
                                        component="img"
                                        height="140"
                                        image={product.image}
                                        alt="green iguana"
                                    />
                                    <CardContent>
                                        <Typography
                                            gutterBottom
                                            variant="h5"
                                            component="div"
                                        >
                                            {product.title}
                                        </Typography>
                                        <Typography
                                            variant="body2"
                                            color="text.secondary"
                                        >
                                            {product.description}
                                        </Typography>
                                        <Rating
                                            sx={{ marginTop: 2 }}
                                            name="read-only"
                                            value={product.rating.rate}
                                            readOnly
                                        />
                                        <Typography
                                            gutterBottom
                                            variant="h5"
                                            component="div"
                                        >
                                            $ {product.price}
                                        </Typography>
                                    </CardContent>
                                    <CardActions>
                                        <Button name={product.id} onClick={(event) => addToCart(event)} size="small">Add to cart</Button>
                                        <Button size="small">Learn More</Button>
                                    </CardActions>
                                </Card>
                            </Grid>
                        )
                    })}
                </Grid>
            </Container>
        </>
    )
}
export default Products
