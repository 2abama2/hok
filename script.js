document.addEventListener('DOMContentLoaded', () => {
    const SLIDES_DATA = [
        {
            type: 'title',
            title: 'Тагай-бий <br><span>(Мухаммед Кыргыз)</span>',
            desc: 'Выдающийся политический деятель, полководец, объединитель племен и архитектор независимой кыргызской государственности в XVI веке.',
            author: 'Презентуют: Именов Шахмухамад, Токтогулов Атай',
            bg: 'https://images.unsplash.com/photo-1540979388789-6cee28a1cdc9?auto=format&fit=crop&q=80&w=1920'
        },
        {
            type: 'grid',
            title: 'Происхождение и корни',
            bg: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=1920',
            items: [
                { icon: 'fa-hourglass-half', label: 'Годы жизни', val: 'Около 1469 — 1533 гг.' },
                { icon: 'fa-mountain-sun', label: 'Место рождения', val: 'Алайская долина, пастбище Сары-Бел.' },
                { icon: 'fa-network-wired', label: 'Генеалогия', val: 'Потомок Долон-бия, сын Ак уула.' },
                { icon: 'fa-shield-halved', label: 'Наследие', val: 'Основатель ветви племен «Оң канат».' }
            ]
        },
        {
            type: 'list',
            title: 'Путь к лидерству',
            bg: 'https://ychef.files.bbci.co.uk/1280x720/p014pbtx.jpg',
            items: [
                '<strong>Миграция:</strong> Перебрался из Алая в Чуйскую и Кочкорскую долины.',
                '<strong>Войско:</strong> Создал мобильные отряды для защиты от набегов ханов.',
                '<strong>Лидерство:</strong> Возглавил народ в 1508 г. после смерти брата Адигине.',
                '<strong>Имя:</strong> Назван Мухаммедом Кыргыз за укрепление исламских канонов.'
            ]
        },
        {
            type: 'highlight',
            title: 'Курултай 1508 года',
            subtitle: 'Долина Барскоон, побережье Иссык-Куля',
            bg: 'https://cdn.shortpixel.ai/spai/q_lossy+ret_img+to_auto/uncorneredmarket.com/wp-content/uploads/2017/09/SouthShore_Amaluu_Yurts.jpg',
            text: 'Соблюдая обычай, предводители родов подняли Тагай-бия на белой кошме, провозгласив создание независимого «Кыргызского улуса».',
            attributes: [
                { icon: 'fa-flag', txt: 'Золотистый флаг' },
                { icon: 'fa-campground', txt: 'Ставка Ак-Ордо' },
                { icon: 'fa-scroll', txt: 'Жесткие правила управления' }
            ]
        },
        {
            type: 'list',
            title: 'Борьба за суверенитет',
            bg: 'https://ichef.bbci.co.uk/images/ic/1920x1080/p04m4mh8.jpg',
            items: [
                '<strong>Геополитика:</strong> Окружение агрессивных потомков Чингисхана.',
                '<strong>Успех:</strong> Масштабная кампания против Моголистана.',
                '<strong>Признание:</strong> Враги прозвали воинов Тагая «лесными львами».',
                '<strong>Итог (1510 г.):</strong> Полное вытеснение моголов с территории Тянь-Шаня.'
            ]
        },
        {
            type: 'timeline',
            title: 'Пленение и финал',
            bg: 'https://silkroadtravel.antcome.com/upload/default/20220311/16b835dcccb2c6c9fb665c07d90f7dd9.jpg',
            steps: [
                { year: 'Военная неудача', desc: 'Поражение в битве на юге Иссык-Куля.' },
                { year: '1522 г.', desc: 'Первый плен в Кашгаре и временное освобождение.' },
                { year: '1524–1533 гг.', desc: 'Второй плен за отказ стать вассалом.' },
                { year: 'Кончина', desc: 'Умер в заточении в Уч-Турфане, не пойдя на уступки.' }
            ]
        },

        {
            type: 'grid-custom',
            title: 'Геополитическое наследие',
            bg: 'https://nomads-life.com/wp-content/uploads/2024/02/nature-of-kyrgyzstan.jpg',
            blocks: [
                { h: 'Раздел территорий', p: 'Граница по реке Карадарья: запад потомкам Адигине, восток — Тагай-бию.' },
                { h: 'Демография', p: 'Прародитель племен: Бугу, Сарыбагыш, Солто, Саяк, Черик, Багыш, Конурат и др.' }
            ]
        },
        {
            type: 'conclusion',
            title: 'Архитектор единства',
            bg: 'https://eurasia.travel/wp-content/uploads/2024/09/kyrgyz-traditions-2.jpg',
            text: 'Тагай-бий — фигура масштаба отцов-основателей нации. В XVI веке он предотвратил ассимиляцию кыргызов и сохранил генетический код народа.',
            quote: 'Его имя в санжыре — символ национального единства и стойкости.'
        },
        {
            type: 'thanks',
            title: 'Спасибо за внимание!',
            bg: 'https://cdn.discordapp.com/attachments/975057449222541312/1475481080348938384/993fa18260e1878613557df2b7860103.png?ex=699da456&is=699c52d6&hm=ddf686d164558f8c03e0bf7096b35b7a711318da2717d936850615ea4a1d6e18&'
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