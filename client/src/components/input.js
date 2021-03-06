import React, {  Fragment, useState } from "react";

const Input = () => {

        const [data, setData] = useState("");

        const onCalculate = async e => {
            e.preventDefault();
            try {
                const body = {data};
                const response = await fetch('/api/calc', {
                    method: "POST",
                    headers: {"Content-Type": "application/json"},
                    body: JSON.stringify(body)
                }).then(res => res.json());

                setData(response);
            } catch (err) {
                console.error(err.message);
            }
        }

        const clearField = async e => {
            e.preventDefault();
            try {
                setData("");
            } catch (err) {
                console.log(err.message);
            }
        }

        const memoryAdd = async e => {
            e.preventDefault();
            try {
                const body = {data};
                console.log(body);
                fetch('/api/mem', {
                    method: "POST",
                    headers: {"Content-Type": "application/json"},
                    body: JSON.stringify(body)
                });

            } catch (err) {
                console.log(err.message);
            }
        }

        const memoryClear = async e  => {
            e.preventDefault();
            try {
                const body = {data: ""};
                console.log(body);
                fetch('/api/mem', {
                    method: "POST",
                    headers: {"Content-Type": "application/json"},
                    body: JSON.stringify(body)
                });

            } catch (err) {
                console.log(err.message);
            }
        }

        const memoryRead = async e => {
            e.preventDefault();
            try {
                    const response = await fetch('/api/mem');
                    var data = await response.json();
                    setData(data);
            } catch (err) {
                console.log(err.message);
            }
        }

        return(
            <Fragment>
                <div className="container">
                    <div className="row">
                        <form className="d-flex">
                            <input type="text" id="num" value={data} onChange={e => setData(e.target.value)}></input>
                            <button className="btn btn-primary ml-2" onClick={onCalculate}>Calculate</button>
                            <button className="btn btn-secondary ml-2" onClick={clearField}>Clear</button>
                        </form>
                    </div>
                    <div className="row mt-2">
                        <button className="btn btn-secondary" onClick={memoryAdd}>M+</button>
                        <button className="btn btn-secondary ml-2" onClick={memoryClear}>M-</button>
                        <button className="btn btn-secondary ml-2" onClick={memoryRead}>Mr</button>
                    </div>
                </div>
            </Fragment>
        );
}

export default Input;