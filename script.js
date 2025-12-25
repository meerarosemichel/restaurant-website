function bookTable() {
    let name = document.getElementById("name").value;
    let date = document.getElementById("date").value;

    if (name === "" || date === "") {
        alert("Please fill all details");
        return false;
    }

    alert("Table booked successfully 🎉");
    return true;
}
