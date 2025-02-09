function teszt() {

    pont = 0

    ke1 = 0
    ke2 = 0
    ke3 = 0
    ke4 = 0
    ke5 = 0
    ke6 = 0
    ke7 = 0
    ke8 = 0
    ke9 = 0
    ke10 = 0

    valasz = ''

    if (k1.checked == false && k2.checked == false && k3.checked == true && k4.checked == false) {
        pont += 1
        ke1 = 1
    }

    if (k5.checked == false && k6.checked == true && k7.checked == false) {
        pont += 1
        ke2 = 1
    }

    if (k8.checked == true && k9.checked == false) {
        pont += 1
        ke3 = 1
    }

    if (k10.checked == false && k11.checked == true) {
        pont += 1
        ke4 = 1
    }

    if (k12.checked == false && k13.checked == true && k14.checked == false) {
        pont += 1
        ke5 = 1
    }

    if (k15.checked == false && k16.checked == true) {
        pont += 1
        ke6 = 1
    }

    if (k17.checked == false && k18.checked == false && k19.checked == true) {
        pont += 1
        ke7 = 1
    }

    if (k20.checked == true && k21.checked == false && k22.checked == false && k23.checked == false) {
        pont += 1
        ke8 = 1
    }

    if (k24.checked == true && k25.checked == false) {
        pont += 1
        ke9 = 1
    }

    if (k26.checked == true && k27.checked == false && k28.checked == true && k29.checked == true) {
        pont += 1
        ke10 = 1
    }


    console.log(
        k1.checked,
        k2.checked,
        k3.checked,
        k4.checked,
        k5.checked,
        k6.checked,
        k7.checked,
        k8.checked,
        k9.checked,
        k10.checked,
        k11.checked,
        k12.checked,
        k13.checked,
        k14.checked,
        k15.checked,
        k16.checked,
        k17.checked,
        k18.checked,
        k19.checked,
        k20.checked,
        k21.checked,
        k22.checked,
        k23.checked,
        k24.checked,
        k25.checked,
        k26.checked,
        k27.checked,
        k28.checked,
        k29.checked,)
    console.log(pont)
    console.log(ke1)
    console.log(ke2)
    console.log(ke3)
    console.log(ke4)
    console.log(ke5)
    console.log(ke6)
    console.log(ke7)
    console.log(ke8)
    console.log(ke9)
    console.log(ke10)

    if (pont <= 3) {
        valasz = 'Ez most nem sikerült! :('
    }
    else if (pont <= 5) {
        valasz = 'Figyelmesebben olvasd'
    }
    else if (pont <= 8) {
        valasz = 'Nem rossz de még van hova fejlődni!'
    }
    else if (pont <= 9) {
        valasz = 'Majdnem tökéletes!'
    }
    else if (pont == 10) {
        valasz = 'A megoldásod tökéletes! :)'
    }

    document.getElementById('pontok').innerHTML = 'Elért pontok 10/' + (pont) + "<br>" + (valasz)
    console.log(pont)

    if(ke1 == 0) {
        document.getElementById("K_11").style.backgroundColor = "red"
    } 
    else {
        document.getElementById("K_11").style.backgroundColor = ""
    }
    
    if(ke2 == 0) {
        document.getElementById("K_21").style.backgroundColor = "red"
    } 
    else {
        document.getElementById("K_21").style.backgroundColor = ""
    }
    
    if(ke3 == 0) {
        document.getElementById("K_31").style.backgroundColor = "red"
    } 
    else {
        document.getElementById("K_31").style.backgroundColor = ""
    }
    
    if(ke4 == 0) {
        document.getElementById("K_41").style.backgroundColor = "red"
    } 
    else {
        document.getElementById("K_41").style.backgroundColor = ""
    }
    
    if(ke5 == 0) {
        document.getElementById("K_51").style.backgroundColor = "red"
    } 
    else {
        document.getElementById("K_51").style.backgroundColor = ""
    }
    
    if(ke6 == 0) {
        document.getElementById("K_61").style.backgroundColor = "red"
    } 
    else {
        document.getElementById("K_61").style.backgroundColor = ""
    }
    
    if(ke7 == 0) {
        document.getElementById("K_71").style.backgroundColor = "red"
    } 
    else {
        document.getElementById("K_71").style.backgroundColor = ""
    }
    
    if(ke8 == 0) {
        document.getElementById("K_81").style.backgroundColor = "red"
    } 
    else {
        document.getElementById("K_81").style.backgroundColor = ""
    }
    
    if(ke9 == 0) {
        document.getElementById("K_91").style.backgroundColor = "red"
    } 
    else {
        document.getElementById("K_91").style.backgroundColor = ""
    }

    if(ke10 == 0) {
        document.getElementById("K_101").style.backgroundColor = "red"
    } 
    else {
        document.getElementById("K_101").style.backgroundColor = ""
    }
}

document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('.carousel-item img');
    images.forEach(image => {
        image.addEventListener('click', function() {
            const caption = this.closest('.carousel-item').querySelector('.carousel-caption');
            const hoverEffect = this.closest('.carousel-item').querySelector('.hovereffect');

            if (caption && hoverEffect) {
                if (caption.style.display === 'none') {
                    caption.style.display = 'block';
                    hoverEffect.style.display = 'none';
                } else {
                    caption.style.display = 'none';
                    hoverEffect.style.display = 'block';
                }
            }
        });
    });
});
