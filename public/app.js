document.addEventListener("DOMContentLoaded", async () => {
    console.log("🔥 DOM Loaded, initializing Firebase...");

    // Ensure Firebase is ready
    await new Promise(resolve => setTimeout(resolve, 500));
    const app = firebase.app();
    const db = firebase.firestore();
    console.log("✅ Firestore initialized");
    const productsRef =db.collection('products');

    const query = productsRef.where('price', '>', 10);
    
    query.get()
        .then(products => {
            products.forEach(doc => {
                data = doc.data()
                document.write(`${data.name} at $${data.price} <br>`)
                    })
        })
});