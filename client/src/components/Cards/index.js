import React from 'react'
import '../Cards/style.css';

function Cards(props) {
    // console.log("incards " + props);
    // let { items } = props.books;
    // let { items, books } = props;
    console.log(props.books[0]);

    let infoObj = []

    for (let i = 0; i < (props.books).length; i++) {
        infoObj.push(props.books[i].volumeInfo.title)
        
    }
    console.log(infoObj)

    // if(!props.books.items){
    //     return
    // }

    //looop throuhg prop


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