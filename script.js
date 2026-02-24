document.addEventListener('DOMContentLoaded', () => {
    const SLIDES_DATA = [
        {
            type: 'title',
            title: 'Тагай-бий',
            desc: '<p style="font-size: 0.8em; margin-bottom: 1rem; color: var(--text-gold);">(в трудах средневековых историков упоминается под вторым именем — Мухаммед Кыргыз)</p>Выдающийся политический деятель, полководец, объединитель племен и архитектор независимой кыргызской государственности в XVI веке.',
            author: 'Презентуют: Именов Шахмухамад, Токтогулов Атай',
            bg: 'https://images.unsplash.com/photo-1540979388789-6cee28a1cdc9?auto=format&fit=crop&q=80&w=1920'
        },
        {
            type: 'grid',
            title: 'Происхождение и корни',
            bg: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=1920',
            items: [
                { icon: 'fa-hourglass-half', label: 'Годы жизни', val: 'Приблизительно 1469/1470 — 1533 (или 1535) гг.' },
                { icon: 'fa-mountain-sun', label: 'Место рождения', val: 'Пастбище Сары-Бел в Алайской долине (или окрестности Коканда/Оша).' },
                { icon: 'fa-users', label: 'Семья', val: 'Сын Ак уула и родной младший брат Адигине.' },
                { icon: 'fa-monument', label: 'Знаменитый предок', val: 'Дед — Долон-бий. В его честь назван горный перевал на трассе Бишкек — Торугарт.' },
                { icon: 'fa-network-wired', label: 'Историческая роль', val: 'Основатель Правого крыла («Оң канат»), куда входят Адигине, Тагай и Мунгуш.' }
            ]
        },
        {
            type: 'list',
            title: 'Путь к лидерству и духовный авторитет',
            bg: 'https://ychef.files.bbci.co.uk/1280x720/p014pbtx.jpg',
            items: [
                '<strong>Смена власти:</strong> После смерти брата Адигине, Тагай-бий взял всю власть над народом в свои руки.',
                '<strong>Военная организация:</strong> Сформировал мобильное и преданное войско из числа сверстников.',
                '<strong>Исторические похороны:</strong> Организовал похороны брата в ореховом лесу Арсланбоб по исламским обычаям.',
                '<strong>Второе имя:</strong> Обряд в Арсланбобе прошел по строгим мусульманским обычаям. За укрепление веры народ и историки дали ему почетное имя — Мухаммед Кыргыз.'
            ]
        },
        {
            type: 'highlight',
            title: 'Исторический курултай 1508 г.',
            subtitle: 'Местность Барскоон, побережье Иссык-Куля',
            bg: 'https://cdn.shortpixel.ai/spai/q_lossy+ret_img+to_auto/uncorneredmarket.com/wp-content/uploads/2017/09/SouthShore_Amaluu_Yurts.jpg',
            text: 'Соблюдая древний кочевой обычай, предводители родов подняли Тагай-бия на белой кошме, провозгласив его верховным правителем всех кыргызов.',
            attributes: [
                { icon: 'fa-flag', txt: 'Золотистый стяг единой власти' },
                { icon: 'fa-campground', txt: 'Главная ставка Ак-Ордо' },
                { icon: 'fa-handshake-angle', txt: 'Легитимизация единства' }
            ]
        },
        {
            type: 'list',
            title: 'Борьба за суверенитет',
            bg: 'https://ichef.bbci.co.uk/images/ic/1920x1080/p04m4mh8.jpg',
            items: [
                '<strong>Угроза:</strong> Окружение государствами потомков Чингисхана и Тамерлана.',
                '<strong>Военный успех:</strong> Масштабная кампания против правителей Моголистана.',
                '<strong>Грозное прозвище:</strong> Враги прозвали воинов «Лесными львами Моголистана» за храбрость.',
                '<strong>Итог (1510 г.):</strong> Моголы полностью вытеснены с территории современного Кыргызстана.'
            ]
        },
        {
            type: 'timeline',
            title: 'Пленение и последние годы',
            bg: 'https://silkroadtravel.antcome.com/upload/default/20220311/16b835dcccb2c6c9fb665c07d90f7dd9.jpg',
            steps: [
                { year: 'Военная неудача', desc: 'Поражение в битве на южном берегу Иссык-Куля.' },
                { year: '1522 г.', desc: 'Первое пленение в Кашгаре и временное освобождение.' },
                { year: '1524–1533 гг.', desc: 'Второй плен за отказ предать народ и стать вассалом.' },
                { year: 'Кончина', desc: 'Умер в заточении спустя 10 лет. Похоронен восточнее города Уч-Турфан.' }
            ]
        },
        {
            type: 'grid-custom',
            title: 'Геополитическое и демографическое наследие',
            bg: 'https://nomads-life.com/wp-content/uploads/2024/02/nature-of-kyrgyzstan.jpg',
            blocks: [
                {
                    h: 'Раздел территорий',
                    p: 'Границей стала река Карадарья: западная часть земель отошла потомкам Адигине, а восточная — Тагай-бию.'
                },
                {
                    h: 'Прародитель племен',
                    p: 'Крупнейшие племена (потомки): Бугу, Сарыбагыш, Солто, Саяк, Черик, Багыш, Конурат, Жедигер, Азык.'
                }
            ]
        },
        {
            type: 'conclusion',
            title: 'Архитектор единства',
            bg: 'https://eurasia.travel/wp-content/uploads/2024/09/kyrgyz-traditions-2.jpg',
            text: 'Тагай-бий (Мухаммед Кыргыз) — фигура масштаба отцов-основателей нации. В XVI веке он предотвратил ассимиляцию кыргызов и сохранил нацию в условиях жесточайшей конкуренции.',
            quote: 'Его жизнь — пример абсолютной преданности идее независимости и символ национального единства.'
        },
        {
            type: 'thanks',
            title: 'Спасибо за внимание!',
            bg: 'https://cdn.discordapp.com/attachments/975057449222541312/1475481080348938384/993fa18260e1878613557df2b7860103.png?ex=699ef5d6&is=699da456&hm=65b70049d340248d623f99988ce59cf0c62ae7875876c895da79bf1536db46ff&'
        }
    ];

    const container = document.getElementById('presentation-container');
    const currentText = document.getElementById('currentSlide');
    const totalText = document.getElementById('totalSlides');
    const progressBar = document.getElementById('progressBar');
    let currentIdx = 0;
    let isTransitioning = false;

    function createSlideHTML(slide, index) {
        let contentHTML = '';
        const delay = (i) => `style="--i: ${i}"`;

        switch (slide.type) {
            case 'title':
                contentHTML = `
                    <div class="glass-panel text-center">
                        <h1 class="stagger-item" ${delay(1)}>${slide.title}</h1>
                        <hr class="gold-line stagger-item" ${delay(2)}>
                        <h3 class="stagger-item" ${delay(3)}>${slide.desc}</h3>
                        <p class="author stagger-item" ${delay(4)}>${slide.author}</p>
                    </div>`;
                break;
            case 'grid':
                contentHTML = `
                    <div class="glass-panel">
                        <h2 class="text-center stagger-item" ${delay(1)}>${slide.title}</h2>
                        <div class="grid-2x2">
                            ${slide.items.map((item, i) => `
                                <div class="glass-card stagger-item" ${delay(i + 2)}>
                                    <i class="fa-solid ${item.icon} gold-icon"></i>
                                    <h4>${item.label}</h4>
                                    <p>${item.val}</p>
                                </div>
                            `).join('')}
                        </div>
                    </div>`;
                break;
            case 'list':
                contentHTML = `
                    <div class="glass-panel">
                        <h2 class="stagger-item" ${delay(1)}>${slide.title}</h2>
                        <ul class="custom-list">
                            ${slide.items.map((item, i) => `<li style="--i: ${i}">${item}</li>`).join('')}
                        </ul>
                    </div>`;
                break;
            case 'highlight':
                contentHTML = `
                    <div class="glass-panel text-center">
                        <h2 class="stagger-item" ${delay(1)}>${slide.title}</h2>
                        <p class="subtitle stagger-item" ${delay(2)}>${slide.subtitle}</p>
                        <div class="highlight-box stagger-item" ${delay(3)}><p>${slide.text}</p></div>
                        <div class="grid-3">
                            ${slide.attributes.map((attr, i) => `
                                <div class="attribute-item stagger-item" ${delay(i + 4)}>
                                    <i class="fa-solid ${attr.icon} gold-icon"></i>
                                    <p>${attr.txt}</p>
                                </div>
                            `).join('')}
                        </div>
                    </div>`;
                break;
            case 'timeline':
                contentHTML = `
                    <div class="glass-panel narrow-panel">
                        <h2 class="stagger-item" ${delay(1)}>${slide.title}</h2>
                        <ul class="timeline">
                            ${slide.steps.map((step, i) => `
                                <li style="--i: ${i}">
                                    <span class="year">${step.year}</span>
                                    <p>${step.desc}</p>
                                </li>
                            `).join('')}
                        </ul>
                    </div>`;
                break;
            case 'grid-custom':
                contentHTML = `
                    <div class="container" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(400px, 1fr)); gap: 2rem;">
                        ${slide.blocks.map((block, i) => `
                            <div class="glass-panel stagger-item" style="--i: ${i + 1}; padding: 3rem; width: 100%;">
                                <h2>${block.h}</h2>
                                <p style="font-size: 1.2rem;">${block.p}</p>
                            </div>
                        `).join('')}
                    </div>`;
                break;
            case 'conclusion':
                contentHTML = `
                    <div class="glass-panel text-center">
                        <h2 class="stagger-item" ${delay(1)}>${slide.title}</h2>
                        <p class="text-large stagger-item" ${delay(2)}>${slide.text}</p>
                        <hr class="gold-line stagger-item" ${delay(3)}>
                        <p class="quote stagger-item" ${delay(4)}><em>${slide.quote}</em></p>
                    </div>`;
                break;
            case 'thanks':
                contentHTML = `
                    <div class="glass-panel text-center">
                        <h1 class="stagger-item" ${delay(1)}>${slide.title}</h1>
                    </div>`;
                break;
        }



        return `
            <section class="slide ${slide.type === 'thanks' ? 'thanks-slide' : ''}" id="slide-${index}">
                <div class="slide-bg" style="background-image: url('${slide.bg}')"></div>
                <div class="overlay"></div>
                ${contentHTML}
            </section>`;
    }

    function render() {
        container.innerHTML = SLIDES_DATA.map((slide, i) => createSlideHTML(slide, i)).join('');
        totalText.textContent = SLIDES_DATA.length;
    }

    function goToSlide(index) {
        if (index < 0 || index >= SLIDES_DATA.length || isTransitioning) return;

        isTransitioning = true;
        const slides = document.querySelectorAll('.slide');

        slides.forEach(s => s.classList.remove('active'));
        slides[index].classList.add('active');

        currentIdx = index;
        currentText.textContent = currentIdx + 1;
        progressBar.style.width = `${((currentIdx + 1) / SLIDES_DATA.length) * 100}%`;

        setTimeout(() => { isTransitioning = false; }, 800); // Match CSS transition duration
    }

    // Controls
    document.getElementById('nextBtn').onclick = () => goToSlide(currentIdx + 1);
    document.getElementById('prevBtn').onclick = () => goToSlide(currentIdx - 1);

    const fBtn = document.getElementById('fullscreenBtn');
    fBtn.onclick = () => {
        if (!document.fullscreenElement) {
            document.documentElement.requestFullscreen();
            fBtn.innerHTML = '<i class="fas fa-compress"></i>';
        } else {
            document.exitFullscreen();
            fBtn.innerHTML = '<i class="fas fa-expand"></i>';
        }
    };

    document.onkeydown = (e) => {
        if (e.key === 'ArrowRight' || e.key === ' ' || e.key === 'PageDown') goToSlide(currentIdx + 1);
        if (e.key === 'ArrowLeft' || e.key === 'PageUp') goToSlide(currentIdx - 1);
        if (e.key === 'Home') goToSlide(0);
        if (e.key === 'End') goToSlide(SLIDES_DATA.length - 1);
        if (e.key.toLowerCase() === 'f') fBtn.click();
    };

    // Wheel support (throttled)
    let wheelTimeout;
    window.addEventListener('wheel', (e) => {
        if (wheelTimeout) return;
        if (Math.abs(e.deltaY) > 50) {
            goToSlide(e.deltaY > 0 ? currentIdx + 1 : currentIdx - 1);
            wheelTimeout = setTimeout(() => { wheelTimeout = null; }, 1200);
        }
    }, { passive: true });

    // Touch support
    let touchStartX = 0;
    window.ontouchstart = (e) => { touchStartX = e.touches[0].clientX; };
    window.ontouchend = (e) => {
        const touchEndX = e.changedTouches[0].clientX;
        const swipeThreshold = 80; // Pixels for a recognized swipe
        if (touchStartX - touchEndX > swipeThreshold) goToSlide(currentIdx + 1); // Swipe left
        if (touchEndX - touchStartX > swipeThreshold) goToSlide(currentIdx - 1); // Swipe right
    };

    render();
    // Initial slide display after a short delay to allow DOM to settle
    setTimeout(() => goToSlide(0), 100);
});


