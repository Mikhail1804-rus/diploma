import basics from '/public/assets/courses/basics.jpg'
import digital from '/public/assets/courses/digital.jpg'
import photo from '/public/assets/courses/photo.jpg'
import financials from '/public/assets/courses/financials.jpeg'
import english from '/public/assets/courses/english.jpg'

export const coursesData = [
    {
        title: 'Основы программирования',
        description: 'Интенсивный курс для начинающих, который предоставляет основные знания и навыки в области программирования. Включает в себя изучение языков программирования, алгоритмов и структур данных.',
        duration: '72',
        price: '9 999 RUB',
        banner: basics,
    },
    {
        title: 'Digital-маркетинг',
        description: 'Обучение основам маркетинга в цифровой среде, включая использование социальных сетей, контент-маркетинга, SEO и аналитики для эффективной продвижения бренда в онлайн-среде.',
        duration: '72',
        price: '7 999 RUB',
        banner: digital,
    },
    {
        title: 'Фотография и обработка изображений',
        description: 'Обучение основам фотографии, композиции, освещения и обработке изображений с использованием графических редакторов.',
        duration: '24',
        price: '2 999 RUB',
        banner: photo,
    },
    {
        title: 'Финансовая грамотность',
        description: 'Обучение финансовым навыкам, управлению бюджетом, инвестированию, устойчивости к финансовым рискам и планированию личных финансов.',
        duration: '24',
        price: '2 999 RUB',
        banner: financials,
    },
    {
        title: 'Английский язык для делового общения',
        description: 'Интенсивный курс английского языка для практического применения в деловой обстановке, включая переговоры, презентации и письменное общение.',
        duration: '16',
        price: '2 999 RUB',
        banner: english,
    },
]