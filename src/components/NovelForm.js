import React, { useState } from 'react'
import './NovelForm.css'
const  NovelForm = () => {
    return (
        <div >
            <div class="novel-box">
                <h2>Novel Form</h2>
                <form 
                    className="novel-form" 
                    action="localhost:9000/novels"
                    method="post" 
                    encType="multipart/form-data"
                >
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
                    <input 
                        type="file" 
                        name="book_cover" 
                        id="book_cover" 
                        accept="image/*"
                    />
                    <input type="submit"/>
                </form>
            </div>
        </div>
    )
}

export default NovelForm;