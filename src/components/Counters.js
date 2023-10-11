import React, { useState } from 'react'
import './counter.css'
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossOrigin="anonymous"></link>
const Counters = () => {
    const [text,setText] = useState("");
    const handleOnChange = (event) => {
        console.log("OnChange");
        setText(event.target.value);

    }
    return (
        <>
            <h1>Responsive Paragraph Word Counter</h1>
            <div className="form-group">
                <textarea className="form-control" id="exampleFormControlTextarea1" rows="8" cols="60" onChange={handleOnChange}></textarea>
            </div>
            <h3>Word count is: {text.trim().split(/\s+/).filter(Boolean).length} </h3>

            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL" crossOrigin="anonymous"></script>
        </>
    )
}

export default Counters;
