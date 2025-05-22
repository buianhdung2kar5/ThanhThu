document.addEventListener('DOMContentLoaded', function(){
    //lấy tham chiếu navbar và wrapper
    const navbar = document.getElementById('navbar');
    const navbarwrapper = document.querySelector('.navbar-wrapper');

    //lấy vị trí ban đầu của navbar
    const navbarOffset = navbarwrapper.offsetTop;

    function handleScroll(){
        if (window.pageYOffset >= navbarOffset){
            navbar.classList.add('fixed');
        }else{
            navbar.classList.remove('fixed');
        }
    }
    
    //thêm sự kiện cuộn để gọi hàm handleScroll
    window.addEventListener('scroll', handleScroll);

    //gọi hàm 1 laanf khi trang tải để kiểm tra vị trí bắt đầu
    handleScroll();
})