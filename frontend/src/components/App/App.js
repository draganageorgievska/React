import './App.css';
import React,{Component} from "react";
import EShopService from "../../repository/eShopRepository";
import Books from "../Books/BookList/books";
import Categories from "../Categories/categories";
import {BrowserRouter as Router, Route,Routes} from 'react-router-dom'
import BookAdd from "../Books/BookAdd/bookAdd";
import BooksEdit from "../Books/BookEdit/booksEdit";
import Header from "../Header/header";
class App extends Component{
  constructor(props) {
    super(props);
    this.state={
        categories:[],
        books:[],
        authors: [],
        selectedBook:{}
    }
  }
  render() {
    return(
<div>
    <Router>
        <Header/>
        <main>
            <Routes>
        <Route path={"/categories"} exact element={<Categories categories={this.state.categories}/>}/>
        <Route path={"/add"} exact element={<BookAdd categories={this.state.categories} authors={this.state.authors} onAddBook={this.addBook}/>}/>
        <Route path={"/edit/:id"} exact element={<BooksEdit books={this.state.books} authors={this.state.authors} categories={this.state.categories} onEditBook={this.editBook} selectedBook={this.state.selectedBook}/>}/>
        <Route path={"/books"} exact element={<Books books={this.state.books} onDelete={this.deleteBook} addBook={this.addBook} onEdit={this.getBook} markBook={this.markAsTaken}/>}/>
            </Routes>
        </main>
    </Router>
</div>

    )
  }
  loadCategories=()=>{
      EShopService.fetchCategories()
          .then((data)=>{
              this.setState({
                  categories: data.data
              })
          })
  }
  loadAuthors=()=>{
      EShopService.fetchAuthors()
          .then((data)=>{
              this.setState({
                  authors : data.data
              })
          })
  }
  loadBooks=()=>{
      EShopService.fetchBooks()
          .then((data)=>{
              this.setState({
                  books: data.data
              })
          })
  }
  deleteBook=(id)=>{
      EShopService.deleteBook(id)
          .then(()=> {
              this.loadBooks()
          })
  }
  addBook=(name,category,author,availableCopies)=>{
      EShopService.addBook(name,category,author,availableCopies)
          .then(()=> {
              this.loadBooks();
          });
  }
  editBook=(id,name,category,author,availableCopies)=>{
      EShopService.editBook(id,name,category,author,availableCopies)
          .then(()=> {
              this.loadBooks();
          });
  }
  getBook=(id)=>{
      EShopService.getBook(id)
          .then((data)=>{
              this.setState({
                  selectedBook:data.data
              })
          })
  }
  markAsTaken=(id)=>{
      EShopService.markAsTaken(id)
          .then(()=>{
              this.loadBooks();
          })
  }
  componentDidMount() {
    this.loadCategories();
    this.loadBooks();
    this.loadAuthors();
  }
}

export default App;
