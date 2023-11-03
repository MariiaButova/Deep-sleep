$(function () {

  $('.cards').slick({
    arrows: false,
    infinite: false,
    slidesToShow: 5,
    slidesToScroll: 1,
    mobileFirst: true,
    rows: 0,
    speed: 300,
    dots: true,
    responsive: [
      {
        breakpoint: 1260,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1
          
        }
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 4.5,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 2000,
          infinite: true
        }
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 3.5,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 2000,
          infinite: true,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2.5,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 2000,
          infinite: true
        }
      },
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 1.5,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 2000,
          infinite: true
        }
      },
      {
        breakpoint: 365,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true,
          variableWidth: true,
          autoplay: true,
          autoplaySpeed: 2000,
          infinite: true
        }
      }
    ]
  });

      $('.treatment__list').slick({
        slidesToShow: 3,
        mobileFirst: true,
        slidesToScroll: 1,
        infinite: false,
        arrows: false,
        dots: true,
        responsive: [
          {
            breakpoint: 1260,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
            }
          },
          {
            breakpoint: 800,
            settings: {
              slidesToShow: 2.5,
              slidesToScroll: 1,
              autoplay: true,
              autoplaySpeed: 2000,
              infinite: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              autoplay: true,
              autoplaySpeed: 2000,
              infinite: true
            }
          },
          {
            breakpoint: 400,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              autoplay: true,
              autoplaySpeed: 2000,
              infinite: true
            }
          },
          {
            breakpoint: 345,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              variableWidth: true,
              centerMode: true,
              autoplay: true,
              autoplaySpeed: 2000,
              infinite: true
            }
          }
        ]
      });
      $('.team__list').slick({
        slidesToShow: 3,
        mobileFirst: true,
        slidesToScroll: 1,
        infinite: false,
        arrows: false,
        rows: 0,
        dots: true,
        responsive: [
          {
            breakpoint: 1260,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
            }
          },
          {
            breakpoint: 800,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              variableWidth: true,
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1.5,
              slidesToScroll: 1,
              variableWidth: true,
              centerMode: true
            }
          },
          {
            breakpoint: 400,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              variableWidth: true,
              centerMode: true
            }
          },
          {
            breakpoint: 345,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              variableWidth: true,
              centerMode: true
            }
          }
        ]
      });

      $('.methods__list').slick({
        slidesToShow: 3,
        mobileFirst: true,
        slidesToScroll: 1,
        infinite: false,
        arrows: false,
        rows: 0,
        dots: true,
        responsive: [
          {
            breakpoint: 1260,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
            }
          },
          {
            breakpoint: 800,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              variableWidth: true
            }
          },
          {
            breakpoint: 400,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              variableWidth: true,
              centerMode: true
            }
          }
        ]
      });
    });

    const menuBtn = document.querySelector('.menu__btn');
    const menuMobile = document.querySelector('.header__menu-list');

    menuBtn.addEventListener('click', ()=> {
      menuBtn.classList.toggle('close');
      menuMobile.classList.toggle('menu--open');
    });

    const mainBtn = document.querySelector('.message-btn');
    const mainButtonMobile = document.querySelector('.main-button__list');

    mainBtn.addEventListener('click', ()=> {
      mainBtn.classList.toggle('close-message');
      menuBtn.classList.toggle('close-btn');
      mainButtonMobile.classList.toggle('message-open');
    });

    


   
    

    
    
    