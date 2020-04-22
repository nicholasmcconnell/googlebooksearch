import React from 'react'
import '../Cards/style.css';

function Cards(props) {
    console.log("incards " + props);
    // let { items } = props.books;
    // console.log(props.books.items);

    if(!props.books.items){
        return
    }


    return (

        <div className="card">
            <img src="" className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title"></h5>
                    <p className="card-text"></p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
      </div>
    );
}

export default Cards;