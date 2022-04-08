import React from "react";
import axios from "../custom-axios/axios";
const EShopService={
    fetchCategories:()=>{
        return axios.get("/categories")
    },
    fetchBooks:()=>{
        return axios.get("/books")
    },
    fetchAuthors:()=>{
        return axios.get("/author")
    },
    deleteBook:(id)=>{
        return axios.delete(`/delete/${id}`)
    },
    addBook:(name,category,author,availableCopies)=>{
        return axios.post("/add",{
            "name" : name,
            "category" : category,
            "author" : author,
            "availableCopies" : availableCopies
        });
    },
    editBook:(id,name,category,author,availableCopies)=>{
        return axios.put(`/edit/${id}`,{
            "name" : name,
            "category" : category,
            "author" : author,
            "availableCopies" : availableCopies
        });
    },
    getBook:(id)=>{
        return axios.get(`/books/${id}`)
    },
    markAsTaken:(id)=>{
        return axios.put(`/mark/${id}`)
    }
}
export default EShopService;