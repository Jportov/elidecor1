import React from "react";
import Face from "../assets/images/facebook.png";
import Insta from "../assets/images/instagram.png";
import Youtb from "../assets/images/whatsapp.png";
import { Address, Button, ContactMethods, FormContainer, FormSection, ImageLink, Input, SocialLink, SocialLinks, TextArea } from './styles';

function Form() {
  return (
    <FormSection id="contact">
      <FormContainer className="container">
        <h2>Entre em contato e faça seu orçamento</h2>
        <ContactMethods>
          <div>
            <form action="">
              <Input type="text" placeholder="Seu nome" required />
              <Input type="email" placeholder="Seu e-mail" required />
              <Input type="tel" placeholder="Seu telefone (opcional)" />
              <TextArea placeholder="O que deseja?" required></TextArea>
              <Button type="submit">Enviar</Button>
            </form>
          </div>
          <div>
            <h3>Nos acompanhe nas redes sociais</h3>
            <SocialLinks>
              <SocialLink>
                <a href="#contact-methods" title="Siga-nos no Instagram">
                  <ImageLink src={Insta} alt="Logo Instagram" />
                </a>
              </SocialLink>
              <SocialLink>
                <a href="#contact-methods" title="Siga-nos no Facebook">
                  <ImageLink src={Face} alt="Logo Facebook" />
                </a>
              </SocialLink>
              <SocialLink>
                <a href="#contact-methods" title="Visite nosso canal no YouTube">
                  <ImageLink src={Youtb} alt="Logo YouTube" />
                </a>
              </SocialLink>
            </SocialLinks>
          </div>
          <div>
            <h3>Venha até nós</h3>
            <Address>
              Alameda Azaleias, Nº 7, Armação dos Búzios - RJ
            </Address>
          </div>
        </ContactMethods>
      </FormContainer>
    </FormSection>
  );
}

export default Form;
