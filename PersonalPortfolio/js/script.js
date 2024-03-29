    /*==========toggle icon navbar==========*/
    let menuIcon = document.querySelector('#menu-icon');
    let navbar = document.querySelector('.navbar');

    menuIcon.onclick = () => {
        menuIcon.classList.toggle('bx-x');
        navbar.classList.toggle('active');
    };

/*==========scroll sections avtive link==========*/
// 选取所有 <section> 元素，存储在名为 sections 的变量中
let sections = document.querySelectorAll('section');

// 选取所有 <a> 元素，它们是导航栏中的链接，存储在名为 navLinks 的变量中
let navLinks = document.querySelectorAll('header nav a');

// 当窗口发生滚动时执行的回调函数
window.onscroll = () => {
    // 遍历所有的 <section> 元素
    sections.forEach(sec => {
        // 获取窗口的滚动距离
        let top = window.scrollY;

        // 获取当前 <section> 元素的顶部偏移量，减去 150 个像素
        let offset = sec.offsetTop - 150;

        // 获取当前 <section> 元素的高度
        let height = sec.offsetHeight;

        // 获取当前 <section> 元素的 ID 属性值
        let id = sec.getAttribute('id');

        // 检查窗口滚动距离是否在当前 <section> 元素的可见范围内
        if(top >= offset && top < offset + height) {
            // 遍历所有导航栏链接
            navLinks.forEach(links => {
                // 移除所有导航栏链接的 'active' 类
                links.classList.remove('active');

                // 为当前正在视窗中显示的 <section> 对应的导航栏链接添加 'active' 类
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });

    /*==========scroll sections avtive link==========*/
    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);

     /*========== remove toggle icon and navbar when click navbar link (scroll)==========*/
     menuIcon.classList.remove('bx-x');
     navbar.classList.remove('active');
};


/*==========scroll reveal==========*/
ScrollReveal({
     //reset: true,
     distance: '80px',
     duration: 2000,
     delay: 200
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });



/*==========typed js==========*/
const typed = new Typed('.multiple-text',{
    strings: ['Fronted Developer', 'Basketball Player', 'Gym Lover'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});
