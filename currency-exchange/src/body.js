import React from "react";
import './styles.css';

const Body = () => {
    return (
        <tbody id="tableBody">
            {window.onload = function () {
                document.getElementById("btnGet").addEventListener("click", () => {
                    const xhr = new XMLHttpRequest()
                    xhr.open("GET", "https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json", true);

                    xhr.onreadystatechange = function () {
                    if (this.readyState === 4 && this.status === 200) {
                        var data = JSON.parse(this.responseText);
                        localStorage.data = JSON.stringify(data);

                        var tableBody = document.getElementById("tableBody");
                        tableBody.innerHTML = "";

                        data.forEach(function (item) {
                        var row = document.createElement("tr");
                        var txtCell = document.createElement("td");
                        var ccCell = document.createElement("td");
                        var rateCell = document.createElement("td");

                        txtCell.innerHTML = item.txt;
                        ccCell.innerHTML = item.cc;
                        rateCell.innerHTML = item.rate;

                        row.appendChild(txtCell);
                        row.appendChild(ccCell);
                        row.appendChild(rateCell);

                        tableBody.appendChild(row);
                        });
                    }};

                    xhr.send();
                });
                }}
        </tbody>
    );
}

export default Body