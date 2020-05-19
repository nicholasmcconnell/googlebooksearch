import React from 'react'
import '../Cards/style.css';

function Cards(props) {
    console.log(props.saveView);
    const image = props.book.imageLinks ? props.book.imageLinks.smallThumbnail : props.book.image;

    return (
        <div className='container'>
            <div className="card offset-1 col-md-4" 
            style={{ display: "flex" }}
            >
                <img src={image} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h4 className="card-title">{props.book.title}</h4>
                    <h4 className="card-title">{!props.book.authors ? '' : props.book.authors.join(", ")}</h4>
                    {/* <div data-spy="scroll" data-target="#navbar-example2" data-offset="0"> */}
                    <p className="crop description">{props.book.description}</p>

                    {/* </div> */}
                    {/* <div className="buttonDiv text-center d-flex justify-content-center"> */}

                    <div className="buttons">
                        <a onClick={!props.saveView ? () => props.saveBook(props.book) : () => props.deleteBook(props.book._id)} className="btnSaveDelete btn btn-primary">{!props.saveView ? "Save" : "Delete"}</a>
                        <a href="#" target="_blank" href={props.book.infoLink} className="btn btn-primary">More</a>
                    </div>
                    {/* </div> */}
                </div>
            </div>
        </div>
    );
}

export default Cards;