import React, { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import resume from '../assets/resume.pdf';
import '../styles/Resume.css';
import 'react-pdf/dist/esm/Page/TextLayer.css';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

function Resume() {
    const [numPages, setNumPages] = useState(null);
    const [pageNum, setPageNum] = useState(1);
    function onDocLoadSuccess({ numPages }) {
        setNumPages(numPages);
        setPageNum(1);
    }
    
    return (
        <div className='resume'>
            <Document file={resume} options={{workerSrc: "/pdf.worker.js"}} onLoadSuccess={onDocLoadSuccess}>
                <Page pageNumber={pageNum} />
            </Document>
            
        </div>
    )
}

export default Resume