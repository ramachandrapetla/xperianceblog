import React from 'react'
import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import PasswordModal from '../components/password-modal'

export default function Homme() {
    return(
        // <CKEditor
        //     editor={ ClassicEditor }
        //     data="<h2>Hello From Xperiance Blog</h2>"
        //     onInit={ editor => {
        //         // You can store the "editor" and use when it is needed.
        //         console.log( 'Editor is ready to use!', editor );
        //     } }
        //     onChange={ ( event, editor ) => {
        //         const data = editor.getData();
        //         console.log( { event, editor, data } );
        //     } }
        //     onBlur={ ( event, editor ) => {
        //         console.log( 'Blur.', editor );
        //     } }
        //     onFocus={ ( event, editor ) => {
        //         console.log( 'Focus.', editor );
        //     } }
        // />
        //<PasswordModal />
        <span>Home page</span>
    )
}