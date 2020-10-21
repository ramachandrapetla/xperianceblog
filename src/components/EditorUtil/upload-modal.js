import React, {useState, useRef} from 'react'
import { ProgressBar } from 'react-bootstrap'
import axios from 'axios'

export default function UploadModal({closeModal, isActive}) {

    const [modal, setModal] = useState({
        error : false, 
        message : '', 
        success : false,
        uploadPercentage : 0
    })
    
    const inputEl = useRef(null);

    const uploadImageToCloudinary = (e) => {
        e.preventDefault();
        setModal({error: false, message:"", success : false})

        const ref = document.querySelector('.imageInput')
        const image = ref.files[0]

        // let image = ref;
        let fd= new FormData()
        fd.append('file', image)
        fd.append('upload_preset','PostAsset')
        let uploadPath = "https://api.cloudinary.com/v1_1/xperiancecloud/image/upload"

        if(!image) {
            const message = 'Please upload an image.'
            setModal({...modal, error: true, success : false, message})
            return;
        }
        if(image.type.toLowerCase().match(/(jpg|jpeg|png)/)){
            console.log(image,'type matched')
        }
        else{
            const message = 'Type mismatch. Please upload images only.'
            setModal({...modal, error: true,success:false, message})
            return;
        }
        //Hit Cloudinary with image details and get the image url
        //axios.post
        const options =  {
            onUploadProgress : (progressEvent) => {
                const {loaded, total} = progressEvent
                let percent = Math.floor((loaded*100)/total)
                setModal({...modal, uploadPercentage : percent, error: false})
            }
        }
        axios.post(uploadPath, fd, options)
        .then(res => {
            ref.value = ''
            if(res.status === 200) {
                console.log('status code 200')
                setModal({...modal, message : res.data.secure_url ,success : true, error:false,uploadPercentage : 0})
            }else {
                console.log('status code ', res.status)
                setModal({...modal, error : true, success: false, message: `Status Code ${res.status} received` })
            }
            
            
        });
    }

    const copyAction = () => {
        inputEl.current.select()
        document.execCommand('copy')
    }

    return (
        <div className={`modal-container ${isActive && 'active'}`}>
            <div className="modal">
                <h2>Image Upload Tool</h2>
                { modal.uploadPercentage > 0 && <ProgressBar variant="success" now={modal.uploadPercentage} label={`${modal.uploadPercentage}%`} /> }
                { modal.error && <h3 className="error-msg"><i className="fa fa-error-icon"/>{modal.message}</h3>}
                { modal.success && 
                    <h3 className="success-msg">
                        <p>URL </p>
                        <input 
                            type="text"
                            ref={inputEl}
                            value={modal.message}
                            readOnly
                        />
                        <button onClick={copyAction}>Copy</button>
                    </h3>
                }
                <div className="modal-content">
                    <h3 className="label-text">Please choose the image from your local</h3>
                    <input type="file" className="imageInput" />
                </div>
                <button className="btn btn-outline upload-btn" onClick={uploadImageToCloudinary} disabled={modal.uploadPercentage > 0}>
                    Upload Image
                </button>
                <button className="btn btn-primary modal-close-btn" onClick={closeModal}>Close</button>
            </div>
        </div>
    )
}