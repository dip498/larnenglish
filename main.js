function chackans(){
    point=0;
    var q1 = document.querySelector('input[name="q1"]:checked').value;
    if(q1 === "c"){
        point++;
    };
}
(function () {
    // correct answers map
    const answers = {
        1: 'c', 2: 'a', 3: 'a', 4: 'b', 5: 'a',
        6: 'c', 7: 'b', 8: 'c', 9: 'a', 10: 'b',
        11: 'a', 12: 'a', 13: 'c', 14: 'a', 15: 'a'
    };

    document.addEventListener('DOMContentLoaded', () => {
        const container = document.querySelector('.mcqbox');
        if (!container) return;

        // gather questions, shuffle, keep first 6
        const questions = Array.from(container.querySelectorAll('.question'));
        for (let i = questions.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [questions[i], questions[j]] = [questions[j], questions[i]];
        }
        const shown = questions.slice(0, 6);

        // clear and append the chosen six (random order)
        container.innerHTML = '';
        shown.forEach(q => container.appendChild(q));

        // submit handler
        const submitBtn = document.getElementById('submitBtn');
        const resultDiv = document.getElementById('result');
        if (!submitBtn || !resultDiv) return;

        submitBtn.addEventListener('click', (e) => {
            e.preventDefault();
            let score = 0;
            shown.forEach(q => {
                const selected = q.querySelector('input[type="radio"]:checked');
                if (!selected) return;
                const h2 = q.querySelector('h2');
                const num = h2 ? parseInt(h2.textContent, 10) : NaN;
                if (!Number.isNaN(num) && answers[num] === selected.value) {
                    score++;
                }
            });
            resultDiv.textContent = `Score: ${score} / ${shown.length}`;
        });
    });
})();