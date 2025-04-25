document.addEventListener('DOMContentLoaded', () => {
    const moodSelector = document.getElementById('mood-selector');
    const moodContent = document.getElementById('mood-content');
    const tabLinks = document.querySelectorAll('.tab-link');
    const tabContents = document.querySelectorAll('.tab-content');

    const moodSuggestions = {
        happy: 'Keep the good vibes going! Try dancing or sharing your positivity with others.',
        sad: 'It’s okay to feel down. Consider journaling or talking to a trusted friend.',
        angry: 'Channel that energy! Try a workout or deep breathing to cool off.',
        calm: 'Embrace the peace. Meditate or enjoy a quiet walk.',
        stressed: 'Take a breather. Try a quick stretch or a mindfulness exercise.',
        excited: 'Ride that wave! Plan something fun or share your enthusiasm.',
        bored: 'Spice things up! Try a new hobby or explore a creative project.',
        lonely: 'Reach out! Call a friend or join a community event.',
        grateful: 'Spread the love! Write a thank-you note or reflect on your blessings.',
        frustrated: 'Take a step back. Break tasks into smaller steps or take a short break.'
    };

    moodSelector.addEventListener('change', () => {
        const selectedMood = moodSelector.value;
        moodContent.innerHTML = selectedMood ? `<p>${moodSuggestions[selectedMood]}</p>` : '<p>Select a mood to get personalized suggestions.</p>';
    });

    tabLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            tabLinks.forEach(l => l.classList.remove('active'));
            tabContents.forEach(c => c.classList.remove('active'));

            link.classList.add('active');
            document.getElementById(link.dataset.tab).classList.add('active');
        });
    });
});
