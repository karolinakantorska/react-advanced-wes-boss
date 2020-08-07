// because of next it is not neccesery to import react
import React from 'react';
import Link from 'next/link';

/*
class Home extends React.Component {
    render (){
        return (
            <p>Hej</p>
        )
    }
}
*/
const Home = props => (
    <div>
        <p>Hej</p>
        <Link href="/sell">
            <a>Sell</a>
        </Link>
    </div>
);
export default Home;