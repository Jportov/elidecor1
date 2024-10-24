import React from "react";
import Face from "../assets/images/facebook.png";
import Insta from "../assets/images/instagram.png";
import Youtb from "../assets/images/youtube.png";


function Form() {
  return (
   <section id="contact">
        <div class="container">
        <h2>Entre em contato e faça seu orçamento</h2>
        <div class="contact-methods">
            <div>
                <form action="">
                    <input type="text"  placeholder="Seu nome" required/>
                    <input type="email"  placeholder="Seu e-mail" required/>
                    <input type="tel"  placeholder="Seu telefone (opcional)"/>
                    <textarea placeholder="O que deseja?" required></textarea>
                    <button type="submit">Enviar</button>
                </form>
            </div>
            <div>
                <h3>Nos acompanhe nas redes sociais</h3>
                <ul class="social-links">
                    <li>
                        <a href="#contact-methods" title="Siga-nos no instagram">
                        <img src={Insta} alt="Logo instagram"/>   
                        </a>
                    </li>
                    <li>
                        <a href="#contact-methods" title="Siga-nos no Facebook">
                        <img src={Face} alt="Logo Facebook"/>   
                        </a>
                    </li>
                    <li>
                        <a href="#contact-methods" title="Visite nosso canal no Youtube">
                        <img src={Youtb} alt="Logo Youtube"/>   
                        </a>
                    </li>
                </ul>
            </div>
            <div>
                <h3>Venha até nós</h3>
                <p>
                    Alameda Azaleias, Nº 7, Armação dos Buzios - RJ
                </p>
            </div>
        </div>
    </div>
    </section>
  );
}

export default Form;