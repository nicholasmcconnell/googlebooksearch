import React from 'react'
import '../Cards/style.css';

function Cards(props) {
   const image = props.book.imageLinks ? props.book.imageLinks.smallThumbnail : props.book.image;

    return (

        <div className="card">
            <img src={image} className="card-img-top" alt="..." />
            <div className="card-body">
                <h4 className="card-title">{props.book.title}</h4>
                <h4 className="card-title">{props.book.authors.join(", ")}</h4>
                <p className="card-text">{props.book.description}</p>
                <div className="buttonDiv text-center d-flex justify-content-center">
                    <a onClick={!props.saveView ? () => props.saveBook(props.book) : () => props.deleteBook(props.book.id)} className="btn btn-primary">{!props.saveView ? "Save" : "Delete"}</a>
                    <a href="#" target="_blank" href={props.book.infoLink} className="btn btn-primary">More</a>
                </div>
            </div>

            {/* {console.log(props.book.volumeInfo.infoLink)} */}

        </div>
    );
}

export default Cards;