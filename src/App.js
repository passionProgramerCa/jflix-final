import React, {Component} from 'react';


import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom';
import Home from "./pages/home";
import Listingpages from './pages/listing-pages'
import Login from "./pages/login";
import Signup from "./pages/signup";
import VideoDetail from "./components/listing-page/video-detail";
// fontawsome icon
import {library} from '@fortawesome/fontawesome-svg-core'
import {fab} from '@fortawesome/free-brands-svg-icons'
import {faCheckSquare, faCoffee} from '@fortawesome/free-solid-svg-icons'
import PropTypes from "prop-types";

library.add(fab, faCheckSquare, faCoffee)

class App extends Component {
    
    state = {
        videos: []
    }
    
    componentDidMount() {
        fetch('https://jasonserverjflix-app.herokuapp.com/videos')
            .then(res => res.json())
            .then((data) => {
                this.setState({videos: data})
            })
            .catch(console.log)
    }
    
    render() {
        const { children } = this.props
    
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/signin" component={Login}/>
                    <Route exact path="/movies" component={Listingpages}/>
                    <Route exact path="/TV" component={Listingpages}/>
                    <Route exact path="/signup" component={Signup}/>
                    <Route exact path="/VideoDetail/:id" render={({match}) => (
                        <VideoDetail video={this.state.videos.find(p => p.title === match.params.id)}/>
                    )}/>
                    <Redirect from="*" to="/"/>
                </Switch>
            </BrowserRouter>
        );
    }
}

export default App;