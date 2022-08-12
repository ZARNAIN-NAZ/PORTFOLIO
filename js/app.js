$(document).ready(function () {
    $('.slider').slick({
        arrows: false,
        dots: true,
        appendDots: '.slider-dots',
        dotsClass: 'dots'
    });
    let hamberger = document.querySelector('.hamberger');
    let times = document.querySelector('.times');
    let mobileNav = document.querySelector('.mobile-nav');
    let h_home = document.querySelector('#h-home');
    let h_about = document.querySelector('#h-about');
    let h_services = document.querySelector('#h-services');
    let h_work = document.querySelector('#h-work');
    let h_blog = document.querySelector('#h-blog');

    hamberger.addEventListener('click', function () {
        mobileNav.classList.add('open');
    });

    times.addEventListener('click', function () {
        mobileNav.classList.remove('open');
    });
    h_home.addEventListener('click', function () {
        mobileNav.classList.remove('open');
    });
    h_about.addEventListener('click', function () {
        mobileNav.classList.remove('open');
    });
    h_services.addEventListener('click', function () {
        mobileNav.classList.remove('open');
    });
    h_work.addEventListener('click', function () {
        mobileNav.classList.remove('open');
    });
    h_blog.addEventListener('click', function () {
        mobileNav.classList.remove('open');
    });
});


















// $(document).ready(function () {
//     $('.slider').slick({
//         arrows: false,
//         dots: true,
//         appendDots: '.slider-dots',
//         dotsClass: 'dots'
//     });
//     let hamberger = document.querySelector('.hamberger');
//     let times = document.querySelector('.times');
//     let mobileNav = document.querySelector('.mobile-nav');
//     let h_home = document.querySelector('#h-home');

//     hamberger.addEventListener('click', function () {
//         mobileNav.classList.add('open');
//     });

//     times.addEventListener('click', function () {
//         mobileNav.classList.remove('open');
//     });
//     h_home.addEventListener('click', function(){
//         mobileNav.classList.remove('open'));
// });