import React, { useState } from 'react'
import './NovelForm.css'

export default function NovelForm() {
    return (
        <div >
            <form className="novel-form">
                <label htmlFor="title">Title:</label>
                <input type="text" name="title" id="title"/>
                <label htmlFor="author">Author:</label>
                <input type="text" name="author" id="author"/>
                <label htmlFor="publisher">Publisher:</label>
                <input type="text" name="publisher" id="publisher"/>
                <label htmlFor="release_date">Release Date:</label>
                <input type="text" name="release_date" id="release_date"/>
                <label htmlFor="era">Era:</label>
                <input type="text" name="era" id="era"/>
                <label htmlFor="timeline">Timeline:</label>
                <input type="text" name="timeline" id="imeline"/>
                <label htmlFor="summary">Summary:</label>
                <textarea name="summary" rows="10"></textarea>
                <label htmlFor="book_cover">Book Cover:</label>
                <input type="file" name="book_cover" id="book_cover"/>
                <input type="submit"/>
         </form>
        </div>
    )
}