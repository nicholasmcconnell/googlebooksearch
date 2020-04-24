import React from 'react'
import '../Cards/style.css';

function Cards(props) {
    // console.log("incards " + props);
    // let { items } = props.books;
    // let { items, books } = props;
    // if ((props.book.volumeInfo.authors.length) >= 2){

    //     // props.authorString = "";

    //     for (let i = 0; i < props.book.volumeInfo.authors.length; i++) {

    //         props.authorString.concat(props.book.volumeInfo.authors[i] + ", ")
    //         // console.log(props.book.volumeInfo.authors[i])

    //     }

    //     console.log(props.authorString);
    // } 



    return (

        <div className="card">
            <img src={props.book.volumeInfo.imageLinks.smallThumbnail} className="card-img-top" alt="..." />
            <div className="card-body">
                <h4 className="card-title">{props.book.volumeInfo.title}</h4>
                <h4 className="card-title">{props.book.volumeInfo.authors}</h4>
                <p className="card-text">{props.book.volumeInfo.description}</p>
                <div className="buttonDiv text-center d-flex justify-content-center">
                    <a href="#" className="btn btn-primary">Save!</a>
                    <a target="_blank" href={props.book.volumeInfo.infoLink} className="btn btn-primary">More Info!</a>
                </div>
            </div>

            {console.log(props.book.volumeInfo.infoLink)}

        </div>
    );
}

export default Cards;