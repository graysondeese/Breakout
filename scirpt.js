const rulesBtn = document.getElementById('rules-btn');
const closeBtn = document.getElementById('close-btn');
const rules = document.getElementById('rules');

// Event handlers to show rules
rulesBtn.addEventListener('click', () => 
    rules.classList.add('show'));
closeBtn.addEventListener('click', () => 
    rules.classList.remove('show'));