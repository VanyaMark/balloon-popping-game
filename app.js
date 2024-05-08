// tu código aquí
// Recupero todos los elementos del DOM con la class="balloon"
const balloons = document.querySelectorAll('.balloon')
let totalBalloonsToBePopped = balloons.length;

//Defino una función para gestiona el evento mouse over
const popBalloon = event => {
    console.log(event.target);
    let balloon = event.target;
    balloon.textContent = 'POP!';
    balloon.style.backgroundColor = 'rgba(0, 0, 0, 0)'; // funciona "transparent" o background = "none";
    totalBalloonsToBePopped--;
    console.log(totalBalloonsToBePopped)
    document.querySelector('#left').textContent = totalBalloonsToBePopped;
    //Eliminar un listener de un evento - primero nombre de evento, segundo la función
    balloon.removeEventListener('mouseover', popBalloon)
    if (totalBalloonsToBePopped === 0) {
        // quitar div de globos y mostrar div de victoria
    }
}

// Voy a asociar a cada uno de estos MediaElementAudioSourceNode, un listener, para escuchar el evento mouseover
balloons.forEach(elem => {
    elem.addEventListener('mouseover', popBalloon)
})
