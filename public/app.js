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
            document.querySelector('#Question1').innerHTML = data.Question1
    });
});

function updatePost(e)
 {
    const db =firebase.firestore();
    const myPost = db.collection('reflections').doc('firstReflection');
    myPost.update({ Question1: e.target.value })
 }