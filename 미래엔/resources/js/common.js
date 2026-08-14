document.addEventListener('DOMContentLoaded', function () {
    const textarea = document.querySelector('.form_section-textarea');
    const countDisplay = document.querySelector('.form_section-count');

    if (textarea && countDisplay) {
        textarea.addEventListener('input', function () {
            const currentLength = this.value.length;
            const maxLength = 2000;

            countDisplay.textContent = `${currentLength.toLocaleString()}/${maxLength.toLocaleString()}`;
        });
    }
});