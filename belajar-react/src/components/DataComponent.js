import React, {useState, useEffect} from "react";

const DataComponent = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then((response) => response.json())
        .then((json) => setData(json));
    }, []);

    return(
        <div>
            <h2>Data dari API</h2>
            <ul>
                {data.slice(0,5).map((item) => (
                    <li key={item.id}>{item.title}</li>
                ))}
            </ul>
        </div>
    );
}

export default DataComponent;

