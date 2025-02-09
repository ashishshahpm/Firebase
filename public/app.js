document.addEventListener("DOMContentLoaded", async () => {
    console.log("🔥 DOM Loaded, initializing Firebase...");

    // Ensure Firebase is ready
    await new Promise(resolve => setTimeout(resolve, 500));

    const db = firebase.firestore();
    console.log("✅ Firestore initialized");

    const myPost = db.collection('reflections').doc('firstReflection');

    myPost.onSnapshot(doc => {
            console.log("📢 Firestore snapshot triggered!");
            const data = doc.data();
            console.log("📝 Retrieved data:", data);
            document.write(data.Question1 + `<br>`)
            document.write(data.views + `<br>`)
    });
});
