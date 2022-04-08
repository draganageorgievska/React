import React from "react";
import BooksTerm from "../BookTerm/booksTerm";
import {Link} from "react-router-dom";
import ReactPaginate from "react-paginate";
class Books extends React.Component{
constructor(props) {
    super(props);
    this.state={
        page: 0,
        size: 5
    }
}
render() {
    const offset = this.state.size * this.state.page;
    const nextPageOffset = offset + this.state.size;
    const pageCount = Math.ceil(this.props.books.length / this.state.size);
    const books = this.getBooksPage(offset, nextPageOffset);

    return(
        <div>
            <div>
                <div>
                    <table>
                        <thead>
                        <th>
                            Name
                        </th>
                        <th>
                            Category
                        </th>
                        <th>
                            Author
                        </th>
                        <th>Available Copies</th>
                        </thead>
                        <tbody>
                        {books}
                        </tbody>
                    </table>
                </div>
                <Link to={"/add"}>Add Book</Link>
            </div>
            <ReactPaginate previousLabel={"back"}
                           nextLabel={"next"}
                           breakLabel={<a href="/#">...</a>}
                           breakClassName={"break-me"}
                           pageClassName={"ml-1"}
                           pageCount={pageCount}
                           marginPagesDisplayed={2}
                           pageRangeDisplayed={5}
                           onPageChange={this.handlePageClick}
                           containerClassName={"pagination m-4 justify-content-center"}
                           activeClassName={"active"}/>

        </div>
    )
}
    handlePageClick = (data) => {
        let selected = data.selected;
        console.log(selected)
        this.setState({
            page: selected
        })
    }

    getBooksPage = (offset, nextPageOffset) => {
        console.log(offset, nextPageOffset)
        return this.props.books.map((term)=>{
            return(
                <BooksTerm term={term} onDelete={this.props.onDelete} onEdit={this.props.onEdit} markBook={this.props.markBook}/>
            )
        }).filter((book, index) => {
            return index >= offset && index < nextPageOffset;
        })
    }

}
export default Books;