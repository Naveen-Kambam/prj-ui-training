/*import '../styles/main.scss';*/
import '../styles/navigation.css';
import '../styles/header.css';
import '../styles/cards.css';
import '../styles/about-header.css';
import '../styles/benefits.css';
import '../styles/promo.css';
import '../styles/product.css';
import '../styles/contact-us.css';
import '../styles/checkout.css';
import '../styles/cart.css';
import '../styles/footer.css';

/*const BODY = document.getElementsByTagName('body');
const CONTAINER = document.getElementById('container');*/

function myFunction() {
  console.log('clicked');
  //document.getElementsByClassName("navbar-nav").addClass("show");
  document.getElementById('navbar-nav').classList.toggle('show');
}
