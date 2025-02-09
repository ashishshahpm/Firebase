document.addEventListener("DOMContentLoaded", async () => {
    console.log("🔥 DOM Loaded, initializing Firebase...");

    // Ensure Firebase is ready
    await new Promise(resolve => setTimeout(resolve, 500));
    const app = firebase.app();
    const db = firebase.firestore();
    console.log("✅ Firestore initialized");

    const productsRef = db.collection('products');
    const query = productsRef.where('price', '>', 10);

    // Define uploadFile function
    function uploadFile(files) {
        const storageRef = firebase.storage().ref(); // Corrected storage reference
        const horseRef = storageRef.child('horse.jpg'); // You can replace 'horse.jpg' with dynamic file name if needed

        const file = files.item(0); // Get the selected file
        const task = horseRef.put(file); // Upload the file

        task.then(snapshot => {
            console.log(snapshot);
            
            // Corrected way to get the download URL
            snapshot.ref.getDownloadURL().then(url => {
                // Set the image source to the download URL
                document.querySelector("#imgUpload").setAttribute('src', url);
            }).catch((error) => {
                console.error("Error getting download URL:", error);
            });
        }).catch((error) => {
            console.error("Error uploading file:", error);
        });
    }

    // Make sure the input file field triggers uploadFile when a file is selected
    document.querySelector('input[type="file"]').addEventListener('change', (event) => {
        uploadFile(event.target.files); // Call uploadFile when the user selects a file
    });
});
