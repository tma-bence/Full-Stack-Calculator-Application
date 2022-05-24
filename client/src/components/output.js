import React, {  Fragment, useState } from "react";

const Output = () => {

    const [data, setData] = useState("");

    const loadResult = async e => {
        e.preventDefault();
        try {
                const response = await fetch('/api/load');
                var data = await response.json();
                setData(data.toString());
        } catch (err) {
            console.log(err.message);
        }
    }

    const saveResult = async e => {
        e.preventDefault();
        try {
            const num = document.getElementById('num').value;
            const body = {num};
            const response = await fetch('/api/save', {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(body)
            }).then(res => res.json());

            console.log(response);
        } catch (err) {
            console.log(err.message);
        }
    }

    return(
        <Fragment>
            <form className="">
                <div className="mt-2">
                    <p>Previous result: {data}</p>
                </div>
                <button className="btn btn-dark" onClick={loadResult}>Load result</button>
                <button className="btn btn-dark ml-2" onClick={saveResult}>Save result</button>
            </form>
        </Fragment>
    );
}

export default Output;