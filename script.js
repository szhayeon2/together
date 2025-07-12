document.addEventListener('DOMContentLoaded', function() {
    const tabs = document.querySelectorAll('.tab-button');
    const contents = document.querySelectorAll('main section');
    const conceptCards = document.querySelectorAll('.concept-card');

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            // 모든 탭 비활성화 및 콘텐츠 숨기기
            tabs.forEach(item => item.classList.remove('active'));
            contents.forEach(content => content.classList.add('hidden'));

            // 클릭된 탭 활성화 및 해당 콘텐츠 보이기
            tab.classList.add('active');
            const contentId = `content-${tab.id.split('-')[1]}`;
            document.getElementById(contentId).classList.remove('hidden');
        });
    });
    
    conceptCards.forEach(card => {
        card.addEventListener('click', () => {
            card.classList.toggle('flipped');
        });
    });
});