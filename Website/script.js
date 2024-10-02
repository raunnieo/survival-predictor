document.addEventListener('DOMContentLoaded', function() {
    // Simulated model performance data
    const performanceData = {
        accuracy: 85.25,
        precision: 0.85,
        recall: 0.85,
        f1Score: 0.85
    };

    // Populate performance metrics
    document.getElementById('accuracy').textContent = `${performanceData.accuracy}%`;
    document.getElementById('precision').textContent = performanceData.precision.toFixed(2);
    document.getElementById('recall').textContent = performanceData.recall.toFixed(2);
    document.getElementById('f1-score').textContent = performanceData.f1Score.toFixed(2);

    // Add smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Add hover effect to journey steps
    const steps = document.querySelectorAll('.step');
    steps.forEach(step => {
        step.addEventListener('mouseenter', () => {
            step.style.backgroundColor = '#f0f9ff';
        });
        step.addEventListener('mouseleave', () => {
            step.style.backgroundColor = 'white';
        });
    });
});