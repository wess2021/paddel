// Circle progress functionality
class CircleProgress {
    constructor(element, options = {}) {
        this.element = element;
        this.options = {
            value: 0,
            size: 200,
            thickness: 10,
            fill: '#4CAF50',
            emptyFill: '#f0f0f0',
            ...options
        };
        
        this.init();
    }
    
    init() {
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        const size = this.options.size;
        const thickness = this.options.thickness;
        const radius = (size - thickness) / 2;
        
        canvas.width = size;
        canvas.height = size;
        
        // Draw empty circle
        ctx.beginPath();
        ctx.arc(size/2, size/2, radius, 0, Math.PI * 2);
        ctx.strokeStyle = this.options.emptyFill;
        ctx.lineWidth = thickness;
        ctx.stroke();
        
        // Draw progress
        const progress = this.options.value / 100;
        ctx.beginPath();
        ctx.arc(size/2, size/2, radius, -Math.PI/2, -Math.PI/2 + (Math.PI * 2 * progress));
        ctx.strokeStyle = this.options.fill;
        ctx.lineWidth = thickness;
        ctx.stroke();
        
        // Add percentage text
        ctx.fillStyle = '#333';
        ctx.font = 'bold 24px Arial';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(`${this.options.value}%`, size/2, size/2);
        
        this.element.appendChild(canvas);
    }
}

// Initialize circle progress elements
document.addEventListener('DOMContentLoaded', function() {
    const progressElements = document.querySelectorAll('.circle-progress');
    progressElements.forEach(element => {
        const value = parseInt(element.getAttribute('data-value') || '0');
        new CircleProgress(element, { value });
    });
}); 