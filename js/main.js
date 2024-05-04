(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    // Initiate the wowjs
    new WOW().init();
    
    // Back to top button
    $(window).scroll(function () {
        var documentHeight = $(document).height();
    // Hauteur de la fenêtre visible
    var windowHeight = $(window).height();
    // Position de défilement actuelle
    var scrollPosition = $(this).scrollTop();

    // Nombre de pixels avant la fin de la page où le contenu doit s'afficher
    var scrollThreshold = documentHeight - windowHeight - 300; // ajustez ce nombre selon vos besoins

    if (scrollPosition < scrollThreshold) {
                    $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });

    // Team carousel
    $(".team-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        center: false,
        dots: false,
        loop: true,
        margin: 50,
        nav : true,
        navText : [
            '<i class="bi bi-arrow-left"></i>',
            '<i class="bi bi-arrow-right"></i>'
        ],
        responsiveClass: true,
        responsive: {
            0:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:3
            }
        }
    });

    // Testimonial carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        center: true,
        dots: true,
        loop: true,
        margin: 0,
        nav : true,
        navText: false,
        responsiveClass: true,
        responsive: {
            0:{
                items:1
            },
            576:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:3
            }
        }
    });

    // Fact Counter
    $(document).ready(function(){
        $('.counter-value').each(function(){
            $(this).prop('Counter',0).animate({
                Counter: $(this).text()
            },{
                duration: 2000,
                easing: 'easeInQuad',
                step: function (now){
                    $(this).text(Math.ceil(now));
                }
            });
        });
    });

    // New Instructions
    function addClickHandler(optionsList) {
        for (let i = 0; i < optionsList.length; i++) {
            optionsList[i].addEventListener("click", function() {
                // Réinitialisez la classe 'selected' pour tous les éléments
                for (let j = 0; j < optionsList.length; j++) {
                    optionsList[j].classList.remove('selected');
                }
                
                // Ajoutez la classe 'selected' à l'élément cliqué
                optionsList[i].classList.add('selected');
                console.log(optionsList[i].querySelector('p').textContent.trim());

                switch (optionsList[i].querySelector('p').textContent.trim()) {
                    case "Standard":
                        updatePrice("price-mix",69);
                        break;
                    
                    case "Premium":
                        updatePrice("price-mix",120);
                        break;
                    
                    case "Video clips":
                        updatePrice("price-design",50);
                        break;
            
                    case "Movies":
                        updatePrice("price-design",90);
                        break;
            
                    default:
                        console.log("Option non reconnue");
                }
                
            });
        }
    }

    // Utilisez la fonction avec la liste d'options
    addClickHandler(document.getElementsByClassName('option_mix'));
    addClickHandler(document.getElementsByClassName('option_design'));

    function updatePrice(id,price) {
        var priceElement = document.getElementById(id);
        priceElement.classList.add("hidden");

        setTimeout(function() {
            // Mettez à jour le prix
            priceElement.textContent = price;
        
            // Supprimez la classe pour révéler le prix avec une transition
            priceElement.classList.remove("hidden");
        }, 500);
    }

    document.addEventListener('DOMContentLoaded', function() {
    // Nombre d'éléments à afficher initialement
    var initialCount = 6;
    
    // Cible les éléments à afficher initialement et les éléments supplémentaires
    var projectRow = document.getElementById('projectRow');
    var showMoreRow = document.getElementById('showMoreRow');
    
    // Cible le bouton "Voir plus"
    var showMoreBtn = document.getElementById('showMoreBtn');
    
    // Cliquez sur le bouton "Voir plus" pour afficher les éléments supplémentaires
    showMoreBtn.addEventListener('click', function() {
        // Affiche les éléments supplémentaires
        showMoreRow.style.display = 'flex';
        // Anime les éléments supplémentaires en fondu
        showMoreRow.classList.add('fadeIn');
        // Cache le bouton "Voir plus"
        showMoreBtn.style.display = 'none';
    });
    
    // Cache les éléments supplémentaires initialement
    for (var i = initialCount; i < projectRow.children.length; i++) {
        projectRow.children[i].style.display = 'none';
    }
});


})(jQuery);
