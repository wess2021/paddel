// Text splitting animation
class SplitText {
    constructor(element) {
        this.element = element;
        this.text = element.textContent;
        this.split();
    }

    split() {
        const chars = this.text.split('');
        this.element.innerHTML = '';
        
        chars.forEach(char => {
            const span = document.createElement('span');
            span.textContent = char;
            span.style.display = 'inline-block';
            this.element.appendChild(span);
        });
    }
}

document.addEventListener('DOMContentLoaded', function() {
    const elements = document.querySelectorAll('.split-text');
    elements.forEach(element => new SplitText(element));
}); 