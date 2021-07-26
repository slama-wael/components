import React from "react";
import './App.css';
import {Button, Form} from 'react-bootstrap';
function App() {
  return (
  <div className="intro">
    <h3>Contacter service client Entreparticuliers.com</h3>
    <p className="parag">
    Vous souhaitez signaler un abus sur une annonce faite par un utilisateur de Entreparticuliers.com, mais vous n’avez eu aucun retour. Vous avez déposé une annonce pour votre article, mais elle ne s’est pas encore affichée. Votre compte est bloqué, car vous avez oublié votre mot de passe ou une autre personne l’a ouvert à votre place. Vous n’arrivez pas à gérer des annonces déjà sur la page.
Il vous faut des informations supplémentaires sur le fonctionnement du site. Vous voulez savoir comment entrer en communication avec les autres utilisateurs. Vous ne parvenez pas à insérer le prix de vos articles.
    </p>

<Form>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control className="mb-1" type="email" placeholder="Enter email" />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>donner votre commantaire</Form.Label>
    <Form.Control className="mb-1" type="text" placeholder="commantaire" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="jje ne suis pas un robot" />
  </Form.Group>
  <Button variant="primary" type="envyer">
    Submit
  </Button>
</Form>
</div>
  );
}

export default App;
