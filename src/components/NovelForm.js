import React, { useState } from 'react'
import './NovelForm.css'

const  NovelForm = () => {

    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");
    const [publisher, setPublisher] = useState("");
    const [releaseDate, setReleaseDate] = useState("");
    const [era, setEra] = useState("");
    const [timeline, setTimeline] = useState("");
    const [summary, setSummary] = useState("");
    const [graphicNovel, setGraphicNovel] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        let novel = {
            title: title,
            author: author,
            publisher: publisher,
            releaseDate: releaseDate,
            era: era,
            timeline: timeline,
            summary: summary,
            graphicNovel: graphicNovel,
        }

        fetch("http://localhost:9000/novels", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(novel)

        })
            .then(clearForm())
            .then(response => response.json())
            .then(console.log);
    }

    const clearForm = () => {
        setTitle("");
        setAuthor("");
        setPublisher("");
        setReleaseDate("");
        setEra("");
        setTimeline("");
        setSummary("");
    }

    const handleChange = ({ target }) => {
        switch(target.name){
            case "title":
                setTitle(target.value);
                break;
            case "author":
                setAuthor(target.value);
                break;
            case "publisher":
                setPublisher(target.value);
                break;
            case "release_date":
                setReleaseDate(target.value);
                break;
            case "era":
                setEra(target.value);
                break;
            case "timeline":
                setTimeline(target.value);
                break;
            case "summary":
                setSummary(target.value);
                break;
            case "graphic_novel":
                setGraphicNovel(!graphicNovel);
                break;
        }
    }

    return (
        <div >
            <div className="novel-box">
                
                <form 
                    className="novel-form" 
                    onSubmit={handleSubmit}
                >  
                    <label htmlFor="title">Title:</label>
                    <input type="text" name="title" id="title" value={title} onChange={handleChange}/>
                    <label htmlFor="author">Author:</label>
                    <input type="text" name="author" id="author" value={author} onChange={handleChange}/>
                    <label htmlFor="publisher">Publisher:</label>
                    <input type="text" name="publisher" id="publisher" value={publisher} onChange={handleChange}/>
                    <label htmlFor="release_date">Release Date:</label>
                    <input type="text" name="release_date" id="release_date" value={releaseDate} onChange={handleChange}/>
                    <label htmlFor="era">Era:</label>
                    <input type="text" name="era" id="era" value={era} onChange={handleChange}/>
                    <label htmlFor="timeline">Timeline:</label>
                    <input type="text" name="timeline" id="timeline" value={timeline} onChange={handleChange}/>
                    <label htmlFor="summary">Summary:</label>
                    <textarea name="summary" rows="10" value={summary} onChange={handleChange}></textarea>
                    <label htmlFor="book_cover">Book Cover:</label>
                    <input 
                        type="file" 
                        name="book_cover" 
                        id="book_cover" 
                        accept="image/*"
                    />
                    <input type="submit" value="submit"/>
                </form>
            </div>
        </div>
    )
}

export default NovelForm;