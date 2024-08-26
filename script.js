const btn = document.getElementById("clickk");

const PromiseAPI1 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            fetch("https://dummyjson.com/posts")
                .then((res) => res.json())
                .then((data) => {
                    console.log(data); // Replace this with code to display data in the UI
                    resolve(true);
                })
                .catch((error) => reject(error));
        }, 1000);
    });
};

const PromiseAPI2 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            fetch("https://dummyjson.com/products")
                .then((res) => res.json())
                .then((data) => {
                    console.log(data); // Replace this with code to display data in the UI
                    resolve(true);
                })
                .catch((error) => reject(error));
        }, 2000);
    });
};

const PromiseAPI3 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            fetch("https://dummyjson.com/todos")
                .then((res) => res.json())
                .then((data) => {
                    console.log(data); // Replace this with code to display data in the UI
                    resolve(true);
                })
                .catch((error) => reject(error));
        }, 3000);
    });
};

// Event Listener for the button click
btn.addEventListener("click", () => {
    PromiseAPI1()
        .then(() => PromiseAPI2())
        .then(() => PromiseAPI3())
        .then(() => console.log("All APIs fetched and data displayed."))
        .catch((error) => console.error("An error occurred:", error));
});
