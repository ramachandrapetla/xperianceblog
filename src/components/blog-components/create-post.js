import React, {useState, useRef} from 'react'
import UploadModal from '../EditorUtil/upload-modal'
import TinyEditor from '../EditorUtil/tiny-editor'




export default function CreatePost() {
    
    const [isActive, setIsActive] = useState(false)
    const [editorData, setEditorData] = useState("Start you article here")

    const handleEditorChange = (e) => {
        setEditorData(e.target.getContent())
        console.log(
          'Content was updated:',
          e.target.getContent()
        );
      }
    const handleUploadImage = (e) => {
        e.preventDefault();
        setIsActive(true)

    }

    const closeModal = () => {
        setIsActive(false)
    }

    

    return(
        <section className="container newpost-editor-container">
            <h1 className="gradient-text">New Post</h1>
            <form>
                <div className="input-group">
                    <div className="input-group-prepend">
                        <span className="input-group-text">Title </span>
                    </div>
                    <input type="text" className="form-control" placeholder="Title of the post"/>
                </div>
                <div className="input-group">
                    <div className="input-group-prepend">
                        <span className="input-group-text">Author </span>
                    </div>
                    <input type="text" className="form-control" placeholder="Author of the Post"/>
                </div>
                <div className="input-group">
                    <div className="input-group-prepend">
                        <span className="input-group-text">Date</span>
                    </div>
                    <input type="date" className="form-control" />
                </div>
                <div className="input-group">
                    <div className="input-group-prepend">
                        <span className="input-group-text">Desc</span>
                    </div>
                    <input type="text" className="form-control" placeholder="Short description of the post"/>
                </div>
                <div className="image-upload-container">
                    <h3 className="image-upload-label">Upload Images here and collect the image link (Recommended)</h3>
                    <button className="btn btn-outline" onClick={handleUploadImage}>Upload Images <i className="fa fa-camera"/></button>
                </div>
                <TinyEditor height={500} handleEditorChange={handleEditorChange} editorData={editorData}/>
                <div className="editor-button-container" >
                    <input type="submit" className="btn btn-outline editor-action-btn" name="submit" value="submit"/>
                    <input type="submit" className="btn btn-outline editor-action-btn" name="draft" value="Save as Draft"/>
                </div>
            </form>
            <UploadModal closeModal={closeModal} isActive={isActive}/>
            <div dangerouslySetInnerHTML={{ __html: editorData }} />
        </section>
    )
}