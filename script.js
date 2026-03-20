// Page Load Animation
window.addEventListener("load", () => {
    document.querySelectorAll(".animate").forEach(el => {
        el.classList.add("show");
    });
});

// Scroll Reveal
const observer = new IntersectionObserver(
    entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }
        });
    },
    { threshold: 0.15 }
);

document.querySelectorAll(".animate").forEach(el => {
    observer.observe(el);
});

function openModal(src) {
    const modal = document.getElementById("imageModal");
    const modalImg = document.getElementById("modalImage");
    modal.style.display = "flex";
    modalImg.src = src;
}

function closeModal() {
    document.getElementById("imageModal").style.display = "none";
}

// Close when clicking outside image
document.getElementById("imageModal").addEventListener("click", function(e) {
    if (e.target === this) {
        closeModal();
    }
});