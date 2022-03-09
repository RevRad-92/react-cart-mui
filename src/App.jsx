import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Navbar from "./components/Navbar/Navbar"
import Cart from "./pages/Cart"
import Home from "./pages/Home"
import NotFound from "./pages/NotFound"
import Product from "./pages/Product"
import Products from "./pages/Products"

function App() {
    return (
        <>
            <Router>
                <Navbar />
                <Switch>
                  <Route exact path='/'>
                    <Home />
                  </Route>
                  <Route exact path='/products'>
                    <Products />
                  </Route>
                  <Route exact path='/products/:id'>
                    <Product />
                  </Route>
                  <Route exact path='/cart'>
                    <Cart />
                  </Route>
                  <Route exact path='*'>
                    <NotFound />
                  </Route>
                </Switch>
            </Router>
        </>
    )
}

export default App
