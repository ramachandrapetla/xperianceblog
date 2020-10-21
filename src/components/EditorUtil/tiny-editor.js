import React from 'react'

import { Editor } from '@tinymce/tinymce-react'


export default function TinyEditor({height, handleEditorChange}) {

    return(
        <section className="container newpost-editor-container">
            <Editor
                initialValue="<h3>Start your article here...</h3>"
                apiKey="7sdq5lu6re160akd2hdkgwt7md6zcpo08e09xxz51q2t3ndw"
                init={
                        {
                            height: `${height}`,
                            menubar: false,
                            plugins: [
                                'advlist autolink lists link image imagetools',
                                'codesample', 
                                'charmap print preview anchor help',
                                'searchreplace visualblocks code',
                                'insertdatetime media mediatools table paste wordcount'
                            ],
                            toolbar:
                                'undo redo | formatselect | bold italic | \
                                alignleft aligncenter alignright | paste blockquote |\
                                bullist numlist outdent indent | \
                                lists link unlink | image media | codesample \
                                table tabledelete | tableprops tablerowprops tablecellprops | \
                                tableinsertrowbefore tableinsertrowafter tabledeleterow | \
                                tableinsertcolbefore tableinsertcolafter tabledeletecol\
                                code | help',
                            content_css :  false,
                            
                            content_style : `
                                blockquote {
                                    border-left: 4px solid #8cc34a;
                                    padding: 10px 20px;
                                    overflow: hidden;
                                    margin-bottom: 20px;
                                }

                                h1 {

                                }
                            `,
                            end_container_on_empty_block : true,

                            setup : function(ed) {
                                ed.on("keydown", function(evt) {
                                    console.debug('Key Up Event: ', evt.keyCode)
                                    if(evt.keyCode === 9) {
                                        ed.execCommand('mceInsertContent', false, '&emsp;')
                                        evt.preventDefault()
                                        evt.stopPropagation()
                                        return false
                                    }
                                })
                            }
                        }          
                    }
                onChange={handleEditorChange}

            />
        </section>
    )
}